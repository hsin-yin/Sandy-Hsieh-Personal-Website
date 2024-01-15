import React from 'react';
import SingleProject from './SingleProject';

const Projects = () => {
    // project BiscuitGiftBox
    const BiscuitGiftBoxImg = '/images/BiscuitGiftBoxImg.png';
    const BiscuitGiftBoxAlt = `customise biscuit gift box`
    const BiscuitGiftBoxTitle = `Customized Biscuit Gift Box Website (team project)`;
    const BiscuitGiftBoxContent = `A website that offers customized cookie gift boxes, where you can choose the flavor of the cookies and arrange them to your liking, which will be displayed on the screen.`;
    const BiscuitGiftBoxSkills = ['CSS', 'JavaScript', 'ejs', 'Node.js', 'Express.js', 'MySQL'];

    // project 圖片網站
    const photosWebsiteImg = "/images/photosWebsiteImg.png";
    const photosWebsiteAlt = `Stock Photos website`;
    const photosWebsiteTitle = `Stock Photo website`;
    const photosWebsiteContent = `Use the pexels's API, provides a gallery as well as the ability to search for photos, which can help anyone in need of visuals to find great images and videos that can be downloaded and used for free.`;
    const photosWebsiteSkills = ['React', 'Scss'];

    // MERN project
    const MERNproject = "/images/MERNprojectImg.png";
    const MERNprojectAlt = `Stock Photos website`;
    const MERNprojectTitle = `Stock Photo website`;
    const MERNprojectContent = `Use the pexels's API, provides a gallery as well as the ability to search for photos, which can help anyone in need of visuals to find great images and videos that can be downloaded and used for free.`;
    const MERNprojectSkills = ['React', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB'];

    // project fastfood website
    const burgerWebsiteImg = "/images/burgerWebsiteImg.png";
    const burgerWebsiteAlt = `static fastfood website`
    const burgerWebsite = `Static Fast Food Website`;
    const burgerWebsiteContent = `A static site consisting of multiple pages.`;
    const burgerWebsiteSkills = ['CSS', 'JavaScript'];

    return (
        <div id="project" className="main_content project">
            <h3>Projects</h3>
            <a target="_blank" rel="noreferrer" href='#'>
                <SingleProject
                    img={BiscuitGiftBoxImg}
                    alt={BiscuitGiftBoxAlt}
                    title={BiscuitGiftBoxTitle}
                    content={BiscuitGiftBoxContent}
                    skills={BiscuitGiftBoxSkills}
                />
            </a>
            <a target="_blank" rel="noreferrer" href='https://stock-photo-website-production.up.railway.app'>
                <SingleProject
                    img={photosWebsiteImg}
                    alt={photosWebsiteAlt}
                    title={photosWebsiteTitle}
                    content={photosWebsiteContent}
                    skills={photosWebsiteSkills}
                />
            </a>
            <a target="_blank" rel="noreferrer" href='#'>
                <SingleProject
                    img={MERNproject}
                    alt={MERNprojectAlt}
                    title={MERNprojectTitle}
                    content={MERNprojectContent}
                    skills={MERNprojectSkills}
                />
            </a>
            <a target="_blank" rel="noreferrer" href='https://burger-bucket.s3.amazonaws.com/index.html'>
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