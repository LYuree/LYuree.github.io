import { Route, Routes } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import MethodPage from './pages/MethodPage/MethodPage';
import InitialTest from './pages/TestPages/TestInitial/TestInitial';
import ThreeSelectsPage from './pages/TestPages/ThreeSelectsPage.tsx/ThreeSelectsPage';
import AlternativesPage from './pages/TestPages/AlternativesPage/AlternativesPage';
import YesNoPage from './pages/TestPages/YesNoPage/YesNoPage';
import { Box } from "@mui/material";


function App() {

  return (
    <>
      <div className="app">
          <ThemeProvider theme={theme}>
                <ScrollToTop/>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh', // Ensure the layout takes at least the full viewport height
                  }}>
                  <NavBar/>
                  <Box sx={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<HomePage/>}></Route>
                        <Route path="/about" element={<AboutPage/>}></Route>
                        <Route path="/method" element={<MethodPage/>}></Route>
                        <Route path="/test_init" element={<InitialTest/>}></Route>
                        <Route path="/test_part1" element={<ThreeSelectsPage/>}></Route>
                        <Route path="/test_part2" element={<AlternativesPage/>}></Route>
                        <Route path="/test_part3" element={<YesNoPage/>}></Route>
                        <Route path="*" element={<PageNotFound/>}></Route>
                    </Routes>
                  </Box>
                  <Footer/>
                </Box>
            </ThemeProvider>
        </div>
    </>
  )
}

export default App
