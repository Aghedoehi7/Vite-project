import React from 'react'
import './mandate.css'
import mandate from '../../assets/mandate.jpg'

const Mandate = () => {
  return (
    <div className='mandate-container'>
      <div className='mandate-inner-container'>
        <div className='mandate-image-container'>
          <img src={mandate} alt="" className="mandate-img" />
          <div className="mandate-text-overlay">
            <h1>Quality Assurance</h1>
            <h3>
              At Zhaikmunai LLP Oil Company, we specialize in connecting buyers and sellers within the oil and gas industry. With years of experience and a dedicated team of professionals, we have established ourselves as a trusted intermediary, facilitating seamless transactions and providing valuable market insights to our clients.
            </h3>
          </div>
        </div>
        
        <div className="mandate-content-below">
          <p>Our quality assurance process includes:</p>
          <ul className="mandate-list">
            <li>Usability Testing: We conduct thorough testing...</li>
            <li>Functional Testing: Our team performs rigorous testing...</li>
            <li>Security Testing: Our website undergoes regular security testing...</li>
            <li>Compliance Testing: We adhere to all relevant industry regulations...</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Mandate