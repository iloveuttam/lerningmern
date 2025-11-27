import './App.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './componets/Home';
import Dashboard from './componets/Dashboard';
import About from './componets/About';
import { useState } from 'react';
import Navbar from './componets/Navbar';


const router = createBrowserRouter(
  [
   {
     path:"/",
     element: <div>
        <Navbar/>
        <Home/>
     </div>,  
   },
   {
     path:"/about",
       element: <div>
        <Navbar/>
        <About/>
     </div>,   
   },
   {
     path:"/dashboard",
     element: <div>
        <Navbar/>
        <Dashboard/>
     </div>,   
   },
  ]
);


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <RouterProvider router={router}/>
    </div>
  )
}

export default App
