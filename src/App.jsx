import NavBar from "./Components/NavBar/NavBar"
import Banner from './Components/Banner/Banner';
import AboutMe from './Components/AboutMe/AboutMe';
import Skills from './Components/Skills/Skills';

function App() {
 

  return (
    <div className=" bg-orange-200 font-mono">
      <div className="max-w-screen-xl mx-auto">
      <NavBar></NavBar>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
    </div>
    </div>
  )
}

export default App
