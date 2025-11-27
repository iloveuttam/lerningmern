
import React ,{ useContext } from 'react';
import { ThemeContext } from '../App';



const ChildC = () => {
   const {theme,setTheme} = useContext( ThemeContext ) ;
   function toggleTheme(){
    if(theme==='light'){
        setTheme('dark')
    }
    else{
        setTheme('light')
    }

   }
  return (
    <div>
         <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}

export default ChildC
