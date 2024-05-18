import React, { useState, useEffect } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { FaProjectDiagram } from 'react-icons/fa';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import { AiOutlineMessage } from 'react-icons/ai';

import './Navbar.css';

const screenHeight = document.body.offsetHeight;

function Navbar({ result }) {
    const [activeLink, setActiveLink] = useState('#home');

    useEffect(() => {
        function handleScrollNavbar() {
            if (window.scrollY + screenHeight * 0.2 >= result[0].contactTop) {
                setActiveLink('#contact');
            } else if (window.scrollY + screenHeight * 0.2 >= result[0].skillTop) {
                setActiveLink('#skill');
            } else if (window.scrollY + screenHeight * 0.2 >= result[0].projectTop) {
                setActiveLink('#project');
            } else if (window.scrollY + screenHeight * 0.2 >= result[0].aboutTop) {
                setActiveLink('#about');
            } else setActiveLink('#home');
        }
        window.addEventListener('scroll', handleScrollNavbar);

        // cleanup event
        return () => window.removeEventListener('scroll', handleScrollNavbar);
    }, []);

    return (
        <div className="navbar">
            <a
                href="#home"
                className={activeLink === '#home' ? 'navbar_link active' : 'navbar_link'}
                onClick={() => setActiveLink('#home')}
            >
                <AiOutlineHome />
            </a>
            <a
                href="#about"
                className={activeLink === '#about' ? 'navbar_link active' : 'navbar_link'}
                onClick={() => setActiveLink('#about')}
            >
                <AiOutlineUser />
            </a>
            <a
                href="#projects"
                className={activeLink === '#project' ? 'navbar_link active' : 'navbar_link'}
                onClick={() => setActiveLink('#project')}
            >
                <FaProjectDiagram />
            </a>
            <a
                href="#skills"
                className={activeLink === '#skill' ? 'navbar_link active' : 'navbar_link'}
                onClick={() => setActiveLink('#skill')}
            >
                <BsFillJournalBookmarkFill />
            </a>
            <a
                href="#contact"
                className={activeLink === '#contact' ? 'navbar_link active' : 'navbar_link'}
                onClick={() => setActiveLink('#contact')}
            >
                <AiOutlineMessage />
            </a>
        </div>
    );
}

export default Navbar;
