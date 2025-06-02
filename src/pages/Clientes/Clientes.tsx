// src/pages/Clientes/SalesDetail.tsx
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

const salesDetails = [
  {
    title: "¿Qué es la sección de Clientes?",
    description: "Descubre lo que Balaxys te ofrece para gestionar cada etapa de tu facturación.",
    redirectPath: "/clientes/que-es-clientes" ,
  },
  {
    title: "Glosario de Ventas",
    description: "Encuentra la definición de los términos usados a través de las funcionalidades de ventas.",
    redirectPath: "/clientes/glosario-ventas",
  },
  {
    title: "Crear una factura de venta",
    description: "Aprende a crear facturas de venta en Balaxys. Estos pasos se aplican a todos los documentos de ventas.",
    redirectPath: "/clientes/crear-factura-venta",
  },
  {
    title: "Añadir cobros a tus facturas",
    description: "Registra los cobros recibidos y facilita la gestión de tus finanzas en Balaxys.",
    redirectPath: "/clientes/cobros-ventas",
  },
  {
    title: "Gestionar tus facturas de venta",
    description: "Aprende a editar, duplicar, eliminar, convertir y exportar tus documentos de venta en Balaxys.",
    redirectPath: "/clientes/gestionar-facturas-venta",
  },
  {
    title: "Crear y gestionar Notas de créditos",
    description: "Aprende a aplicar devoluciones, reembolsos y notas de crédito a tus facturas con Balaxys.",
    redirectPath: "/clientes/notas-de-creditos",
  },
  {
    title: "Crear y gestionar presupuestos",
    description: "Crea presupuestos fácilmente en Balaxys y conviértelos en otros facturas cuando lo necesites.",
    redirectPath: "/clientes/crear-presupuestos",
  },
];

const SalesDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Detalles de la sección de clientes
      </Typography>

      {salesDetails.map((item, index) => (
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

export default SalesDetail;
