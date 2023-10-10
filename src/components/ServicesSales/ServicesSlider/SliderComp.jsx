import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './sliderComp.css'
import { sliderCompSettings } from "./SliderComp.data";
import { reviewsData } from "./SliderComp.data";
const SliderComp = () => {
  const arrowRef = useRef(null);
  return (
    <>
      <Slider ref={arrowRef} {...sliderCompSettings}>
        {reviewsData.map((item) => (
          <Project item={item} key={item.id} />
        ))}
      </Slider>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
    </>
  );
};

export default SliderComp;
