import { Fragment } from "react";
import { HashLink as Link } from "react-router-hash-link";
import './navigation.styles.scss';
import { ReactComponent as Navlogo } from "../../assets/Crwn.svg";


const Navigation = () => {
  return (
    <Fragment>
    
      <div className="navigation"> 
        <Link className="logo-container" to="/">
          <Navlogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to='#cards-directory' smooth>
            TOURS
          </Link>
          <Link className="nav-link" to="#activities">
            ACTIVITIES
          </Link>
          <Link className="nav-link" to="#destinations">
            DESTINATIONS
          </Link>
          <Link className="nav-link" to="#about-us">
            ABOUT US
          </Link>
          <Link className="nav-link" to="#contact-us">
            CONTACT US
          </Link>
        </div>

        <div className="nav-contact-container">
         
        <a href="sa"><i className="fa-brands fa-facebook"></i></a>
        <a href="https://www.instagram.com/yourguideingeorgia_official/"><i className="fa-brands fa-instagram"></i></a>

        </div>

        
      </div>
    </Fragment>
  );
};

export default Navigation;


