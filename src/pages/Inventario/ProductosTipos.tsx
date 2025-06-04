import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

import { Box, Typography, Divider, List, ListItem, Link, ListItemText } from "@mui/material";


const ProductosTipos = () => {
  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* Índice de navegación */}
      <Box
        sx={{
          flex: 1,
          position: "sticky", // Fija el índice a la pantalla
          top: 20, // Espacio desde la parte superior
          height: "100vh", // Que ocupe toda la altura de la ventana
          paddingRight: "20px",
          paddingLeft: "20px", // Asegura que haya un margen izquierdo
          overflowY: "auto", // Permite scroll si es necesario
          textAlign: "left", // Asegura que el índice esté alineado a la izquierda
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "16px", color: "#1976d2" }}>
         
        </Typography>
        <List>
          <ListItem>
            <Link href="#tipoproducto" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Detalle para el campo Tipo Producto" />
            </Link>
          </ListItem>
        </List>
      </Box>

      {/* Contenido de la página */}
      <Box sx={{ flex: 3, overflowY: "auto" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Tipos de Productos
        </Typography>

        <Divider sx={{ margin: "16px 0" }} />

        <section id="tipoproducto">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}>
            Los tipos producto en Balaxys
          </Typography>

          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            El campo "Tipo producto" es una lista desplegable obligatoria que permite clasificar los productos en diferentes categorías según su propósito o uso dentro de la organización. A continuación, se detalla cada opción disponible:
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
            1. Para la Venta o Insumo:
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            <ul>
              <li><strong>Descripción:</strong> <MuiLink component={RouterLink} to="/inventario/productos" sx={{textDecoration: "underline",color: "#1976d2","&:hover": {textDecoration: "none",  }, }}>productos</MuiLink> adquiridos para ser vendidos directamente o utilizados como insumos en la producción de otros productos.</li>
              <li><strong>Ejemplos:</strong> Materias primas, Mercancías para la venta.</li>
            </ul>
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
            2. Activo Fijo
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            Esta es la información básica que identifica al producto o servicio dentro del sistema:
            <ul>
              <li><strong>Descripción:</strong> Bienes adquiridos para ser utilizados en las operaciones de la empresa durante un período prolongado, no para la venta.</li>
              <li><strong>Ejemplos:</strong> Vehículos, Mobiliario.</li>
            </ul>
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
            3. Útil o Herramienta
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            <ul>
              <li><strong>Descripción:</strong> Herramientas o equipos de menor valor y uso recurrente que no califican como activos fijos pero son esenciales para las operaciones, no para la venta.</li>
              <li><strong>Ejemplos:</strong> Destornilladores, Artículos de oficina.</li>
            </ul>
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
            4. Producto Elaborado:
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            <ul>
              <li><strong>Descripción:</strong> Productos terminados que han sido fabricados o ensamblados por la empresa y están listos para la venta</li>
              <li><strong>Ejemplos:</strong> Ropa confeccionada, Alimentos procesados.</li>
            </ul>
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />

          {/* Artículos relacionados */}
          <section id="articulos-relacionados">
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}>
              Artículos Relacionados
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
              Aquí algunos artículos y guías relacionadas con la gestión de productos en Balaxys:
              <ul>
                <li><Link href="/inventario/crear-producto" >Crear un Productos o Servicio</Link></li>
                <li><Link href="/inventario">Gestionar inventarios</Link></li>
                <li><Link href="/proveedores/orden-de-compra">Crear una orden de compra</Link></li>
             
              </ul>
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>
        </section>
      </Box>
    </Box>
  );
};

export default ProductosTipos;
