import "./Header.scss";
import logo from "../../assets/images/CineSage-logos.jpeg";
import { NavLink, Link } from "react-router-dom";

function Header() {
  const token = sessionStorage.getItem("token");

  if (!token) {
    return (
      <header className="header">
        <div className="header__wrap">
          <div className="header__logo-wrap">
            <Link to="/">
              <img className="header__logo" src={logo} alt="CineSage Logo" />
            </Link>
          </div>
          <div className="header__nav-background">
            <div className="header__nav-wrap">
              <NavLink className="header__link" to="/roulette">
                Movie Roulette
              </NavLink>
              <NavLink className="header__link" to="/movies">
                Movies
              </NavLink>
              <NavLink className="header__link" to="/login">
                Log In
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header className="header">
        <div className="header__wrap">
          <div className="header__logo-wrap">
            <Link to="/">
              <img className="header__logo" src={logo} alt="CineSage Logo" />
            </Link>
          </div>
          <div className="header__nav-background">
            <div className="header__nav-wrap">
              <NavLink className="header__link" to="/roulette">
                Movie Roulette
              </NavLink>
              <NavLink className="header__link" to="/movies">
                Movies
              </NavLink>
              <NavLink className="header__link" to="/">
                Welcome Back!
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
