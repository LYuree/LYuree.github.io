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
  Snackbar,
  Alert,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

interface Question {
  id: number;
  text: string;
  option1: string;
  option2: string;
}

const YesNoPage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // State for page number
  const [page, setPage] = useState<number>(1);

  // State for questions
  const [questions, setQuestions] = useState<Question[]>([]);

  // State for selected answers (key: question ID, value: selected answer)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});

  // State for controlling the popup
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(true);

  // State for showing error messages
  const [error, setError] = useState<string | null>(null);

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

  // Validate if the current question is answered
  const isCurrentQuestionAnswered = () => {
    if (!currentQuestion) return false; // Check if currentQuestion is defined
    return !!selectedAnswers[currentQuestion.id]; // Check if the current question has an answer
  };

  // Handle page change
  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    if (!isCurrentQuestionAnswered()) {
      setError('Пожалуйста, ответьте на текущий вопрос перед переходом на другую страницу.');
      return;
    }
    setPage(value);
  };

  // Handle next page
  const handleNextPage = () => {
    if (!isCurrentQuestionAnswered()) {
      setError('Пожалуйста, ответьте на текущий вопрос перед переходом на следующую страницу.');
      return;
    }
    if (page < questions.length) {
      setPage(page + 1);
    } else {
      handleSubmit();
    }
  };

  // Handle previous page
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  // Handle submit
  const handleSubmit = () => {
    if (!isCurrentQuestionAnswered()) {
      setError('Пожалуйста, ответьте на текущий вопрос перед завершением.');
      return;
    }
    console.log('Selected Answers:', selectedAnswers);
    navigate("/results", { state: { 
      part1Answers: location.state?.part1Answers,
      part2Answers: location.state?.part2Answers,
      part3Answers: selectedAnswers,
    } });
  };

  // Handle popup close
  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  // Close error message
  const handleCloseError = () => {
    setError(null);
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

        {/* Error Snackbar */}
        <Snackbar
          open={!!error}
          autoHideDuration={6000}
          onClose={handleCloseError}
        >
          <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
            {error}
          </Alert>
        </Snackbar>

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
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button
            disabled={page === 1}
            variant="contained"
            color="secondary"
            onClick={handlePreviousPage}
            sx={{
              width: isMobile ? '100%' : 'auto',
            }}
          >
            Назад
          </Button>
          <Button
            disabled={!isCurrentQuestionAnswered()}
            variant="contained"
            color="primary"
            onClick={handleNextPage}
            sx={{
              width: isMobile ? '100%' : 'auto',
            }}
          >
            {page === questions.length ? 'Завершить' : 'Далее'}
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default YesNoPage;