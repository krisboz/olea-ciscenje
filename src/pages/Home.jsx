import React from "react";
import bgPhoto from "../assets/home-background.jpg";
import sidePhoto from "../assets/kljuc.jpg";
import sidePhoto2 from "../assets/grad-novalja.png";

import "../styles/pages/Home.scss";
import { useTranslation } from "react-i18next";
import ContentBlock from "../components/ContentBlock";

const Home = () => {
  const { t } = useTranslation();
  return (
    <main className="homepage page">
      <div className="image-container">
        <img src={bgPhoto}></img>
        <div className="text-container">
          <h1>{t("mainHeader")}</h1>
          <h4>{t("mainSubHeader")}</h4>
        </div>
      </div>
      <ContentBlock
        imgSide={"right"}
        img={sidePhoto}
        button={t("servicesHomeButtonText")}
        buttonTarget={"/services"}
        bgColor={"dark"}
        title={t("servicesHomeTitle")}
        paragraphs={[t("servicesHomeTextPara1"), t("servicesHomeTextPara2")]}
      />
      <ContentBlock
        imgSide={"left"}
        img={sidePhoto2}
        button={t("homeAboutTitle")}
        bgColor={"light"}
        buttonTarget={"/about"}
        title={t("homeAboutTitle")}
        paragraphs={[t("homeAboutPara1"), t("homeAboutPara2")]}
        boldParagraph={t("homeAboutEmphasized")}
        isStupidNovaljaPhoto={true}
      />
    </main>
  );
};

export default Home;
