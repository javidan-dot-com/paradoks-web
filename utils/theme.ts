
import { green, purple, grey } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: {
                    main: grey[900],
                },
                divider: purple[200],
                text: {
                    primary: purple[900],
                    secondary: purple[800],
                },
            }
            : {
                // palette values for dark mode
                primary: {
                    main: grey[100],
                },
                divider: green[200],
                text: {
                    primary: green[900],
                    secondary: green[800],
                },
            }),
    },
});