
import { Box, Typography, Card, CardContent } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight"; // Importa el ícono de flecha
import { useNavigate } from "react-router-dom";

const gettingStartedDetails = [
  {
    title: "¿Qué puedes hacer en la sección de Contabilidad?",
    description:
      "Registra los movimientos de tu negocio de manera ordenada y eficiente, automatiza tus procesos contables y gestiona todos tus impuestos de manera sencilla en Balaxys.",
      redirectPath: "/contabilidad/seccion-contabilidad" ,
  },
  {
    title: "Glosario de Contabilidad",
    description:
      "Una definición clara facilita la comprensión y toma de decisiones. Descubre los conceptos esenciales para llevar un registro contable exitoso en Balaxys.",
      redirectPath: "/contabilidad/glosario-contabilidad" ,
  },
  {
    title: "Automatizar los asientos contables",
    description:
      "Los asientos contables predeterminados te permiten registrar las transacciones económicas de tu negocio sin tener que repetir procesos manuales, todo de forma automatizada en Balaxys.",
      redirectPath: "/contabilidad/automizar-asiento" ,
  },
  {
    title: "Configurar el período contable y evitar imprevistos",
    description:
      "Configura el período contable en Balaxys, define cuándo finalizar el ejercicio y activa el cierre contable automático para evitar sorpresas en los modelos tributarios.",
      redirectPath: "/contabilidad/periodo-contable" ,
  },
  {
    title: "Crear, editar, duplicar o eliminar un asiento contable",
    description:
      "Aprende a modificar los asientos contables en el Libro diario de Balaxys y comprende el impacto de cada cambio en tu contabilidad.",
      redirectPath: "/contabilidad/crear-asiento",
  },
  {
    title: "Crear una cuenta contable",
    description:
      "Define y personaliza tus cuentas contables, creando solo las cuentas y subcuentas necesarias para mantener un registro claro de tus movimientos financieros.",
      redirectPath: "/contabilidad/crear-cuenta-contable",
  },
  {
    title: "Libro Diario",
    description:
      "Registra todas las transacciones de tu negocio en el Libro Diario de Balaxys, manteniendo un historial detallado y organizado de los movimientos contables.",
      redirectPath: "/contabilidad/libro-diario",
  },
  {
    title: "Submayor Contable",
    description:
      "Accede al Submayor Contable en Balaxys para realizar un seguimiento detallado de cada cuenta, con información desglosada de los movimientos específicos.",
      redirectPath: "/contabilidad/submayor-contable",
  },
  {
    title: "Pérdidas y Ganancias",
    description:
      "Consulta el estado de Pérdidas y Ganancias de tu negocio en Balaxys, donde podrás ver de manera clara y precisa los ingresos y gastos de tu empresa.",
      redirectPath:  "/contabilidad/perdidas-ganancias" ,
  },
  {
    title: "Estado de Situación",
    description:
      "Consulta el Estado de Situación de tu negocio en Balaxys, una herramienta esencial para conocer la situación financiera de tu empresa, incluyendo activos, pasivos y patrimonio neto.",
      redirectPath:"/contabilidad/estado-situacion",
  },
];

const Contabilidad = () => {
    const navigate = useNavigate();
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Detalles de sección Contabilidad
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

export default Contabilidad;
