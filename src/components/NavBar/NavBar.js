import "./NavBar.css";
import Logo from "../Logo/Logo.js";
import intro from "../../img/intro.mp3";
import { useState } from "react";
const NavBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playHandler = () => {
    const audio = document.getElementById("audio");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <header data-aos="slide-down" data-aos-delay="3000" className="header">
      <a href="#" className="logo">
        <Logo height="40" viewBox="0 0 1090 133" />
      </a>
      <div id="menu-btn" className="fas fa-bars"></div>
      <nav className="navbar">
        <a href="#home">HOME</a>
        <a href="#features">SERVICES</a>
        <a href="#about">ABOUT</a>
        <a href="#testimonials">TESTIMONIALS</a>
        <a href="#contact">CONTACT</a>
        <i
          onClick={playHandler}
          style={{
            color: !isPlaying ? "white" : "#ff3434",
            height: "30px",
            width: "30px",
            padding: "1.5rem 2rem",
            fontSize: "1.7rem",
            cursor: "pointer",
            transition: "all .2s linear",
          }}
          className={
            !isPlaying ? "fa-solid fa-volume-xmark" : "fa-solid fa-volume-high"
          }
        ></i>
        <video
          id="audio"
          loop
          playsinline="playsinline"
          style={{ height: "0.00001rem" }}
        >
          <source src={intro} type="audio/mp3" />
        </video>
      </nav>
    </header>
  );
};

export default NavBar;
