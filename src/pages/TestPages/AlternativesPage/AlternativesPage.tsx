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
} from '@mui/material';

interface Question {
  id: number;
  text: string;
  option1: string;
  option2: string;
}

const AlternativesPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // State for page number
  const [page, setPage] = useState<number>(1);

  // State for questions
  const [questions, setQuestions] = useState<Question[]>([]);

  // State for selected answers (key: question ID, value: selected answer)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});

  // Simulate fetching questions on component mount
  useEffect(() => {
    // Replace this with an actual API call or data fetching logic
    const fetchedQuestions: Question[] = [
      {
        id: 1,
        text: 'Do you prefer working independently or in a team?',
        option1: 'Independently',
        option2: 'In a team',
      },
      {
        id: 2,
        text: 'Do you enjoy problem-solving or creative tasks more?',
        option1: 'Problem-solving',
        option2: 'Creative tasks',
      },
      {
        id: 3,
        text: 'Are you more interested in technical or people-oriented roles?',
        option1: 'Technical',
        option2: 'People-oriented',
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

  return (
    <Container maxWidth="md">
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
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ width: isMobile ? '100%' : 'auto' }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default AlternativesPage;