import React from 'react'
import "./StickyMenu.scss"
import {CiMenuBurger} from "react-icons/ci"

const StickyMenu = () => {
  return (
    <div className='stickymenu'>
      <div className="home">
        <CiMenuBurger size="2em" />
        <p>Home</p>
      </div>
      <div className="promotions">
        <CiMenuBurger size="2em" />
        <p>promotions</p>
      </div>
      <div className="Other">
        <CiMenuBurger size="2em" />
        <p>Other</p>
      </div>
    </div>
  )
}

export default StickyMenu