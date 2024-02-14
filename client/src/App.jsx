
import './App.scss'
import Navbar from './layout/Navbar'
import Main from './layout/Main'
import {Routes,Route } from 'react-router-dom'
import Login from './layout/Login'
import Register from './layout/Register'


function App() {

  return (

<div className="social-media">
  <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="*" element={<Main/>} />
        
  </Routes>

</div>

  )
}

export default App
