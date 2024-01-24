import React, { useState } from 'react';
import SingleProject from './SingleProject';
import SingleProjectVideo from './SingleProjectVideo';

const Projects = () => {
    // project BiscuitGiftBox
    const BiscuitGiftBoxImg = '/images/BiscuitGiftBoxImg.png';
    const BiscuitGiftBoxAlt = `customise biscuit gift box`
    const BiscuitGiftBoxTitle = `Customized Biscuit Gift Box Website (Group Project)`;
    const BiscuitGiftBoxContent = `A website that offers customized cookie gift boxes, where you can choose the flavor of the cookies and arrange them to your liking, which will be displayed on the screen.`;
    const BiscuitGiftBoxSkills = ['CSS', 'JavaScript', 'ejs', 'Node.js', 'Express.js', 'MySQL'];
    const BiscuitGiftBoxVideo = "/videos/unidessertVideo.mp4";

    // project stock photo website
    const photosWebsiteImg = "/images/photosWebsiteImg.png";
    const photosWebsiteAlt = `Stock Photos website`;
    const photosWebsiteTitle = `Stock Photo website`;
    const photosWebsiteContent = `Use the pexels's API, provides the ability to search for photos, which can help anyone in need of visuals to find great images that can be downloaded and used for free.`;
    const photosWebsiteSkills = ['React', 'Scss'];

    // MERN project
    const MERNprojectImg = "/images/MERNprojectImg.png";
    const MERNprojectAlt = `Learning and Teaching Platform`;
    const MERNprojectTitle = `Learning and Teaching Platform`;
    const MERNprojectContent = `Students can search and register for classes they want to take, and teachers can offer classes for students to register for.`;
    const MERNprojectSkills = ['React', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB'];
    const MERNprojectVideo = "/videos/MERNVideo.mp4";

    // project static fastfood website
    const burgerWebsiteImg = "/images/burgerWebsiteImg.png";
    const burgerWebsiteAlt = `static fastfood website`
    const burgerWebsite = `Static Fast Food Website`;
    const burgerWebsiteContent = `A static site consisting of multiple pages.Includes restaurant menu, contact information, location.`;
    const burgerWebsiteSkills = ['CSS', 'JavaScript'];

    const [disableLink, setDisableLink] = useState(false);

    return (
        <div id="project" className="main_content project">
            <h3>Projects</h3>
            <>
                <SingleProjectVideo
                    img={BiscuitGiftBoxImg}
                    alt={BiscuitGiftBoxAlt}
                    title={BiscuitGiftBoxTitle}
                    content={BiscuitGiftBoxContent}
                    skills={BiscuitGiftBoxSkills}
                    videoSrc={BiscuitGiftBoxVideo}
                    setDisableLink={setDisableLink}
                />
            </>
            {disableLink ? (
                <>
                    <SingleProject
                        img={photosWebsiteImg}
                        alt={photosWebsiteAlt}
                        title={photosWebsiteTitle}
                        content={photosWebsiteContent}
                        skills={photosWebsiteSkills}
                    />
                </>
            ) : (
                <a target="_blank" rel="noreferrer" href='https://stock-photo-website-production.up.railway.app'>
                    <SingleProject
                        img={photosWebsiteImg}
                        alt={photosWebsiteAlt}
                        title={photosWebsiteTitle}
                        content={photosWebsiteContent}
                        skills={photosWebsiteSkills}
                    />
                </a>
            )}

            <>
                <SingleProjectVideo
                    img={MERNprojectImg}
                    alt={MERNprojectAlt}
                    title={MERNprojectTitle}
                    content={MERNprojectContent}
                    skills={MERNprojectSkills}
                    videoSrc={MERNprojectVideo}
                    setDisableLink={setDisableLink}
                />
            </>
            {disableLink ? (
                <>
                    <SingleProject
                        img={burgerWebsiteImg}
                        alt={burgerWebsiteAlt}
                        title={burgerWebsite}
                        content={burgerWebsiteContent}
                        skills={burgerWebsiteSkills}
                    />
                </>
            ) : (
                <a target="_blank" rel="noreferrer" href='https://fastfood-static-website.up.railway.app'>
                    <SingleProject
                        img={burgerWebsiteImg}
                        alt={burgerWebsiteAlt}
                        title={burgerWebsite}
                        content={burgerWebsiteContent}
                        skills={burgerWebsiteSkills}
                    />
                </a>
            )}
        </div>
    )
}

export default Projects;