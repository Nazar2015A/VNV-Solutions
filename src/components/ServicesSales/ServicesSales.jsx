import React from "react";
import "./ServicesSales.css";

import { Slide } from "react-awesome-reveal";

import SliderComp from "./ServicesSlider/SliderComp";

const ServicesSales = () => {
  return (
    <div className="services-sales-wrapper">
      <div className="services-sales-content">
        <h2>
          Знижки від <span className="green">Liubomyr Luzhnyi</span>
        </h2>
        <Slide triggerOnce direction="left" className="sales-slide">
          <SliderComp />
        </Slide>
      </div>
    </div>
  );
};

export default ServicesSales;
