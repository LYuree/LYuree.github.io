import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';


function App() {

  return (
    <>
    <div>Hey there!</div>
      <div className="app">
          <ThemeProvider theme={theme}>
                <ScrollToTop/>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/about" element={<AboutPage/>}></Route>
                    <Route path="*" element={<PageNotFound/>}></Route>
                </Routes>
                <Footer/>
            </ThemeProvider>
        </div>
    </>
  )
}

export default App
