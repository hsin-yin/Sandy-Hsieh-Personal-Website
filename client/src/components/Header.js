import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import "../styles/header.css";
import "../index.css";

const Header = () => {
    return (
        <div className='header'>
            <h1>Sandy Hsieh</h1>
            <h2> Front-End Developer</h2>
            <p>On my journey to becoming a Frontend Developer, I specialize in creating engaging user interfaces and optimizing website performance. I hope everyone enjoys exploring my projects or reaching out to connect with me!</p>
            <ul className='socialMedia'>
                <li>
                    <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/sandy-hsieh-a0a131282/'>
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href='https://github.com/hsin-yin'>
                        <FaGithub />
                    </a>
                </li>
                <li className='email'><FaEnvelope /><p>hsinyin869171291@gmail.com</p></li>
            </ul>
            <ul className='nav'>
                <li>
                    <a href='#introduction'>
                        <p className='navTitle'>About me</p>
                        <div className='navHightlight navHightlightStyle'></div>
                    </a>
                </li>
                <li>
                    <a href='#project'>
                        <p className='navTitle navTitleStyle'>Projects</p>
                        <div className='navHightlight'></div>
                    </a>
                </li>
                <li>
                    <a href='#getInTouch'>
                        <p className='navTitle navTitleStyle'>Get in touch</p>
                        <div className='navHightlight'></div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Header;