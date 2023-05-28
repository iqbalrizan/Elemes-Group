import React, { Component } from "react";
import Slider from "react-slick";
import "./Category.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import icon1 from "../../assets/Frameicon1.png"
import icon2 from "../../assets/pizza 12.png"
import icon3 from "../../assets/kebab 1.png"
import icon4 from "../../assets/salmon 1.png"
import icon5 from "../../assets/doughnut 1.png"
import {GrPrevious, GrNext} from "react-icons/gr"


const Category = () => {

  const slider = React.useRef(null);
  const data = [
    {
      image :  icon1,
      name : "cupcake",
      value : 22,
      color : "color1"
    },
    {
      image : icon2,
      name : "Pizza",
      value : 25,
      color : "color2"
    },
    {
      image : icon3,
      name : "Kebab",
      value : 12,
      color : "color3"
    },
    {
      image : icon4,
      name : "Salmon",
      value : 22,
      color : "color4"
    },
    {
      image : icon5,
      name : "Doughnut",
      value : 11,
      color : "color5"
    },
  ]
  const settings = {
    
    className: "center",
      centerMode: true,
      infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    
  return (
    <div className='category'>
      <div className="title">
        <h1>Browser Our Category</h1>
        <h2>Receipt</h2>
      </div>
      <div className="carrousel">
      <div>
        <Slider arrows={false} ref={slider} {...settings}>

          {/* {[1,2,3,4,5].map((v) => (
     <div styles={{backgroundColor: 'red'}}>
     <img src={icon1} alt="" />
   </div>
          )) } */}

          {data.map ((item, index) => (
            <div className={`slickcard ${item.color}`} >
             <img src={item.image} alt="" className="slickimage" />
              <p className="cardname">{item.name}</p>
              <p className="cardvalue">{item.value} Items</p>
            </div>
          ))}

        </Slider>

            <div className="buttoncategory">
            <button className="prevbutton" onClick={() => slider?.current?.slickPrev()}>
            <GrPrevious className="categoryicon" /> Prev 
              </button>
            <button className="nextbutton" onClick={() => slider?.current?.slickNext()}>
             Next <GrNext className="categoryicon" />
            </button>
            </div>
      </div>
    
      </div>
    </div>
  )
}

export default Category