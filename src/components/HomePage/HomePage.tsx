// import React from 'react';
// import { Container, Typography, Box, Link } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { theme } from '../../theme';
import ContentSection from '../ContentSection/ContentSection';
const HomePage: React.FC = () => {

    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <Container maxWidth="md">
            <Box my={8}>
            {/* <HeroSection /> */}
            </Box>

            <Box my={8}>
            <ContentSection
                title="Тест на профориентацию"
                content={[
                "На нашем сайте вы можете пройти комплексное онлайн тестирование, направленное на определение ваших профессиональных предпочтений. Тест будет интересен школьникам и студентам, он поможет в дальнейшем выборе профессии.",
                "Наш тест основывается на проверенных методиках, но вместе с этим исследует предпочтения к современным профессиям и направлениям - менеджмент, IT, фриланс и т.д."
                ]}
            />
            </Box>

            {/* Остальные секции аналогично */}
        </Container>
        </ThemeProvider>
    )
}
export default HomePage;


// const theme = createTheme({
//   typography: {
//     fontFamily: 'Montserrat, sans-serif',
//   },
//   palette: {
//     primary: {
//       main: '#1976d2', // Primary blue color
//     },
//     background: {
//       default: '#e3e3e3',
//     },
//   },
// });

// const HomePage: React.FC = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <Container maxWidth="lg" style={{ padding: '20px' }}>
//         <Box marginBottom={4}>
//           <Typography variant="h1" color="primary" gutterBottom>
//             Тест на профориентацию
//           </Typography>
//           <Typography variant="body1" paragraph>
//             На нашем сайте вы можете пройти комплексное онлайн тестирование направленное на определение ваших профессиональных предпочтений. Тест будет интересен школьникам и студентам, он поможет в дальнейшем выборе профессии.
//           </Typography>
//           <Typography variant="body1" paragraph>
//             Наш тест основывается на проверенных методиках, но вместе с этим, в отличие от большинства тестов на профориентацию он исследует и предпочтения к современным профессиям и направлениям - менеджмент, IT, фриланс и т.д.
//           </Typography>
//           <Typography variant="body1" paragraph>
//             По мере прохождения комплекса вам предстоит ответить на 400 вопросов определяющих ваши профессиональные предпочтения. Комплекс состоит из трех известных тестов.
//           </Typography>
//           <Typography variant="h6" paragraph>
//             Комплекс включает в себя следующие тесты:
//           </Typography>
//           <ul>
//             <li>Дифференциально-диагностический опросник</li>
//             <li>Опросник профессиональной готовности</li>
//             <li>Опросник профессиональной направленности Д. Голанда</li>
//           </ul>
//           <Typography variant="body1" paragraph>
//             Подробнее об этих тестах вы можете узнать на странице посвященной{' '}
//             <Link href="metod.php">методике теста на профориентацию</Link>.
//           </Typography>
//           <Typography variant="body1" paragraph>
//             Наличие в комплексном тестировании трех тестов позволяет контролировать их точность и оценивать профориентационные склонности.
//           </Typography>
//           <Typography variant="body1" paragraph>
//             Обратите внимание на то, что на нашем сайте вы можете пройти <strong>тест на профориентацию бесплатно</strong>. Мы не требуем оплаты и регистрации.
//           </Typography>
//         </Box>

//         <Box textAlign="center">
//           <Link href="why_test_na_proforientaciu.php">Почему важно пройти тест на профориентацию?</Link>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }



// const HomePage = () => {
//     return ( );
// }
 
