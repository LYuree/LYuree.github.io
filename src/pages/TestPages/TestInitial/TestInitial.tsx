import { CssBaseline, Container, Box, Button, ListItemText, ListItem } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { theme } from "../../../theme";
import ContentSection from "../../../components/ContentSection/ContentSection";
import DownloadPriceForm from "../../../components/DownloadPriceForm/DownloadPriceForm";
import ContentList from "../../../components/ContentList/ContentList";
import HeroSection from "../../../components/HeroSection/HeroSection";
import { Link } from "react-router-dom";
const InitialTest: React.FC = () => {
    const handleButtonClick = (scrollToDataName: string) => {
        if (scrollToDataName) {
            const element = document.querySelector(`[data-name="${scrollToDataName}"]`);
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth', // Плавная прокрутка
                block: 'start', // Прокрутка до верхней границы элемента
              });
            }
          }
        
    };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container maxWidth="md">
        <Box my={8}>{/* <HeroSection /> */}</Box>

        <Box my={8}>
          <ContentSection
            title=""
            content={[
              <div data-name="intro">На нашем сайте вы можете пройти комплексное онлайн тестирование, направленное на определение ваших профессиональных предпочтений. Тест будет интересен школьникам и студентам, он поможет в дальнейшем выборе профессии.
              Наш тест основывается на проверенных методиках, но вместе с этим исследует предпочтения к современным профессиям и направлениям - менеджмент, IT, фриланс и т.д.</div>,
                <Box my={4} display="flex" justifyContent="center">
                <Button variant="contained" color="secondary">
                  <Link to="/test_part1" style={{color:'white'}}>начать тестирование!</Link>
                </Button>
            </Box>
            ]}
            // button={{text:"ПОДРОБНЕЕ", onClick:handleButtonClick}}
          />

        </Box>

      </Container>
    </ThemeProvider>
  );
};
export default InitialTest;
