import './App.css'
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
   function handleclick(){
    alert("i am clicke");
   }
   function mousecontroller(){
    alert("chala ja bsdk")
   }
   function handleinputchange(e){
    console.log("value till now is :",e.target.value);
   }
   function handlesubmit(e){
    e.preventDefault();
    alert("Form submitted kripya nikaliye")
   }
  return (
    <form onSubmit={handlesubmit}>
       <input type="text" onChange={handleinputchange}/>
       <button type='submit'>submit</button>
       <button onClick={alert('i am render and invoked')}>special render button</button>
       <button onClick={() => alert('i am invoked when clicked beause passed by function refrence ')}>Real Button</button>
    </form>
    
    
    // <div>
    //     <button onClick={handleclick}>Click me</button>
    //     <p onMouseOver={mousecontroller}>This is paragraph</p>
    // </div>

  )
}

export default App
