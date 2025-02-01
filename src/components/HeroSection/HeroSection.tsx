import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  onButtonClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  buttonText,
  imageUrl,
  onButtonClick,
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '60vh', // Высота секции
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover', // Изображение покрывает всю область
        backgroundPosition: 'center', // Центрирование изображения
        borderRadius: '8px'
      }}
      mb={6}
    >
      {/* Затемнение фона для улучшения читаемости текста */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Полупрозрачный черный фон
          borderRadius: '8px'
        }}
      />

      {/* Контент */}
      <Box sx={{ position: 'relative', zIndex: 1, maxWidth: '800px', px: 2 }}>
        <Typography variant="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
          {description}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;