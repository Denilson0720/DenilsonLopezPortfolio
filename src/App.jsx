import React,{useEffect} from 'react'
import DrawerAppBar from './components/DrawerAppBar';
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
function App() {
 
  return (
    <> 
      <BrowserRouter>
      <DrawerAppBar/>
      <Home/>
      <About/>
      <Experience/>
      <Work/>
      <Contact/>
      <Footer/>
      </BrowserRouter>
    </>
  )
}
export default App
