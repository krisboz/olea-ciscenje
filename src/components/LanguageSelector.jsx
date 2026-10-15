import { useTranslation } from "react-i18next";
import HrvatskiIcon from "../assets/flags/hr.svg?react";
import EnglishIcon from "../assets/flags/us.svg?react";
import DeutschIcon from "../assets/flags/de.svg?react";
import "../styles/components/LanguageSelector.scss";

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();

  const onChangeLang = (code) => {
    i18n.changeLanguage(code);
  };

  const LANGUAGES = [
    { label: "Hr", code: "hr", icon: <HrvatskiIcon /> },
    { label: "En", code: "en", icon: <EnglishIcon /> },
    { label: "De", code: "de", icon: <DeutschIcon /> },
  ];

  return (
    <div className="language-icon-container">
      {LANGUAGES.map(({ code, label, icon }) => (
        <button
          className="language-selector-button"
          key={code}
          name={code}
          onClick={() => onChangeLang(code)}
        >
          <span className="flag-container">{icon}</span>
          <span className="language-container"> {label}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
