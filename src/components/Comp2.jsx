import React from 'react'
import comp2 from '../assets/comp2.png'
import './Comp2.css'

const Comp2 = () => {
  return (
    <div className='comp2Container'>
      <img src={comp2} alt="image" />
      <div className='comp2Right'>
      <div className='comp2Text'>At PlantPal, we're on a mission to make greenery accessible and stylish</div>
      </div>
    </div>
  )
}

export default Comp2
