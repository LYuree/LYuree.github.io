import React from 'react';
import { Box, TextField, Button, Typography, Link } from '@mui/material';

const DownloadPriceForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Обработка данных формы
    console.log('Форма отправлена');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', my: 4 }}>
      <Typography variant="h6" gutterBottom>
        Введите имя и номер телефона, чтобы скачать прайс
      </Typography>

      <TextField
        label="Имя"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />

      <TextField
        label="Телефон"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />

      <Typography variant="body2" sx={{ mt: 2, mb: 3 }}>
        Нажимая кнопку «Скачать прайс», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в Согласии на обработку персональных данных.
      </Typography>

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Скачать прайс
      </Button>

      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Link href="#" variant="body2" onClick={() => console.log('Сообщить о нарушении')}>
          Сообщить о нарушении
        </Link>
      </Box>
    </Box>
  );
};

export default DownloadPriceForm;