
import './App.css'
import { use } from 'react';
import { useState } from 'react'
import { useEffect } from 'react'


function App() {
  const[count,setcount] = useState(0);
  const[total,settotal] = useState(1);

  //first ->size-effect function
  //second ->clean up function
  //third -> comma separated dependency list 

  //varition-1
  //runs on every render runs2 times becuae of the react render two time in starting
  // useEffect( ()=>{
  //   alert("i will run on every render on repaint")
  // })

  //variation-2
  //runs on first render because the array is empty
  // useEffect( ()=>{
  //    alert("render only one time because of array is empty")
  // },[])

  //variation-3
  //runs on every updation of the array
  // useEffect( ()=>{
  //   alert("i will run every time when the count is updated")
  // },[count])

  //variation-4
  //runs on click on any of the array element
  // useEffect( ()=>{
  //   alert("i am updated every time when total/count is updated");
  // },[count,total])

  //Variation -5
  //adding a clean up function

  
// useEffect(() => {
//   // Code to run (effect)
  
//   return () => {
//     // Optional cleanup code
//   };
// }, [dependencies]);
  
  
  function handleclick(){
    setcount(count+1);
    settotal(total+1);
  }

  return (
   <div>
      <button onClick={handleclick}>Total buttom</button>
      <br />
      <p>the total is :{total}  <br /></p>
         <button onClick={handleclick}>Count buttom</button>
         <p>the count is :{count}</p>
        
   </div>
  )
}

export default App
