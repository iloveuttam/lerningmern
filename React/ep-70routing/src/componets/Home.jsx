import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  function handlclick(){
    navigate('/about');
  }
  return (
    <div>
         Fome fage
         <button onClick={handlclick}>Move to About Page</button>
    </div>
  )
}

export default Home
