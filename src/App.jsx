import React, { Suspense, createContext, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

const Background = React.lazy(() => import('./components/Background'));
const Header = React.lazy(() => import('./components/Header'));
const Navbar = React.lazy(() => import('./components/Navbar'));
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));
const Project = React.lazy(() => import('./components/Project'));
const Skill = React.lazy(() => import('./components/Skill/Skill'));
const Experience = React.lazy(() => import('./components/Experience'));

export const topContext = createContext();

function App() {
    const [componentTop, setComponentTop] = useState([
        { aboutTop: 0 },
        { projectTop: 0 },
        { skillTop: 0 },
        { contactTop: 0 },
    ]);
    return (
        <topContext.Provider value={[componentTop, setComponentTop]}>
            <Suspense
                fallback={
                    <div className="loading">
                        <span className="loader"></span>
                    </div>
                }
            >
                <div className="App">
                    <Background />
                    <Header />
                    <Navbar result={componentTop} />
                    <About />
                    <Experience />
                    <Project />
                    <Skill />
                    <Contact />
                    <Footer />
                </div>
            </Suspense>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </topContext.Provider>
    );
}

export default App;
