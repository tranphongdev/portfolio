import React, { useContext, useEffect, useRef } from 'react';

import './Experience.css';
import { topContext } from '../../App';

function Experience() {
    const aboutRef = useRef();
    const value = useContext(topContext);

    useEffect(() => {
        value[1]((state) => {
            state[0].aboutTop = aboutRef.current.offsetTop;
            return state;
        });
    }, []);
    return (
        <div>
            <section className="main_section" id="about" ref={aboutRef}>
                <div className="section_header">
                    <h3>Experience</h3>
                </div>

                <div className="about_content">
                    <div className="about_content-img">{/* <img src={Horse} /> */}</div>
                    <p>
                        <div className="flex">
                            <span>Front-End Developer Intern</span>
                            <span>12/2023- 02/2024</span>
                        </div>
                        <br />
                        <span>Company:</span> Technology Digitech <br />
                        <span>Technology used:</span> HTML, CSS, Javascript <br />
                        <br />
                        Join contribute ideas and develop project interfaces, optimizing source code and CSS structure,
                        building and maintaining reusable UI library, which saves development time and ensure uniform
                        look and feel across app pages employ.
                        <br /> <br />
                        Through my internship at the company, I acquired valuable experience in Frontend and various
                        other skills.
                        <br />
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Experience;
