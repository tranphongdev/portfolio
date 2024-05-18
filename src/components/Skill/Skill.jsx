import React, { useRef, useEffect, useContext } from 'react';
import { topContext } from '../../App';

import './Skill.css';
import Card from './Card';

import { AiOutlineHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { TbBrandRedux, TbBrandTypescript, TbBrandVscode } from 'react-icons/tb';
import { FaPython } from 'react-icons/fa';

const skills = ['html', 'css', 'javascript', 'reactjs', 'github', 'vscode', 'redux', 'python', 'TailwindCss'];

const skillsColor = [
    '#e34f26',
    '#1b73ba',
    '#e9ca32',
    '#61dafb',
    '#e84d31',
    '#f2f2f2',
    '#45a7e1',
    '#2f74c0',
    '#7347b6',
    '#f68410',
    '#f2d96b',
    '#a31d23',
    '#ea901d',
];

const htmlCom = function (index) {
    const html = <AiOutlineHtml5 />;
    const css = <DiCss3 />;
    const javascript = <SiJavascript />;
    const react = <RiReactjsFill />;
    const github = <AiFillGithub />;
    const vscode = <TbBrandVscode />;
    const redux = <TbBrandRedux />;
    const python = <FaPython />;
    const tailwind = <RiTailwindCssFill />;

    const skillsIcon = [html, css, javascript, react, github, vscode, redux, python, tailwind];

    return skillsIcon[index];
};

function Skill() {
    const skillRef = useRef();
    const value = useContext(topContext);

    useEffect(() => {
        value[1]((state) => {
            state[0].skillTop = skillRef.current.offsetTop;
            return state;
        });
    }, []);

    return (
        <section className="main_section shadow" id="skills" ref={skillRef}>
            <div className="section_header">
                <span>What i have ?</span>
                <h3>Skills</h3>
            </div>

            <div className="skills_container">
                {skills.map((skill, index) => {
                    return (
                        <Card key={index} cardColor={skillsColor[index]} cardIcon={htmlCom(index)} cardName={skill} />
                    );
                })}
            </div>
        </section>
    );
}

export default Skill;
