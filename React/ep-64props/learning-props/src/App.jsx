import { useState } from 'react'
import './App.css'
import Card from './components/card'
import Button from './components/button';

function App() {
  const [count, setcount] = useState(0);

  function handleclick(){
    setcount(count+1);
  }
  return (
    <div> 
         {/* <Card nam="uttam">
          <h1>All data inside card tag trated as children it can send and print entirly</h1>
          <h1>uttam kr</h1>
          <p>software engineer</p>
          <p>Lorem ipsum dolor sit.</p>
         </Card> */}
         {/* <Card children="mai bhi hu"></Card> */}
         <Button handleclick={handleclick} text="click me">
          <h1>{count}</h1>
         </Button>
    </div>
  )
}

export default App
