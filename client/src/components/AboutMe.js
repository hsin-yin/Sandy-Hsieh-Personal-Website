import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";

const AboutMe = () => {
    return (
        <div id="introduction" className="main_content introduction">
            <h3>About me</h3>
            <p className="introductionContent">
                Beginning in early 2023, I embarked on a journey to become a Frontend Developer. Since then, I've dedicated myself to learning, becoming proficient in HTML, CSS, and JavaScript. Specializing in React for web frontend, I've also explored web backend with Node.js, MongoDB, and MySQL. Additionally, I've delved into EJS templating and SCSS styling.
            </p>
            <p className="introductionContent">In my free time, you'll find me enjoying a game of badminton or indulging in a refreshing swim.
            </p>
            <a href='https://www.linkedin.com/in/hsingyin-hsieh-a0a131282/' className='resumeLink' ><MdOutlineFileDownload className='resumeLinkPic' />Resume</a>

        </div>
    )
}

export default AboutMe;