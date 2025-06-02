
import { Box, Typography, Card, CardContent } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight"; // Importa el ícono de flecha
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

const gettingStartedDetails = [

    {
    title: "Que es la sección Impuestos",
    description:"Aprende a gestionar los impuestos relacionados con ventas, compras y empleados, y presenta los modelos ante Hacienda con agilidad a través de Balaxys.",
      redirectPath: "/impuestos/seccion-impuestos", 
  },

  {
    title: "Glosario de Impuestos",
    description:
      "Conoce las definiciones clave que te ayudarán a completar tus modelos y presentar tus impuestos de forma eficiente en Balaxys.",
      redirectPath: "/impuestos/glosario-impuestos" , 
  },

  {
    title: "Crear de impuestos y sus porcentajes",
    description:
      "Descubre como puedes crear diferentes tipos de impuestos disponibles en Balaxys y cómo puedes aplicarlos correctamente a tus transacciones.",
      redirectPath: "/impuestos/tipos-de-impuestos", 
  },

];

const Impuestos = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Detalles de la sección Impuestos
      </Typography>
      {gettingStartedDetails.map((item, index) => (
        <Card
          key={index}
          sx={{
            marginBottom: "16px",
            boxShadow: 3,
            display: "flex",
            alignItems: "center", // Centra verticalmente el contenido
            justifyContent: "space-between", // Flecha a la derecha
            padding: "16px", // Espaciado interno uniforme
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

export default Impuestos;
