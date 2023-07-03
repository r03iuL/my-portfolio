
import NavBar from './../NavBar/NavBar';
import Banner from './../Banner/Banner';
import AboutMe from './../AboutMe/AboutMe';
import Skills from './../Skills/Skills';
import Contact from './../Contact/Contact';

const All = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <NavBar></NavBar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Contact></Contact>
            
        </div>
    );
};

export default All;