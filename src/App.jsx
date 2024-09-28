import './App.css';
import { useState } from 'react'
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom"
import { HomePage } from './pages/home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/navbar'
import { About } from './pages/about'
import { Experience } from './pages/experience'
import { Work } from './pages/work'
import { Music } from './pages/music'
import { Contact } from './pages/contact'
 
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <NavBar />
            <Outlet />
          </>
        }> 
          <Route index element={<HomePage/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/music" element={<Music/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
