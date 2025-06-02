
import { Box, Typography, Divider, List, ListItem, ListItemText, Link } from "@mui/material";  // Agrega ListItemText aquí

const MiPerfil = () => {
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
          overflowY: "auto", // Permite scroll si es necesario
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "16px", color: "#1976d2" }}>
        
        </Typography>
        <List>

        <ListItem>
            <Link href="#acceso" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Cómo acceder a mi Perfil" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#mi-perfil" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Información Básica" />
            </Link>
          </ListItem>
       
        </List>
      </Box>
 {/* Contenido de la página */}
      
      <Box sx={{ flex: 3, overflowY: "auto" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Formulario Mi Perfil en Balaxys
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "16px" ,textAlign: "justify"}}>
    El formulario "Mi Perfil" en Balaxys es la sección donde puedes revisar y actualizar tus datos personales y de configuración de usuario dentro de la plataforma.
  </Typography>
        <Divider sx={{ margin: "16px 0" }} />

{/* Información Básica */}      
<section id="acceso">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            ¿Cómo acceder a mi perfil de Ususrio?
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: "16px" }}>
            Para acceder a los ajustes de inventario, simplemente sigue los siguientes pasos:
          </Typography>
       

          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            <strong>   1. Ubicación del Menú de Usuario: </strong>Observa la esquina inferior izquierda del menú principal. Allí encontrarás un ícono circular con tus nombre  o avatar.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            <strong>   2. Abrir el Menú de Opciones: </strong>Haz clic en ese ícono. Se desplegará un menú con varias opciones.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            <strong>   3. Seleccionar Perfil: </strong>En el menú desplegable, selecciona la opción "Perfil". Esto te llevará a la sección donde podrás ver y editar la información asociada a tu cuenta.
            </Typography>
          </Box>

          
            
         

          <Divider sx={{ margin: "16px 0" }} />
        </section>
<section id="mi-perfil">
  <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}>
    Información Básica
  </Typography>

  <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
    En la sección "Mi Perfil" puedes revisar y actualizar tus datos personales y de configuración de usuario dentro de la plataforma.
  </Typography>

  
  <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
    <strong>• Nombre:</strong>Verifica o modifica tu nombre.
  </Typography>

 
  <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
    <strong>   • Imagen:</strong>Carga una foto de perfil de tu cuenta.
  </Typography>

 
  <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
   <strong> • Apellidos:</strong> Verifica o modifica tus apellidos.
  </Typography>

  
  <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
    <strong>   • Teléfono:</strong>Actualiza tu número de contacto si es necesario.
  </Typography>


  <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
    <strong>  • País:</strong>Selecciona tu país de residencia.
  </Typography>

  <Divider sx={{ margin: "16px 0" }} />

  <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}>
    Preferencia de idioma
  </Typography>
  <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
    Ajusta el idioma para visualizar la interfaz de la plataforma.
  </Typography>

  <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
    <strong>  • Idioma:</strong>Selecciona el idioma de preferencia para ver la plataforma.
  </Typography>

  <Divider sx={{ margin: "16px 0" }} />

  <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}>
    Credenciales de Acceso
  </Typography>

  <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
    Cambia tu contraseña o ajusta las preguntas de seguridad para mayor protección.
  </Typography>

    <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
    <strong> • Contraseña:</strong>Cambia tu contraseña para asegurar el acceso a tu cuenta de Balaxys.
  </Typography>

   <Divider sx={{ margin: "16px 0" }} />
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
                <Link href="/usuarios" sx={{ textDecoration: "none", color: "#1976d2" }}>
                  Crear un nuevo usuario o empleado
                </Link>
              </li>
              <li>
                <Link href="/roles" sx={{ textDecoration: "none", color: "#1976d2" }}>
                  Roles de usuarios
                </Link>
              </li>
              <li>
                <Link href="/configuracion" sx={{ textDecoration: "none", color: "#1976d2" }}>
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

export default MiPerfil;