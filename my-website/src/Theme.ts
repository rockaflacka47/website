import { createTheme } from "@mui/material/styles";
import { Theme } from "@mui/material";
import { grey } from '@mui/material/colors';
export const appTheme: Theme = createTheme({
  palette: {
    primary: {
      main: grey[700]
    },
  }
});
