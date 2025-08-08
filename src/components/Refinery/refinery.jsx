import React from 'react'
import './Refinery.css'
import arrow from '../../assets/arrow.jpg'
import { Link } from 'react-scroll'

const refinery = () => {
  return (
    <div className='refinery'>
    <div className='refinery container'>
      <div className='refinery-text'>
        <h2>One of the most trusted and reliable companies in the oil and gas industry.</h2>

        <h3>We, the management board of Zhaikmunai LLP, a legal entity with BIN: 970340003085 established and operating under the laws of Kazakhstan, representing various petrochemical refineries and acting as facilitators and agents, 
          hereby declare and affirm, with full legal and corporate accountability and under the threat of perjury, that our suppliers are prepared, willing, 
          and able to provide the following petrochemical products, including both refined and unrefined commodities, in accordance with the terms and conditions outlined below. 
          Our sellers possess adequate financial resources, 
          along with all necessary export permits and licenses required to meet this purchasing obligation.</h3>

          <Link to='about' smooth={true} offset={-260} duration={500} className='btn'>
            Explore more <img src={arrow} alt="" />
          </Link>

      </div>
      </div>
    </div>
  )
}

export default refinery
