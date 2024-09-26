import { useState } from 'react'
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom"
import { HomePage } from './pages/home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/navbar'
 
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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
