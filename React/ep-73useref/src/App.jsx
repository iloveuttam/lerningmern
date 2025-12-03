import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [time , setTime] = useState(0);
  let timerref = useRef(null);

  function starttimer(){
   timerref.current = setInterval( ()=>{
    setTime(time => time +1)
   },1000);
  }
  function stoptimer(){
    clearInterval(timerref.current);
    timerref.current = null;
       
  }
  function resettimer(){
  stoptimer();
  setTime(0);
  }


  // const [count, setCount] = useState(0);
  // // let val=0; simple val variable not persits it data  val = val+1;
  // let val = useRef(0);

  //  let btnref = useRef(); 

  // function handleIncrement(){
  //    val.current = val.current+1; //no re-render triger 
  //   console.log("value of val :",val);
  // setCount(count+1);
  // }

  // function changecolor (){
  //   btnref.current.style.backgroundColor = "red";
  // }

  // useEffect( ()=>{
  //   console.log("main har bar render hota hu");
  // })

  return (
    <div>
         <h1>Stopwatch :{time} seconds</h1>
         <button onClick={starttimer}>Start</button> <br/>
         <button onClick={stoptimer}>Stop</button> <br/>
         <button onClick={resettimer}>Reset</button> <br/>


          {/* <button ref={btnref} onClick={handleIncrement}>Increment</button>
          <br />
            <button onClick={changecolor}>Change Color</button>
          <div>
             Count: {count}
          </div> */}
    </div>
  )
}

export default App
