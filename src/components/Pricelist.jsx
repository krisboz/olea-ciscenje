import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/components/Pricelist.scss";

const Pricelist = () => {
  const { t } = useTranslation();

  /**
     * do 35m2 - 40€

1 SS i 1 KUPAONICA - 50€
2 SS i 1 KUPAONICA - 60€

2 SS i 2 K - 80€
3 SS i 1 K - 100€
3 SS i 2 K - 120€
3 SS i 3 K - 150€

and: "und",
        smallApartments: "bis 35 m2",
        hitno: "**Notfalleinsätze nach Vereinbarung",
        udaljenost: 
     */
  return (
    <div className="pricelist-container">
      <h2>{t("pricelistTitle")}</h2>
      <p>{t("udaljenost")}</p>
      <table>
        <thead>
          <tr>
            <th>{t("pricelistTableHeaderOne")}</th>
            <th>{t("pricelistTableHeaderTwo")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t("smallApartments")}</td>
            <td>40€</td>
          </tr>
          <tr>
            <td>
              1 {t("bedroom")} {t("and")} 1 {t("wc")}
            </td>
            <td>50€</td>
          </tr>
          <tr>
            <td>
              2 {t("bedroomPlural")} {t("and")} 1 {t("wc")}
            </td>
            <td>60€</td>
          </tr>
          <tr>
            <td>
              2 {t("bedroomPlural")} {t("and")} 2 {t("wcPlural")}
            </td>
            <td>80€</td>
          </tr>
          <tr>
            <td>
              3 {t("bedroomPlural")} {t("and")} 1 {t("wc")}
            </td>
            <td>100€</td>
          </tr>
          <tr>
            <td>
              3 {t("bedroomPlural")} {t("and")} 2 {t("wcPlural")}
            </td>
            <td>120€</td>
          </tr>
          <tr>
            <td>
              3 {t("bedroomPlural")} {t("and")} 3 {t("wcPlural")}
            </td>
            <td>150€</td>
          </tr>
        </tbody>
      </table>

      <p>{t("hitno")}</p>
    </div>
  );
};

export default Pricelist;
