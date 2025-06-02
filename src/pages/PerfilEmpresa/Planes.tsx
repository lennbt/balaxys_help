import { Box, Typography, Divider, List, ListItem, Link, ListItemText,   } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";



const Planes = () => {


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
            <Link href="#guardar" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Guardar Información" />
            </Link>
          </ListItem>
 
        </List>
      </Box>

      {/* Contenido de la página */}
    

      <Box sx={{ flex: 3, overflowY: "auto" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
        Página de Planes
        </Typography>

        <Divider sx={{ margin: "16px 0" }} />

<section id="acceso">
  <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
  Sección: Plan Contratado
  </Typography>

    <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
          En Balaxys existen varios planes de pago que se adaptan a las necesidades de tu negocio:
            <ul>
              <li><strong>¿Qué significa "Quedan X días"?:</strong>Esta barra de progreso muestra la cantidad de días restantes para que finalice tu plan contratado. La barra se actualizará a medida que pase el tiempo.</li>
              <li><strong>¿Qué son los "14 días de prueba"?:</strong>Si estás utilizando un plan de prueba, se mostrará la duración restante de la prueba que tienes activada. En este caso, el sistema indica que el plan de prueba tiene una duración de 14 días.</li>
            
            </ul>
          </Typography>    

 

</section>

<Divider sx={{ margin: "16px 0" }} />
        
        {/* Crear Rol */}
        <section id="informacion-basica">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
          Sección: Historial de Pagos
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "20px", textAlign: "justify" }}>
          Esta sección muestra un registro de todos los pagos realizados para el plan contratado. En la tabla puedes ver:
          
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
          <strong> 1. Tipo de plan: </strong>  El nombre del plan.
          </Typography>

         
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
          <strong>2. Fecha de inicio:  </strong>   La fecha en la que comenzó el plan.
          </Typography>

       
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
           <strong>3. Fecha de vencimiento:</strong>La fecha en que expira el plan
          </Typography>

          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
          <strong>4. Foma de pago </strong> El método utilizado para realizar el pago (por ejemplo, tarjeta, transferencia bancaria, etc.).
           
          </Typography>      

          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
           <strong>5. Número de referencia:</strong>Un identificador único del pago.
          </Typography>

          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
           <strong>6. Importe pagado:</strong> El monto que se pagó.
          </Typography>

          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
           <strong>7. Fecha de pago:</strong>La fecha en que se realizó el pago.
          </Typography>

          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
           <strong>8. Estado:</strong> El estado del pago, que puede ser "Pagado", "Pendiente", entre otros.
          </Typography>
        </section>
        

        <Divider sx={{ margin: "16px 0" }} />



    

        {/* Guardar */}
        <section id="guardar">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
          Botón: Comprar Plan
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
          <strong>¿Qué sucede al hacer clic en "Comprar plan"?</strong> Al hacer clic en este botón, serás redirigido a la página donde puedes seleccionar y comprar el plan que deseas. Podrás ver diferentes opciones de precios y características para elegir el plan que mejor se adapte a tus necesidades.
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
          <strong>Consejo adicional: </strong>Revisa la fecha de vencimiento para asegurarte de que tu plan esté vigente antes de que se agote el tiempo. Si estás utilizando un plan de prueba, no olvides comprar un plan adecuado antes de que finalice el período de prueba.
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
                <Link href="/usuarios" sx={{ textDecoration: "none", color: "#1976d2" }}>
                  Añadir un nuevo Empleado
                </Link>
              </li>
              <li>
                <Link href="/roles" sx={{ textDecoration: "none", color: "#1976d2" }}>
                  Gestionar roles de usuarios
                </Link>
              </li>
              <li>
                <Link href="/Configuracion" sx={{ textDecoration: "none", color: "#1976d2" }}>
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

export default Planes;
