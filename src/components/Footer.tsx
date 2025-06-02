
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0A2472",
        color: "white",
        padding: "10px 20px",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Balaxys ERP. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
