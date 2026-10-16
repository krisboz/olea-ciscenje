import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import img from "../assets/pricelist.jpg";
import "../styles/pages/PriceList.scss";

import "../styles/_cta_link.scss";
import { MdOutlineEmergency as HitnoIcon } from "react-icons/md";
// Generated from Marketino by scripts/fetch-pricelist.mjs before each build.
// Prices are edited in Marketino, not here.
import pricelist from "../data/pricelist.json";

const formatPrice = (value) =>
  new Intl.NumberFormat("hr-HR", { style: "currency", currency: "EUR" }).format(
    value,
  );

// Marketino's CSV has no unit column, so units are matched by service name.
// If a service is renamed in Marketino, update its name here too.
const PRICE_UNITS = {
  "Usluga nadzora, upravljanja i održavanja nekretnine": "priceUnitAppointment",
  "Usluge upravljanja i održavanja računalnih sustava, programa i marketing promocije":
    "priceUnitHour",
};

const PriceList = () => {
  const { t } = useTranslation();

  return (
    <main className="prices-page">
      <div className="header-container">
        <h1 className="prices-heading">{t("priceListTitle")}</h1>
      </div>

      <div className="prices-content">
        <div className="prices-photo">
          <img src={img}></img>
        </div>
        <div className="prices-column">
          <section className="pricelist-panel">
            <div className="pricelist-header">
              <span>{t("priceListService")}</span>
              <span>{t("priceListPrice")}</span>
            </div>
            <ul>
              {pricelist.items.map((item) => (
                <li className="pricelist-row" key={item.name}>
                  <div className="pricelist-service">
                    <span className="pricelist-name">{item.name}</span>
                    {item.anchorPrice !== null && (
                      <span className="pricelist-anchor">
                        {t("priceListAnchor", { date: pricelist.anchorDate })}:{" "}
                        {formatPrice(item.anchorPrice)}
                      </span>
                    )}
                  </div>
                  <div className="pricelist-price">
                    {item.salePrice !== null ? (
                      <>
                        <span className="price-current">
                          {formatPrice(item.salePrice)}
                        </span>
                        <span className="price-regular">
                          {formatPrice(item.price)}
                        </span>
                        {item.saleName && (
                          <span className="price-sale-name">
                            {item.saleName}
                          </span>
                        )}
                      </>
                    ) : (
                      <span className="price-current">
                        {formatPrice(item.price)}
                      </span>
                    )}
                    {PRICE_UNITS[item.name] && (
                      <span className="price-unit">
                        {t(PRICE_UNITS[item.name])}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="price-downloads">
              <a href={pricelist.csvUrl} download>
                {t("priceListDownload")}
              </a>
            </div>
          </section>

          <section className="prices-info">
            <p>{t("pricePagePara1")}</p>

            <p className="hitno-style-wrapper">
              <span>
                <HitnoIcon />
              </span>
              {t("hitno").toUpperCase()}
            </p>

            <Link className="cta-link" to="/contact">
              {t("pageContact")}
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PriceList;
