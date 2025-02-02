import { CssBaseline, Container, Box, Button, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme";
import ContentSection from "../../components/ContentSection/ContentSection";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const ResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.part1Answers || !location.state?.part2Answers || !location.state?.part3Answers) {
      navigate('/test_init');
    }
  }, [location.state, navigate]);

  // Access the state passed from the previous pages
  const { part1Answers, part2Answers, part3Answers } = location.state || {};

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box my={8}>
          <ContentSection
            title=""
            content={[
              <Typography variant="h4" gutterBottom>
                Ваши результаты:
              </Typography>,
              <Typography variant="body1" paragraph>
                Часть 1: {JSON.stringify(part1Answers)}
              </Typography>,
              <Typography variant="body1" paragraph>
                Часть 2: {JSON.stringify(part2Answers)}
              </Typography>,
              <Typography variant="body1" paragraph>
                Часть 3: {JSON.stringify(part3Answers)}
              </Typography>,
              <Box mb={4} mt={8} display="flex" justifyContent="center">
                <Button variant="contained" color="primary" onClick={() => navigate("/")}>
                  На главную
                </Button>
              </Box>,
            ]}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ResultsPage;