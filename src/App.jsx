import './App.css'
import Home from './Home'
import {Route,Routes} from "react-router-dom"
import Contact from './Pages/Contact'
import { useEffect } from 'react'
import Aos from 'aos'


function App() {  
  useEffect(()=>{
    Aos.init({duration:"1000"})
  },[])
  return (
    <>
  
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/contact' element={<Contact/>} />
</Routes>
     

    </>
  )
}
export default App
