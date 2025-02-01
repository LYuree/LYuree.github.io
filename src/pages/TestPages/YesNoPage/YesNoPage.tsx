import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  useTheme,
  useMediaQuery,
  Pagination,
  PaginationItem,
  CssBaseline,
  ThemeProvider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import { Link } from 'react-router-dom';

interface Question {
  id: number;
  text: string;
  option1: string;
  option2: string;
}

const YesNoPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // State for page number
  const [page, setPage] = useState<number>(1);

  // State for questions
  const [questions, setQuestions] = useState<Question[]>([]);

  // State for selected answers (key: question ID, value: selected answer)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});

  // State for controlling the popup
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(true);

  // Simulate fetching questions on component mount
  useEffect(() => {
    // Replace this with an actual API call or data fetching logic
    const fetchedQuestions: Question[] = [
      {
        id: 1,
        text: 'Do you like working in a team?',
        option1: 'Yes',
        option2: 'No',
      },
      {
        id: 2,
        text: 'Do you enjoy problem-solving?',
        option1: 'Yes',
        option2: 'No',
      },
      {
        id: 3,
        text: 'Are you interested in technical roles?',
        option1: 'Yes',
        option2: 'No',
      },
      // Add more questions as needed
    ];
    setQuestions(fetchedQuestions);
  }, []);

  // Get the current question based on the page number
  const currentQuestion = questions[page - 1];

  // Handle radio button change
  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const answer = event.target.value;
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion.id]: answer, // Save the answer for the current question
    }));
  };

  // Handle page change
  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // Handle submit
  const handleSubmit = () => {
    console.log('Selected Answers:', selectedAnswers);
    // Add your submit logic here
  };

  // Handle popup close
  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ pt: '4rem', pb: '2rem' }}>
        {/* Popup Dialog */}
        <Dialog
          open={isPopupOpen}
          onClose={handlePopupClose}
          aria-labelledby="popup-title"
          aria-describedby="popup-description"
        >
          <DialogTitle id="popup-title" sx={{ fontWeight: 'bold' }}>
            Добро пожаловать!
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="popup-description">
              Этот тест поможет вам определить ваши профессиональные предпочтения. Пожалуйста, ответьте на все вопросы честно и внимательно. Удачи!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handlePopupClose} color="primary" variant="contained">
              Закрыть
            </Button>
          </DialogActions>
        </Dialog>

        <Typography variant="h4" align="center" gutterBottom>
          Career Guidance
        </Typography>
        {currentQuestion && (
          <>
            <Typography variant="h6" align="center" gutterBottom>
              {currentQuestion.text}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 4,
              }}
            >
              <RadioGroup
                value={selectedAnswers[currentQuestion.id] || ''} // Use the saved answer for the current question
                onChange={handleAnswerChange}
                sx={{ width: '100%', maxWidth: 400 }}
              >
                <FormControlLabel
                  value="option1"
                  control={<Radio />}
                  label={currentQuestion.option1}
                  sx={{ marginBottom: 2 }}
                />
                <FormControlLabel
                  value="option2"
                  control={<Radio />}
                  label={currentQuestion.option2}
                />
              </RadioGroup>
            </Box>
          </>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
          <Pagination
            count={questions.length}
            page={page}
            onChange={handlePageChange}
            renderItem={(item) => {
              // Check if item is null or undefined
              if (!item) {
                return null; // Return nothing if item is null
              }

              return (
                <PaginationItem
                  {...item}
                  sx={{
                    ...(item.page && item.type === 'page' && {
                      display:
                        item.page === 1 ||
                        item.page === page ||
                        item.page === questions.length ||
                        Math.abs(item.page - page) <= 1
                          ? 'inline-flex'
                          : 'none',
                    }),
                  }}
                />
              );
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
        <Link to={page === 1 ? "/test_part2" : "#"}>
            <Button
              disabled={page !== 1}
              variant="contained"
              color="primary"
              // onClick={handleSubmit}
              sx={{
                width: isMobile ? '100%' : 'auto',
                // visibility: page === 1 ? 'visible' : 'hidden',
              }}
            >
              часть 2
            </Button>
          </Link>
          <Button
            disabled={page !== questions.length}
            variant="contained"
            color="primary"
            onClick={page === questions.length ? handleSubmit : undefined}
            sx={{
              width: isMobile ? '100%' : 'auto',
              // visibility: page === questions.length ? 'visible' : 'hidden',
            }}
          >
            завершить
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default YesNoPage;