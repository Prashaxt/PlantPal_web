import React, { useState, useEffect } from 'react'
import top1 from '../assets/top1.png'
import top2 from '../assets/top2.png'
import './SubHero.css'

const SubHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [top1, top2]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [images.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className='subContainer'>
      <div className='subImgDiv'>
        <div className='carousel-wrapper'>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SubHero