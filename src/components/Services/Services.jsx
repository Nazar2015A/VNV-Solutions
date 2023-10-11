import React, { useState } from "react";
import "./services.css";
import { data as product } from "./Services.data";
import { useEffect } from "react";
import { Slide } from "react-awesome-reveal";
const Services = () => {
  const [service, setService] = useState("software");
  const [allProducts, setAllProducts] = useState(product);

  useEffect(() => {
    const filteredProducts = product.filter(
      (item) => item.category === "software"
    );
    setAllProducts(filteredProducts);
  }, []);
  useEffect(() => {
    if (service === "software") {
      const filteredProducts = product.filter(
        (item) => item.category === "software"
      );
      setAllProducts(filteredProducts);
    }

    if (service === "consult") {
      const filteredProducts = product.filter(
        (item) => item.category === "consult"
      );
      setAllProducts(filteredProducts);
    }
    if (service === "test") {
      const filteredProducts = product.filter(
        (item) => item.category === "test"
      );
      setAllProducts(filteredProducts);
    }
    if (service === "support") {
      const filteredProducts = product.filter(
        (item) => item.category === "support"
      );
      setAllProducts(filteredProducts);
    }
    if (service === "data") {
      const filteredProducts = product.filter(
        (item) => item.category === "data"
      );
      setAllProducts(filteredProducts);
    }
    if (service === "bot") {
      const filteredProducts = product.filter(
        (item) => item.category === "bot"
      );
      setAllProducts(filteredProducts);
    }
  }, [service]);

  return (
    <div className="services-bg">
        <div className="services-container">

        <div className="services-title">
          <h4>Наші <span className="green">Послуги</span></h4>
        </div>
        <div className="services-border">
          <div className="services-top">
            <div className="services-top-circle">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="services-top-btns">
              <span
                className={
                  service === "software" ? "services-top-btns-span active" : "services-top-btns-span"
                }
                onClick={() => setService("software")}
              >
                Розробка програмного забезпечення
              </span>
              <span
                className={
                  service === "consult" ? "services-top-btns-span active" : "services-top-btns-span"
                }
                onClick={() => setService("consult")}
              >
                Консалтинг
              </span>
              <span
                className={
                  service === "test" ? "services-top-btns-span active" : "services-top-btns-span"
                }
                onClick={() => setService("test")}
              >
                Тестування та якість
              </span>
              <span
                className={
                  service === "support" ? "services-top-btns-span active" : "services-top-btns-span"
                }
                onClick={() => setService("support")}
              >
                Підтримка і обслуговування
              </span>
              <span
                className={
                  service === "data" ? "services-top-btns-span active" : "services-top-btns-span"
                }
                onClick={() => setService("data")}
              >
                Аналіз даних
              </span>
              <span
                className={
                  service === "bot" ? "services-top-btns-span active" : "services-top-btns-span"
                }
                onClick={() => setService("bot")}
              >
                Розробка ботів
              </span>
            </div>
          </div>
          {allProducts.map((item) => (
            <div key={item.id} className="services-wrap-cont">
              <Slide className="services-slide-cont" triggerOnce direction="right">
                <div key={item.id} className="services-wrapper">
                  <h2 className="services-wrapper-title">{item.title1}</h2>
                  <div className="services-wrapper-desc">
                    <p>{item.title2}</p>
                    <h5>{item.desc}</h5>
                    <ul className="services-wrapper-desc-list">
                      <li className="services-list">
                        <img className="services-icons" src={item.smImg1} alt="ServicesIcons" />
                        <p>{item.critery1}</p>
                      </li>
                      <li className="services-list">
                        <img className="services-icons" src={item.smImg2} alt="ServicesIcons" />
                        <p>{item.critery2}</p>
                      </li>
                      <li className="services-list">
                        <img className="services-icons" src={item.smImg3} alt="ServicesIcons" />
                        <p>{item.critery3}</p>
                      </li>
                    </ul>
                  <button className="services-wrapper-btn">Хочу</button>
                  </div>
                </div>
              </Slide>
                <img className="services-image" src={item.mainImg} alt="ServicesImage" />
            </div>
          ))}
        </div>
        </div>

    </div>
  );
};

export default Services;
