import React from "react";
import { useTranslation } from "react-i18next";
import { SiGmail as MailIcon } from "react-icons/si";
import { FaPhoneAlt as PhoneIcon } from "react-icons/fa";
import phodimg from "../assets/placeholder-img.jpg";
import "../styles/components/ContactInfo.scss";
import "../styles/_link-style.scss";

const ContactInfo = () => {
  //TELEFON
  //MAIL
  const { t } = useTranslation();
  const PHONE = "+385 91 469 88 99";
  const MAIL = "olea.nekretnine@gmail.com";
  return (
    <div
      className="contact-component"
      style={{ backgroundImage: `url(${phodimg})`, backgroundSize: "cover" }}
    >
      <div className="contact-data-container">
        <h2>{t("contactTitle")}</h2>
        <div className="contact-tile">
          <MailIcon />

          <a href="mailto:olea.nekretnine@gmail.com">{MAIL}</a>
        </div>
        <div className="contact-tile phone">
          <PhoneIcon />

          <a href="tel:+385914698899">{PHONE}</a>
        </div>
        <a className="action-link-dark" href="#services">
          {t("servicesTitle")}
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
