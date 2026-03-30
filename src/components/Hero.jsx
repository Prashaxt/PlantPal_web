import React from 'react'
import hero from '../assets/hero.png'
import './Hero.css'

const Hero = () => {
  return (
    <>
      <div className='heroContainer'>
        <div className='hero-text'>Your plants stay healthy,</div>
        <div className='hero-text'>even when you’re busy.</div>
      </div>

      <div class="wave-sep">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>

    </>

  )
}

export default Hero
