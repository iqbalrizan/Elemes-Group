import React from 'react'
import "./HeroSection.scss"
import herosection from "../../assets/herosection.png"
import cardprofile from "../../assets/cardprofile.png"
import {AiFillStar} from "react-icons/ai"

const HeroSectionDesktop = () => {
  return (
    <>
    
    <div className='herosection'>
      <div className="heading">
    <h1>
        Good Food Us Good Mood
        </h1>
        <p>
        I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
        </p>
        <div className="button-wrapper">
        <button className='button1'>
          Daftar Sekarang
        </button>
        <button className='button2'>
          About Us
        </button>
        </div>
      </div>
      <div className="background">
        <div className="wrapper">
          <img src={herosection} alt="" className='herobackground' />
          <div className="cardprofile">
          <img src={cardprofile} alt="" className='cardbackground' />
          <div className="text">
            <h5>Green Salad Tomato</h5>
            <p>Tomato</p>
            <div className="star">
              <AiFillStar style={{color : "yellow"}} />
              <AiFillStar style={{color : "yellow"}} />
              <AiFillStar style={{color : "yellow"}} />
              <AiFillStar style={{color : "yellow"}} />
              <AiFillStar  style={{color : "gray"}}/>
            </div>
          </div>
        </div>
        </div>
       
      </div>
    </div>
    </>
  )
}

export default HeroSectionDesktop