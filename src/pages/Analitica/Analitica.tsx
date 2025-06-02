
import { Box, Typography, Card, CardContent } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight"; // Importa el ícono de flecha
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";


const gettingStartedDetails = [
  {
    title: "Ventas",
    description:
      "Accede a los reportes avanzados de ventas en Balaxys, donde podrás analizar el desempeño de tu negocio, identificar tendencias y optimizar tus estrategias comerciales.",
  },
  {
    title: "Compras",
    description:
      "Consulta los reportes detallados de compras en Balaxys para evaluar el comportamiento de tus proveedores, gestionar tus gastos y mejorar la toma de decisiones de compra.",
  },
  {
    title: "Inventario",
    description:
      "Monitorea el estado de tu inventario en tiempo real a través de los reportes avanzados de Balaxys. Mantén un control preciso sobre existencias, movimientos y tendencias de productos.",
  },
  {
    title: "Finanzas",
    description:
      "Obtén una visión clara de la situación financiera de tu negocio con los reportes avanzados de finanzas en Balaxys. Analiza ingresos, gastos y la rentabilidad de tu empresa.",
  },
  {
    title: "Nóminas",
    description:
      "Gestiona y revisa los reportes de nóminas en Balaxys. Asegúrate de que los pagos y retenciones estén correctamente calculados, optimizando la administración del personal.",
  },
  {
    title: "Recursos Humanos",
    description:
      "Accede a los reportes avanzados de Recursos Humanos en Balaxys, facilitando el seguimiento del desempeño, contrataciones, bajas y otros aspectos clave de tu equipo.",
  },
];

const Analitica = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Detalles de la sección Analítica con Power BI
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

export default Analitica;
