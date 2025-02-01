import React from 'react';
import { List } from '@mui/material';

interface ContentListProps {
  children: React.ReactNode; // Дочерние узлы для списка
}

const ContentList: React.FC<ContentListProps> = ({ children }) => {
  return (
    <List>
      {children}
    </List>
  );
};

export default ContentList;