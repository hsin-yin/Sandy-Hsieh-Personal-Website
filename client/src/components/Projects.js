import React from 'react';
import SingleProject from './SingleProject';

const Projects = () => {
    // project BiscuitGiftBox
    const BiscuitGiftBoxTitle = `Customized Biscuit Gift Box Website (team project)`;
    // const BiscuitGiftBoxImg = '';
    const BiscuitGiftBoxContent = `A website that offers customized cookie gift boxes, where you can choose the flavor of the cookies and arrange them to your liking, which will be displayed on the screen.`;
    const BiscuitGiftBoxSkills = ['CSS', 'JavaScript', 'ejs', 'Node.js', 'express', 'MySQL'];

    // project fastfood website
    const burgerWebsiteImg = "/images/burgerWebsiteImg.png";
    const burgerWebsiteAlt = `static fastfood website`
    const burgerWebsite = `Static Fast Food Website`;
    const burgerWebsiteContent = `A static site consisting of multiple pages.`;
    const burgerWebsiteSkills = ['CSS', 'JavaScript'];

    return (
        <div id="project" className="main_content project">
            <h3>Projects</h3>
            <a target="_blank">
                <SingleProject
                    title={BiscuitGiftBoxTitle}
                    content={BiscuitGiftBoxContent}
                    skills={BiscuitGiftBoxSkills}
                />
            </a>
            <a target="_blank" rel="noreferrer" href='https://sandys-frontend-bucket.s3.ap-northeast-1.amazonaws.com/fastfood-static-website/index.html'>
                <SingleProject
                    img={burgerWebsiteImg}
                    alt={burgerWebsiteAlt}
                    title={burgerWebsite}
                    content={burgerWebsiteContent}
                    skills={burgerWebsiteSkills}
                />
            </a>
        </div>
    )
}

export default Projects;