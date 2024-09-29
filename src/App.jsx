import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom"
import { HomePage } from './pages/home'
import { NavBar } from './components/navbar'
import { About } from './pages/about'
import { Experience } from './pages/experience'
import { Work } from './pages/work'
import { Music } from './pages/music'
import { Contact } from './pages/contact'
import { Footer } from './components/footer';
import ScrollToTop from './components/scrollToTop';
import { useEffect } from 'react';
 
function App() {

/*   useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []); */

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={
          <>
            <NavBar />
            <Outlet />
            <Footer />
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
