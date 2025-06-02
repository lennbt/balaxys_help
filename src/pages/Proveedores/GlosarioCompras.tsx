// src/pages/Compras/GlosarioCompras.tsx
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  Link,
  ListItemText,
  Divider,
} from "@mui/material";

const GlosarioCompras: React.FC = () => {
  // Definimos los términos y sus definiciones específicas de Compras
  const glosario = [
    {
      term: "Almacén",
      definition:
        "Lugar físico o virtual donde se almacenan los productos después de recibirlos de un proveedor.",
    },
    {
      term: "Centro de costo",
      definition:
        "Unidad organizativa a la que se le asignan costos específicos de la compra para control presupuestario.",
    },
    {
      term: "Estado compra",
      definition:
        "Indica si la factura de compra está “Sin confirmar” o “Confirmado”. Una compra confirmada genera movimientos contables e impacta inventario.",
    },
    {
      term: "Factura de compra",
      definition:
        "Documento oficial emitido por un proveedor que detalla los productos o servicios adquiridos, su precio, impuestos y totales.",
    },
    {
      term: "Fecha confirmación",
      definition:
        "Fecha en que la factura de compra se valida en el sistema, generando asientos contables y afectando inventarios.",
    },
    {
      term: "Fecha emisión",
      definition:
        "Fecha en que se emite la factura de compra. Debe corresponder a un período contable abierto para poder confirmarse.",
    },
    {
      term: "Importe",
      definition:
        "Monto total de la factura de compra, resultante de sumar el subtotal más los impuestos aplicables.",
    },
    {
      term: "IVA",
      definition:
        "Impuesto sobre el Valor Añadido que se aplica a la compra de bienes y servicios. Se calcula como porcentaje sobre el subtotal.",
    },
    {
      term: "Nota de crédito de compra",
      definition:
        "Documento que registra la devolución total o parcial de una factura de compra, ajustando los montos facturados y contables.",
    },
    {
      term: "Orden de compra",
      definition:
        "Documento interno que solicita formalmente productos o servicios a un proveedor antes de generar la factura de compra.",
    },
    {
      term: "Proveedor",
      definition:
        "Entidad o persona que suministra productos o servicios a la empresa y emite la factura de compra correspondiente.",
    },
    {
      term: "Recepción",
      definition:
        "Acción de ingresar físicamente los productos al almacén luego de que la factura de compra ha sido confirmada.",
    },
    {
      term: "Subtotal",
      definition:
        "Suma de los importes de todas las líneas de producto o servicio antes de aplicar impuestos.",
    },
    {
      term: "Tipo de cambio",
      definition:
        "Valor de conversión entre la moneda de la factura de compra y la moneda base de la empresa, utilizado para registrar correctamente los importes.",
    },
    {
      term: "Unidad de medida (U.M.)",
      definition:
        "Etiqueta que indica la forma de cuantificar el producto comprado (por ejemplo, unidad, kilogramo, litro).",
    },
  ];

  // Agrupamos los términos por la primera letra
  const groupedTerms = glosario.reduce<{
    [key: string]: { term: string; definition: string }[];
  }>((acc, item) => {
    const firstLetter = item.term.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(item);
    return acc;
  }, {});

  // Ordenamos las claves alfabéticamente
  const sortedKeys = Object.keys(groupedTerms).sort();

  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* ======================================= */}
      {/* 1. ÍNDICE DE SECCIONES                  */}
      {/* ======================================= */}
      <Box
        sx={{
          flex: 1,
          position: "sticky", // Fija el índice a la pantalla
          top: 20, // Espacio desde la parte superior
          height: "100vh", // Ocupa toda la altura de la ventana
          paddingRight: "20px",
          paddingLeft: "20px",
          overflowY: "auto", // Permite scroll si es necesario
          borderRight: "1px solid #e0e0e0",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, marginBottom: "16px", color: "#1976d2" }}
        >
          ÍNDICE
        </Typography>
        <List>
          {sortedKeys.map((letter) => (
            <ListItem key={letter}>
              <Link href={`#${letter}`} sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary={letter} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* ======================================= */}
      {/* 2. CONTENIDO PRINCIPAL                  */}
      {/* ======================================= */}
      <Box sx={{ flex: 3, overflowY: "auto", paddingLeft: "20px" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 700, marginBottom: "8px" }}
        >
          Glosario de Compras
        </Typography>
        <Divider sx={{ margin: "16px 0" }} />

        {sortedKeys.map((letter) => (
          <section key={letter} id={letter}>
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
              {letter}
            </Typography>
            {groupedTerms[letter]
              .sort((a, b) => a.term.localeCompare(b.term)) // Ordenar términos dentro de la letra
              .map((item, index) => (
                <Box key={index}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {item.term}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ marginBottom: "16px", textAlign: "justify" }}
                  >
                    {item.definition}
                  </Typography>
                  <Divider sx={{ margin: "16px 0" }} />
                </Box>
              ))}
          </section>
        ))}
      </Box>
    </Box>
  );
};

export default GlosarioCompras;
