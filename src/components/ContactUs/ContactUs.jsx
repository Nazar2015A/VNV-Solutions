import React from "react";
import "./contactUs.css";
import email from '../../images/emailV.png'
import whatsapp from '../../images/whatsapp.png'
import viber from '../../images/viber.png'
import telegram from '../../images/telegram.png'
import SalesForm from "./SalesForm";


const ContactUs = () => {
  return (
    <div className="contact-us-wrapper">
      <h2 className="contact-us-title">Зв'яжіться з нами</h2>
      <div className="contact-us-content">
        <div className="contact-us-content-left">
          <div className="contact-us-content-top">

            <div className="contact-us-content-item">
              <h2>Telegram</h2>
              <a target="_blank" href="https://t.me/vnv_solutions">
                <img
                  className="contact-us-content-img"
                  src={telegram}
                  alt="Instagram"
                />
              </a>
            </div>
            <div className="contact-us-content-item">
              <h2>Email</h2>
              <a target="_blank" href="mailto:team@vnv.solutions">
                <img
                  className="contact-us-content-img"
                  src={email}
                  alt="Email"
                />
              </a>
            </div>
            <div className="contact-us-content-item">
              <h2>WhatsApp</h2>
              <a target="_blank" href="https://www.whatsapp.com/?lang=uk_UA">
                <img
                  className="contact-us-content-img"
                  src={whatsapp}
                  alt="WhatsApp"
                />
              </a>
            </div>
            <div className="contact-us-content-item">
              <h2>Viber</h2>
              <a target="_blank" href="https://www.viber.com/ua/">
                <img
                  className="contact-us-content-img"
                  src={viber}
                  alt="Viber"
                />
              </a>
            </div>
          </div>
        </div>

        <SalesForm />
      </div>
    </div>
  );
};

export default ContactUs;
