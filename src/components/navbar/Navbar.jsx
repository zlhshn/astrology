import "./Navbar.scss";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img className="logo" src="./logo.gif" alt="" />
      </div>
      <div className="links">
        <a href="#">HOROSCOPE</a>
        <a href="#">DAILY</a>
        <a href="#">TAROT</a>
        <a href="#">ARTICLE</a>
        <a href="#">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;
