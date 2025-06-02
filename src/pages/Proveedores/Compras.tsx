// src/pages/Proveedores/Compras.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Card, CardContent } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const gettingStartedDetails = [
  {
    title: "¿Qué es la sección de Proveedores?",
    description:
      "Descubre las herramientas que Balaxys te ofrece para registrar y centralizar todos los datos sobre tus compras.",
    redirectPath: "/proveedores/seccion-proveedores",
  },
  {
    title: "Glosario de Compras",
    description: "Conoce todos los conceptos clave relacionados con tus compras en Balaxys.",
    redirectPath: "/proveedores/glosario-compras",
  },
  {
    title: "Órdenes de compra",
    description: "Aprende a gestionar todos los documentos relacionados con tus compras a través de Balaxys.",
    redirectPath: "/proveedores/orden-de-compra",
  },
  {
    title: "Crear una factura de compra",
    description: "Aprende a registrar tus compras a proveedores en Balaxys. Estos pasos también aplican para crear otros documentos de compra.",
    redirectPath: "/proveedores/crear-factura-compra",
  },
  {
    title: "Añadir pagos a una factura de compra",
    description: "Registra los pagos de tus gastos para un seguimiento contable eficiente en Balaxys.",
    redirectPath: "/proveedores/gestionar-pagos",
  },
  {
    title: "Gestionar tus facturas de compra",
    description: "Descubre cómo editar, duplicar, eliminar, convertir y exportar tus documentos de compras y gastos en Balaxys.",
    redirectPath: "/proveedores/gestionar-facturas-compra",
  },
  {
    title: "Crear y gestionar notas de débitos",
    description: "Aprende a aplicar devoluciones, abonos y correcciones a tus compras con Balaxys.",
    redirectPath: "/proveedores/notas-de-debitos",
  },
];

const Compras: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Detalles de la Sección Proveedores
      </Typography>

      {gettingStartedDetails.map((item, index) => (
        <Card
          key={index}
          onClick={() => navigate(item.redirectPath)}
          sx={{
            marginBottom: "16px",
            boxShadow: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            border: "1px solid transparent",
            "&:hover": {
              borderColor: "#1976d2",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
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

export default Compras;
