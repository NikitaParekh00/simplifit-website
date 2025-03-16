import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        {/* Logo Section */}
        <div className="logo">
          <a href="#home">
            <img src="/logo.png" alt="Logo" />
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
