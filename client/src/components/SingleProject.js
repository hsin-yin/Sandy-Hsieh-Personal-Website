import React from 'react';
import { BsBoxArrowUpRight } from "react-icons/bs";

const SingleProject = ({ img, alt, title, content, skills }) => {
    return (
        <div className='singleProject'>
            <img className='img' alt={alt} src={img}></img>
            <h4 className='title'>
                {title}
                <span className='directTo'><BsBoxArrowUpRight />
                </span>
            </h4>
            <p className='content'>{content}</p>
            <div className='skills'>
                {skills.map((skill, index) => (
                    <span className='skill' key={index}>{skill}</span>
                ))}
            </div>
        </div>
    )
}

export default SingleProject;