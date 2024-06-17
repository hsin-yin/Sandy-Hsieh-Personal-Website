import React, { useState } from 'react';
import SingleProject from './SingleProject';
import SingleProjectVideo from './SingleProjectVideo';

const Projects = () => {
  const projectsData = [
    {
      type: 'video',
      img: '/images/socialPlatformImg.png',
      alt: 'Social Platform',
      title: 'Social Platform',
      content: `A small social platform where users can upload photos and posts.`,
      skills: ['Vue', 'Vuex'],
      videoSrc: '/videos/socialPlatformVideo.mp4',
    },
    {
      type: 'video',
      img: '/images/MERNprojectImg.png',
      alt: 'Learning and Teaching Platform',
      title: 'Learning and Teaching Platform',
      content:
        'Students can search and register for classes they want to take, and teachers can offer classes for students to register for.',
      skills: ['React', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB'],
      videoSrc: '/videos/MERNVideo.mp4',
    },
    {
      type: 'link',
      img: '/images/photosWebsiteImg.png',
      alt: 'Stock Photos website',
      title: 'Stock Photo website',
      content: `Use the pexels's API, provides the ability to search for photos, which can help anyone in need of visuals to find great images that can be downloaded and used for free.`,
      skills: ['React', 'Scss'],
      link: 'https://stock-photo-website-production.up.railway.app',
    },
    {
      type: 'video',
      img: '/images/BiscuitGiftBoxImg.png',
      alt: 'customise biscuit gift box',
      title: 'Customized Biscuit Gift Box Website (Group Project)',
      content:
        'A website that offers customized cookie gift boxes, where you can choose the flavor of the cookies and arrange them to your liking, which will be displayed on the screen.',
      skills: ['CSS', 'JavaScript', 'ejs', 'Node.js', 'Express.js', 'MySQL'],
      videoSrc: '/videos/unidessertVideo.mp4',
    },
    {
      type: 'link',
      img: '/images/burgerWebsiteImg.png',
      alt: 'static fastfood website',
      title: 'Static Fast Food Website',
      content:
        'A static site consisting of multiple pages. Includes restaurant menu, contact information, location.',
      skills: ['CSS', 'JavaScript'],
      link: 'https://fastfood-static-website.up.railway.app',
    },
  ];

  const [disableLink, setDisableLink] = useState(false);

  return (
    <div id="project" className="main_content project">
      <h3>Projects</h3>
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          {project.type === 'video' && (
            <SingleProjectVideo
              img={project.img}
              alt={project.alt}
              title={project.title}
              content={project.content}
              skills={project.skills}
              videoSrc={project.videoSrc}
              setDisableLink={setDisableLink}
            />
          )}
          {project.type === 'link' && (
            <>
              {disableLink ? (
                <SingleProject
                  img={project.img}
                  alt={project.alt}
                  title={project.title}
                  content={project.content}
                  skills={project.skills}
                />
              ) : (
                <a target="_blank" rel="noreferrer" href={project.link}>
                  <SingleProject
                    img={project.img}
                    alt={project.alt}
                    title={project.title}
                    content={project.content}
                    skills={project.skills}
                  />
                </a>
              )}
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Projects;
