
import './App.css'

function Football() {
  const shoot = (a)=>{
    alert(a);
    console.log( "Done Shot");
    
  }
 
  return(
    <>
    <button onClick={()=>shoot("Goal")}>Take The Shot!</button>
    </>
  )
}

export default Football
