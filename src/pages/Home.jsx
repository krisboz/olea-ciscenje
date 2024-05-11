import React from "react";
import { useTranslation } from "react-i18next";
import bgphoto from "../assets/hero-background2.jpg";
import "../styles/pages/Home.scss";
import Pricelist from "../components/Pricelist";
import ContactInfo from "../components/ContactInfo";
import Services from "../components/Services";
import "../styles/_link-style.scss";
import { MdLocationPin as LocationIcon } from "react-icons/md";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home-container page-container">
      <div
        className="hero-container"
        style={{ backgroundImage: `url(${bgphoto})`, backgroundSize: "cover" }}
      >
        <div className="hero-text-container">
          <p className="hero-title">{t("title")}</p>
          <p className="hero-subtext">{t("titleSubtext")}</p>
          <p style={{ fontSize: "1.3rem" }}>
            <LocationIcon /> Novalja
          </p>
        </div>

        <div className="findout-more-container">
          <a className="action-link-light" href="#findout-more-target">
            {t("homeBtnVal")}
          </a>
        </div>
      </div>

      <div className="price-contact-container" id="findout-more-target">
        <ContactInfo />
        <Pricelist />
      </div>
      <Services />
    </div>
  );
};

export default Home;
