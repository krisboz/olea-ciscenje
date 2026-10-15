import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/components/Pricelist.scss";

const Pricelist = () => {
  const { t } = useTranslation();

  return (
    <div className="pricelist-container">
      <div class="table">
        <div class="block">
          <p>
            {t("smallApartments")}
            <span class="price">
              <b>40€</b>
            </span>
          </p>
        </div>
        <div class="block">
          <p>
            1 {t("bedroom")} <br></br> 1 {t("wc")}
            <span class="price">
              <b>50€</b>
            </span>
          </p>
        </div>
        <div class="block">
          <p>
            2 {t("bedroomPlural")} <br></br> 1 {t("wc")}
            <span class="price">
              {" "}
              <b>60€</b>
            </span>
          </p>
        </div>
        <div class="block">
          <p>
            2 {t("bedroomPlural")} <br></br> 2 {t("wcPlural")}
            <span class="price">
              {" "}
              <b>80€</b>
            </span>
          </p>
        </div>
        <div class="block">
          <p>
            3 {t("bedroomPlural")} <br></br> 1 {t("wc")}
            <span class="price">
              {" "}
              <b>100€</b>
            </span>
          </p>
        </div>
        <div class="block">
          <p>
            3 {t("bedroomPlural")} <br></br> 2 {t("wcPlural")}
            <span class="price">
              {" "}
              <b>120€</b>
            </span>
          </p>
        </div>{" "}
        <div class="block">
          <p>
            3 {t("bedroomPlural")} <br></br> 3 {t("wcPlural")}
            <span class="price">
              {" "}
              <b>150€</b>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricelist;
