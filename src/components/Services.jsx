import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/components/Services.scss";
import image from "../assets/servicesimg.jpg";
const Services = () => {
  const { t } = useTranslation();
  /**
     * Osnovni paket uključuje
     * brisanje prašine sa svih vidljivih površina
uklanjanje paučine
usisavanje podova i tepiha
pranje podova
čišćenje kupaonice i WC-a
dezinfekciju sanitarija
brisanje kuhinjskih elemenata izvana
brisanje slika i ogledala
iznošenje smeća
pranje prozora (bez grilja i roleta)
mijenjanje posteljine
     */
  return (
    <div id="services">
      <h1>{t("servicesTitle")}</h1>
      <div className="services-description-container">
        <div className="services-description">
          <p>{t("servicesPOne")}</p>
          <p>{t("servicesPTwo")}</p>
          <p>{t("servicesPThree")}</p>
          <p>{t("servicesPFour")}</p>
        </div>
        <div className="image-container">
          <img src={image}></img>
        </div>
      </div>
    </div>
  );
};

export default Services;
