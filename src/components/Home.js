import React from 'react'
import "../style/home_style.css"
import car from "../assets/car.gif"
import car2 from "../assets/car2.gif"
import Bottom from './Bottom'

export default function Home() {
  return (
    <div>
        <div className="header">
          <div className="banner">
            <h1 className='header_title'>Share Ride With Others</h1>
            <h1 className='header_title' id="second">With Similar Destination</h1>

          </div>
        </div>
        <div className="gif_div">
          <div className='give'>
            <h2 className="give-text">Have A Car ? Share Ride With Others </h2>
            <img className="give-gif" src={car} alt="gif" />
          </div>
          <div className='get'>
            <img className="get-gif" src={car2} alt="gif" />
            <h2 className="get-text">Find Peoples With Similar Destination And Share Ride With Them</h2>
          </div>

        </div>
        <Bottom/>
    </div>
  )
}
