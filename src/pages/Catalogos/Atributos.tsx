
import { Box, Typography, Divider, List, ListItem, Link, ListItemText  } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";



const Atributos = () => {
  

  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* Índice de navegación */}
      <Box
        sx={{
          flex: 1,
          position: "sticky",
          top: 20,
          height: "100vh",
          paddingRight: "20px",
          paddingLeft: "20px",
          overflowY: "auto",
          textAlign: "left",
        }}
      >
        
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "16px", color: "#1976d2" }}>
          
        </Typography>
        <List>
          <ListItem>
            <Link href="#atributos" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Configurar los atributos del producto" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#gestionar-atributos" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Gestionar los atributos del producto" />
            </Link>
          </ListItem>
        </List>
      </Box>

      {/* Contenido de la página */}
      <Box sx={{ flex: 3, overflowY: "auto" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Agregar Atributos para Variantes de Producto
        </Typography>

        <Divider sx={{ margin: "16px 0" }} />

        {/* Sección de ayuda */}
        <section id="atributos">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Pasos para Configurar los Atributos del Producto
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            En esta sección, puedes configurar los atributos que definirán las variantes de tu producto. Los atributos son características que permiten a los productos tener diferentes opciones, como color, talla, material, etc.
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
          1. Acceder a la opción "Configurar variantes":
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            
            <ul>
              <li><strong>Productos con Variantes:</strong> Dentro del formulario de creación o edición de un producto, en la sección <strong>"Opciones Avanzadas" </strong>busca la opción <strong>Producto con variantes</strong>.</li>
                      
            </ul>

          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
          2. Configurar Variantes:
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            
            <ul>
              <li>En esta sección, podrás agregar los atributos que deseas agregar a tu producto. Los atributos son características que definen las variantes del producto, como el color o la talla.</li>
              <li>Haz clic en las casillas de selección junto a los atributos que deseas agregar, por ejemplo:</li>
              <Typography variant="body1" sx={{ marginLeft: "14px", textAlign: "justify" }}>   
              <li><strong>Color</strong> </li>
              <li><strong>Talla</strong> </li>
              </Typography>
              <li>Los atributos seleccionados aparecerán en el panel de la derecha, y puedes continuar seleccionando los valores para cada uno.</li>
             
             
            </ul>

          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
          3. Elegir los valores de los Atributos:
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            
            <ul>
              <li>A la derecha de cada atributo seleccionado, aparecerá una lista de valores posibles.</li>
              <li>Haz clic en los valores que deseas asignar al producto. Por ejemplo:</li>
              <Typography variant="body1" sx={{ marginLeft: "14px", textAlign: "justify" }}>   
              <li>Para <strong>Color </strong>puedes seleccionar entre Rojo, Azul, Verde, etc.</li>
              <li>Para <strong>Talla </strong>puedes elegir entre S, M, L, XL, XXL, etc.</li>
              </Typography>
              <li>Los valores seleccionados se marcarán con un check verde.</li>
             
             
            </ul>

          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
          4. Agregar Más Atributos (opcional):
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            
            <ul>
              <li>Si deseas agregar más atributos, puedes hacer clic en <strong>"Agregar atributo"</strong>  y seguir los mismos pasos para seleccionar el nuevo atributo y sus valores.</li>
              </ul>
            </Typography>


            <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
           5.  Guardar Configuración:
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            
            <ul>
              <li>Una vez que hayas configurado todos los atributos y valores deseados, haz clic en <strong>"Guardar"</strong>  para aplicar los cambios.</li>
               <li>Esta configuración quedará guardada y podrás utilizarla en el producto para que los clientes puedan elegir entre las distintas variantes durante el proceso de compra.</li>       
            </ul>

          </Typography>


        </section>

        <Divider sx={{ margin: "16px 0" }} />



        {/* Sección Gestionar listado de Atributos */}
        <section id="gestionar-atributos">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
          Gestionar el listado de Atributos de Productos
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
          Para acceder a la sección de  <strong>Atributos de Productos</strong> y comenzar a gestionar los productos de tu inventario, sigue estos sencillos pasos:
          </Typography>

          
          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px",textAlign: "justify" }}>
            1. Menú de Catálogos:
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            En Balaxys, dirígete al menú "Catálogos" ubicado en la barra de navegación principal. Allí encontrarás todas las opciones relacionadas con la gestión de los principales nomencladorres.
          </Typography>
          <Typography variant="body1" sx={{  marginBottom: "4px",textAlign: "justify" }}>
            2. Seleccionar la opción "Atributos de productos":
          </Typography>
          
          <Divider sx={{ margin: "16px 0" }} />

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
          2. Visualizar Atributos:
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            
            <ul>
              <li>En esta sección, podrás ver  los atributos que Balaxys a cargado por defecto. Los atributos son características que definen las variantes del producto, como el color o la talla.</li>
              <li>Puedes ver los valores asociados a cada atributo, por ejemplo, en "Color" los valores son "Rojo", "Azul", etc.</li>
                              
            </ul>

          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
          3. Acciones Disponibles:
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            
            <ul>
              <li><strong>Editar:</strong> Haz clic en el ícono de lápiz para modificar un atributo y sus valores.</li>
              <li> <strong>Ver: </strong> Haz clic en el ícono de ojo para visualizar los detalles del atributo.</li>
              <li><strong>Eliminar:</strong> Haz clic en el ícono de papelera para eliminar un atributo de la lista. Nota: Esta acción no se puede deshacer</li>
              
             
             
            </ul>

          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
          4. Pasos para llenar el formulario de "Nuevo Atributo"
        
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            
            <ul>
              <li><strong>Nombre del Atributo:</strong>  Ingresa el nombre del atributo (por ejemplo, "Color").</li>
               <li><strong>Opciones:</strong> Escribe los valores para ese atributo (por ejemplo, "Rojo" y "Azul").</li>
               <li> <strong>Agregar Opciones: </strong>Si necesitas más valores, haz clic en  <strong>"Nueva Opción" </strong> para añadir más.</li>       
               <li><strong> Eliminar Opciones:</strong> Haz clic en la "X" para eliminar una opción si es necesario.</li>    
               <li><strong>Guardar: </strong> Haz clic en <strong>"Guardar" </strong>para  guardar el atributo y sus opciones.</li>    
               <li><strong> Cancelar:</strong> Haz clic en <strong>"Cancelar" </strong> si no deseas guardar los cambios.</li>    
               
               
            </ul>

          </Typography>


        </section>







        

        {/* Artículos relacionados */}
        <section id="articulos-relacionados">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Artículos Relacionados
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            Aquí algunos artículos y guías relacionadas con la gestión de atributos y variantes en Balaxys:
            <ul>
              <li><Link href="/productos">Productos y Servicios en Balaxys</Link></li>
              <li><Link href="/inventario">Gestionar inventarios</Link></li>
              <li><Link href="/productos-orden-compra">Crear una orden de compra</Link></li>
              <li><Link href="/productos-listas-precios">Consultas de precios y descuentos</Link></li>
            </ul>
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>
      </Box>
    </Box>
  );
};

export default Atributos;
