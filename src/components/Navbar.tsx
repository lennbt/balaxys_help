import React from "react";
import { AppBar, Toolbar, Typography, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface NavbarProps {
  setSearch: (value: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setSearch }) => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage: "linear-gradient(to right, #0A2472,rgb(22, 112, 202))", // Agrega el degradado aquí
        height: "200px",
        display: "flex",
        justifyContent: "center", // Centra el contenido
        alignItems: "center", // Centra el contenido verticalmente
        padding: "0 20px", // Ajusta el padding si es necesario
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column", // Hace que los elementos se apilen verticalmente
          alignItems: "center", // Centra los elementos horizontalmente
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, textAlign: "center" }}>
          Guía de usuario para aprender todo de Balaxys
        </Typography>

        {/* Barra de búsqueda centrada debajo del texto */}
        <TextField
          variant="outlined"
          size="small"
          placeholder="Buscar artículos..."
          onChange={(e) => setSearch(e.target.value)} // Actualiza el estado de búsqueda
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: "white",
            borderRadius: "4px",
            width: "50%", // Hace que el campo de búsqueda ocupe el 50% del ancho disponible
            marginTop: "20px", // Espacio entre el texto y la barra de búsqueda
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
