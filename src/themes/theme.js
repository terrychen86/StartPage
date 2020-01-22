import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4791db',
      main: '#1885f0',
      dark: '#166fc7',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: [
      'Avenir',
      'Avenir Next',
      '-apple-system',
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
  overrides: {
    MuiInput: {
      underline: {
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: '2px solid #166fc7',
        },
      },
    },
  },
});

export default theme;
