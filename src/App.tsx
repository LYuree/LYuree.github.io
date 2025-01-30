import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import NavBar from './components/NavBar/Navbar';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <>
      <div className="app">
                <ScrollToTop/>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/about" element={<AboutPage/>}></Route>
                    <Route path="*" element={<PageNotFound/>}></Route>
                </Routes>
                <Footer/>
        </div>
    </>
  )
}

export default App
