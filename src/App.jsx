



import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './componets/pages/Home'

import SobreNos from "./componets/pages/SobreNos"


function App() {
  

  return (
    <BrowserRouter>
     
     
     
    
      <Routes>
        
       
        <Route path='/' element={<Home/>}/>
        <Route path='sobreNos' element={<SobreNos/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
