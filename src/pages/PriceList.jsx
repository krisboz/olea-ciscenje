import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import img from "../assets/pricelist.jpg";
import "../styles/pages/PriceList.scss";
import "../styles/components/ContentBlock.scss";

import "../styles/_cta_link.scss";
import { MdOutlineEmergency as HitnoIcon } from "react-icons/md";
// Generated from Marketino by scripts/fetch-pricelist.mjs before each build.
// Prices are edited in Marketino, not here.
import pricelist from "../data/pricelist.json";

const formatPrice = (value) =>
  new Intl.NumberFormat("hr-HR", { style: "currency", currency: "EUR" }).format(
    value
  );

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

      <section className="price-cards">
        {pricelist.items.map((item) => (
          <article className="price-card" key={item.name}>
            <h2>{item.name}</h2>
            <div className="price-card-prices">
              {item.salePrice !== null ? (
                <>
                  <span className="price-current">
                    {formatPrice(item.salePrice)}
                  </span>
                  <span className="price-regular">
                    {formatPrice(item.price)}
                  </span>
                  {item.saleName && (
                    <span className="price-sale-name">{item.saleName}</span>
                  )}
                </>
              ) : (
                <span className="price-current">{formatPrice(item.price)}</span>
              )}
            </div>
            {item.anchorPrice !== null && (
              <p className="price-anchor">
                {t("priceListAnchor", { date: pricelist.anchorDate })}:{" "}
                {formatPrice(item.anchorPrice)}
              </p>
            )}
          </article>
        ))}
      </section>

      <div className="price-downloads">
        <a href={pricelist.csvUrl} download>
          {t("priceListDownload")}
        </a>
        <a href={pricelist.pageUrl} target="_blank" rel="noopener">
          {t("priceListMarketino")}
        </a>
      </div>
    </main>
  );
};

export default PriceList;
