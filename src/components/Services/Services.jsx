import React from 'react'
import './services.css'
import gallery1 from '../../assets/gallery1.png'
import gallery2 from '../../assets/gallery2.jpg'
import gallery3 from '../../assets/gallery3.jpg'

const Services = () => {
  return (
    <section className="services-gallery">
      <article className="service-card">
        <div className="service-card__image-container">
          <img src={gallery1} alt="Brokerage Services" className="service-card__image" />
          <div className="service-card__overlay">
            {/* Optional: Add an icon or text here */}
          </div>
        </div>
        <div className="service-card__content">
          <h3 className="service-card__title">Brokerage Services</h3>
          <p className="service-card__description">Our team of experienced brokers is knowledgeable and skilled in various investment strategies and opportunities, allowing us to provide personalized and strategic advice to our clients. We believe in building long-term relationships with our clients and helping them navigate the ever-changing financial landscape.</p>
        </div>
      </article>
      
      <article className="service-card">
        <div className="service-card__image-container">
          <img src={gallery2} alt="Oil Gas Trading" className="service-card__image" />
          <div className="service-card__overlay">
            {/* Optional: Add an icon or text here */}
          </div>
        </div>
        <div className="service-card__content">
          <h3 className="service-card__title">Oil Gas Trading</h3>
          <p className="service-card__description">Whether you are looking to buy petroleum products, or any other investment vehicles, you can trust Zhaikmunai Oil Company to provide you with expert guidance and support every step of the way.</p>
        </div>
      </article>
      
      <article className="service-card">
        <div className="service-card__image-container">
          <img src={gallery3} alt="Mandate Spotlight" className="service-card__image" />
          <div className="service-card__overlay">
            {/* Optional: Add an icon or text here */}
          </div>
        </div>
        <div className="service-card__content">
          <h3 className="service-card__title">Mandate Spotlight</h3>
          <p className="service-card__description">In order to achieve this vision, we are committed to reducing our environmental impact through sustainable practices and responsible sourcing. We prioritize the health and safety of our employees, customers, and the communities in which we operate.</p>
        </div>
      </article>
    </section>
  )
}

export default Services

