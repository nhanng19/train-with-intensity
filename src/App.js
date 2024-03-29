import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import JoinNow from "./components/JoinNow/JoinNow";
import Landing from "./components/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import Services from "./components/Services/Services";
import Transformation from "./components/Transformation/Transformation";
import Testimonials from "./components/Testimonials/Testimonials";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    Aos.init({ duration: 750, once: true });
  }, []);
  return (
    <>
      <NavBar />
      <Landing />
      <Services />
      <JoinNow />
      <About />
      <Transformation />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
