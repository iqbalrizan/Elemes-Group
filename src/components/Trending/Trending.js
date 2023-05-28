import React from 'react'
import "./Trending.scss"
import {AiFillStar } from "react-icons/ai"
import product1 from "../../assets/pexels-brett-jordan-842519 1.png"
import product2 from "../../assets/pexels-daria-shevtsova-1260968 1.png"
import product3 from "../../assets/pexels-nishant-aneja-2955819 1.png"
import product4 from "../../assets/pexels-olga-lioncat-7245464 1.png"
import product5 from "../../assets/pexels-oleg-magni-1908674 1.png"
import product6 from "../../assets/pexels-alena-shekhovtcova-6940978 1.png"
import product7 from "../../assets/pexels-karley-saagi-2064449 1.png"
import product8 from "../../assets/pexels-polina-tankilevitch-6419736 1.png"

const Trending = () => {
  return (
    <div className='trending'>
      <div className="title">
        <h1>Browser Our Trending</h1>
        <h2>Receipt</h2>
      </div>
      <div className="cardtrending">
        <div className="cardproduct1">
        <img src={product1} alt="" />
        <h3>Pizza Paperoni</h3>
        <h4>Pizza</h4>
        <div className="star">
        <AiFillStar color='yellow' />
        <AiFillStar color='yellow' />
        <AiFillStar color='yellow' />
        <AiFillStar color='yellow' />
        <AiFillStar />
        </div>
        </div>
        <div className="cardproduct2">
        <img src={product2} alt="" />
        <h3>Pizza Meat</h3>
        <h4>Pizza</h4>
        <div className="star">
        <AiFillStar color='yellow' />
        <AiFillStar color='yellow' />
        <AiFillStar color='yellow' />
        <AiFillStar />
        <AiFillStar />
        </div>
        </div>
        <div className="cardproduct3">
        <img src={product3} alt="" />
        <h3>Doner Kebab</h3>
        <h4>Kebab</h4>
        <div className="star">
        <AiFillStar color='yellow' />
        <AiFillStar color='yellow' />
        <AiFillStar color='yellow' />
        <AiFillStar  color='yellow'/>
        <AiFillStar color='yellow' />
        </div>
        </div>
        <div className="cardproduct4">
        <img src={product4} alt="" />
        <h3>Salmon Roll</h3>
        <h4>Salmon</h4>
        <div className="star">
        <AiFillStar color='yellow' />
        <AiFillStar color='yellow' />
        <AiFillStar color='yellow' />
        <AiFillStar color='yellow' />
        <AiFillStar  />
        </div>
        </div>
        <div className="cardproduct5">
        <img src={product5} alt="" />
        <h3>Cupcake Choco</h3>
        <h4>Cupcake</h4>
        <div className="star">
        <AiFillStar color='yellow' />
        <AiFillStar color='yellow' />
        <AiFillStar color='yellow' />
        <AiFillStar color='yellow' />
        <AiFillStar />
        </div>
        </div>
        <div className="cardproduct6">
        <img src={product6} alt="" />
        <h3>Doughnut Milk</h3>
        <h4>Doughnut</h4>
        <div className="star">
        <AiFillStar color='yellow' />
        <AiFillStar color='yellow' />
        <AiFillStar color='yellow' />
        <AiFillStar color='yellow' />
        <AiFillStar color='yellow' />
        </div>
        </div>
        <div className="cardproduct7">
        <img src={product7} alt="" />
        <h3>Doughnut Unicorn</h3>
        <h4>Doughnut</h4>
        <div className="star">
        <AiFillStar color='yellow' />
        <AiFillStar color='yellow' />
        <AiFillStar color='yellow' />
        <AiFillStar color='yellow' />
        <AiFillStar />
        </div>
        </div>
        <div className="cardproduct8">
        <img src={product8} alt="" />
        <h3>Kathi Kebab</h3>
        <h4>Kebab</h4>
        <div className="star">
        <AiFillStar color='yellow' />
        <AiFillStar color='yellow' />
        <AiFillStar color='yellow' />
        <AiFillStar color='yellow' />
        <AiFillStar />
        </div>
        </div>
      </div>
      <div className="trendingbutton">
        <button>ALL Receipt</button>
      </div>
    </div>
  )
}

export default Trending