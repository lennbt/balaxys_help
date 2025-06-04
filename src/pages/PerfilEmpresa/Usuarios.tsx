import { Box, Typography, Divider, List, ListItem, Link, ListItemText,   } from "@mui/material";



const NuevoEmpleadoHelp = () => {


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
              <ListItemText primary="Configurar como usuario" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#guardar" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Guardar información" />
            </Link>
          </ListItem>
        </List>
      </Box>

      {/* Contenido de la página */}
    

      <Box sx={{ flex: 3, overflowY: "auto" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Crear nuevo empleado
        </Typography>

        <Divider sx={{ margin: "16px 0" }} />

<section id="acceso">
  <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
    ¿Cómo acceder a la sección de empleados?
  </Typography>

  <Typography variant="body1" sx={{ marginBottom: "16px" }}>
    Para acceder a la seccion de usuarios, simplemente sigue los siguientes pasos:
  </Typography>


  <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
    <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
    <strong>   1. Ubicación del Menú de Principal: </strong>En la parte superior izquierda de la pantalla, verás el nombre de la empresa. Haz clic encima para desplegar el menú de opciones.
    </Typography>
  </Box>

  <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
    <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
    <strong>   2. Seleccionar "Usuarios: </strong>En el menú desplegable, encontrarás la opción <strong>Usuarios</strong>, haz clic en "Usuarios" para acceder a esta sección.
    </Typography>
  </Box>

 

</section>

<Divider sx={{ margin: "16px 0" }} />
        
        {/* Información Básica */}
        <section id="informacion-basica">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
          Crear un nuevo empleado en Balaxys
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            En esta sección, puedes agregar la información básica del nuevo empleado.
          
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
          <strong> 1. Nombre: </strong> Ingresa el nombre completo del empleado.
          </Typography>

         
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
          <strong>2. Apellidos: </strong>  Completa los apellidos del empleado
          </Typography>

       
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
           <strong>3. Cuenta contable:</strong>Asocia al empleado con una cuenta contable correspondiente (por ejemplo, 521 - Sueldos y Salarios Administrativos).
          </Typography>

          
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            <strong>   4. Correo:</strong>Introduce la dirección de correo electrónico del empleado.
          </Typography>

         
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
           <strong>  5. País: </strong>  Selecciona el país de residencia del empleado.
          </Typography>

          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
           <strong>  6. Teléfono: </strong> Opcionalmente, puedes agregar el número de teléfono del empleado.
          </Typography>

          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
           <strong>  7. Imagen: </strong> Puedes cargar una foto de perfil para el empleado haciendo clic en el círculo para seleccionar una imagen. Hasta 1MB del tamaño de la imagen
          </Typography>
        </section>
        

        <Divider sx={{ margin: "16px 0" }} />

        {/* Es Usuario */}
        <section id="usuario">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
          Configurar el Empleado como Usuario:
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            Puedes configurar si este empleado será un usuario en el sistema de Balaxys.
          </Typography>

          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
          Marca la casilla <strong>"Es usuario"</strong>  si deseas otorgar acceso a Balaxys a este empleado.
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
          <strong>Correo:</strong> Si seleccionas la opción de que el empleado es un usuario, el correo electrónico que completa automaticamente y se usará para el acceso al sistema.
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
          <strong>Contraseña:</strong> Establece una contraseña segura para el acceso del empleado a Balaxys.
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
          <strong>Roles: </strong>Asigna los roles adecuados que determinarán los permisos del empleado dentro del sistema (por ejemplo, Administrador, Usuario, etc.).
          </Typography>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* Roles */}
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
                  Ver todos los empleados
                </Link>
              </li>
              <li>
                <Link href="/roles" sx={{ textDecoration: "none", color: "#1976d2" }}>
                  Gestionar roles de usuarios
                </Link>
              </li>
              <li>
                <Link href="/usuario" sx={{ textDecoration: "none", color: "#1976d2" }}>
                  Ajustes de empresa
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

export default NuevoEmpleadoHelp;
