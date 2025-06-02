

import { Box, Typography, Card, CardContent } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
import { PrimerosPasos } from "./PrimerosPasos";

const GettingStartedDetail = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Detalles de Primeros Pasos
      </Typography>
      {PrimerosPasos.map((item, index) => (
        <Card
          key={index}
          sx={{
            marginBottom: "16px",
            boxShadow: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px",
            cursor: "pointer",
            transition: "all 0.3s ease", // Transición suave
            border: "1px solid transparent", // Borde inicial
          '&:hover': {
              borderColor: "#1976d2", // Borde resaltado al pasar el cursor
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Aumenta la sombra en hover
            },
            
          }}
          onClick={() => item.redirectPath && navigate(item.redirectPath)}
        >
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {item.title}
            </Typography>
            <Typography variant="body1">{item.description}</Typography>
          </CardContent>
          <ChevronRightIcon sx={{ color: "#1E88E5", fontSize: "2rem" }} />
        </Card>
      ))}
    </Box>
  );
};

export default GettingStartedDetail;