import React from 'react'
import Contact from '../components/Contact/contact'
import Title from '../components/Title/title'

const ContactPage = () => {
  return (
    <div>
      <div className='container'>
        <Title subTitle='Get in Touch with us' title='Do you want to reach us'/>
        <Contact/>
      </div>
    </div>
  )
}

export default ContactPage
