// src/pages/Home.tsx

import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

import SearchResults from "../components/SearchResults";
import { useSearch } from "../hooks/useSearch";

interface HomeProps {
  query: string;
}

const topics = [
  { id: "primeros-pasos", title: "Primeros pasos", description: "Introducción y guías de inicio", articles: 20 },
  { id: "perfil-empresa", title: "Tu Perfil de Empresa", description: "Cuenta, perfil y usuarios", articles: 14 },
  { id: "clientes", title: "Clientes", description: "Facturas, presupuestos, Notas de Créditos", articles: 50 },
  { id: "proveedores", title: "Proveedores", description: "Facturas de compras, Notas de débito", articles: 19 },
  { id: "inventario", title: "Inventario", description: "Productos, Vales de salida, Ajustes", articles: 30 },
  { id: "catalogos", title: "Catálogos", description: "Nomencladores, catálogos, formularios", articles: 15 },
  { id: "bancos", title: "Bancos", description: "Conciliación Bancaria, pagos y cobros", articles: 25 },
  { id: "contabilidad", title: "Contabilidad", description: "Asientos contables, cuentas, Submayor", articles: 40 },
  { id: "impuestos", title: "Impuestos", description: "Modelos tributarios, IVA", articles: 18 },
  { id: "analitica-avanzada", title: "Analítica avanzada", description: "Reportes en PBI interactivos", articles: 10 },
  { id: "preguntas", title: "Preguntas frecuentes", description: "Respuestas y soluciones", articles: 8 },
  { id: "video-tutoriales", title: "Vídeo tutoriales", description: "Vídeos paso a paso", articles: 12 },
];

const Home: React.FC<HomeProps> = ({ query }) => {
  const navigate = useNavigate();
  // 1) Usamos el hook de búsqueda pasándole el prop `query`
  const results = useSearch({ query });

  // 2) Si no hay query, mostramos el grid original de topics
  //    Si hay query, mostramos SearchResults
  const filteredTopics = topics.filter(
    (topic) =>
      topic.title.toLowerCase().includes(query.toLowerCase()) ||
      topic.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Box>
      {query.trim() !== "" ? (
        // Mostrar resultados filtrados con SearchResults
        <SearchResults query={query} results={results} />
      ) : (
        // Mostrar grid de topics cuando query esté vacío
        <Grid container spacing={3} sx={{ mt: 2, px: 2 }}>
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic) => (
              <Grid item xs={12} sm={6} md={4} key={topic.id}>
                <Card
                  sx={{
                    borderRadius: "8px",
                    boxShadow: 3,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px",
                    transition: "all 0.3s ease",
                    border: "1px solid transparent",
                    "&:hover": {
                      borderColor: "#1976d2",
                      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                  onClick={() => navigate(`/${topic.id}`)}
                >
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {topic.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {topic.description}
                    </Typography>
                  </CardContent>
                  <ChevronRightIcon sx={{ color: "#1976d2", fontSize: "2rem" }} />
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="body1" color="textSecondary">
              No se encontraron resultados.
            </Typography>
          )}
        </Grid>
      )}
    </Box>
  );
};

export default Home;
