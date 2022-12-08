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
          <a href="#home">home</a>
          <a href="#features">features</a>
          <a href="#about">about</a>
          <a href="#trainers">testimonials</a>
          <a href="#contact">contact</a>
        </nav>
      </header>
    );
}
 
export default NavBar;