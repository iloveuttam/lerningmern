import React from 'react'

const ChildComponents =React.memo(
     (props) => {
    console.log('child components rerender again');
  return (
    <div>
         <button onClick={props.handleclick}>{props.buttonname}</button>
    </div>
  )
}
)
export default ChildComponents
//the react.memo ensure that the re render of the child 
// is not done regularly it changes when the value 
// get affected in any of the case