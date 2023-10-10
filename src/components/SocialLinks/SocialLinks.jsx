import React from 'react'
import './socialLinks.css'
import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import linked from '../../images/linked.png'
import tiktok from '../../images/tiktok.png'
import telegram from '../../images/telegram.png'
import { Slide } from 'react-awesome-reveal'

const SocialLinks = () => {
  return (
    <div className='social-us-wrapper'>
      <Slide direction='left' triggerOnce>
      <h2 className='social-us-title'>
      Соціальні мережі
      </h2>
      </Slide>
      <Slide direction='right' triggerOnce>
      <div className='social-us-content'>
        <div className='social-us-content-item'>
          <p></p>
          <a target="_blank" href="https://www.facebook.com/profile.php?id=100088433736254">
            <img className='social-us-content-img' src={facebook} alt="Facebook" />
          </a>
        </div>
        <div className='social-us-content-item'>
          <p></p>
          <a target="_blank" href="https://instagram.com/vnv_solutions?igshid=MWI4MTIyMDE=">
            <img className='social-us-content-img' src={instagram} alt="Instagram" />
          </a>
        </div>
        <div className='social-us-content-item'>
          <p></p>
          <a target="_blank" href="https://www.linkedin.com/company/vnv-tech/">
            <img className='social-us-content-img' src={linked} alt="Linkedin" />
          </a>
        </div>
        <div className='social-us-content-item'>
          <p></p>
          <a target="_blank" href="https://t.me/vnv_solutions">
            <img className='social-us-content-img' src={telegram} alt="Telegram" />
          </a>
        </div>
        <div className='social-us-content-item'>
          <p></p>
          <a target="_blank" href="https://www.tiktok.com/@vnvsolutions?_t=8YVB28bloQP&_r=1">
            <img className='social-us-content-img' src={tiktok} alt="Tiktok" />
          </a>
        </div>
        
      </div>
      </Slide>
    </div>
  )
}

export default SocialLinks