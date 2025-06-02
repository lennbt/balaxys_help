import { Box, Typography, List, ListItem, ListItemText, Divider, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

const ElementosDeGastos = () => {
  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* Índice de navegación */}
      <Box sx={{ flex: 1, position: "sticky", top: 20, height: "100vh", paddingRight: "20px" }}>
        <List>
          <ListItem>
            <Link href="#importancia" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Importancia de los Elementos de Gastos" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#acceso" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="¿Cómo acceder a la sección?" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#crear" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Crear nuevo elemento de gasto" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#gestion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Gestión de elementos de gastos existentes" />
            </Link>
          </ListItem>
        </List>
      </Box>

      {/* Contenido principal */}
      <Box sx={{ flex: 3, overflowY: "auto" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Elementos de Gastos en Balaxys
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
          La gestión de elementos de gastos te permite clasificar los diferentes tipos de costos y gastos de tu empresa, facilitando su registro, control y seguimiento.
        </Typography>

        <section id="importancia">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            ¿Por qué es importante esta configuración?
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            <strong>Control de costos:</strong> Permite clasificar y organizar los gastos según su tipo y naturaleza.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            <strong>Optimización de recursos:</strong> Ayuda a tener una visión clara de los costos y a tomar decisiones más informadas sobre los gastos de la empresa.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            <strong>Informes financieros:</strong> Facilita la generación de reportes de gastos para la contabilidad y la toma de decisiones.
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="acceso">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            ¿Cómo acceder a la sección?
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            1. Dirígete al menú de <strong>Configuración</strong> en el menú principal.<br/>
            2. Selecciona la opción <strong>"Elementos de gastos"</strong> dentro de la sección correspondiente.<br/>
            3. Haz clic en <strong>"Nuevo elemento de gasto"</strong> para añadir un nuevo gasto.
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="crear">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Crear nuevo elemento de gasto
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
          Completa el formulario con la información requerida:
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            1. <strong>Código:</strong> Ingresa un identificador único (ej: GASTO001).<br/>
            2. <strong>Nombre:</strong> Especifica el nombre del gasto (ej: "Pago de servicios de Internet").<br/>
     
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
          Añadir Subelementos a un Elemento:
            <ul>
              <li>Una vez creado el elemento, selecciona la opción para añadir subelementos dentro de él <strong>("Añadir Subelemento")</strong> .</li>
              <li>Rellena el formulario para la subelemento:</li>
              <Typography variant="body1" sx={{ marginBottom: "10px", textAlign: "justify" }}>
              <strong>Código:</strong>Un identificador único para el subelemento. <br />
             <strong>Nombre:</strong> Un nombre descriptivo (por ejemplo, "Salarios"). <br />
              Guarda el subelemento haciendo clic en <strong>"Guardar"</strong>  en la sección acciones.

              </Typography>
            </ul>
          </Typography>
          
          <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#666', textAlign: 'justify' }}>
            * Asegúrate de que el nombre y el tipo de gasto sean claros y descriptivos para una mejor gestión.
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="gestion">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Gestión de elementos de gastos
          </Typography>

          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            <strong>Acciones disponibles:</strong><br/>
            ✏️ Editar: Modificar detalles del elemento de gasto.<br/>
            🗑️ Eliminar: Disponible solo para elementos no utilizados.<br/>
            👁️ Visualizar: Consultar información detallada sobre el gasto.<br/>
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
              <Link href="/almacenes" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Gestionar Almacenes" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/reportes-financieros" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Generar Reportes Financieros" />
              </Link>
            </ListItem>
          </List>
        </section>
      </Box>
    </Box>
  );
};

export default ElementosDeGastos;
