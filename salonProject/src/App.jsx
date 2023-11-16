import "./App.css";
import About from "./Components/About";
import CallToAction from "./Components/CallToAction";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import MakeUpList from "./Components/MakeUpList";
import NavBar from "./Components/NavBar";
import Ofertele from "./Components/Ofertele";
import Service from "./Components/Service";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <HeroSection/>
        <About/>
        <Service/>
        <MakeUpList/>
        <Ofertele/>
        <CallToAction/>
        <Footer/>
        {/* <h1>Hello World</h1> */}
      </div>
    </>
  );
}

export default App;
