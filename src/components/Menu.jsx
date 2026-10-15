import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/components/Menu.scss";
import {
  MdLocationPin as LocationIcon,
  MdCall as PhoneIcon,
  MdEmail as MailIcon,
} from "react-icons/md";
import LanguageSelector from "./LanguageSelector";
import logo from "../assets/logo.jpeg";
import logoAddition from "../assets/logo-addition.png";
import { TiThMenu as MenuIcon } from "react-icons/ti";
import { IoClose as CloseBtn } from "react-icons/io5";

const Menu = () => {
  const { i18n, t } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [expandHamMenu, setExpandHamMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const width = window.innerWidth;
    if (width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setExpandHamMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  function generateClassName() {
    return ({ isActive, isPending }) => {
      if (isPending) {
        return "pending";
      } else if (isActive) {
        return "active nav-link";
      } else {
        return "nav-link";
      }
    };
  }

  const closeMenu = () => {
    setExpandHamMenu(false);
  };

  const navLinksMarkup = (
    <div className="nav-links">
      {expandHamMenu && (
        <button className="close-btn" onClick={closeMenu}>
          <CloseBtn />
        </button>
      )}
      <div className="nav-links-style-wrapper">
        <NavLink
          to="/"
          onClick={(e) => setExpandHamMenu(false)}
          className={generateClassName()}
        >
          {t("pageMain")}
        </NavLink>
        <NavLink
          onClick={(e) => setExpandHamMenu(false)}
          to="/about"
          className={generateClassName()}
        >
          {t("pageAbout")}
        </NavLink>
        <NavLink
          onClick={(e) => setExpandHamMenu(false)}
          to="/services"
          className={generateClassName()}
        >
          {t("pageServices")}
        </NavLink>
        <NavLink
          onClick={(e) => setExpandHamMenu(false)}
          to="/prices"
          className={generateClassName()}
        >
          {t("pagePrices")}
        </NavLink>
        <NavLink
          onClick={(e) => setExpandHamMenu(false)}
          to="/contact"
          className={generateClassName()}
        >
          {t("pageContact")}
        </NavLink>
      </div>
    </div>
  );

  const handleShowMenu = () => {
    setExpandHamMenu((prev) => !prev);
  };

  const mobileViewMarkup = (
    <div className="hamburger-menu-container">
      <button className="hamburger-menu-button" onClick={handleShowMenu}>
        <MenuIcon />
      </button>
    </div>
  );

  return (
    <>
      <div className="shorthand-info">
        <div className="shorthand-links-container">
          <div className="style-wrapper">
            <a href="https://maps.app.goo.gl/Lba8m9VcRJt6bLE5A" target="_blank">
              <LocationIcon /> Novalja
            </a>
            <a href="tel:+385914698899">
              <PhoneIcon /> +385 91 469 88 99
            </a>
            <a href="mailto:olea.nekretnine@gmail.com">
              <MailIcon /> olea.nekretnine@gmail.com
            </a>
          </div>
        </div>
      </div>
      <nav className={isSticky ? "sticky" : ""}>
        <div className="logo-container">
          <NavLink to="/">
            {" "}
            <img src={logo}></img>
            <img className="logo-subtext" src={logoAddition}></img>
          </NavLink>
        </div>
        {isMobile ? mobileViewMarkup : navLinksMarkup}
        <LanguageSelector />
        {expandHamMenu && navLinksMarkup}
      </nav>
    </>
  );
};
export default Menu;
