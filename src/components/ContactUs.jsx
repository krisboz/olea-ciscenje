import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/components/ContactUs.scss";
import "../styles/_cta_link.scss";
import { useTranslation } from "react-i18next";
import { MdErrorOutline as ErrorIcon } from "react-icons/md";
import { IoCheckmarkDoneOutline as SuccessIcon } from "react-icons/io5";
import { AiOutlineLoading3Quarters as LoadingIcon } from "react-icons/ai";

export const ContactUs = () => {
  const API_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;

  const form = useRef();
  const { t } = useTranslation();

  const [notification, setNotification] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const resetNotificationAndError = () => {
    setTimeout(() => {
      setNotification(false);
      setError(false);
    }, 2000); // 2 seconds delay
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log({ API_KEY, SERVICE_ID, TEMPLATE_ID });
    console.log(form.current);
    emailjs
      .sendForm(`default_service`, `${TEMPLATE_ID}`, form.current, {
        publicKey: "pVbc7_C7mjgqEzOuN",
      })
      .then(
        () => {
          setLoading(false);

          setNotification(true);
          resetNotificationAndError();
        },
        (error) => {
          setLoading(false);

          setError(true);
          resetNotificationAndError();
        }
      );
  };

  return (
    <div className="form-inner-container">
      <div className="pre-form-text">
        <p>
          <b>Olea, obrt za usluge</b>
        </p>
        <p>Novalja</p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact-us-form">
        <input
          placeholder={t("formNameField")}
          required={true}
          type="text"
          name="user_name"
        />
        <input
          placeholder={t("formEmailField")}
          required={true}
          type="email"
          name="user_email"
        />
        <textarea
          placeholder={t("formMessageField")}
          required={true}
          name="message"
        />

        <div className="contact-style-wrap">
          <input
            className="cta-link"
            type="submit"
            value={t("formSendButton")}
          />

          {loading && (
            <p className="loading-icon">
              <LoadingIcon />
            </p>
          )}
          {notification && (
            <p className="notification">
              <SuccessIcon />
              {t("formNotification")}
            </p>
          )}
          {error && (
            <p className="error">
              <ErrorIcon />
              {t("formError")}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};
