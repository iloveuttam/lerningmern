import './App.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './componets/Home';
import Dashboard from './componets/Dashboard';
import Course from './componets/Course'
import Mocktest from './componets/Mocktest';
import Report from './componets/Report';
import Notfound from './Notfound';
import About from './componets/About';
import { useState } from 'react';
import Navbar from './componets/Navbar';
import Paramcomp from './componets/Paramcomp';



const routervariable = createBrowserRouter(
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
     children:[
      { path:'courses',
        element:<Course/>
      }, 
      {path:'mocktest',
        element:<Mocktest/>
      },
      {path:'report',
        element:<Report/>
      },
     ]   
   },
   {
    path:'*',
    element:<Notfound/>
   },
   {
    path:"/student/:id",
    element: <div>
        <Navbar/>
        <Paramcomp/>
     </div>,  

   }
  ]
);


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <RouterProvider router={routervariable}/>
    </div>
  )
}

export default App
