import React from 'react'
import './portfolio.css'
import { DefaultPlayer as Video } from 'react-html5video'
import intro from '../../video/video.mp4'
import 'react-html5video/dist/styles.css'


const Portfolio = () => {
  return (
    <div className='portfolio-wrapper'>
      <h2 className='portfolio-title'>Портфоліо</h2>
      <div className='portfolio-video'>
      <Video className="prodtfolio-video-mp4" autoPlay loop>
        <source src={intro} type='video/webm'/>
      </Video>
      </div>
      <button className='portfolio-btn'>Хочу вже</button>
    </div>
  )
}

export default Portfolio