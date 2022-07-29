import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#5257B3",
    },
    secondary: {
      main: "#FFC3A8",
    },
    error: {
      main: red.A400,
    }
  }
});