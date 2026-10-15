import React from "react";
import ContentBlock from "../components/ContentBlock";
import { useTranslation } from "react-i18next";
import sidePhoto from "../assets/services.jpg";
import { MdOutlineCleaningServices as CleaningIcon } from "react-icons/md";
import "../styles/pages/Services.scss";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  HiOutlineCog6Tooth as Cog,
  HiOutlineWrenchScrewdriver as Tool,
} from "react-icons/hi2";
import { RiTreeLine as Tree } from "react-icons/ri";
import { FaRegBuilding as Zgrada } from "react-icons/fa";
import "../styles/_cta_link.scss";
const Services = () => {
  const { t } = useTranslation();
  /**
   * 
   * 
   * 
   * Nadzor i održavanje nekretnine - nadzor
   *  Mali kućni popravci i sitni radovi - popravci
   *  Uređenje i održavanje zelenih površina - zeleno
   *  Održavanje stambenih zgrada - zgrada
   * 
   nadzor-title: "Nadzor i održavanje nekretnine"
   nadzor-subtitle:"Osnovni paket nadzora i održavanja sadrži:", 

  nadzor-service-1: "Pregled nekretnine jednom tjedno te po želji vlasnika javljanje iz nekretnine video pozivom",
  nadzor-service-2: "Izvanredni pregled nekretnine u slučaju elementarne nepogode (bura, jugo, potres, poplava, požar…) i izvještavanje vlasnika nekretnine o zatečenom stanju",
  nadzor-service-3: "Pražnjenje poštanskog sandučića i prosljeđivanje pristigle pošte vlasniku nekretnine",
  nadzor-service-4: "Plaćanje računa i slanje potvrda plaćanja vlasniku nekretnine",
  nadzor-service-5: "Prozračivanje nekretnine",
  nadzor-service-6: "Puštanje u rad perilica posuđa i rublja jednom u dva tjedna sa svrhom izbjegavanja kvarova zbog dugotrajnog nekorištenja",
  nadzor-service-7: "Kontrolu vodovodnih i odvodnih instalacija, puštanje vode na svim izvorima te po potrebi čišćenje od kamenca",
  nadzor-service-8: "Očitavanje i dojavu stanja brojila opskrbljivačima po potrebi ili na njihov zahtjev",
  nadzor-service-9: "Komuniciranje sa predstavnikom suvlasnika zgrade i po potrebi odlazak na sastanke suvlasnika te izvještavanje vlasnika nekretnine o svim odlukama na sastancima",
  nadzor-service-10: "Savjetovanje vlasnika sa svrhom očuvanja funkcionalnosti i tržišne vrijednosti nekretnine",
  nadzor-service-11: "Slanje mjesečnog pisanog izvještaja vlasniku nekretnine po završetku mjeseca",
  nadzor-service-12: "Arhiviranje dokumentacije"
  nadzor-subtext: "Sadržaj paketa možemo mijenjati ovisno o potrebama i željama vlasnika nekretnine",


  Mali kućni popravci i sitni radovi

   popravci-title: "Mali kućni popravci i sitni radovi",
  popravci-subtitle: "Pružamo usluge oko svih potrebnih sanacija koje su primijećene u toku nadzora nekretnine."
popravci-service-1: "Sanacija vlage i plijesni",
popravci-service-2: "Pituranje zidova",
popravci-service-3: "Zamjena utičnica, plafonjera i žarulja",
popravci-service-4: "Provjera ispravnosti te zamjena klima uređaja"

   *

  Uređenje i održavanje zelenih površina

  zeleno-title:"Uređenje i održavanje zelenih površina",
  zeleno-subtitle: "Pružamo usluge uređenja i održavanja vrtova, okućnica, zelenih površina, unutarnjih prostora  te okoliša svih stambeno/poslovnih objekata.",
  zeleno-subtitle-2:"Hortikulturni radovi obuhvaćaju:", 
  zeleno-service-1: "Sadnja i održavanje travnjaka",
  zeleno-service-2: "Orezivanje grmlja i stabala",
  zeleno-service-3: "Sađenje cvjetnih gredica, drveća i grmlja",
  zeleno-service-4: "Održavanje navodnjavanja",
  zeleno-service-5: "Nabava i dovoz kvalitetne zemlje",
  zeleno-service-6: "Njega usjeva/fitozaštita, briga o zdravlju bilja",
  zeleno-service-7: "Uklanjanje korova, korištenje ekoloških sredstava"


  Održavanje stambenih zgrada
  zgrada-title: "Održavanje stambenih zgrada",
  zgrada-subtitle: "Pružamo usluge čišćenja stepeništa unutar stambenih zgrada te čišćenja zajedničkih dvorišta oko same zgrade."
   */

  const temp = {
    nadzorTitle: "Nadzor i održavanje nekretnine",
    nadzorSubtitle: "Osnovni paket nadzora i održavanja sadrži:",
    nadzorService1:
      "Pregled nekretnine jednom tjedno te po želji vlasnika javljanje iz nekretnine video pozivom",
    nadzorService2:
      "Izvanredni pregled nekretnine u slučaju elementarne nepogode (bura, jugo, potres, poplava, požar…) i izvještavanje vlasnika nekretnine o zatečenom stanju",
    nadzorService3:
      "Pražnjenje poštanskog sandučića i prosljeđivanje pristigle pošte vlasniku nekretnine",
    nadzorService4:
      "Plaćanje računa i slanje potvrda plaćanja vlasniku nekretnine",
    nadzorService5: "Prozračivanje nekretnine",
    nadzorService6:
      "Puštanje u rad perilica posuđa i rublja jednom u dva tjedna sa svrhom izbjegavanja kvarova zbog dugotrajnog nekorištenja",
    nadzorService7:
      "Kontrolu vodovodnih i odvodnih instalacija, puštanje vode na svim izvorima te po potrebi čišćenje od kamenca",
    nadzorService8:
      "Očitavanje i dojavu stanja brojila opskrbljivačima po potrebi ili na njihov zahtjev",
    nadzorService9:
      "Komuniciranje sa predstavnikom suvlasnika zgrade i po potrebi odlazak na sastanke suvlasnika te izvještavanje vlasnika nekretnine o svim odlukama na sastancima",
    nadzorService10:
      "Savjetovanje vlasnika sa svrhom očuvanja funkcionalnosti i tržišne vrijednosti nekretnine",
    nadzorService11:
      "Slanje mjesečnog pisanog izvještaja vlasniku nekretnine po završetku mjeseca",
    nadzorService12: "Arhiviranje dokumentacije",
    nadzorSubtext:
      "Sadržaj paketa možemo mijenjati ovisno o potrebama i željama vlasnika nekretnine",
    popravciTitle: "Mali kućni popravci i sitni radovi",
    popravciSubtitle:
      "Pružamo usluge oko svih potrebnih sanacija koje su primijećene u toku nadzora nekretnine.",
    popravciService1: "Sanacija vlage i plijesni",
    popravciService2: "Pituranje zidova",
    popravciService3: "Zamjena utičnica, plafonjera i žarulja",
    popravciService4: "Provjera ispravnosti te zamjena klima uređaja",
    zelenoTitle: "Uređenje i održavanje zelenih površina",
    zelenoSubtitle:
      "Pružamo usluge uređenja i održavanja vrtova, okućnica, zelenih površina, unutarnjih prostora  te okoliša svih stambeno/poslovnih objekata.",
    zelenoSubtitle2: "Hortikulturni radovi obuhvaćaju:",
    zelenoService1: "Sadnja i održavanje travnjaka",
    zelenoService2: "Orezivanje grmlja i stabala",
    zelenoService3: "Sađenje cvjetnih gredica, drveća i grmlja",
    zelenoService4: "Održavanje navodnjavanja",
    zelenoService5: "Nabava i dovoz kvalitetne zemlje",
    zelenoService6: "Njega usjeva/fitozaštita, briga o zdravlju bilja",
    zelenoService7: "Uklanjanje korova, korištenje ekoloških sredstava",
    zgradaTitle: "Održavanje stambenih zgrada",
    zgradaSubtitle:
      "Pružamo usluge čišćenja stepeništa unutar stambenih zgrada te čišćenja zajedničkih dvorišta oko same zgrade.",
  };
  console.log();

  const nadzorCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const popravciCount = [1, 2, 3, 4];
  const zelenoCount = [1, 2, 3, 4, 5, 6, 7];

  const renderNadzor = (
    <div className="service-bullets">
      <h2 className="services-subtitle">
        <Cog /> {t("nadzorTitle")}
      </h2>
      <h3 className="services-subsubtitle"> {t("nadzorSubtitle")}</h3>
      <div className="bullets-container">
        {nadzorCount.map((el) => (
          <div className="bullet-container">
            <Cog />
            <p className="service-bullet">{t(`nadzorService${el}`)}</p>
          </div>
        ))}
      </div>
      <h3 className="services-subsubtitle italic-subsubtitle">
        {" "}
        {t("nadzorSubtext")}
      </h3>
    </div>
  );

  const renderPopravci = (
    <div className="service-bullets">
      <h2 className="services-subtitle">
        <Tool /> {t("popravciTitle")}
      </h2>
      <h3 className="services-subsubtitle"> {t("popravciSubtitle")}</h3>
      <div className="bullets-container">
        {popravciCount.map((el) => (
          <div className="bullet-container">
            <Tool />
            <p className="service-bullet"> {t(`popravciService${el}`)}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderZeleno = (
    <div className="service-bullets">
      <h2 className="services-subtitle">
        <span style={{ width: "20px", height: "20px", flexShrink: 0 }}>
          <Tree />
        </span>
        {t("zelenoTitle")}
      </h2>
      <h3 className="services-subsubtitle"> {t("zelenoSubtitle")}</h3>
      <p className="services-subtitle"> {t("zelenoSubtitle2")}</p>

      <div className="bullets-container">
        {zelenoCount.map((el) => (
          <div className="bullet-container">
            <Tree />
            <p className="service-bullet">{t(`zelenoService${el}`)}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderZgrada = (
    <div className="service-bullets">
      <h2 className="services-subtitle">
        <Zgrada /> {t("zgradaTitle")}
      </h2>
      <h3 className="services-subsubtitle"> {t("zgradaSubtitle")}</h3>
    </div>
  );

  return (
    <main className="services-page">
      <h1 className="services-title">{t("servicesTitle")}</h1>
      {renderNadzor}
      {renderPopravci}
      {renderZeleno}
      {renderZgrada}

      <div className="buttons-container">
        <Link className="cta-link" to="/contact">
          {t("homeBtnVal")}
        </Link>
      </div>
      <div id="details"></div>
      <ContentBlock
        stupidServicesCheck={true}
        imgSide={"right"}
        img={sidePhoto}
        button={t("homeBtnVal")}
        buttonTarget={"/contact"}
        bgColor={"dark"}
        title={t("")}
        paragraphs={[t("servicesPOne")]}
      />
    </main>
  );
};

export default Services;
