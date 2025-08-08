import React from 'react'
import Services from '../components/Services/Services'
import Title from '../components/Title/title'

const ServicesPage = () => {
  return (
    <div>
      <div className='container'>
        <Title subTitle='Our Service' title='What We Offer'/>
        <Services/>
      </div>
    </div>
  )
}

export default ServicesPage
