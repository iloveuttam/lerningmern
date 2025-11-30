import { useState } from 'react'
import ChildComponents from './components/ChildComponents';
import './App.css'
import { useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleclick = useCallback( ()=>{
    setCount(count+1);
  },[]);
  return (
     <div>
          <div>
              Count : {count}
          </div>
          <div>
              <button onClick={handleclick}>Increment</button>
          </div>
          <div>
            <ChildComponents buttonname="Click me"
             handleclick ={handleclick} />
          </div>
     </div>
  )
}

export default App
