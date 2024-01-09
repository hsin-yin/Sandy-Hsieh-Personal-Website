import React from "react";
import "../styles/main.css";
import GetInTouch from "./GetInTouch";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

const main = () => {

    return (
        <div className='main' id="main">
            <AboutMe />
            <Projects />
            <GetInTouch />
        </div>
    );
};

export default main;