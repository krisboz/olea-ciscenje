import React from "react";
import ContentBlock from "../components/ContentBlock";
import { useTranslation } from "react-i18next";
import sidePhoto2 from "../assets/o-nama.jpg";

const About = () => {
  const { t } = useTranslation();

  return (
    <main className="about-page">
      <ContentBlock
        imgSide={"right"}
        img={sidePhoto2}
        button={t("servicesTitle")}
        bgColor={"light"}
        buttonTarget={"/services"}
        title={t("homeAboutTitle")}
        paragraphs={[t("homeAboutPara1"), t("homeAboutPara2")]}
        boldParagraph={t("homeAboutEmphasized")}
      />
    </main>
  );
};

export default About;
