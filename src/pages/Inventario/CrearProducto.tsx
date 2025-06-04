import { Box, Typography, Divider, List, ListItem, Link, ListItemText } from "@mui/material";

const CrearProductos = () => {
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
            <Link href="#datos-generales" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Datos Generales" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#opciones-avanzadas" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Opciones Avanzadas" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#categorizacion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Categorización" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#informacion-impuestos" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Información de Impuestos" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#lista-precios" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Lista de Precios" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#informacion-contable" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Información Contable" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#informacion-seguimiento" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Información de Seguimiento" />
            </Link>
          </ListItem>
        </List>
      </Box>

      {/* Contenido de la página */}
      <Box sx={{ flex: 3, overflowY: "auto" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Pasos para Crear un Nuevo Producto en Balaxys
        </Typography>

        <Divider sx={{ margin: "16px 0" }} />
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

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px" ,textAlign: "justify"}}>
            2. Opciones Avanzadas:
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            Si tu producto tiene variantes, como diferentes tamaños o colores, puedes agregarlas aquí.
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
        
      </Box>
    </Box>
  );
};

export default CrearProductos;
