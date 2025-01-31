import React from 'react';
import { Box, Typography } from '@mui/material';

interface ContentSectionProps {
  title: string;
  content: Array<string | React.ReactNode>; // Массив строк или React-компонентов
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, content }) => {
  return (
    <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      {content.map((item, index) => (
        <React.Fragment key={index}>
          {typeof item === 'string' ? (
            <Typography paragraph>{item}</Typography>
          ) : (
            item // Если это компонент, просто рендерим его
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default ContentSection;