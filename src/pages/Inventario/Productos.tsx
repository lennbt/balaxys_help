import { Box, Typography, List, ListItem, ListItemText, Divider, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";


const Productos = () => {
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
            <Link href="#importancia" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="¿Por qué es importante la sección de Productos y Servicios?" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#acceso" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="¿Cómo acceder a la sección de Productos y Servicios?" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#crear" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Pasos para crear un nuevo producto en Balaxys" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#tipoproducto" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Detalle para el campo Tipo Producto" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#visualizar" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Visualizar y Administrar Productos Existentes" />
            </Link>
          </ListItem>
        </List>
      </Box>

      {/* Contenido de la página */}
      <Box sx={{ flex: 3, overflowY: "auto" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Productos y Servicios en Balaxys
        </Typography>
         <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
            La funcionalidad de Productos y Servicios te permite gestionar todo el ciclo de vida de los productos que ofreces en tu sistema Balaxys. Desde la creación de nuevos productos hasta la modificación de los existentes, pasando por su clasificación y asignación de precios. Es una herramienta clave para mantener un control exacto de tu inventario y asegurar una gestión eficiente de tu negocio.
          </Typography>

        <section id="importancia">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px",textAlign: "justify" }}>
            ¿Por qué es importante la sección de Productos y Servicios?
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px",textAlign: "justify" }}>
            <strong>Gestión Completa del Inventario:</strong> La sección de Productos y Servicios permite una gestión completa y centralizada del inventario. Gracias a esta funcionalidad, puedes agregar, modificar, y clasificar todos los productos de manera eficiente, lo que te permite tener un control detallado sobre tu stock, evitando pérdidas y desajustes en la cantidad disponible.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px",textAlign: "justify" }}>
            <strong>Organización de Productos:</strong> A través de esta sección, puedes categorizar y organizar tus productos de manera lógica. Esto no solo ayuda a tener un inventario ordenado, sino también a facilitar la búsqueda y localización de productos en el sistema, permitiendo una gestión más ágil y eficaz.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px",textAlign: "justify" }}>
            <strong>Optimización de Precios y Costos:</strong> La posibilidad de ingresar precios de venta y costos asociados a cada producto garantiza que el negocio pueda hacer un seguimiento de su rentabilidad. Al configurar correctamente los productos, se facilita la toma de decisiones sobre precios y márgenes de beneficio, lo que optimiza los recursos de la empresa.
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
          
        </section>

        <section id="acceso">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px",textAlign: "justify" }}>
            ¿Cómo acceder a la sección de Productos y Servicios?
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px",textAlign: "justify" }}>
            Para acceder a la sección de Productos y Servicios y comenzar a gestionar los productos de tu inventario, sigue estos sencillos pasos:
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px",textAlign: "justify" }}>
            1. Menú de Inventario:
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            En Balaxys, dirígete al menú "Inventario" ubicado en la barra de navegación principal. Allí encontrarás todas las opciones relacionadas con la gestión de tus productos y servicios.
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px",textAlign: "justify" }}>
            2. Seleccionar la opción "Nuevo Producto":
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            Dentro del menú de "Inventario", selecciona la opción "Nuevo Producto" para agregar un nuevo artículo a tu sistema.
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="crear">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px",textAlign: "justify" }}>
            Pasos para crear un nuevo producto en Balaxys
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px",textAlign: "justify" }}>
            1. Datos Generales:
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            Esta es la información básica que identifica al producto o servicio dentro del sistema:
            <ul>
              <li><strong>Nombre del Producto:</strong> Asigna un nombre único y representativo al producto.</li>
              <li><strong>SKU:</strong> Introduce un código único de producto (Stock Keeping Unit), utilizado para identificarlo de manera exclusiva.</li>
              <li><strong>Descripción Técnica:</strong> Proporciona una breve descripción técnica o característica del producto.</li>
              <li><strong>Precio:</strong> Define el precio de venta al público del producto.</li>
              <li><strong>Costo:</strong> Establece el costo asociado al producto para controlar la rentabilidad.</li>
              <li><strong>UM (Unidad de Medida):</strong> Asigna la unidad de medida correspondiente (por ejemplo, unidad, litro, kilo, etc.).</li>
            </ul>
          </Typography>

{/* Inserta la imagen aquí */}
<Box sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
  <img
    src="src\assets\images\imagen1.png" // Reemplaza con la ruta correcta de la imagen
    alt="Imagen de ejemplo de producto"
    style={{ maxWidth: "80%", height: "auto", borderRadius: "8px" }}
  />
</Box>




          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px" ,textAlign: "justify"}}>
            2. Opciones Avanzadas:
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            Si tu producto tiene <Link href="/atributos" sx={{ textDecoration: "underline", color: "#1976d2", "&:hover": { textDecoration: "none",  }, }}>  variantes</Link>, como diferentes tamaños o colores, puedes agregarlas aquí.
            <ul>
              <li><strong>Producto con Variantes:</strong> Esta opción te permite definir diferentes variantes del producto.</li>
            </ul>
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px" ,textAlign: "justify"}}>
            3. Categorización:
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            Esta parte permite organizar el producto dentro de tu inventario para facilitar su búsqueda y clasificación.
            <ul>
              <li><strong>Categoría:</strong> Selecciona la categoría que mejor describa al producto.</li>
              <li><strong>Subcategoría:</strong> Si es necesario, puedes asignar una subcategoría.</li>
              <li><strong>Tipo de Producto:</strong> Define si el producto es para venta, insumo, activo fijo, etc.</li>
            </ul>
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px",textAlign: "justify" }}>
            4. Información de Impuestos:
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            Esta sección permite calcular los impuestos asociados al producto, de acuerdo con las tasas de IVA aplicables.
            <ul>
              <li><strong>IVA venta y compra:</strong> Establece las tasas de IVA tanto para la venta como para la compra de este producto.</li>
            </ul>
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px",textAlign: "justify" }}>
            5. Lista de Precios:
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            Si necesitas gestionar diferentes precios para el producto, esta sección te permite añadir varias listas de precios.
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px",textAlign: "justify" }}>
            6. Información Contable:
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            La asignación de cuentas contables asegura que el producto esté integrado correctamente en el sistema contable de la empresa.
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px",textAlign: "justify" }}>
            7. Información de Seguimiento:
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            Esta sección es útil si necesitas agregar información adicional para el seguimiento del producto, como códigos secundarios o de fabricación.
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>


        <section id="tipoproducto">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px",textAlign: "justify" }}>
          Detalle para el campo "Tipo producto"
          </Typography>

          <Typography variant="body1" sx={{ textAlign: "justify" }}>
          El campo "Tipo producto" es una lista desplegable obligatoria que permite clasificar los productos en diferentes categorías según su propósito o uso dentro de la organización. A continuación, se detalla cada opción disponible:
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px",textAlign: "justify" }}>
          1.	Para la Venta o Insumo:
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            <ul>
              <li><strong>Descripción:</strong> Productos adquiridos para ser vendidos directamente o utilizados como insumos en la producción de otros productos.</li>
              <li><strong>Ejemplos:</strong> Materias primas,  Mercancías para la venta.</li>
              
            </ul>
          </Typography>


          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px",textAlign: "justify" }}>
          2.	Activo Fijo
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            Esta es la información básica que identifica al producto o servicio dentro del sistema:
            <ul>
              <li><strong>Descripción:</strong> Bienes adquiridos para ser utilizados en las operaciones de la empresa durante un período prolongado, no para la venta.</li>
              <li><strong>Ejemplos:</strong> Vehículos,  Mobiliario.</li>
              
            </ul>
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px",textAlign: "justify" }}>
          3.	Útil o Herramienta
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            
            <ul>
              <li><strong>Descripción:</strong> Herramientas o equipos de menor valor y uso recurrente que no califican como activos fijos pero son esenciales para las operaciones, no para la venta.</li>
              <li><strong>Ejemplos:</strong> Destornilladores,  Artículos de oficina.</li>
              
            </ul>
          </Typography>


          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px",textAlign: "justify" }}>
          4.	Producto Elaborado:
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            
            <ul>
              <li><strong>Descripción:</strong> Productos terminados que han sido fabricados o ensamblados por la empresa y están listos para la venta</li>
              <li><strong>Ejemplos:</strong> Ropa confeccionada,  Alimentos procesados.</li>
              
            </ul>
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
          </section>

          <section id="visualizar">
  <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}>
    Visualizar y Administrar Productos Existentes
  </Typography>
  <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
    En la sección de Productos, podrás ver una lista completa de todos los productos registrados en el sistema, lo que te permitirá administrar tu inventario de manera eficiente.
  </Typography>
  
  <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
    1. Listado de Productos
  </Typography>
  <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
    La sección "Productos" muestra todos los productos registrados, con detalles como:
  </Typography>
  <Typography variant="body1" sx={{ marginLeft: "40px", textAlign: "justify" }}>
    - <strong>SKU:</strong> Identificador único del producto.
  </Typography>
  <Typography variant="body1" sx={{ marginLeft: "40px", textAlign: "justify" }}>
    - <strong>Nombre:</strong> Nombre del producto.
  </Typography>
  <Typography variant="body1" sx={{ marginLeft: "40px", textAlign: "justify" }}>
    - <strong>Tipo:</strong> Categoría o tipo de producto (por ejemplo, bicicleta, camiseta, etc.).
  </Typography>
  <Typography variant="body1" sx={{ marginLeft: "40px", textAlign: "justify" }}>
    - <strong>Existencia:</strong> Cantidad disponible de cada producto.
  </Typography>
  <Typography variant="body1" sx={{ marginLeft: "40px", textAlign: "justify" }}>
    - <strong>P. Reorden:</strong> Cantidad de producto a partir de la cual se recomienda realizar un nuevo pedido para reponer el inventario.
  </Typography>
  <Typography variant="body1" sx={{ marginLeft: "40px", textAlign: "justify" }}>
    - <strong>Costo:</strong> Costo de adquisición o fabricación del producto.
  </Typography>
  <Typography variant="body1" sx={{ marginLeft: "40px", textAlign: "justify" }}>
    - <strong>Precio Venta:</strong> Precio de venta sugerido o establecido para el producto.
  </Typography>
  <Typography variant="body1" sx={{ marginLeft: "40px", textAlign: "justify" }}>
    - <strong>IVA Compra y Venta:</strong> Porcentaje de IVA aplicado a la compra y venta del producto.
  </Typography>
  <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
    Puedes utilizar filtros en la barra de búsqueda (por SKU, nombre, tipo, etc.) para ubicar rápidamente un producto específico.
  </Typography>
  
  <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
    2. Edición y Eliminación de Productos
  </Typography>
  <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
    - <strong>Modificar un Producto Existente:</strong> Para editar un producto, simplemente haz clic en el ícono de lápiz (Editar) en la columna "Acciones". Esto te permitirá modificar cualquier campo de ese producto, como el precio, el costo, la existencia, y más.
  </Typography>
  <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
    - <strong>Eliminar o Anular un Producto:</strong> Si necesitas eliminar o anular un producto en el sistema, haz clic en el ícono de papelera (Eliminar) junto al producto que deseas eliminar. Esta acción puede ser útil si se desea eliminar un producto que ya no es relevante en tu inventario o si cometiste un error en su registro.
  </Typography>
  <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
    <em>Nota: Ten en cuenta que algunas opciones de eliminación o edición pueden estar restringidas dependiendo de la configuración de tu sistema o de permisos específicos establecidos.</em>
  </Typography>
  
  <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
    3. Añadir Nuevos Productos
  </Typography>
  <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
    Para añadir un nuevo producto, simplemente haz clic en el botón "Nuevo producto" en la parte superior derecha de la página. Esto abrirá un formulario donde podrás ingresar toda la información necesaria, como el nombre del producto, descripción, precio, costo, IVA, entre otros.
  </Typography>
  
  <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
    4. Acciones Rápidas
  </Typography>
  <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
    Además de editar y eliminar productos, también puedes realizar otras acciones rápidas, como visualizar el producto (ícono del ojo), exportar los datos o generar informes.
  </Typography>
  
  <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
    5. Organización del Inventario
  </Typography>
  <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
    La vista de lista te permite tener un control total sobre los productos en tu inventario. Gracias a las opciones de búsqueda y filtros, puedes localizar rápidamente los productos que necesitan atención, como aquellos que están por debajo del nivel de existencia o aquellos que requieren actualización de precios.
  </Typography>

  <Divider sx={{ margin: "16px 0" }} />
</section>
        {/* Artículos relacionados */}
        <section id="articulos-relacionados">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px",textAlign: "justify" }}>
            Artículos Relacionados
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px",textAlign: "justify" }}>
            Aquí algunos artículos y guías relacionadas con la gestión de productos en Balaxys:
            <ul>
             
              <li><Link href="/inventario">Gestionar inventarios</Link></li>
              <li><Link href="/proveedores/orden-de-compra">Crear una orden de compra</Link></li>
      
            </ul>
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>
      </Box>
    </Box>
  );
};

export default Productos;
