

import { Box, Typography, Card, CardContent } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight"; // Importa el ícono de flecha
import { useNavigate } from "react-router-dom";

const gettingStartedDetails = [
  {
    title: "¿Qué es la sección Bancos?",
    description:
      "Gestiona cuentas y pasarelas de pago, concilia y registra cobros y pagos dentro de Balaxys para un control total de tus finanzas.",
      redirectPath: "/bancos/seccion-bancos", 
  },
  {
    title: "Glosario de Tesorería",
    description:
      "Una explicación a tiempo puede mejorar un proceso. Descubre los conceptos clave de Tesorería y aprovecha esta sección de punta a punta en Balaxys.",
      redirectPath: "/bancos/glosario-tesoreria", 

  },
  {
    title: "Añadir un banco, tarjeta, pasarela de pago o caja",
    description:
      "Gestiona tus cuentas bancarias, tarjetas de crédito, pasarelas de pago y efectivo en Balaxys para tener toda tu tesorería organizada.",
      redirectPath: "/bancos/anadir-banco", 
  },
  {
    title: "Crear una conciliación",
    description:
      "Concilia tus movimientos bancarios mediante la conciliación de tus cuentas dentro de Balaxys.",
      redirectPath: "/bancos/crear-conciliacion", 
  },
  {
    title: "Editar, eliminar o relacionar un pago o cobro con una factura",
    description:
      "Gestiona los pagos y cobros relacionándolos con las facturas correspondientes, para tener un registro claro y preciso de tus transacciones.",
      redirectPath: "/bancos/pago-cobro-factura", 
  },
];

const Bancos = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Detalles de sección de Bancos
      </Typography>
      {gettingStartedDetails.map((item, index) => (
        <Card
          key={index}
          sx={{
            marginBottom: "16px",
            boxShadow: 3,
            display: "flex",
            alignItems: "center", // Centra el contenido verticalmente
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

export default Bancos;
