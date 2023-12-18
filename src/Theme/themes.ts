import { createTheme } from'@mui/material'; 


export const theme = createTheme({
    typography: {
        fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
      },
      palette: {
        primary: {
          main: '#0074CC', 
        },
        secondary: {
          main: '#001F3F', 
          light: '#003366', 
        },
        info: {
          main: '#4D4D4D', 
        },
      },
    });