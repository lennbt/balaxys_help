import { Box, Typography, List, ListItem, ListItemText, Divider, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

const Almacenes = () => {
  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* Índice de navegación */}
      <Box sx={{ flex: 1, position: "sticky", top: 20, height: "100vh", paddingRight: "20px" }}>
        <List>
          <ListItem>
            <Link href="#importancia" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Importancia de la gestión de almacenes" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#acceso" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="¿Cómo acceder a la sección?" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#crear" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Crear nuevo almacén" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#gestion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Gestión de almacenes existentes" />
            </Link>
          </ListItem>
        </List>
      </Box>

      {/* Contenido principal */}
      <Box sx={{ flex: 3, overflowY: "auto" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Gestión de Almacenes en Balaxys
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
        Un almacén es una bodega o depósito es un espacio físico destinado al resguardo de mercancías que, posteriormente, se comercializarán. Las empresas cuentan con diversas ubicaciones para organizar de forma efectiva la administración de sus existencias.
<br /> Con Balaxys, es posible administrar y distribuir tu inventario en múltiples almacenes o depósitos de manera eficiente. Además, la plataforma permite realizar traslados entre estos espacios, facilitando la logística de tus productos.

        </Typography>

        <section id="importancia">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            ¿Por qué es importante esta configuración?
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            <strong>Organización de inventarios:</strong> Facilita la clasificación y localización de productos dentro de los almacenes.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            <strong>Control de stock:</strong> Ayuda a gestionar las existencias de productos y evitar pérdidas o desabastecimiento.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            <strong>Optimización de espacio:</strong> Permite una mejor utilización de los espacios de almacenamiento disponibles.
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="acceso">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            ¿Cómo acceder a la sección?
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            1. Dirígete al menú de <strong>Catálogos</strong> en el menú principal.<br />
            2. Selecciona la opción <strong>"Almacenes"</strong> dentro de la sección de Catálogos.<br />
            3. Haz clic en <strong>"Nuevo almacén"</strong> para crear un nuevo almacén.
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="crear">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Crear nuevo almacén
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            Pasos para registrar un nuevo almacén:
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            1. <strong>Código:</strong> Especifica un código único para el almacén (ej: "01").<br />
            2. <strong>Descripción:</strong> Proporciona una breve descripción del almacén (ej: "Almacén principal").<br />
            3. <strong>Dirección:</strong> Indica la dirección física del almacén (ej: "Piso 1, Edificio A").<br />
        
          </Typography>

          <Typography variant="body1" sx={{ fontStyle: "italic", color: "#666", textAlign: "justify" }}>
            * Asegúrate de que el nombre y la descripción del almacén sean claros para facilitar la identificación.
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="gestion">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Gestión de almacenes
          </Typography>

          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            <strong>Acciones disponibles:</strong><br />
            ✏️ Editar: Modificar detalles del almacén.<br />
            🗑️ Eliminar: Disponible solo para almacenes no utilizados.<br />
            👁️ Visualizar: Consultar información detallada sobre el almacén.<br />
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        {/* Artículos relacionados */}
        <section id="articulos-relacionados">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Artículos Relacionados
          </Typography>
          <List>
            <ListItem>
              <Link href="/inventario/descripcion"sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Gestionar Inventarios" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/control-de-stock" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Control de Stock" />
              </Link>
            </ListItem>
          </List>
        </section>
      </Box>
    </Box>
  );
};

export default Almacenes;
