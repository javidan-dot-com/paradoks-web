import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            '"Futura PT"',
            'BlinkMacSystemFont',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});

export default theme;
