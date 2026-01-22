import React from 'react'
import soilHealth from '../assets/soilHealth.png'
import remoteWater from '../assets/remoteWater.png'
import autoWater from '../assets/autoWater.png'
import './WWWD.css'

const WWWD = () => {

  const cardData = [
    {
      id: 1,
      title: "Soil Health Monitoring",
      description: "Smart Soil Health Monitoring is a simple, user-friendly system for home plant care. It checks soil moisture, temperature, and humidity in real time, helping people know when to water, protect plants, and keep their home plants healthy and growing beautifully.",
      image: soilHealth,
    },
    {
      id: 2,
      title: "Remote Watering",
      description: "This feature lets you water your plants remotely from anywhere using your phone or smart device. Even when you are away, you can control watering easily, ensure proper care, prevent overwatering or dryness, and keep your home plants healthy and fresh at all times.",
      image: remoteWater,
    },
    {
      id: 3,
      title: "Automated Watering System",
      description: "PlantPal’s automated watering mechanism takes the hassle out of plant care. Once the moisture sensors detect a need for water, the system activates its built-in pump to deliver the precise amount of hydration needed. Whether you're at home or away",
      image: autoWater,
    },
  ];

  const Card = ({ title, description, image }) => (
    <div className="card">
      <img src={image} alt={title} className="cardImage" />
      <div>
        <h3 className='cardHeading'>{title}</h3>
        <p className='cardDescription'>{description}</p>
      </div>
    </div>
  );

  return (
    <div className='wwwd-container'>
      <div className='wwwd-text'>What We Do</div>
      <div className='wwwd-bottom'>
        {cardData.map(card => (
          <div key={card.id} className='card'>
            <img src={card.image} alt={card.heading} className='card-image' />
            <div className='card-content'>
              <div className='card-heading'>{card.title}</div>
              <div className='card-description'>{card.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WWWD
