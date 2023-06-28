import React from 'react';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
// import { useTheme, useThemeUpdate } from './ThemeContext';

function ThemeToggle() {
    // const theme = useTheme();
    const [theme, SetTheme] = React.useState('light')
    // const toggleTheme = useThemeUpdate();
  
    const handleThemeToggle = () => {
      SetTheme(theme === 'light' ? "dark" : 'light');
    };
  
    return (
      <IconButton color="inherit" onClick={handleThemeToggle}>
        {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    );
  }
  
  export default ThemeToggle;
  