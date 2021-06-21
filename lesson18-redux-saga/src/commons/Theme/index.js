import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  color: {
    secondary: '#e0e0e0',
    primary: '#1565c0',
    error: '#f44336'
  },
  typography: {
    fontFamily: 'Roboto'
  },
  title: {
    borderRadius: "10px",
    padding: "1rem",
    border: "3px solid silver"
  }
});

export default theme;