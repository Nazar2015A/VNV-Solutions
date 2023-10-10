import React from 'react'
import {IoIosQuote} from "react-icons/io";
import {AiFillStar} from "react-icons/ai";

const ClientSlider = (props) => {
    const {name, position, img_url, stars, disc} = props.item;
  return (
    <div className='testimonials-container'>
        <div className='testimonials-header'>
            <span className='testimonials-quote'><IoIosQuote/></span>
            <div>
                {Array(stars).fill().map((_, i) => (
                    <span className='testimonials-star' key={i}>
                        <AiFillStar/>
                    </span>
                ))}
            </div>
        </div>
        <div className='testimonials-body'>
            {disc}
        </div>
        <div className='testimonials-footer'>
            <img className='testimonials-footer-img' src={img_url} alt={name} />
            <div className="details">
                <h1>{name}</h1>
                <p>{position}</p>
            </div>
        </div>
    </div>
  )
}

export default ClientSlider
