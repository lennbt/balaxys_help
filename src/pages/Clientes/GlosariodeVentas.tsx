// src/pages/Clientes/GlosarioVentas.tsx
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

import React from "react";
import { Box, Typography, List, ListItem, Link, ListItemText, Divider } from "@mui/material";

const GlosarioVentas: React.FC = () => {
  // Definición del glosario de ventas
  const glosario = [
    { term: "Cliente", definition: "Persona o empresa que adquiere bienes o servicios a cambio de un pago." },
    { term: "Cobro", definition: "Registro del pago recibido de un cliente, asociado a una o varias facturas." },
    { term: "Confirmación", definition: "Acción de validar una factura o presupuesto para que sea oficial y genere efectos contables." },
    { term: "Crédito", definition: "Facultad de comprar bienes o servicios y pagarlos en una fecha posterior acordada." },
    { term: "Devolución", definition: "Proceso de regresar productos al inventario cuando el cliente devuelve mercancía." },
    { term: "Descuento", definition: "Reducción del precio original de venta aplicada a una factura o presupuesto." },
    { term: "Factura", definition: "Documento oficial que registra la venta de productos o servicios y genera obligación de pago." },

    { term: "Nota de Crédito", definition: "Documento que anula total o parcialmente el importe de una factura previamente emitida." },
    { term: "Número de Factura", definition: "Identificador único asignado a cada factura para su control y trazabilidad." },
    { term: "Presupuesto", definition: "Documento preliminar que presenta una propuesta de venta al cliente antes de la factura final." },
    { term: "Recibo", definition: "Comprobante físico o digital emitido al cliente como constancia de pago total o parcial." },
    { term: "Reenvío de Factura", definition: "Acción de enviar nuevamente la factura al cliente, generalmente vía correo electrónico." },
    { term: "Resumen de Montos", definition: "Sección del formulario donde se muestran subtotal, impuestos y total de la venta." },
    { term: "Tipo de Cambio", definition: "Valor utilizado para convertir montos facturados en una moneda diferente al peso local." },
    { term: "UUID", definition: "Identificador único universal asignado a cada comprobante electrónico para su registro." },
    { term: "Vencimiento", definition: "Fecha límite en la que el cliente debe realizar el pago de la factura." },
    { term: "Venta en Línea", definition: "Transacción de venta realizada a través de la plataforma web sin intervención presencial." }
  ];

  // Agrupar términos por inicial
  const groupedTerms = glosario.reduce<{ [key: string]: { term: string; definition: string }[] }>((acc, item) => {
    const firstLetter = item.term.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(item);
    return acc;
  }, {});

  // Ordenar las claves (letras) alfabéticamente
  const sortedKeys = Object.keys(groupedTerms).sort();

  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* Índice de navegación */}
      <Box
        sx={{
          flex: 1,
          position: "sticky", // Fija el índice mientras se hace scroll
          top: 20,
          height: "100vh",
          paddingRight: "20px",
          overflowY: "auto", // Permite desplazamiento si excede la pantalla
          borderRight: "1px solid #e0e0e0",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "16px", color: "#1976d2" }}>
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

      {/* Contenido del glosario */}
      <Box sx={{ flex: 3, overflowY: "auto", paddingLeft: "20px" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Glosario de Ventas
        </Typography>
        <Divider sx={{ margin: "16px 0" }} />

        {sortedKeys.map((letter) => (
          <section key={letter} id={letter}>
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
              {letter}
            </Typography>
            {groupedTerms[letter]
              .sort((a, b) => a.term.localeCompare(b.term))
              .map((item, index) => (
                <Box key={index}>
                  <Typography variant="h6">{item.term}</Typography>
                  <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
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

export default GlosarioVentas;
