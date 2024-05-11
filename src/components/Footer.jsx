import React from "react";
import "../styles/components/Footer.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <p>2024.</p>

      <p>Olea, obrt za usluge</p>

      <Link to={"/terms"}>{t("agbs")}</Link>
    </footer>
  );
};

export default Footer;
