import "./NavBar.css";
import Logo from "../Logo/Logo.js";
const NavBar = () => {
  return (
    <header data-aos="slide-down" data-aos-delay="2700" className="header">
      <a href="#" className="logo">
        <Logo />
      </a>
      <div id="menu-btn" className="fas fa-bars"></div>
      <nav className="navbar">
        <a href="#home">HOME</a>
        <a href="#features">SERVICES</a>
        <a href="#about">ABOUT</a>
        <a href="#testimonials">TESTIMONIALS</a>
        <a href="#contact">CONTACT</a>
        <a
          onClick={() => {
            document.getElementById("audio").paused
              ? document.getElementById("audio").play()
              : document.getElementById("audio").pause();
          }}
          style={{ color: "red" }}
          className="fab fa-soundcloud"
        ></a>
      </nav>
    </header>
  );
};

export default NavBar;
