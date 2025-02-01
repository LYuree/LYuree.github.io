import React from 'react';
import { Box, Typography } from '@mui/material';

interface ContentSectionProps {
  title: string;
  content: Array<string | React.ReactNode>; // Массив строк или React-компонентов
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, content }) => {
  return (
    <Box
      sx={{
        px: { xs: 4, sm: 4, md: 6, lg: 8, xl: 10 }, // Responsive horizontal padding
        py: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }, // Responsive vertical padding
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 1,
        textAlign: 'justify',
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'initial' }}>
        {title}
      </Typography>
      {content.map((item, index) => (
        <React.Fragment key={index}>
          {typeof item === 'string' ? (
            <Typography
              className="content-section-typography"
              sx={{ mb: 2 }} // Add bottom margin to simulate paragraph spacing
            >
              {item}
            </Typography>
          ) : (
            item // Если это компонент, просто рендерим его
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default ContentSection;