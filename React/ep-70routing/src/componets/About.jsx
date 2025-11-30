import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  function handleclick(){
    navigate('/dashboard');
  }
  return (
    <div>
        fbout fage
        <button onClick={handleclick}>move to dashboard page</button>
    </div>
  )
}

export default About
