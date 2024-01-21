const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { google } = require("googleapis");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 80;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN
const REDIRECT_URI = process.env.REDIRECT_URI
const USER_EMAIL = process.env.USER_EMAIL;

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

app.post('/submit', async (req, res) => {
    const formData = req.body;
    const data = JSON.stringify(formData);
    let formDataHTML = "";
    for (const key in formData) {
        switch (key) {
            case "name":
                formDataHTML += `<h3>From: ${formData[key]}</h3>`;
                break;
            case "email":
                formDataHTML += `<h3>email: ${formData[key]}</h3>`;
                break;
            case "message":
                formDataHTML += `<p>message: ${formData[key]}</p>`;
                break;
            default:
                break;
        }
    }
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: "OAuth2",
                user: USER_EMAIL,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                // accessToken: accessToken,
            }
        });

        const mailOptions = {
            from: USER_EMAIL,
            to: USER_EMAIL,
            subject: '🐻 Someone left you a message. 🐻',
            html: formDataHTML,
        };

        const result = await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'Form submitted successfully! Thank you for making contact.' });
        // return result;
    } catch (error) {
        console.error("Email sending failed:", error);
        if (error.code === "EAUTH" || error.code === "ETIMEDOUT") {
            return res.status(500).json({ message: 'Failed to submit the form. Email sending failed.' });
        } else {
            return res.status(500).json({ message: 'Failed to submit the form.' });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server is running`);
});
