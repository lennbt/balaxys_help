import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E88E5", // Color principal
    },
    secondary: {
      main: "#43A047", // Color secundario
    },
    background: {
      default: "#f5f5f5", // Fondo general
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    fontWeightBold: 700,
    body1: {
      lineHeight: 1.8, // Ajuste del interlineado para los párrafos
    },
    h1: {
      lineHeight: 1.6, // Ajuste de interlineado para los encabezados h1
    },
    h2: {
      lineHeight: 1.6, // Ajuste de interlineado para los encabezados h2
    },
    h3: {
      lineHeight: 1.6, // Ajuste de interlineado para los encabezados h3
    },
    h4: {
      lineHeight: 1.6, // Ajuste de interlineado para los encabezados h4
    },
    h5: {
      lineHeight: 1.6, // Ajuste de interlineado para los encabezados h5
    },
    h6: {
      lineHeight: 1.6, // Ajuste de interlineado para los encabezados h6
    },
  },
});

export default theme;
