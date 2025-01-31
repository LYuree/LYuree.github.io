import { CssBaseline, Container, Box, Button, ListItemText, ListItem } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme";
import ContentSection from "../ContentSection/ContentSection";
import DownloadPriceForm from "../DownloadPriceForm/DownloadPriceForm";
import ContentList from "../ContentList/ContentList";
import HeroSection from "../HeroSection/HeroSection";
const HomePage: React.FC = () => {
    const handleButtonClick = (scrollHeight: number) => {
        console.log('Button clicked!');
        window.scrollBy({
            top: scrollHeight, // Прокрутка на 768px вниз
            behavior: 'smooth', // Плавная прокрутка
          });
        // Add your button click logic here
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
                <HeroSection
                title="Выберите профессию с нами!"
                description=""
                buttonText="подробнее"
                imageUrl="/src/images/collage-different-photos-concept-different-occupation.jpg" // Замените на URL вашего изображения
                onButtonClick={() => handleButtonClick(400)}
                />,
              "На нашем сайте вы можете пройти комплексное онлайн тестирование, направленное на определение ваших профессиональных предпочтений. Тест будет интересен школьникам и студентам, он поможет в дальнейшем выборе профессии.",
              "Наш тест основывается на проверенных методиках, но вместе с этим исследует предпочтения к современным профессиям и направлениям - менеджмент, IT, фриланс и т.д.",
              <ContentList key="list">
              <ListItem>
                <ListItemText primary="• Дифференциально-диагностический опросник" />
              </ListItem>
              <ListItem>
                <ListItemText primary="• Методика определения профессиональных предпочтений" />
              </ListItem>
              <ListItem>
                <ListItemText primary="• Тест на выявление склонностей к IT-профессиям" />
              </ListItem>
            </ContentList>,
            <Box my={4} display="flex" justifyContent="center">
                <Button variant="contained" color="primary" onClick={() => handleButtonClick(610)}>
                читать далее
                </Button>
            </Box>
            ]}
            // button={{text:"ПОДРОБНЕЕ", onClick:handleButtonClick}}
          />

        </Box>



        <Box my={8}>
          <ContentSection
            title=""
            content={[
              "Наличие в комплексном тестировании трех тестов на профориентацию позволяет, во-первых контролировать их точность, если все тесты показывают сходные результаты, их достоверность достаточно высока. Если результаты разные необходимо проконсультироваться с психологом или же попробовать пройти тестирование через какой-то промежуток времени. Во-вторых, каждый тест в комплексе оценивать профориентационные склонности со своей стороны, и это дает возможность максимально широко оценить предпочтения тестируемого."
            ]}
          />
        </Box>

        <Box my={8}>
          <ContentSection
            title=""
            content={[
              `Обратите внимание на то, что на нашем сайте вы можете пройти тест на профориентацию бесплатно. Мы не требуем оплаты и регистрации. Сразу после прохождения теста на профориентацию вам будут предоставлены результаты профориентационного тестирования, без sms, оплаты и регистрации.
              Рекомендуем проходить тест на профориентацию, один раз в два-три года. Так как за это время профессиональные склонности могут поменяться.`
            ]}
          />
        </Box>


        <Box my={8}>
          <ContentSection
            title=""
            content={[
              `Если Вы учитесь в школе, и только выбираете будущую профессию. Не ограничивайтесь только прохождением теста на профориентацию. Участвуйте и в других профориентационных мероприятиях, например, в тех которые проводятся в вашей школе. Познакомитесь с разными профессиями, посетите предприятия. Попробуйте позаниматься какой-то профессией, например, на летних каникулах. Тогда вы сможете более точно понять, к какой профессиональной сфере вы расположены.`
            ]}
          />
        </Box>

        <Box my={8}>
            <DownloadPriceForm />
        </Box>


        {/* Остальные секции аналогично */}
      </Container>
    </ThemeProvider>
  );
};
export default HomePage;
