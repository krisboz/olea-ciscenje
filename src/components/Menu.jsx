import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/components/Menu.scss";
import HrvatskiIcon from "../assets/flags/hr.svg?react";
import EnglishIcon from "../assets/flags/us.svg?react";
import DeutschIcon from "../assets/flags/de.svg?react";
import {
  MdLocationPin as LocationIcon,
  MdCall as PhoneIcon,
  MdEmail as MailIcon,
} from "react-icons/md";

const Menu = () => {
  const { i18n, t } = useTranslation();

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  const LANGUAGES = [
    { label: "Hrvatski", code: "hr", icon: <HrvatskiIcon /> },
    { label: "English", code: "en", icon: <EnglishIcon /> },
    { label: "Deutsch", code: "de", icon: <DeutschIcon /> },
  ];

  return (
    <>
      <div className="shorthand-info">
        <div className="shorthand-links-container">
          <a href="https://maps.app.goo.gl/Lba8m9VcRJt6bLE5A" target="_blank">
            <LocationIcon /> Novalja
          </a>

          <a href="tel:+385914698899">
            <PhoneIcon /> +385 91 469 88 99
          </a>
          <a href="mailto:olea.nekretnine@gmail.com">
            <MailIcon /> olea.nekretnine@gmail.com
          </a>
        </div>

        <select defaultValue={i18n.language} onChange={onChangeLang}>
          {LANGUAGES.map(({ code, label, icon }) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
export default Menu;
