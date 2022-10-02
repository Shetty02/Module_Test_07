import React from 'react'
import './Banner.css'
import img from './img/imag.png'

function Banner() {
  return (
  
    <div className="header-container">
         {/* Banner */}
            <div className="row">
            <div className="content-box">
            <div className="season">
                <h5>Summer 2020</h5>
            </div>
            <div className="headline">
                <h1>NEW COLLECTION</h1>
            </div>
            <div className="info">
            <h4>We know how large objects will act, but things on a small scale.</h4>
            </div>
            <div className='btn'>
                <h3>SHOP NOW</h3>
             </div>
              </div>
            </div>
            <div className="Img">
              <img src={img} alt='' />
              </div>              
          </div>
  )
}

export default Banner