
import NavBar from './../NavBar/NavBar';
import Banner from './../Banner/Banner';
import AboutMe from './../AboutMe/AboutMe';
import Skills from './../Skills/Skills';
import Contact from './../Contact/Contact';
import Projects from './../Projects/Projects';

const All = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <NavBar></NavBar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            
        </div>
    );
};

export default All;