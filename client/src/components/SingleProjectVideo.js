import React, { useRef } from 'react';
import { FaCirclePlay } from "react-icons/fa6";

const SingleProjectVideo = ({ img, alt, title, content, skills, videoSrc }) => {
    const videoRef = useRef(null);

    const handleVideoClick = (event) => {
        event.stopPropagation();
        const video = document.getElementById('project-video');
        video.style.display = 'block';

        const handleClickOutside = (event) => {
            if (videoRef.current && !videoRef.current.contains(event.target)) {
                video.style.display = 'none';
            }
        };
        document.addEventListener('click', handleClickOutside);

        video.addEventListener('ended', () => {
            document.removeEventListener('click', handleClickOutside);
        });
    };

    return (
        <div className="singleProject singleProjectVideo" onClick={handleVideoClick}>
            <img className='img' alt={alt} src={img} />
            <FaCirclePlay className='playIcon' />
            <h4 className='title'>
                {title}
            </h4>
            <p className='content'>{content}</p>
            <div className='skills'>
                {skills.map((skill, index) => (
                    <span className='skill' key={index}>{skill}</span>
                ))}
            </div>
            <video ref={videoRef} id="project-video" controls autoPlay>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};
export default SingleProjectVideo;