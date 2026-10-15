import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/components/Services.scss";
import image from "../assets/servicesimg.jpg";
const Services = () => {
  const { t } = useTranslation();

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
