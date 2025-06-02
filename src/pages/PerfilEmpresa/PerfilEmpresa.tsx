
import { Box, Typography, Card, CardContent } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight"; // Importa el ícono de flecha
import { useNavigate } from "react-router-dom";


const PerfilDetails = [
   {
    title: "Personaliza tu perfil",
    description: "Completa tu información personal, configura tu contraseña, activa la verificación en dos pasos y ajusta la barra de navegación a tu gusto.",
    redirectPath: "/perfil-empresa/mi-perfil",
  },
  {
    title: "Configuración de Balaxys",
    description: "Personalizar las opciones clave de tu empresa, como usuarios, roles, inventarios y más.",
    redirectPath: "/perfil-empresa/configuracion",
  },
  {
    title: "Gestionar tu plan contratado en Balaxys",
    description: "Visualiza el estado actual del plan contratado.",
    redirectPath: "/perfil-empresa/planes",
  },

  {
    title: "Administra accesos y permisos",
    description: "Controla quién puede acceder y qué pueden hacer los usuarios en tu cuenta de Balaxys.",
    redirectPath: "/perfil-empresa/roles",
  },

  {
    title: "Gestión de divisas y tipos de cambio",
    description: "Lleva tu contabilidad en la moneda que más se ajuste a tu negocio.",
    redirectPath: "/perfil-empresa/monedas",
  },
  {
    title: "Vencimientos",
    description: "Define los vencimientos que tendran los acreedores y deudores.",
    redirectPath: "/perfil-empresa/vencimientos",
  },

    {
    title: "Elementos de Gastos",
    description: "Define los principales rubros de gastos de tu empresa.",
    redirectPath: "/perfil-empresa/elementos-de-gastos",
  },


      {
    title: "Tipos de constribuyentes",
    description: "Para mejorar el proceso de información fiscal.",
    redirectPath: "/perfil-empresa/tipos-de-contribuyentes",
  },

        {
    title: "Formas de pago",
    description: "Define las formas de pago que seran utilizadas para el cobro y pagos de las cuentas.",
    redirectPath: "/perfil-empresa/formas-de-pago",
  },

          {
    title: "Usuarios",
    description: "Crea usuario en el sistema según la necesiada de cada rol.",
    redirectPath: "/perfil-empresa/usuarios" ,
  },

           {
    title: "Tipos de empresas",
    description: "Los tipos de empresa te ayudan a mejorar la información.",
    redirectPath:"/perfil-empresa/tipos-de-empresas" ,
  },
];

const PerfilEmpresa = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Detalles de la sección de Perfil de empresa
      </Typography>
      {PerfilDetails.map((item, index) => (
        <Card
          key={index}
          sx={{
            marginBottom: "16px",
            boxShadow: 3,
            display: "flex",
            alignItems: "center", // Centra el contenido verticalmente
            justifyContent: "space-between", // Coloca la flecha a la derecha
            padding: "16px", // Ajusta el espaciado interno
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

export default PerfilEmpresa;
