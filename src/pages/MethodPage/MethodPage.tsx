import { CssBaseline, Container, Box, Button, ListItemText, ListItem } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme";
import ContentSection from "../../components/ContentSection/ContentSection";
import ContentList from "../../components/ContentList/ContentList";
import { Link } from "react-router-dom";
const MethodPage: React.FC = () => {
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
            title="Опросник профессиональной готовности"
            content={[
              <p data-name="intro">Методика позволяет диагностировать субъективное состояние личности, означающее желание и способность заниматься данным видом профессиональной деятельности.
              Опросник построен на самооценке человеком своих склонностей и возможностей.
              Готовность - это активное состояние личности, отражающее содержание стоящей перед ней задачи и условия предстоящего её решения, выступающие условием успешного выполнения любой деятельности.
              Согласно мнению автора о степени готовности к успешному функционированию в определённой профессиональной сфере можно судить на основании наличия, успешности реализации и эмоционального подкрепления у обучаемых профессиональноориентированных навыков и умений.
                В основу опросника положен принцип оценки:
              </p>,
              <ContentList key="list">
              <ListItem>
                <ListItemText primary="• своих возможностей в реализации определённых умений (трудовых, социальных и т.д.);" />
              </ListItem>
              <ListItem>
                <ListItemText primary="• своего реального, сформированного на основе личного опыта эмоционального отношения, возникающего при выполнении описанных в опроснике видов деятельности или занятий;" />
              </ListItem>
              <ListItem>
                <ListItemText primary="• своего предпочтения или нежелания выполнять действия (занятия) в будущей профессиональной деятельности." />
              </ListItem>
            </ContentList>,
            <h2>Измеряемые параметры</h2>,
            <p><strong>Умение</strong> - шкала оценивает реальные умения субъекта</p>,
            <p><strong>Отношение</strong> - шкала оценивает отношение субъекта к тому или иному виду деятельности.</p>,
            <p><strong>Желание</strong> - шкала оценивает желание субъекта заниматься той или иной деятельностью.</p>,
            <Box mb={4}>
                <p>Достаточная выраженность этих компонентов - показатель высокого уровня готовности человека, его активности, самостоятельности в процессе деятельности.</p>
            </Box>,
                <p><strong>Литературные источники 📕</strong></p>,
            `Зеер Э.Ф., Павлова А.М., Садовникова Н.О. Профориентология: Теория и практика: Учеб. пособие для высшей школы. - М.: Академический Проект; Екатеринбург: Деловая книга, 2004. С. 122-130.`,
            <Box mb={4} mt={8} display="flex" justifyContent="center">
                <Button variant="contained" color="primary" onClick={() => handleButtonClick("Holland")}>
                читать далее
                </Button>
            </Box>
            ]}
            // button={{text:"ПОДРОБНЕЕ", onClick:handleButtonClick}}
          />

        </Box>



        <Box my={8}>
          <div data-name="Holland">
              <ContentSection
                data-name="homepage-content"
                title="Опросник профессиональных предпочтений (модификация теста Голланда)"
                content={[
                  `Каждый человек по своим личностным качествам подходит к определенному типу профессий. Данная модификация теста Голланда, основанная на соотнесении типов профессии с индивидуальными особенностями человека, призвана помочь выбрать профессию с учетом, в первую очередь личностных особенностей.`,
                  <Box mb={4} mt={8} display="flex" justifyContent="center">
                      <Button variant="contained" color="primary" onClick={() => handleButtonClick("diff")}>
                    читать далее
                    </Button>
                    </Box>
                  
                ]}
              />
          </div>
        </Box>

        <Box my={8}>
          <div data-name="diff">
              <ContentSection
                data-name="homepage-content"
                title="Дифференциально-диагностический опросник"
                content={[
                  `Методика предназначена для отбора на различные типы профессий в соответствии с классификацией типов профессий Е. А Климова. Можно использовать при профориентации подростков и взрослых.
                  Содержание методики: испытуемый должен в каждой из 20 пар предлагаемых видов деятельности выбрать только один вид.`,
                  <p><strong>Название типов профессий по столбцам:</strong></p>,
                  <p><strong>Человек-природа</strong> — шкала оценивает реальные умения субъекта.</p>,
                  <p><strong>Человек-техника</strong> — шкала оценивает отношение субъекта к тому или иному виду деятельности.</p>,
                  <p><strong>Человек-знак</strong> — шкала оценивает желание субъекта заниматься той или иной деятельностью.</p>,
                  <p><strong>Человек — художественный образ</strong> — шкала оценивает желание субъекта заниматься той или иной деятельностью.</p>,
                  <Box mb={4} mt={8} display="flex" justifyContent="center">
                  <Button color="secondary" variant="contained">
                    <Link to="/test_init">пройти тестирование!</Link>
                    </Button>
                    </Box>
                ]}
              />
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default MethodPage;
