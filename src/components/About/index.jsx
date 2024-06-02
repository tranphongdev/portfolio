import React, { useRef, useEffect, useContext } from 'react';
import { topContext } from '../../App';
import './About.css';

import Horse from '../../assets/horse.png';

function About() {
    const aboutRef = useRef();
    const value = useContext(topContext);

    useEffect(() => {
        value[1]((state) => {
            state[0].aboutTop = aboutRef.current.offsetTop;
            return state;
        });
    }, []);

    return (
        <section className="main_section shadow" id="about" ref={aboutRef}>
            <div className="section_header">
                <span>Get To Know</span>
                <h3>About Me</h3>
            </div>

            <div className="about_content">
                <div className="about_content-img">
                    <img src={Horse} />
                </div>
                <p>
                    <span>Welcome to visit my personal Website!</span>
                    <br /> <br />
                    <span>Name:</span> TRAN DINH PHONG. <br />
                    <span>Birthday:</span> 04/07/2002. <br />
                    <span>Address:</span> Vu Ban - Nam Dinh <br />
                    <br />
                    I'm a 4th year student majoring in Information Technology at University of Economics - Technology
                    for Industries (UNETI)
                    <br />
                    <br />
                    I'm a SELF-TAUGHT front end developer looking for an entry-level position. Desire to learn and
                    accumulate experience as front-end dev towards FULL-STACK through many projects. <br />
                    <br />
                    I would like to learn and solve difficult problems within a team environment to help a business
                    accelerate and grow.
                    <br />
                    <span className="italic">
                        "Looking up at a starry night sky. How little are we in this universe?"
                    </span>
                </p>
            </div>
        </section>
    );
}

export default About;
