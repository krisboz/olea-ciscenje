import React from "react";
import ContentBlock from "../components/ContentBlock";
import {
  MdLocationPin as LocationIcon,
  MdCall as PhoneIcon,
  MdEmail as MailIcon,
} from "react-icons/md";
import "../styles/pages/Contact.scss";
import logo from "../assets/logo.jpeg";
import { ContactUs } from "../components/ContactUs";
import { useTranslation } from "react-i18next";
import logoAddition from "../assets/logo-addition.png";
import contactImage from "../assets/kontakt.jpeg";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <main
      className="contact-page"
      style={{
        backgroundImage: `url(${contactImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1>{t("pageContact")}</h1>
      <div className="contact-content-container">
        <div className="left">
          <a href="tel:+385914698899" className="phone-link">
            <PhoneIcon /> +385 91 469 88 99
          </a>
          <a href="mailto:olea.nekretnine@gmail.com" className="mail-link">
            <MailIcon /> olea.nekretnine@gmail.com
          </a>
        </div>
        <div className="right">
          <div className="contact-form-container">
            <div className="logo-container">
              <img src={logo}></img>

              <img className="logo-subtext" src={logoAddition}></img>
            </div>
            <ContactUs />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
