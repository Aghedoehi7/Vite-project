import React from 'react'
import About from '../components/About/about'
import Title from '../components/Title/title'

const AboutPage = () => {
  return (
    <div>
      <div className='container'>
        <Title subTitle='About Us' title='Learn More About Our Company'/>
        <About/>   
      </div>
    </div>
  )
}

export default AboutPage
