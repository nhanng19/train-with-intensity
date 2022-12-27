import "./NavBar.css"

const NavBar = () => {
    return (
      <header className="header">
        <a href="#" className="logo">
          {" "}
          <span>BRYAN</span>NGUYEN{" "}
        </a>

        <div id="menu-btn" className="fas fa-bars"></div>

        <nav className="navbar">
          <a href="#home">HOME</a>
          <a href="#features">SERVICES</a>
          <a href="#about">ABOUT</a>
          <a href="#testimonials">TESTIMONIALS</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>
    );
}
 
export default NavBar;