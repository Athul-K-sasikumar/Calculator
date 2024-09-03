import './App.css'
import Calc from './Calc'

function App() {

  return (
    <>
      <div className="row">
        <div className="col-md-3"></div>
        <div style={{background:'#EEDF7A'}} className="col-6 text-center ">
          <h2 style={{color:'#1C1678',fontWeight:"bolder",paddingBottom:"20px" ,paddingTop:'20px'}}>CALCULATOR</h2>
          <Calc/>
        </div>
        <div className="col-3"></div>
      </div>
    </>
  )
}

export default App
