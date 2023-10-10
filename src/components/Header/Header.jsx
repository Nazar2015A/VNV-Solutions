import React from "react"
import './header.css'
import logo from '../../images/vnv logo-05.png'

export default function Header() {
  return (
    <div className="headerWrapper">
      <div className="headerTop">
      <div className="header-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="header-title">
        <h1>Ласкаво просимо до <span className="green">VNV Solutions</span></h1>
      </div>
      </div>
      <div className="headerBtn">
        <button>Замовити</button>
      </div>
    </div>
  )
}