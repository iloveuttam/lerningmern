// @ts-nocheck
import React from 'react'
import uk from '../assets/download.jpg'
import "./usercard.css"

const Usercard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <p id='title'>{props.name} </p>
        <img className='user-img' src={props.image} alt={props.name} />
        <p id='user-desc'>{props.desc}</p>    
    </div>
  )
}

export default Usercard
