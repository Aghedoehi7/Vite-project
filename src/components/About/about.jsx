import React from 'react'
import './about.css'
import about_img from '../../assets/about_img.jpeg'
import playicon from '../../assets/playicon.png'

const about = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" />
            {/* <img src={playicon} alt="" /> */}
           </div>
            <div className='about-right'>           
            <h2>About Us</h2>
            <p>At Zhaikmunai Company, we specialize in connecting buyers and sellers in the oil and gas sector. <br />
             With extensive experience and a dedicated team of experts, we have established ourselves as a trustworthy intermediary. Our goal is to facilitate smooth transactions and provide essential market insights to our clients.</p>
<p>Our commitment to providing exceptional quality and client satisfaction sets us apart in the competitive oil and gas brokerage landscape. <br />
 We understand the complexities of the industry and work tirelessly to ensure our clients achieve the best results.
</p>
<p>Our team is here to support you in every aspect of buying or selling oil and gas assets. <br /> 
We prioritize integrity, transparency, and a dedication to securing optimal outcomes for all parties involved.
</p>
<p>With a proven track record of successful transactions and satisfied clients, we have established ourselves as a trustworthy partner in the oil and gas industry. <br /> 
Our focus on excellence, combined with our extensive industry expertise, makes us an invaluable resource for navigating the complexities of oil and gas transaction </p>
<h2>MANAGEMENT</h2>
<p>In accordance with the Charter of Zhaikmunai , the Company supreme management body is the General Meeting of Shareholders. <br /> 
The Company Board of Directors ensures strategic management of the Company activities.</p>
<p>The Board of Directors has established the Audit Committee and the Staff and Remunerations Committee. <br />
 These Committees are of an advisory and consultative nature and shall ensure effective performance of the duties by the Board of Directors.</p>
        </div>
      
    </div>
  )
}

export default about
