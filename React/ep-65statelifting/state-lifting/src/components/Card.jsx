import React from 'react'

const Card = (props) => {
  return (
    <div>
         <input type="text" onChange={(e)=> props.setname(e.target.value)} />
         <p>Name state variable ki value inside Card: {props.name}</p>
    </div>
  )
}

export default Card
