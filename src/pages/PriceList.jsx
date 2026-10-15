import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import img from "../assets/pricelist.jpg";
import "../styles/pages/PriceList.scss";
import "../styles/components/ContentBlock.scss";

import "../styles/_cta_link.scss";
import { MdOutlineEmergency as HitnoIcon } from "react-icons/md";

// Live price list published from Marketino ("Objavi cjenik na webu").
// Prices are edited in Marketino, not here.
const MARKETINO_PRICELIST_URL =
  "https://cjenik.marketino.hr/olea-obrt-za-usluge-vl-luka-majstorovic-novalja-mociscak-14-rkc2zz7ydt";

const PriceList = () => {
  const { t } = useTranslation();

  return (
    <main className="prices-page">
      <div className="header-container">
        <h1 className="prices-heading">{t("pagePrices")}</h1>
      </div>
      <section className="prices-content-container">
        <div className="right">
          <img src={img}></img>
        </div>
        <div className="left">
          <p style={{ color: "white", textAlign: "center" }}>
            {t("pricePagePara1")}
          </p>

          <p className="hitno-style-wrapper" style={{ textAlign: "center" }}>
            <span>
              <HitnoIcon />
            </span>
            {t("hitno").toUpperCase()}
          </p>

          <Link className="cta-link" to="/contact">
            {t("pageContact")}
          </Link>
        </div>
      </section>
      <section className="marketino-pricelist">
        <iframe
          src={MARKETINO_PRICELIST_URL}
          title={t("priceListFrameTitle")}
          loading="lazy"
        ></iframe>
        <a href={MARKETINO_PRICELIST_URL} target="_blank" rel="noopener">
          {t("priceListOpen")}
        </a>
      </section>
    </main>
  );
};

export default PriceList;
