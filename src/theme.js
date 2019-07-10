import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.

const palette = {
  primary: {
    main: '#556cd6',
  },
  secondary: {
    main: '#19857b',
  },
  error: {
    main: red.A400,
  },
  background: {
    default: '#fff',
  },
};

const head_title = {
  fontFamily: [
    'Montserrat', 
    "sans-serif"
  ].join(',')
}
const typography = {
  h1: {
    ...head_title
  }
}

const theme = createMuiTheme({
  palette,
  typography
});

export default theme;