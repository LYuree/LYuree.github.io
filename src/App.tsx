import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import WhyPage from './pages/WhyPage/WhyPage';
import MethodPage from './pages/MethodPage/MethodPage';
import InitialTest from './pages/TestPages/TestInitial/TestInitial';
import ThreeSelectsPage from './pages/TestPages/ThreeSelectsPage.tsx/ThreeSelectsPage';


function App() {

  return (
    <>
      <div className="app">
          <ThemeProvider theme={theme}>
                <ScrollToTop/>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/about" element={<AboutPage/>}></Route>
                    <Route path="/method" element={<MethodPage/>}></Route>
                    <Route path="/why" element={<WhyPage/>}></Route>
                    <Route path="/test_init" element={<InitialTest/>}></Route>
                    <Route path="/test_part1" element={<ThreeSelectsPage/>}></Route>
                    <Route path="*" element={<PageNotFound/>}></Route>
                </Routes>
                <Footer/>
            </ThemeProvider>
        </div>
    </>
  )
}

export default App
