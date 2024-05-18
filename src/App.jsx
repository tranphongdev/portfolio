import { createContext, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import Background from './components/Background';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skill from './components/Skill/Skill';
import Project from './components/Project';
import Experience from './components/Experience';

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
