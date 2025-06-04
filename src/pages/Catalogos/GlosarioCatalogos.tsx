// src/pages/Catalogos/GlosarioCatalogos.tsx
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

/**
 * Términos y definiciones del glosario de Catálogos en Balaxys ERP.
 */
const glosario = [
  {
    term: "Almacén",
    definition:
      "Ubicación física o virtual dentro de Balaxys ERP donde se guardan productos y mercancías. Permite controlar existencias, movimientos y ubicaciones específicas.",
  },
  {
    term: "Atributo",
    definition:
      "Característica personalizada de un producto que define variantes o propiedades adicionales. Ejemplos: Color, Tamaño, Material.",
  },
  {
    term: "Categoría",
    definition:
      "Clasificación de productos que agrupa ítems con características similares. Facilita la organización y búsqueda dentro del catálogo.",
  },
  {
    term: "Centro de Costo",
    definition:
      "Unidad organizativa dentro de la empresa (ej.: Administración, Producción) para asignar gastos y controlar presupuestos en Balaxys ERP.",
  },
  {
    term: "Unidad de Medida",
    definition:
      "Sistema para cuantificar productos (por ejemplo: kg, cm, L). Define cómo se registran cantidades en inventario, compras y ventas.",
  },
  {
    term: "Proveedor",
    definition:
      "Entidad o persona que suministra productos o servicios a la empresa. En Catálogos, se registra su información para compras y órdenes.",
  },
  {
    term: "Subcategoría",
    definition:
      "División dentro de una categoría principal, que refina la clasificación (por ejemplo: “Camisas” puede tener subcategorías “Manga Corta” y “Manga Larga”).",
  },
  {
    term: "Stock Mínimo",
    definition:
      "Cantidad mínima de un producto que debe mantenerse en inventario para evitar rupturas de stock. Balaxys genera alertas si el nivel baja de este valor.",
  },
  {
    term: "Ubicación",
    definition:
      "Posición específica dentro de un almacén (pasillo, estante, contenedor) donde se guarda un producto. Facilita la localización rápida.",
  },
];

/**
 * Agrupa términos del glosario por su letra inicial.
 */
const groupedTerms = glosario.reduce<Record<string, typeof glosario>>((acc, item) => {
  const firstLetter = item.term.charAt(0).toUpperCase();
  if (!acc[firstLetter]) {
    acc[firstLetter] = [];
  }
  acc[firstLetter].push(item);
  return acc;
}, {});

/**
 * Claves ordenadas alfabéticamente para el índice.
 */
const sortedKeys = Object.keys(groupedTerms).sort();

const GlosarioCatalogos: React.FC = () => {
  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* ============================= */}
      {/* 1. ÍNDICE ALFABÉTICO         */}
      {/* ============================= */}
      <Box
        sx={{
          flex: 1,
          position: "sticky",
          top: 20,
          height: "100vh",
          paddingRight: "20px",
          paddingLeft: "20px",
          overflowY: "auto",
          textAlign: "left",
          borderRight: "1px solid #e0e0e0",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, marginBottom: "16px", color: "#1976d2" }}
        >
          ÍNDICE ALFABÉTICO
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

      {/* ============================= */}
      {/* 2. CONTENIDO PRINCIPAL       */}
      {/* ============================= */}
      <Box sx={{ flex: 3, overflowY: "auto", paddingLeft: "20px" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Glosario de Catálogos
        </Typography>
        <Divider sx={{ margin: "16px 0" }} />

        {sortedKeys.map((letter) => (
          <section key={letter} id={letter}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
            >
              {letter}
            </Typography>
            {groupedTerms[letter]
              .sort((a, b) => a.term.localeCompare(b.term))
              .map((item, index) => (
                <Box key={index}>
                  <Typography variant="h6" sx={{ marginBottom: "4px" }}>
                    {item.term}
                  </Typography>
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

export default GlosarioCatalogos;
