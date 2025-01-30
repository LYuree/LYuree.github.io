import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const ContentSection = ({ title, content }: { title: string; content: string[] }) => {
  return (
    <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
      <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
        {title}
      </Typography>
      
      {content.map((text, index) => (
        <Typography key={index} paragraph sx={{ lineHeight: 1.6 }}>
          {text}
        </Typography>
      ))}

      <List>
        <ListItem>
          <ListItemText primary="• Дифференциально-диагностический опросник" />
        </ListItem>
        {/* Остальные пункты списка */}
      </List>
    </Box>
  );
};

export default ContentSection