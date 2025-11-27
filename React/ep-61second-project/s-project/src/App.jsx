import Usercard from "./components/usercard"
import Prithvi from "./assets/prithvi.jpg"
import lovepic from "./assets/download.jpg"
import Mahrana from "./assets/maharana.jpg"

function App() {
  

  return (
      <div className="container" >
          <Usercard name="love rana" desc="desc1" image={lovepic} style={{"border-radius":"10px"}}/>
          <Usercard name="mahrana pratab" desc="desc2" image={Mahrana} />
          <Usercard name="prithviraj chauhan" desc="desc3" image={Prithvi}/>
      </div>
  )
}

export default App
