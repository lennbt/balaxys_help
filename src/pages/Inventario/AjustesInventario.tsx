import { Box, Typography, List, ListItem, ListItemText, Divider, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

const AjustesInventario = () => {
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
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "16px", color: "#000", "&:hover": { color: "#1976d2" } }}>
          Índice
        </Typography>
        <List>
          <ListItem>
            <Link href="#importancia" sx={{ textDecoration: "none", color: "#000", "&:hover": { color: "#1976d2" } }}>
              <ListItemText primary="¿Por qué son importantes los Ajustes de Inventario?" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#acceso" sx={{ textDecoration: "none", color: "#000", "&:hover": { color: "#1976d2" } }}>
              <ListItemText primary="¿Cómo Acceder a los Ajustes de Inventario?" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#crear" sx={{ textDecoration: "none", color: "#000", "&:hover": { color: "#1976d2" } }}>
              <ListItemText primary="Crear un Nuevo Ajuste de Inventario" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#visualizar" sx={{ textDecoration: "none", color: "#000", "&:hover": { color: "#1976d2" } }}>
              <ListItemText primary="Visualizar y Administrar Ajustes Existentes" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#consejos" sx={{ textDecoration: "none", color: "#000", "&:hover": { color: "#1976d2" } }}>
              <ListItemText primary="Consejos para un Mejor Control de Inventario" />
            </Link>
          </ListItem>
        </List>
      </Box>

      {/* Contenido de la página */}
      <Box sx={{ flex: 3, overflowY: "auto" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Ajustes de Inventario en Balaxys
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "20px" }}>
          Los ajustes de inventario son operaciones que te permiten corregir o modificar las cantidades físicas de los <Link href="/productos" sx={{ textDecoration: "underline", color: "#1976d2", "&:hover": { textDecoration: "none",  }, }}>  productos</Link> en tu inventario. Con esta funcionalidad, puedes cuadrar diferencias detectadas durante conteos físicos, actualizar saldos tras devoluciones no registradas o corregir errores de registro, asegurando que tu sistema muestre con exactitud las existencias reales de cada artículo.
        </Typography>

        <Divider sx={{ margin: "16px 0" }} />

        <section id="importancia">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            ¿Por qué son importantes los Ajustes de Inventario?
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px" }}>
            1. Exactitud en los Registros:
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
              Mantener los datos de inventario al día evita sobrecostos, faltantes y diferencias no detectadas que podrían afectar la rentabilidad.
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px" }}>
            2. Control de Errores:
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
              Permite identificar y corregir errores de registro ocasionados por un conteo previo, por una entrada o salida no registrada, o por daños y pérdidas de mercancía.
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px" }}>
            3. Soporte a la Toma de Decisiones:
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
              Con un inventario confiable, la planificación de compras, ventas y producción será más precisa, optimizando los recursos de la empresa.
            </Typography>
          </Box>

          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="acceso">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            ¿Cómo Acceder a los Ajustes de Inventario?
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: "16px" }}>
            Para acceder a los ajustes de inventario, simplemente sigue los siguientes pasos:
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px" }}>
            1. Menú de Inventario:
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
              En Balaxys la opción de <strong>“Ajustes de Inventario”</strong> está disponible en el menú <strong>“Inventario”</strong>.
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px" }}>
            2. Seleccionar “Ajustes de Inventario”:
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
              Haz clic para ingresar a la sección donde podrás crear, visualizar y administrar los distintos movimientos de ajuste.
            </Typography>
          </Box>

          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="crear">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Crear un Nuevo Ajuste de Inventario
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px" }}>
            Selecciona el Almacén
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
              Elige la bodega o almacén en el que se realizará el ajuste. Este campo es obligatorio para determinar dónde se aplicará la corrección de existencias.
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px" }}>
            Establece las Fechas
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
              <strong>Fecha de Emisión: </strong>Indica el día en que registras el ajuste de inventario.
              <Typography>
              <strong>Fecha de Confirmación: </strong>Puede usarse para indicar la fecha en que el ajuste queda oficialmente validado o finalizado.
              </Typography>
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px" }}>
            Centro de Costo (opcional)
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
              Si corresponde, asigna el ajuste a un centro de costo específico, lo que facilita el control y análisis contable de los movimientos de inventario.
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px" }}>
            Selecciona el “Tipo de Ajuste”
          </Typography>
          <Typography>
            <strong>Cantidad:</strong> Aplica cuando deseas modificar el número de unidades de un producto.
          </Typography>
          <Typography><strong>Precio: </strong>Se usa si requieres ajustar el costo o valor unitario de los artículos.</Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px" }}>
            Agrega los Ítems a Ajustar
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            <strong>- Código y Descripción:</strong> Identifican el artículo al cual quieres ajustar.
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            <strong>- UM (Unidad de Medida):</strong> Indica la presentación del producto (p. ej., “unidad”).
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            <strong>- Cantidad:</strong> El sistema muestra de forma automática la cantidad actual registrada.
          </Typography>

          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            <strong>- Precio:</strong> Refleja el precio unitario del producto.
          </Typography>

          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            <strong>- Nueva Cantidad / Nuevo Precio:</strong> Ingresa la cantidad o el valor actualizado.
          </Typography>

          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            <strong>- Nuevo Importe:</strong> El sistema calculará de forma automática el importe total resultante de la diferencia.
          </Typography>

          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            <strong>- Ajuste:</strong> El sistema calculará la diferencia entre el registro anterior y el nuevo, mostrando cuánto se ha incrementado o disminuido el inventario (en cantidad o valor).
          </Typography>

          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            - Puedes añadir tantas líneas como <Link href="/productos" sx={{ textDecoration: "underline", color: "#1976d2", "&:hover": { textDecoration: "none",  }, }}>  productos</Link> necesiten ajustes.
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px" }}>
            Verifica el “Nuevo Importe Total” y “Ajuste Total”
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            El sistema te mostrará la suma de los nuevos valores o cantidades y el importe total del ajuste. Asegúrate de que coincida con lo que deseas registrar.
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px" }}>
            Ingresa una Nota (opcional)
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            En el recuadro correspondiente, anota información adicional acerca del ajuste (por ejemplo, causas del ajuste, referencia a un conteo físico, etc.).
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px" }}>
            Guardar o Guardar y Confirmar
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            <strong>Guardar:</strong> Graba el ajuste en borrador o pendiente, permitiendo revisiones posteriores.
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            <strong>Guardar y Confirmar:</strong> Registra definitivamente el ajuste, bloqueando o limitando cambios posteriores.
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px" }}>
            Cerrar (opcional)
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            Si necesitas salir sin guardar cambios, utiliza “Cerrar”. Dependiendo de la configuración de Balaxys, podrías perder los datos no guardados.
          </Typography>

          <Divider sx={{ margin: "16px 0" }} />
        </section>

          <section id="visualizar">
        <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
        Visualizar y Administrar Ajustes Existentes
        </Typography>

        <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px" }}>
        1.	Listado de Ajustes:
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
                La sección “Ajustes de Inventario” muestra todos los movimientos registrados, con detalles como fecha, bodega, productos ajustados y cantidades.
                <Typography>Puedes utilizar filtros (por fecha, bodega, motivo, etc.) para ubicar rápidamente un ajuste específico.</Typography>
                
            </Typography>
            </Box>

            <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px" }}>
            2.	Edición y Eliminación:
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
                Para modificar un ajuste existente, busca la opción “Editar” junto a él.
                Si tu sistema lo permite y no hay restricciones, puedes “Eliminar” o “Anular” un ajuste para revertir sus efectos en el inventario.
            </Typography>
            </Box>

            <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px" }}>
            3.	Reportes y Auditoría:
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
                Balaxys ofrece la posibilidad de extraer reportes o imprimir un comprobante de los ajustes realizados. Esto es de utilidad en auditorías o controles internos para demostrar cuándo y por qué ocurrió una corrección en el inventario.

            </Typography>
            </Box>

            <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="consejos">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Consejos para un Mejor Control de Inventario
          </Typography>
          
          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px" }}>
          •	Realiza Conteos Periódicos:
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
                La frecuencia de los conteos dependerá del volumen y valor de los productos. Un conteo regular mejora la exactitud de tus datos.</Typography>
             
            </Box>

            <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px" }}>
            •	Registra Oportunamente las Salidas y Entradas:
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
                Asegúrate de que facturas, compras, devoluciones y transferencias entre bodegas estén reflejadas correctamente para minimizar la necesidad de ajustes manuales.
            </Typography>
            </Box>

            <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px" }}>
            •	Analiza las Causas de Ajustes Recurrentes:
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
                Si detectas que ciertos productos requieren ajustes frecuentes, puede haber un problema en la cadena de suministro, en los procedimientos de recepción o en la seguridad de tu inventario.

            </Typography>
            </Box>

            <Divider sx={{ margin: "16px 0" }} />
        </section>
      
        <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "20px" }}></Typography>
            Con los Ajustes de Inventario en Balaxys, tu empresa puede mantener la coherencia entre el inventario real y el registrado en el sistema, contribuyendo a decisiones logísticas y financieras más precisas. Si necesitas más detalles, revisa la documentación oficial de Balaxys o ponte en contacto con el equipo de soporte.
            
            <Divider sx={{ margin: "16px 0" }} />
         
{/* Artículos relacionados */}
<section>
  <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
    Artículos Relacionados
  </Typography>
  <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
    Aquí algunos artículos y guías relacionadas con la gestión de inventarios en Balaxys:
    <ul>
      <li>
        <Link href="/almacenes" sx={{ textDecoration: "none", color: "#1976d2" }}>
          Gestión de Almacenes
        </Link>
      </li>
      <li>
        <Link href="/productos" sx={{ textDecoration: "none", color: "#1976d2" }}>
          Gestión de Productos
        </Link>
      </li>
      <li>
        <Link href="/catalogos" sx={{ textDecoration: "none", color: "#1976d2" }}>
          Catálogos de Productos
        </Link>
      </li>
      <li>
        <Link href="/inventario/inventario" sx={{ textDecoration: "none", color: "#1976d2" }}>
          Sección Inventario
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

export default AjustesInventario;