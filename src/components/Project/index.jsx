import React, { useRef, useEffect, useContext, useState } from 'react';
import { topContext } from '../../App';
import './Project.css';
import { projects } from '../../constants';
// import Button from '../Button';
import { BsDot } from 'react-icons/bs';

const Button = React.lazy(() => import('../Button'));

function Project() {
    const [activeCard, setActiveCard] = useState('');

    const projectRef = useRef();
    const value = useContext(topContext);

    // set offsettop for context.provider
    useEffect(() => {
        value[1]((state) => {
            state[0].projectTop = projectRef.current.offsetTop;
            return state;
        });
    }, []);

    function handleCard(index) {
        if (index === activeCard) {
            setActiveCard('');
        } else {
            setActiveCard(index);
        }
    }

    return (
        <section className="main_section " id="projects" ref={projectRef}>
            <div className="section_header">
                <span>What i did ?</span>
                <h3>Projects</h3>
            </div>

            <div className="projects_container">
                {projects.map((project, index) => (
                    <div className="project_section" key={index}>
                        <div className="project_section-left">
                            <div className="project_intro" style={{ '--color-project': project.color }}>
                                <h3>{project.name}</h3>
                                <span>{project.type}</span>
                                <div className="project_tech">
                                    {project.technology.map((tech, index) => {
                                        return <span key={index}>{tech}</span>;
                                    })}
                                </div>
                                <div className="project_info">
                                    <span onClick={() => handleCard(index)}>&rarr; Flip Me! &larr;</span>
                                    For More Info...
                                </div>
                            </div>

                            <div className="project_button">
                                <Button
                                    btnStyle="outline"
                                    btnText="Source"
                                    btnLink={project.srcCode}
                                    style={{ '--color-project': project.color }}
                                />
                                <Button
                                    btnStyle="outline"
                                    btnText="Demo"
                                    btnLink={project.preview}
                                    style={{ '--color-project': project.color }}
                                />
                            </div>
                        </div>

                        <div className="project_section-right">
                            <div className="project_card-wrap" style={{ '--color-project': project.color }}>
                                <div className="project_card" onClick={() => handleCard(index)}>
                                    <div
                                        className={
                                            activeCard === index ? 'project_card-inner active' : 'project_card-inner'
                                        }
                                    >
                                        <div className="project_card-front">
                                            <img src={project.src} alt="" />
                                        </div>
                                        <div className="project_card-back">
                                            <p>
                                                {project.desc.map((desc, index) => {
                                                    return (
                                                        <>
                                                            <span key={index}>
                                                                <BsDot />
                                                                {desc}
                                                            </span>
                                                            <br />
                                                        </>
                                                    );
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Project;
