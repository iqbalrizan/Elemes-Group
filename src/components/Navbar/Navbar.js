import React from 'react'
import "./Navbar.scss"
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div className='navigationbar'>
        <div className="logo">
        <img src={logo} alt="" />
        </div>
        <div className="menu">
        <ul>
            <li>
                <a href="">Home</a>
                </li>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">
                    <div className="wrapper">
                    Promotions  <div className='hot'>HOT</div>
                    </div>
                   
               
                </a>
            </li>
            <li>
                <a href="">Blogs</a>
            </li>
            <li>
                <a href="">Contact Us</a>
            </li>
        </ul>
        </div>
        <div className="signin">
        <button className='button1'>Masuk</button>
        <button className='button2'>Daftar Sekarang</button>
        </div>
    </div>
  )
}

export default Navbar