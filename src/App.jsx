import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
<>
    {/* <div className={`App ${darkMode ? 'dark' : ''}`}> */}
    <div className={`App ${lightMode ? 'light' : ''}`}>
        {/* <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}> */}
        <button className="toggle-btn" onClick={() => setLightMode(!lightMode)}>
            {/* {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'} */}
            {lightMode ? '☀️ Dark Mode' : '🌙 Light Mode'}
        </button>
            <Header />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
    </div>
</>
  );
}

export default App;