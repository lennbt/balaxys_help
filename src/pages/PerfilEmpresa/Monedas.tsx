import { Box, Typography, Divider, List, ListItem, Link, ListItemText } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

const Monedas: React.FC = () => {
  

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
          textAlign: "left", // Asegura que el índice esté alineado a la izquierda
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "16px", color: "#1976d2" }}>
       
        </Typography>
        <List>
          <ListItem>
            <Link href="#introduccion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Introducción" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#configuracion-monedas" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Configuración de Monedas" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#beneficios" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Beneficios de usar Monedas" />
            </Link>
          </ListItem>
        </List>
      </Box>

      {/* Contenido de la página */}
      <Box sx={{ flex: 3, overflowY: "auto" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Configuración de Monedas
        </Typography>

        <Divider sx={{ margin: "16px 0" }} />
        <section id="introduccion">
          
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
          La funcionalidad de "Monedas" en Balaxys te permite configurar y administrar las diferentes divisas en las que realiza operaciones tu empresa. Esto es fundamental si tu negocio que manejan múltiples monedas, ya que facilita la facturación, contabilidad y reportes financieros en cada divisa, garantizando precisión y flexibilidad en el manejo de transacciones internacionales.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
          ¿Qué son las Monedas en Balaxys?
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
          Las "Monedas" en Balaxys representan las divisas que tu empresa acepta para realizar ventas, compras y otras transacciones. Al configurar las monedas, puedes asignar tasas de cambio, símbolos y formatos específicos, permitiendo que el sistema refleje correctamente el valor en cada operación y que los informes financieros muestren información precisa y actualizada.
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="crear">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px",textAlign: "justify" }}>
            Pasos para crear una nueva moneda en Balaxys
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px",textAlign: "justify" }}>
          1.	Accede a la Sección de Monedas:
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
   
            <ul>
              <li>Navega a "Configuración" y selecciona la opción "Monedas" dentro del recuadro Contabilidad  </li>
           
            </ul>
          </Typography>


          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px" ,textAlign: "justify"}}>
          2.	Crear una Nueva Moneda:
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            
            <ul>
              <li>Haz clic en el  botón <strong>"Nueva Moneda"</strong> .</li>
              <li>Completa el formulario con la información requerida:</li>
              <Typography variant="body1" sx={{ marginLeft: "14px", textAlign: "justify" }}>
              
  <li><strong>Nombre de la Moneda: </strong> El nombre completo de la divisa (por ejemplo, dólar estadounidense, Euro, Peso Mexicano).</li>
  <li><strong>Tasa de cambio: </strong> Establece una tasa predeterminada respecto a la moneda base de tu empresa.</li>
  

              </Typography>
            </ul>
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px" ,textAlign: "justify"}}>
          3.	Modificar o Eliminar Monedas:
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>

            <ul>
              <li>Desde la lista de monedas configuradas, puedes editar una moneda existente haciendo clic en el icono <strong>"Editar".</strong>  Al edidar una moneda el sistema actualiza la tasa de cambio de forma automática </li>
             
              <li>Para eliminar una moneda, selecciona el icono <strong>"Eliminar"</strong>  junto a la moneda deseada y confirma la acción. Recuerda que solo podrás eliminar monedas que no estén asociadas a transacciones activas.</li>
            </ul>
          </Typography>

          
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="beneficios">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Beneficios de usar Monedas en Balaxys
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            Al utilizar el sistema de monedas de Balaxys, obtienes varias ventajas:
            <ul>
              <li><strong>Adaptabilidad internacional:</strong> Puedes gestionar transacciones en múltiples monedas, lo cual es esencial si trabajas con clientes o proveedores internacionales.</li>
              <li><strong>Automatización de conversiones:</strong> Balaxys realiza automáticamente la conversión entre diferentes monedas utilizando las tasas de cambio predefinidas.</li>
              <li><strong>Facilidad de reporte:</strong> Los informes generados por Balaxys reflejan correctamente todas las conversiones de moneda y proporcionan detalles claros sobre las transacciones realizadas en diferentes monedas.</li>
            </ul>
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="articulos-relacionados">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Artículos Relacionados
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            Aquí algunos artículos y guías relacionadas con la gestión de monedas en Balaxys:
            <ul>
              <li>
                <Link href="/productos" sx={{ textDecoration: "none", color: "#1976d2" }}>
                  Agregar un nuevo producto
                </Link>
              </li>
              <li>
                <Link href="/ajustes-inventario" sx={{ textDecoration: "none", color: "#1976d2" }}>
                  Ajustes de inventario
                </Link>
              </li>
              <li>
                <Link href="/productos-orden-compra" sx={{ textDecoration: "none", color: "#1976d2" }}>
                  Crear una orden de compra
                </Link>
              </li>
              <li>
                <Link href="/productos-listas-precios" sx={{ textDecoration: "none", color: "#1976d2" }}>
                  Consultas de precios y descuentos
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

export default Monedas;
