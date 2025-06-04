
import { Box, Typography, Card, CardContent } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

const inventoryDetails  = [
  {
    title: "¿Qué es la sección de Inventario?",
    description: "Gestiona el ciclo completo de tus productos y servicios, crea pedidos de compra y venta, y controla tu stock con Balaxys.",
    redirectPath: "/inventario/descripcion", 
  },
  {
    title: "Glosario de Inventario",
    description: "Conoce la sección de Inventario de Balaxys.",
    redirectPath: "/inventario/glosario-inventario",
  },
  {
    title: "Productos",
    description: "Descubre todo lo que puedes hacer con tus productos y sus diferentes tipos en Balaxys.",
    redirectPath: "/inventario/productos",
  },
  {
    title: "Los productos y sus tipos",
    description: "Gestiona los productos en Balaxys y organiza sus diferentes tipos según tus necesidades.",
    redirectPath: "/inventario/productos-tipos",
  },
  {
    title: "Crear un producto",
    description: "Aprende a crear y configurar tus productos en Balaxys para adaptarlos a tu negocio.",
    redirectPath: "/inventario/crear-producto",
  },


  {
    title: "Gestionar Listas de precios",
    description: "Asigna precios adicionales a productos y a tus contactos, manteniendo tu tarifa principal.",
    redirectPath: "/productos-listas-precios",
  }, 

    {
    title: "Vales de Salida",
    description: "Aprende a registrar Vales de Salida en Balaxys ERP: Insumos, Transferencias, Activos Fijos y Útiles.",
    redirectPath: "/inventario/vales-salida",
  }, 

      {
    title: "Devolución Vales de Salida",
    description: "Aprende a realizar una devolución de vale de salida en Balaxys ERP. Rectificar o ajustra un error en tu inventario",
    redirectPath:  "/inventario/devolucion-vale-salida",
  }, 

      {
    title: "Ajustes de Inventario",
    description: "Realiza ajustes de inventario para corregir discrepancias y mantener un control preciso de tus existencias.",
    redirectPath: "/inventario/ajuste-inventario",
  }, 
 

];

const Inventario = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Detalles de la Sección de Inventario
      </Typography>
      {inventoryDetails.map((item, index) => (
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
          <ChevronRightIcon sx={{ color: "#1976d2", fontSize: "2rem" }} />
        </Card>
      ))}
    </Box>
  );
};

export default Inventario;