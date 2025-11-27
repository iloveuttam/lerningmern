import React, {useState} from 'react'
import './counter.css'

const Counter = () => {
    const [count, setcount] = useState(0);
  return (
    <div className='counter-container'>
        <p id='para'> You have click {count}  times</p>
        <button id='btn' onClick={()=>{setcount(count+1)}}>Click me</button>
    </div>
  )
}

export default Counter
