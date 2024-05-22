import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";

const AboutMe = () => {
    return (
        <div id="introduction" className="main_content introduction">
            <h3>About me</h3>
            <p className="introductionContent">
                I graduated in Food Science from Tunghai University. Seeking a career change, I enrolled in iSPAN's Front-end Engineer Career Development Program, where I completed 516 hours of training. During this period, I created a static website for a fast-food restaurant using HTML, CSS, and JavaScript. In a later group project, we developed a customized cookie gift box website. My focus was on the product page, customization options, shopping cart, and database creation using HTML, CSS, JS, EJS, and MySQL. After graduation, I further honed my skills by building a portfolio showcased online using React and a social media application using Vue. I am excited to apply my front-end skills in real-world scenarios.
            </p>
            <p className="introductionContent">In my free time, you'll find me enjoying a game of badminton.
            </p>
            <div className='resumeContainer'>
                <a target="_blank" rel="noreferrer" href='resume.pdf' className='resumeLink' ><MdOutlineFileDownload className='resumeLinkPic' />Resume</a>
                <a target="_blank" rel="noreferrer" href='resume_c.pdf' className='resumeLink resumeLinkPic_c' ><MdOutlineFileDownload className='resumeLinkPic' />履歷</a>
            </div>

        </div>
    )
}

export default AboutMe;