import React, { useState, useRef } from 'react';
import { FaCirclePlay } from "react-icons/fa6";

const SingleProjectVideo = ({ img, alt, title, content, skills, videoSrc, setDisableLink }) => {
    const videoRef = useRef(null);
    const [showVideo, setShowVideo] = useState(false);

    const handleVideoClick = (event) => {
        event.stopPropagation();
        setShowVideo(true);
        setDisableLink(true);
        const video = videoRef.current;

        if (video) {
            video.style.display = 'block';

            const handleClickOutside = (event) => {
                if (videoRef.current && !videoRef.current.contains(event.target)) {
                    setShowVideo(false);
                    video.pause()
                    video.style.display = 'none';
                    setDisableLink(false);
                }
            };
            document.addEventListener('click', handleClickOutside);
        }
    };

    return (
        <div
            className={`singleProject singleProjectVideo ${showVideo ? 'showVideo' : ''}`}
            onClick={handleVideoClick}>

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