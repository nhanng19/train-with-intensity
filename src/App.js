import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import JoinNow from "./components/JoinNow/JoinNow";
import Landing from "./components/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <Services />
      <JoinNow />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
