import React from 'react'

const Button = (props) => {
  return (

    <div>
        <button onClick={props.handleclick}>
       {props.text}
    </button>
        {props.children}
    </div>
      
  )
}

export default Button
