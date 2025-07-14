import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
;

import { faChartLine, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
function App() {
  return (
    <>
   
   


    <nav style={{display:'flex', justifyContent:'space-between', alignItems:'center', backgroundColor:'#f0f0f0'}}>
   
     <div style={{ width:'30px'  , display :'flex' }}  >
      <FontAwesomeIcon icon={faBars} style={{padding:'24px'}}/>s
      <p style={{fontSize:"20px"}}><b>Habit</b></p>  
      <p style={{color:'purple',padding:'0', fontSize:"20px"}}><b>Kit</b></p>


    </div>

    <div style={{display:'flex', alignItems:'center', gap:'10px', paddingRight:'20px'}}>
      <p style={{border:'2px solid', width:'30px'}}>Pro</p>
      <FontAwesomeIcon icon={faChartLine} style={{width:'50px',fontSize:'25px'}}/>   
      <FontAwesomeIcon icon={faPlusCircle} style={{width:'30px',fontSize:'25px'}}/>      

    </div>

    </nav>
   
    
    </>

  )
}

export default App
