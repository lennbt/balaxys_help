// src/components/Breadcrumbs.tsx

import React from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography, Box } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { breadcrumbLabels } from "../config/breadcrumbLabels";

/**
 * Función auxiliar que convierte un segmento de URL (por ejemplo 'glosario-ventas')
 * en texto amigable (por ejemplo 'Glosario Ventas'). Primero busca en breadcrumbLabels;
 * si no existe, reemplaza guiones/bajos por espacios y capitaliza cada palabra.
 */
function formatSegment(segment: string): string {
  // Si existe etiqueta definida, la retorna
  if (breadcrumbLabels[segment]) {
    return breadcrumbLabels[segment];
  }
  // Caso contrario, convierte guiones/underscores en espacios y capitaliza
  return segment
    .replace(/[-_]/g, " ")
    .split(" ")
    .map((word) => {
      if (word.length === 0) return "";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

/**
 * Componente de migas de pan:
 * - Si la ruta es "/", no se muestra nada.
 * - Si la ruta NO es "/", se muestra siempre “Inicio” como primer enlace,
 *   y luego cada segmento adicional formateado (Clientes, Cobros, etc.).
 */
const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((seg) => seg !== "");

  // Si estamos en la raíz ("/"), no renderizamos migas
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <Box sx={{ padding: "0 16px", marginBottom: 2 }}>
      <MUIBreadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="migas de pan"
      >
        {/* 1. Primer elemento siempre “Inicio”, con enlace a "/" */}
        <Link
          component={RouterLink}
          to="/"
          underline="hover"
          color="inherit"
        >
          <Typography sx={{ fontWeight: 500 }}>Inicio</Typography>
        </Link>

        {/* 2. A partir de aquí, los segmentos de la ruta */}
        {pathnames.map((segment, index) => {
          // Construir la URL parcial: "/clientes", "/clientes/cobros", etc.
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          // Etiqueta formateada o de breadcrumbLabels
          const label = formatSegment(segment);

          return isLast ? (
            // Si es el último segmento, mostrar solo texto sin enlace
            <Typography key={to} color="text.primary" sx={{ fontWeight: 500 }}>
              {label}
            </Typography>
          ) : (
            // Si no es el último, renderizar como enlace
            <Link
              component={RouterLink}
              to={to}
              underline="hover"
              color="inherit"
              key={to}
            >
              <Typography sx={{ fontWeight: 500 }}>{label}</Typography>
            </Link>
          );
        })}
      </MUIBreadcrumbs>
    </Box>
  );
};

export default Breadcrumbs;
