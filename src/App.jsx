import Aos from 'aos'
import { useEffect } from 'react'
import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"
import './App.css'
import Home from './Home'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import { server } from './config'
import Booking from './Pages/Booking'
import NotFound from './Pages/NotFound'


function App() {  
  useEffect(()=>{
    Aos.init({duration:"1000"})
  },[])

  console.log(server)
  return (
    <>
  
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/contact' element={<Contact/>} />
  <Route path='/login' element={<Login/>}/>
  <Route path='/booking' element={<Booking/>}/>
  <Route path="*" element={<NotFound />}/>


</Routes>
  <Toaster position="bottom-center" />
     

    </>
  )
}
export default App
