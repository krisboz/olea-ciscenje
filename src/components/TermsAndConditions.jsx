import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/components/TermsAndConditions.scss";

const TermsAndConditions = () => {
  const { t } = useTranslation();
  return (
    <div
      className="terms-and-conditions-page"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>{t("termsMainHeading")}</h1>
      <h2>{t("termsSubHeading1")}</h2>
      <p>{t("termsPara1")}</p>
      <p>{t("termsPara2")}</p>
      <h2>{t("termsSubHeading2")}</h2>
      <p>{t("termsPara3")}</p>
      <h3>{t("termsSubHeading3")}</h3>
      <p>{t("termsPara4")}</p>
      <h3>{t("termsSubHeading4")}</h3>
      <p>{t("termsPara5")}</p>
      <p>{t("termsPara6")}</p>
      <p>{t("termsPara7")}</p>
      <p>{t("termsPara8")}</p>
    </div>
  );
};

export default TermsAndConditions;
