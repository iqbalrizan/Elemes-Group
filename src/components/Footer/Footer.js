import React from 'react'
import "./Footer.scss"
import logo from "../../assets/logo.png"
import {SlEnvolopeLetter} from "react-icons/sl"
import {IoIosCall} from "react-icons/io"
import {FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footerdesktop'>
      <div className="info">
        <img src={logo} alt="" />
        <p>Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, 
Kecamatan Setiabudi, Kota Jakarta Selatan, 
Daerah Khusus Ibukota Jakarta 12950</p>
        <div className="buttoninfo">
          <SlEnvolopeLetter className='infoicon' size={30}/>
          <IoIosCall className='infoicon' />
          <FaInstagram className='infoicon'/>
        </div>
      </div>
      <div className="categories">
        <h4>Categories</h4>
        <ul>
          <li>Cupcake</li>
          <li>Pizza</li>
          <li>Kebab</li>
          <li>Salmon</li>
          <li>Doughnut</li>
        </ul>
      </div>
      <div className="aboutus">
        <h4>About Us</h4>
        <ul>
          <li>About Us</li>
          <li>FAQ</li>
          <li>Report Problem</li>
        </ul>
      </div>
      <div className="newsletter">
        <h4>Newsletter</h4>
        <p>
        Get now free 50% discount for alll products on your first order
        </p>
        <form>
          <input type="text" placeholder='your email adress' />
          <button>SEND</button>
        </form>
        <h5>
          <SlEnvolopeLetter className='newsicon' />  elemesid@gmail.com
        </h5>
        <h5>
          <IoIosCall className='newsicon' />  0888 1111 2222 
        </h5>
      </div>
    </div>
  )
}

export default Footer