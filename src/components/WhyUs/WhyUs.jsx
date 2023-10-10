import React from "react";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import './why-us.css'
import { servicesData } from "./WhyUs.data";
const WhyUs = () => {
  

  return (
    <div className="why-us-wrapper">
      <div className="why-us-container">
      <Slide triggerOnce direction="down">
        <h4>
          Чому <span className="green">ми?</span>
        </h4>
      </Slide>
      <div className="why-us-card">
        {servicesData.map(item => (
          <Slide className="why-us-cont" key={item.id} triggerOnce direction="left">
            <Card  key={item.id} item={item}/>
          </Slide>
        ))}
      </div>
    </div>
    </div>
  );
};

export default WhyUs;

