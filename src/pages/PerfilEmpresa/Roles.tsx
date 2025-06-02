import { Box, Typography, Divider, List, ListItem, Link, ListItemText,   } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";



const NuevoRol = () => {


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
            <Link href="#informacion-basica" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Información Básica" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#usuario" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Guardar Información" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#guardar" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Roles Predefinidos" />
            </Link>
          </ListItem>
        </List>
      </Box>

      {/* Contenido de la página */}
    

      <Box sx={{ flex: 3, overflowY: "auto" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Crear nuevo Rol
        </Typography>

        <Divider sx={{ margin: "16px 0" }} />

<section id="acceso">
  <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
    ¿Cómo acceder a la sección de Roles?
  </Typography>

  <Typography variant="body1" sx={{ marginBottom: "16px" }}>
    Para acceder a la seccion de Roles, simplemente sigue los siguientes pasos:
  </Typography>


  <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
    <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
    <strong>   1. Ubicación del Menú de Principal: </strong>En la parte superior izquierda de la pantalla, verás el nombre de la empresa. Haz clic encima para desplegar el menú de opciones.
    </Typography>
  </Box>

  <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
    <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
    <strong>   2. Seleccionar "Roles: </strong>En el menú desplegable, encontrarás la opción <strong>Roles</strong>, haz clic en "Roles" para acceder a esta sección.
    </Typography>
  </Box>

 

</section>

<Divider sx={{ margin: "16px 0" }} />
        
        {/* Crear Rol */}
        <section id="informacion-basica">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
          Crear un nuevo Rol en Balaxys
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "20px", textAlign: "justify" }}>
            En esta sección, puedes agregar la información básica del nuevo Rol.
          
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
          <strong> 1. Nombre del Rol: </strong>  Ingresa un nombre único para el rol que estás creando (por ejemplo, "Administrador", "Vendedor", "Contable").
          </Typography>

         
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
          <strong>2. Descripción: </strong>  Agrega una breve descripción del rol, indicando los permisos y responsabilidades asociadas.
          </Typography>

       
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
           <strong>3. Activar funcionalidades y apartados:</strong>Activa las funcionalidades y secciones de la plataforma a las que deseas dar acceso al rol. Esto puede incluir ventas, contabilidad, proyectos.
          </Typography>

          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
          <strong>4. Establecer niveles de permiso para documentos: </strong> Para apartados que generan documentos (facturas, nóminas, etc.), define el nivel de permiso entre:
            <ul>
              <li><strong>Todo:</strong>Permite consultar y editar documentos.</li>
              <li><strong>Lectura:</strong>Solo permite consultar sin editar.</li>
              <li><strong>Denegado:</strong>No permite consultar ni editar documentos.</li>
            </ul>
          </Typography>      
        </section>
        

        <Divider sx={{ margin: "16px 0" }} />

    

        {/* Guardar */}
        <section id="guardar">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
          Guardar la Información:
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
          <strong>Guardar:</strong> Una vez que hayas completado todos los campos, haz clic en "Guardar" para registrar al nuevo empleado y su cuenta de usuario.
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
          <strong>Cancelar: </strong>Si decides cancelar el proceso, puedes hacer clic en "Cancelar".
          </Typography>       
        </section>

        <Divider sx={{ margin: "16px 0" }} />

    {/*  Roles Predefinidos */}
    <section id="usuario">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
          Roles predefinidos 
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            Existen Roles predificdos en Balaxys.
          </Typography>
          <ul>
              <li><strong>Administrador:</strong>Acceso completo a todas las áreas. Puede añadir o eliminar usuarios y transferir el rol de administrador.</li>
              <li><strong>Vendedor:</strong>Acceso total a Ventas y Contactos. Acceso a Contabilidad  Pagos, Proyectos y solo lectura a Inventario,<Link href="/productos" sx={{ textDecoration: "underline", color: "#1976d2", "&:hover": { textDecoration: "none",  }, }}>  productos</Link>.</li>
              <li><strong>Comprador:</strong>Acceso a Inventario y al menú de Proveedores.</li>
              <li><strong>Recursos Humanos::</strong>o	Acceso completo a Equipo, Contabilidad, Nóminas y Proyectos.</li>
              <li><strong>Contador :</strong>Permite gestionar la contabilidad, aprobar facturas y pagos, generar reportes financieros y asegurar el cumplimiento fiscal. Acceso completo a RR.HH.</li>
            
            </ul>
         
        </section>



        {/* Artículos relacionados */}
        <section id="articulos-relacionados">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Artículos Relacionados
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            Aquí algunos artículos y guías relacionadas con la gestión de empleados en Balaxys:
            <ul>
              <li>
                <Link href="/empleados" sx={{ textDecoration: "none", color: "#1976d2" }}>
                  Añadir un nuevo Empleado
                </Link>
              </li>
              <li>
                <Link href="/roles" sx={{ textDecoration: "none", color: "#1976d2" }}>
                  Gestionar roles de usuarios
                </Link>
              </li>
              <li>
                <Link href="/ajustes-empresa" sx={{ textDecoration: "none", color: "#1976d2" }}>
                  Configuración  de empresa
                </Link>
              </li>
            </ul>
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

      </Box>
    </Box>
  );
};

export default NuevoRol;
