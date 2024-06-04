import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';

import './Header.css';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

import Button from '../Button';
import avatar from '../../assets/avt.jpg';
import avt from '../../assets/bg-black.png';
import CV from '../../assets/cv.pdf';
import logo from '../../assets/logo.png';
import { AiFillGithub } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { GiHorseHead } from 'react-icons/gi';
import { FaHorse } from 'react-icons/fa';

function Header() {
    const [horse, setHorse] = useState(true);
    return (
        <div className="main_section header" id="home">
            <div className="header_welcome">
                <span>
                    Hello! I'm a <br />
                    Front End Developer
                </span>
                <div className="header_name">
                    <span style={{ '--i': '1' }} className="letter">
                        T
                    </span>
                    <span style={{ '--i': '2' }} className="letter">
                        R
                    </span>
                    <span style={{ '--i': '3' }} className="letter">
                        A
                    </span>
                    <span style={{ '--i': '4' }} className="letter">
                        N
                    </span>

                    <span> </span>

                    <span style={{ '--i': '5' }} className="letter">
                        D
                    </span>
                    <span style={{ '--i': '6' }} className="letter">
                        I
                    </span>
                    <span style={{ '--i': '7' }} className="letter">
                        N
                    </span>
                    <span style={{ '--i': '8' }} className="letter">
                        H
                    </span>

                    <span> </span>

                    <span style={{ '--i': '9' }} className="letter">
                        P
                    </span>
                    <span style={{ '--i': '10' }} className="letter">
                        H
                    </span>
                    <span style={{ '--i': '11' }} className="letter">
                        O
                    </span>
                    <span style={{ '--i': '12' }} className="letter">
                        N
                    </span>
                    <span style={{ '--i': '13' }} className="letter">
                        G
                    </span>
                </div>
                <div className="header_welcome-quote">
                    <div>
                        <RiDoubleQuotesL />
                    </div>
                    Learning new everyday not the copycat of yesterday!
                    <div>
                        <RiDoubleQuotesR />
                    </div>
                </div>
            </div>

            <div className="header_info">
                <div className="header_info-avatar">
                    <img src={avt}></img>
                </div>
                <div className="header_info-button">
                    {/* <Button btnStyle="outline" btnText="Download CV" btnLink={CV} download /> */}
                    <Button btnStyle="primary" btnText="Contact" btnLink="#contact" />
                </div>
            </div>

            <div className="header_logo">
                <img src={logo} />
            </div>

            <div className="header_socials">
                <a href="https://www.linkedin.com/in/tranphongdev/" target="_blank">
                    <FaLinkedin />
                </a>
                <a href="https://www.facebook.com/tranphong0407/" target="_blank">
                    <BsFacebook />
                </a>
                <a href="https://github.com/tranphongdev" target="_blank">
                    <AiFillGithub />
                </a>
                <div></div>
            </div>

            {/* Sub */}
            <div className="header_welcome-horse">
                {horse ? <FaHorse onClick={() => setHorse(false)} /> : <GiHorseHead onClick={() => setHorse(true)} />}
            </div>

            <div className="header_frame">
                <div></div>
                <div></div>
            </div>

            <div className="header_scrolldown">
                <a href="#footer">ScrollDown</a>
            </div>
        </div>
    );
}

export default Header;
