import { useState } from 'react'
import ChildA from './components/ChildA'
import './App.css'
import { createContext } from 'react'

//step1: create Context
// const UserContext = createContext();
//step2:wrap all child inside a provider
//step3:pass the value
//step4:consumer me jake consume karlo

const ThemeContext = createContext();

function App() {
  // const [user,setUser] =useState({name:"Uttam"});
  
  const [theme,setTheme] = useState('light');
  
  return (
   
       
       <ThemeContext.Provider value={{theme,setTheme}}>
          <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
            <ChildA/>
          </div>
        
       </ThemeContext.Provider>
       



  //    <div>
  //       {/* <UserContext.Provider value={user}>
  //          <ChildA/>
  //       </UserContext.Provider> */}
  //  </div>
  )
}
//only this will wrap all the child beacuase it contain a hirerachy
export default App
// export {UserContext}
export {ThemeContext}
