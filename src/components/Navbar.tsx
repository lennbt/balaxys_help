// src/components/Navbar.tsx

import React, { useRef } from "react";
import { AppBar, Toolbar, Typography, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useLocation } from "react-router-dom";

interface NavbarProps {
  setSearch: (value: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const firstTypeRef = useRef(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setSearch(valor);

    // Si es la primera vez que escribe y no está ya en "/", vamos a "/"
    if (firstTypeRef.current && valor.trim() !== "") {
      firstTypeRef.current = false;
      if (location.pathname !== "/") {
        navigate("/");
      }
    }

    // Si borra todo y deja vacío, volvemos a permitir redirigir la próxima vez
    if (valor.trim() === "") {
      firstTypeRef.current = true;
    }
  };

  return (
    <AppBar
      position="static"
      sx={{
        width: "100%",
        backgroundImage: "linear-gradient(to right, #0A2472, rgb(22, 112, 202))",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 0,
        m: 0,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          mx: 0,
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, textAlign: "center" }}>
          Guía de usuario para aprender todo de Balaxys
        </Typography>

        <TextField
          variant="outlined"
          size="small"
          placeholder="Buscar artículos..."
          onChange={handleInputChange}
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
            width: "50%",
            mt: 2,
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
