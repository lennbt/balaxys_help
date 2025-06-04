import { Box, Typography, List, ListItem, ListItemText, Divider, Link  } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
 import { Link as RouterLink } from "react-router-dom";

const QueEsLaSeccionInventario = () => {
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
            <Link href="#productos" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Productos y Servicios" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#ajustes" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Ajustes de Inventario" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#vales" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Vales de Salida" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#analisis" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Análisis de Inventario" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#devolucion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Devolución de Vales de Salida" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#listas" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Listas de Precios" />
            </Link>
          </ListItem>
        </List>
      </Box>

      {/* Contenido de la página */}
      <Box sx={{ flex: 3, overflowY: "auto" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          ¿Qué es la Sección de Inventario en Balaxys?
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
        La sección de Inventario en Balaxys es una herramienta integral que permite gestionar todo el ciclo de vida de los <MuiLink component={RouterLink} to="/inventario/productos" sx={{textDecoration: "underline",color: "#1976d2","&:hover": {textDecoration: "none",  }, }}>productos</MuiLink> y servicios dentro de la empresa. Desde la creación y clasificación de productos hasta la actualización de cantidades y precios, todo está centralizado en esta sección para garantizar una gestión eficiente y en tiempo real. El sistema no solo facilita el seguimiento de los productos, sino que también permite ajustes, análisis y la correcta asignación de precios, lo que optimiza la operación de los almacenes y la toma de decisiones en la cadena de suministro.

A través de la sección de Inventario, los usuarios pueden controlar el stock de productos, realizar ajustes de inventario según sea necesario, gestionar la salida de productos mediante vales y analizar el desempeño del inventario de manera detallada. Además, proporciona funcionalidades avanzadas como la devolución de vales de salida, lo que asegura un control exhaustivo sobre los movimientos de inventario.
        </Typography>
        
        <Divider sx={{ margin: "16px 0" }} />

        <section id="productos">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px"}}>
            Productos y Servicios
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
            En Balaxys, los productos y servicios se gestionan de forma integral. Puedes crear nuevos productos, asignarles características, definir variantes y realizar un seguimiento detallado del inventario. Además, puedes crear servicios personalizados que no requieren gestión de stock pero que son parte fundamental de tus operaciones.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            <Typography><strong>Crear nuevos productos o servicios: </strong>Esto incluye la creación de productos con variantes, como diferentes tamaños o colores, y la asignación de atributos específicos a cada uno.</Typography> 
            <Typography><strong>Editar y organizar los productos existentes:</strong> Los productos pueden clasificarse en categorías y se pueden agregar a listas de precios específicas o grupos de variantes.</Typography> 
            <Typography><strong>Asignar unidades de medida: </strong>Esto permite definir la unidad en que se mide el producto, como kilogramos, unidades, litros, entre otros.</Typography>  
            <Typography><strong>Gestionar productos manufacturados:</strong> Esta opción facilita la gestión de productos que requieren ensamblaje, permitiendo asignar componentes y materiales a productos finales.</Typography> 
            </Typography>
          </Box>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="ajustes">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Ajustes de Inventario
            </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
          Los ajustes de inventario te permiten corregir o modificar las cantidades físicas de los productos, ya sea para corregir errores de registro, cuadrar diferencias de inventarios tras conteos físicos o ajustar valores. En Balaxys es una herramienta clave para mantener la exactitud de tus registros de inventario y asegurar que las cantidades reflejadas en el sistema coincidan con las existencias reales.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            <Typography><strong>Corregir diferencias de stock: </strong>Estos ajustes pueden ser necesarios cuando las cantidades registradas no coinciden con las cantidades físicas debido a errores en el conteo, pérdidas, o devoluciones no registradas</Typography> 
            <Typography><strong>Actualizar valores o precios: </strong> A veces, es necesario ajustar los precios de los <MuiLink component={RouterLink} to="/inventario/productos" sx={{textDecoration: "underline",color: "#1976d2","&:hover": {textDecoration: "none",  }, }}>productos</MuiLink> en función de cambios en los costos o la valoración del mercado.</Typography> 
            <Typography><strong>Registrar la entrada o salida de productos no documentada: </strong>Si un producto se recibe o se envía sin pasar por el proceso normal, un ajuste puede registrarlo en el sistema.</Typography>  
            
            </Typography>
          </Box>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="vales">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Vales de Salida
            </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
          La funcionalidad de “Vales de Salidas” te permite registrar el egreso de productos o materiales desde un almacén hacia un destino específico, reflejando el valor de esa salida en la contabilidad de forma automática. Este proceso es especialmente útil cuando los artículos se emplean en operaciones internas (por ejemplo, transformaciones, entregas para producción o consumo interno), sin generar ventas directas. Esta funcionalidad permite:
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            <Typography><strong>Generar vales de salida:  </strong>Los usuarios pueden crear vales que documentan el movimiento de productos fuera del almacén</Typography> 
            <Typography><strong>Control de movimientos:  </strong> Se puede controlar el destino de los productos, por ejemplo, si se van con destino a insumos, activos fijos, útiles o herramientas a otro almacén</Typography> 
            <Typography><strong>Automatización de ajustes:  </strong>Cada vez que un vale de salida se emite, el sistema actualiza automáticamente el inventario, reduciendo las existencias del almacén correspondiente.</Typography>  
            
            </Typography>
          </Box>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="analisis">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Análisis de Inventario
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
            El análisis de inventario es una herramienta que permite visualizar el estado del inventario, identificar tendencias de consumo, rotación de productos y detectar posibles problemas en la gestión del stock. Balaxys ofrece reportes y análisis avanzados para que puedas tomar decisiones informadas basadas en datos actualizados.
            </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            <Typography><strong>Monitorear existencias y tendencias  </strong>Proporciona reportes detallados sobre los niveles de stock, lo que permite identificar productos con alta rotación o aquellos que están quedando obsoletos.</Typography> 
            <Typography><strong>Generar informes de ventas e inventario:  </strong> Los informes pueden incluir datos como la cantidad de productos vendidos, las existencias actuales y las tendencias de consumo, lo que ayuda en la toma de decisiones de compra.</Typography> 
            <Typography><strong>Optimizar la reposición de inventarios:  </strong>Gracias a los análisis, la empresa puede saber cuándo y qué productos necesitan ser reabastecidos, evitando tanto los sobrestocks como los desabastecimientos.</Typography>  
            
            </Typography>
          </Box>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="devolucion">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Devolución de Vales de Salida
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
          La opción de Devolución de Vales de Salida permite gestionar las devoluciones de productos previamente enviados desde el almacén. Esta funcionalidad es crucial cuando los productos no son utilizados, son devueltos por los clientes o necesitan ser rectificados. Los usuarios pueden:
            </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            <Typography><strong>Registrar devoluciones:  </strong>Cuando un cliente regresa productos o se corrige un error en la salida de inventario, la devolución puede registrarse y el sistema actualizará el inventario en consecuencia.</Typography> 
            <Typography><strong>Modificar el stock de inventario:  </strong> A medida que los productos regresan, el stock se ajusta para reflejar las cantidades devueltas.</Typography> 
            <Typography><strong>Generar reportes de devoluciones:  </strong>Esta opción permite visualizar y analizar las devoluciones realizadas, lo que puede ayudar a detectar problemas con productos defectuosos o con el proceso de venta.</Typography>  
            
            </Typography>
          </Box>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="listas">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Listas de Precios
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
            Las listas de precios permiten gestionar los precios de los productos y servicios dentro de Balaxys. Puedes asignar precios específicos a diferentes clientes, aplicar descuentos y definir precios personalizados según las necesidades del negocio. Esta funcionalidad es fundamental para mantener la competitividad y coherencia en los precios.
            </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            <Typography><strong>Crear y asignar listas de precios personalizadas </strong>Esto incluye la asignación de precios especiales para grupos de clientes o segmentos específicos.</Typography> 
            <Typography><strong>Actualizar precios rápidamente:  </strong> Permite modificar los precios de manera global o por productos individuales, lo cual es esencial cuando hay cambios en los costos o la estrategia comercial.</Typography> 
            <Typography><strong>Aplicar descuentos y promociones:  </strong>Balaxys permite configurar descuentos o promociones especiales que se aplican automáticamente según ciertas condiciones, facilitando la venta de productos a precios competitivos.</Typography>  
            
            </Typography>
          </Box>
          <Divider sx={{ margin: "16px 0" }} />
          </section>
{/* Artículos relacionados */}
<section id="articulos-relacionados">
  <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}>
    Artículos Relacionados
  </Typography>
  <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
    Aquí algunos artículos y guías relacionadas con la gestión de productos en Balaxys:
    <ul>
      <li>
        <Link href="/inventario/productos"sx={{ textDecoration: "none", color: "#1976d2" }}>
          Productos y Servicios en Balaxys
        </Link>
      </li>
      <li>
        <Link href="/inventario/ajuste-inventario" sx={{ textDecoration: "none", color: "#1976d2" }}>
          Ajustes de Inventario
        </Link>
      </li>
      <li>
        <Link href="/inventario/vales-salida" sx={{ textDecoration: "none", color: "#1976d2" }}>
          Vales de Salida
        </Link>
      </li>
      
      <li>
        <Link href="/inventario/devolucion-vale-salida" sx={{ textDecoration: "none", color: "#1976d2" }}>
          Devolución de Vales de Salida
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

export default QueEsLaSeccionInventario;
