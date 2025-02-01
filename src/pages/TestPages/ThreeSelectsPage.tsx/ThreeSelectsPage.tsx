import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Pagination,
  PaginationItem,
} from '@mui/material';

interface Question {
  id: number;
  text: string;
  options1: string[];
  options2: string[];
  options3: string[];
}

interface SelectedOptions {
  select1: string;
  select2: string;
  select3: string;
}

const ThreeSelectsPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // State for page number
  const [page, setPage] = useState<number>(1);

  // State for questions
  const [questions, setQuestions] = useState<Question[]>([]);

  // State for selected options (key: question ID, value: selected options)
  const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: SelectedOptions }>({});

  // Simulate fetching questions on component mount
  useEffect(() => {
    // Replace this with an actual API call or data fetching logic
    const fetchedQuestions: Question[] = [
        {
          id: 1,
          text: 'What is your primary career interest?',
          options1: ['Technology', 'Healthcare', 'Finance', 'Education'],
          options2: ['Entry Level', 'Mid Level', 'Senior Level', 'Executive'],
          options3: ['Full-time', 'Part-time', 'Freelance'],
        },
        {
          id: 2,
          text: 'What skills do you want to develop?',
          options1: ['Coding', 'Design', 'Management', 'Communication'],
          options2: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
          options3: ['Online', 'In-person', 'Hybrid'],
        },
        {
          id: 3,
          text: 'What skills do you want to develop?',
          options1: ['Coding', 'Design', 'Management', 'Communication'],
          options2: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
          options3: ['Online', 'In-person', 'Hybrid'],
        },
        {
          id: 4,
          text: 'What skills do you want to develop?',
          options1: ['Coding', 'Design', 'Management', 'Communication'],
          options2: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
          options3: ['Online', 'In-person', 'Hybrid'],
        },
        {
          id: 5,
          text: 'What skills do you want to develop?',
          options1: ['Coding', 'Design', 'Management', 'Communication'],
          options2: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
          options3: ['Online', 'In-person', 'Hybrid'],
        },
        {
          id: 6,
          text: 'What skills do you want to develop?',
          options1: ['Coding', 'Design', 'Management', 'Communication'],
          options2: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
          options3: ['Online', 'In-person', 'Hybrid'],
        },
        {
          id: 7,
          text: 'What skills do you want to develop?',
          options1: ['Coding', 'Design', 'Management', 'Communication'],
          options2: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
          options3: ['Online', 'In-person', 'Hybrid'],
        },
        {
          id: 8,
          text: 'What skills do you want to develop?',
          options1: ['Coding', 'Design', 'Management', 'Communication'],
          options2: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
          options3: ['Online', 'In-person', 'Hybrid'],
        },
        // Add more questions as needed
      ];
    setQuestions(fetchedQuestions);
  }, []);

  // Get the current question based on the page number
  const currentQuestion = questions[page - 1];

  // Handle select changes
  const handleSelect1Change = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [currentQuestion.id]: {
        ...prevOptions[currentQuestion.id],
        select1: value,
      },
    }));
  };

  const handleSelect2Change = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [currentQuestion.id]: {
        ...prevOptions[currentQuestion.id],
        select2: value,
      },
    }));
  };

  const handleSelect3Change = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [currentQuestion.id]: {
        ...prevOptions[currentQuestion.id],
        select3: value,
      },
    }));
  };

  // Handle page change
  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // Handle submit
  const handleSubmit = () => {
    console.log('Selected Options:', selectedOptions);
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
              flexDirection: isMobile ? 'column' : 'row',
              gap: 2,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 4,
            }}
          >
            <FormControl fullWidth={isMobile} sx={{ minWidth: 200 }}>
              <InputLabel id="select1-label">Option 1</InputLabel>
              <Select
                labelId="select1-label"
                id="select1"
                value={selectedOptions[currentQuestion.id]?.select1 || ''}
                label="Option 1"
                onChange={handleSelect1Change}
              >
                {currentQuestion.options1.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth={isMobile} sx={{ minWidth: 200 }}>
              <InputLabel id="select2-label">Option 2</InputLabel>
              <Select
                labelId="select2-label"
                id="select2"
                value={selectedOptions[currentQuestion.id]?.select2 || ''}
                label="Option 2"
                onChange={handleSelect2Change}
              >
                {currentQuestion.options2.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth={isMobile} sx={{ minWidth: 200 }}>
              <InputLabel id="select3-label">Option 3</InputLabel>
              <Select
                labelId="select3-label"
                id="select3"
                value={selectedOptions[currentQuestion.id]?.select3 || ''}
                label="Option 3"
                onChange={handleSelect3Change}
              >
                {currentQuestion.options3.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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

export default ThreeSelectsPage;