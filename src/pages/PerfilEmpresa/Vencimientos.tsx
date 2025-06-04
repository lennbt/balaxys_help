import { Box, Typography, List, ListItem, ListItemText, Divider, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

const Vencimientos = () => {
  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* Índice de navegación */}
      <Box sx={{ flex: 1, position: "sticky", top: 20, height: "100vh", paddingRight: "20px" }}>
        <List>
          <ListItem>
            <Link href="#importancia" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Importancia de los Vencimientos" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#acceso" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="¿Cómo acceder a la sección?" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#crear" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Crear nuevo vencimiento" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#gestion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Gestión de vencimientos existentes" />
            </Link>
          </ListItem>
        </List>
      </Box>

      {/* Contenido principal */}
      <Box sx={{ flex: 3, overflowY: "auto" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Vencimientos en Balaxys
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
        El formulario de "Vencimientos" en Balaxys te permite configurar y gestionar los plazos o fechas límite asociados a pagos, cobros u otras obligaciones financieras. Personalizar estos vencimientos facilita el seguimiento de fechas importantes y mejora la gestión financiera de tu negocio.
        </Typography>

        <section id="importancia">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            ¿Por qué es importante esta configuración?
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            <strong>Control de plazos:</strong> Asegura que los pagos y facturas se realicen dentro de los plazos establecidos.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            <strong>Alertas de vencimiento:</strong> Permite recibir notificaciones para evitar pagos atrasados o problemas de flujo de caja.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            <strong>Optimización de pagos:</strong> Mejora la organización de pagos y cobra a tiempo para mantener el flujo de caja.
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="acceso">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            ¿Cómo acceder a la sección?
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            1. Dirígete al menú de <strong>Configuración</strong> en el menú principal.<br/>
            2. Selecciona la opción <strong>"Vencimientos"</strong> dentro del recuadro <strong>Facturación</strong> .<br/>
            3. Haz clic en <strong>"Nuevo vencimiento"</strong> para añadir un nuevo vencimiento.
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="crear">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Crear nuevo vencimiento
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            Pasos para registrar un nuevo vencimiento:
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            1. <strong>Nombre:</strong> Especifica una breve descripción del vencimiento (ej: Vence en 30 días).<br/>
            2. <strong>Días:</strong> Especifica el numero de días.<br/>

          </Typography>
          
          <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#666', textAlign: 'justify' }}>
            * Asegúrate de que la fecha de vencimiento esté correctamente configurada para evitar retrasos.
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="gestion">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Gestión de vencimientos
          </Typography>

          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            <strong>Acciones disponibles:</strong><br/>
            ✏️ Editar: Modifica detalles del vencimiento.<br/>
            🗑️ Eliminar: Disponible solo para vencimientos no utilizados.<br/>
            👁️ Visualizar: Consulta información detallada sobre el vencimiento.<br/>
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
              <Link href="/proveedores/crear-factura-compra" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Gestionar facturas de compras" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/inventario/crear-producto"  sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Crear un producto nuevo" />
              </Link>
            </ListItem>
          </List>
        </section>
      </Box>
    </Box>
  );
};

export default Vencimientos;
