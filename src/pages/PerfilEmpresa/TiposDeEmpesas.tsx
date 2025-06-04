import { Box, Typography, List, ListItem, ListItemText, Divider, Link } from "@mui/material";

const TiposDeEmpresa = () => {
  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* Índice de navegación */}
      <Box sx={{ flex: 1, position: "sticky", top: 20, height: "100vh", paddingRight: "20px" }}>
        <List>
          <ListItem>
            <Link href="#importancia" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Importancia de los Tipos de Empresa" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#acceso" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="¿Cómo acceder a la sección?" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#crear" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Crear nuevo tipo de empresa" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#gestion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Gestión de tipos existentes" />
            </Link>
          </ListItem>
        </List>
      </Box>

      {/* Contenido principal */}
      <Box sx={{ flex: 3, overflowY: "auto" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Tipos de Empresa en Balaxys
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
        El formulario de "Tipos de Empresa" en Balaxys te permite definir y gestionar categorías o clasificaciones de empresas según características específicas. Esto es útil para segmentar a tus clientes, proveedores o entidades asociadas, facilitando la organización y análisis de la información comercial y contable.
        </Typography>

        <section id="importancia">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            ¿Por qué es importante esta configuración?
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            <strong>Clasificación jurídica:</strong> Determina las obligaciones legales y requisitos específicos para cada tipo de empresa.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            <strong>Reportes financieros:</strong> Genera estados contables adaptados a cada estructura empresarial.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            <strong>Personalización de procesos:</strong> Permite adaptar flujos de trabajo según las necesidades de cada tipo de organización.
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="acceso">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            ¿Cómo acceder a la sección?
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            1. Dirígete al menú de <strong>Configuración</strong> en el menú principal<br/>
            2. Selecciona en el recuadro de Facturación la opción <strong>"Tipos de empresas"</strong> <br/>
            3. Haz clic en <strong>"Nuevo tipo de empresa"</strong>
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="crear">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Crear nuevo tipo de empresa
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            Pasos para registrar un nuevo tipo de empresa:
          </Typography>
          
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            1. <strong>Código:</strong> Ingresa un identificador único (ej: SAS)<br/>
            2. <strong>Nombre:</strong> Especifica el nombre completo (ej: Sociedad por Acciones Simplificada)<br/>
          
          </Typography>
          
          <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#666', textAlign: 'justify' }}>
            * Los códigos deben seguir la normativa legal vigente y no pueden modificarse posteriormente
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="gestion">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Gestión de tipos de empresa
          </Typography>
          
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            <strong>Acciones disponibles:</strong><br/>
            ✏️ Editar: Modificar detalles descriptivos<br/>
            🗑️ Eliminar: Disponible solo para tipos no utilizados<br/>
            👁️ Visualizar: Consultar información completa<br/>
            
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
              <Link href="/estructura-organizacional" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Configurar Estructura Organizacional" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/formas-de-pago" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Formas de Pago" />
              </Link>
            </ListItem>
          </List>
        </section>
      </Box>
    </Box>
  );
};

export default TiposDeEmpresa;