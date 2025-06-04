import { useNavigate } from "react-router-dom";
import { Box, Typography, Card, CardContent } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight"; // Importa el ícono de flecha

const gettingStartedDetails = [
  {
    title: "¿Qué es la sección de Catálogos?",
    description:
      "Descubre cómo puedes ofrecer mejor nivel de detalle y análisis llenando correctamente los catálogos.",
  
        redirectPath: "/catalogos/seccion-catalogos",
  },
  {
    title: "Glosario de catálogos",
    description: "Conoce todos los conceptos clave relacionados con tus catálogos.",
     redirectPath: "/catalogos/glosario-catalogos"
  },
  {
    title: "Almacenes",
    description:
      "Gestiona tus almacenes de manera eficiente, creando o editando almacenes dentro de Balaxys para una correcta organización del inventario.",
       redirectPath: "/catalogos/almacenes" 
  },
  {
    title: "Categorías de productos",
    description:
      "Crea categorías personalizadas como 'Electrónica' o 'Muebles' para organizar tus productos y facilitar su clasificación en Balaxys.",
       redirectPath: "/catalogos/categoria-productos" 
  },
  {
    title: "Atributos de productos",
    description:
      "Define y gestiona atributos específicos para tus productos, como color, tamaño o material, para mejorar la organización y el filtrado en Balaxys.",
      redirectPath:"/catalogos/atributo-productos"
  },
  {
    title: "Centros de costos",
    description:
      "Organiza y asigna tus costos a diferentes centros dentro de tu negocio, para un mejor control y análisis de tus finanzas en Balaxys.",
       redirectPath:  "/catalogos/centros-costos"
     
  },
  {
    title: "Unidades de medida",
    description:
      "Configura las unidades de medida adecuadas para tus productos y servicios, ya sea en unidades, kilogramos, litros o cualquier otra unidad de medida en Balaxys.",
    redirectPath:  "/catalogos/unidades-medida"
  },
   {
    title: "Gestionar categorías de producto",
    description: "Crea categorías como 'Ropa' o 'Equipos' para facilitar el filtrado y clasificación de tus productos.",
    redirectPath: "/catalogos/categoria-productos",
  },

    {
    title: "Gestionar productos con variantes",
    description: "Crea, edita o elimina productos con variantes para ofrecer más opciones a tus clientes.",
   redirectPath:"/catalogos/gestionar-atributos"
  }
];

const Catalogos = () => {
   const navigate = useNavigate();
  return (
    
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Detalles de la sección de Catálogos
      </Typography>
      {gettingStartedDetails.map((item, index) => (
        <Card
          key={index}
          sx={{
            marginBottom: "16px",
            boxShadow: 3,
            display: "flex",
            alignItems: "center", // Centra el contenido verticalmente
            justifyContent: "space-between", // Coloca la flecha a la derecha
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

export default Catalogos;
