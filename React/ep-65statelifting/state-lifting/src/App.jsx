import './App.css'
import Card from './components/Card'
import { useState } from 'react'
import Login from './components/login';
import Logout from './components/logout';
import { use } from 'react';
function App() {
 //create child 
 //manage child
 //change state
 //all child state are sync together
  const [name,setname] = useState('');
  const [isloogedin,setlogedin]=useState(true);

//  Early return 
// if(isloogedin){
//   return ( <Login/>)
// }


// Logical operator
// return (
//    <div>
//      <h1> how are o</h1>
//      {!isloogedin && <Logout/>}
//    </div>
// ) 

//Ternary conditional
//  return( 
//      <div>
//       {isloogedin ? <Login/> : <Logout/>}
//      </div>
// )

// If else conditional
//  if(isloogedin){
//    return( <Login/> )
//   }
//   else{
//      return (<Logout/> )
//   }  
  return (
    <div>
         <Card name ={name} setname={setname}/>
         <p>I am inside parent components and value of name is :{name}</p>
    </div>
  )
}

export default App
