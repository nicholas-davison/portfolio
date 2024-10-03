import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom"
import { HomePage } from './pages/home'
import { NavBar } from './components/navbar'
import { Experience } from './pages/experience'
import { Work } from './pages/work'
import { Music } from './pages/music'
import { Footer } from './components/footer';
import ScrollToTop from './components/scrollToTop';
import { useState } from 'react';
 
function App() {
  const [shake, setShake] = useState(false);

  const triggerShake = () => {
    setTimeout(() => {
      setShake(true);
  
      setTimeout(() => {
        setShake(false); 
      }, 1000); 
    }, 750);
  };

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={
          <>
            <NavBar triggerShake={triggerShake}/>
            <Outlet />
            <Footer shake={shake}/>
          </>
        }> 
          <Route index element={<HomePage/>} />
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/music" element={<Music/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
