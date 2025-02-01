// const Footer = () => {
//     return ( <footer>
//         <div className="mt-4 border-solid border-white border-t pt-4">
//             Копирование материалов без разрешения запрещено &copy; ООО "proftester", {new Date().getFullYear()}
//         </div>
//     </footer> );
// }

import { Box, Typography, Link, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'primary.main', 
        color: 'white', 
        py: 4, 
        mt: 4,
      }}
    >
      <Container maxWidth="md">
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          <Box mb={2}>
            <Typography variant="h6">Контакты</Typography>
            <Typography variant="body2">Email: example@mail.com</Typography>
          </Box>
          
          <Box mb={2}>
            <Typography variant="h6">Ссылки</Typography>
            <Link href="/method" color="inherit">Методика</Link><br />
            <Link href="/test_init" color="inherit">Тестирование</Link>
          </Box>
        </Box>
        
        <Typography variant="body2" align="center" mt={2}>
          © {new Date().getFullYear()} Профориентационный тест
        </Typography>
      </Container>
    </Box>
  );
};
 
export default Footer;