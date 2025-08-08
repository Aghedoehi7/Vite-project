import React from 'react'
import './award.css'
import award1 from '../../assets/award1.jpeg'
import award2 from '../../assets/award2.jpeg'
import award3 from '../../assets/award3.jpeg'
import plus1 from '../../assets/plus1.png'
import plus2 from '../../assets/plus2.png'
import plus3 from '../../assets/plus3.png'

const award = () => {
  return (
    <div className='award'>
      <div className='award-inner'>
        <div className='awards'>
        <img src={award1} alt="" />
        <div className='caption'>
          <img src={plus1} alt="" />
          <h3>Drilling Fields</h3>
          <p>Fields  staff refer to locations where oil and gas compainies are drill</p>
        </div>
        </div>
              <div className='awards'>                
        <img src={award2} alt="" />
        <div className='caption'>
          <img src={plus2} alt="" />
          <h3>Expert Workers</h3>
          <p>Expert workers are individuals who is posses specialized knowledge.</p>
        </div>
         </div>
         <div className='awards'>
        <img src={award3} alt="" />
        <div className='caption'>
          <img src={plus3} alt="" />
          <h3>Award Winner</h3>
          <p>The award-winning company delivers high-quality projects.</p>

        </div>
        </div>
      </div>
    </div>
  )
}

export default award
