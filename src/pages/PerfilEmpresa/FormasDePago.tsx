import { Box, Typography, List, ListItem, ListItemText, Divider, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

const FormasDePago = () => {
  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* Índice de navegación */}
      <Box sx={{ flex: 1, position: "sticky", top: 20, height: "100vh", paddingRight: "20px" }}>
        <List>
          <ListItem>
            <Link href="#importancia" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Importancia de las Formas de Pago" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#acceso" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="¿Cómo acceder a la sección?" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#crear" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Crear nueva forma de pago" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#gestion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Gestión de formas de pago existentes" />
            </Link>
          </ListItem>
        </List>
      </Box>

      {/* Contenido principal */}
      <Box sx={{ flex: 3, overflowY: "auto" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Formas de Pago en Balaxys
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
        El formulario de "Formas de Pago" en Balaxys es la herramienta que te permite configurar y gestionar las diversas modalidades mediante las cuales tus clientes pueden pagar sus facturas y tú puedes registrar dichos pagos. 
        <br />Este formulario es esencial para personalizar las opciones de cobro de acuerdo con las necesidades de tu negocio, garantizando una mayor flexibilidad y exactitud en la contabilidad.
        </Typography>

        <section id="importancia">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            ¿Por qué es importante esta configuración?
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            <strong>Control de pagos:</strong> Gestiona el proceso de pago a través de diferentes métodos como transferencia bancaria, tarjeta de crédito, entre otros.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            <strong>Comodidad para clientes:</strong> Facilita que los clientes elijan el método de pago que prefieren.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            <strong>Adaptabilidad:</strong> Permite configurar diferentes métodos de pago según el tipo de negocio o región.
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="acceso">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            ¿Cómo acceder a la sección?
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            1. Dirígete al menú de <strong>Configuración</strong> en el menú principal<br/>
            2. Selecciona en el recuadro de <strong>Contabilidad</strong> la opción <strong>"Formas de Pago"</strong> <br/>
            3. Haz clic en <strong>"Nueva forma de pago"</strong>
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="crear">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Crear nueva forma de pago
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            Pasos para registrar una nueva forma de pago:
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            1. <strong>Código:</strong> Ingresa un identificador único para la forma de pago (ej: TRANSF01)<br/>
            2. <strong>Nombre:</strong> Especifica el nombre completo de la forma de pago (ej: Transferencia Bancaria)<br/>
          
          </Typography>
          
          <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#666', textAlign: 'justify' }}>
            * Es importante que el código sea único y se sigan las normativas internas para el uso de los códigos.
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="gestion">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Gestión de formas de pago
          </Typography>

          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            <strong>Acciones disponibles:</strong><br/>
            ✏️ Editar: Modificar detalles descriptivos de la forma de pago.<br/>
            🗑️ Eliminar: Disponible solo para formas de pago no utilizadas.<br/>
            👁️ Visualizar: Consultar información completa sobre la forma de pago.<br/>
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
              <Link href="/metodos-de-pago" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Métodos de Pago: Guía completa" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/vencimientos" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Crear un nuevo vencimiento" />
              </Link>
            </ListItem>
          </List>
        </section>
      </Box>
    </Box>
  );
};

export default FormasDePago;
