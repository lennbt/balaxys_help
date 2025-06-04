import { Box, Typography, Divider, List, ListItem, Link, ListItemText } from "@mui/material";

const Configuracion = () => {
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
            <Link href="#empresa" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Empresa" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#facturacion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Facturación" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#contabilidad" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Contabilidad" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#inventario" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Inventario" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#preferencias" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Preferencias" />
            </Link>
          </ListItem>
        </List>
      </Box>

      {/* Contenido de la página */}
      <Box sx={{ flex: 3, overflowY: "auto" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Configuración
        </Typography>

        <Divider sx={{ margin: "16px 0" }} />

        <section id="acceso">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            ¿Cómo acceder a la configuración de empresa?
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: "16px" }}>
            Para acceder a la configuración de la empresa, simplemente sigue los siguientes pasos:
          </Typography>
       

          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            <strong>   1. Ubicación del Menú de Usuario: </strong>En la parte superior izquierda de la pantalla, verás el nombre de la empresa. Haz clic encima para desplegar el menú de opciones.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            <strong>   2. Seleccionar "Configuración: </strong>En el menú desplegable, encontrarás la opción <strong>Configuración</strong>, haz clic en "Configuración" para acceder a esta sección.
            </Typography>
          </Box>

         

</section>

        <Divider sx={{ margin: "16px 0" }} />

        <section id="empresa">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Empresa
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            Personaliza la información de tu empresa y ajusta Balaxys para que se adapte a las necesidades de tu negocio. Puedes configurar:
            <ul>
              <li><strong>Empresa:</strong> Personaliza la información de tu empresa y ajusta Balaxys para que se adapte a las necesidades de tu negocio.</li>
              <li><strong>Usuarios:</strong> Administra los usuarios que pueden acceder a la plataforma. Aquí podrás crear, editar o eliminar usuarios, así como asignarles roles específicos dentro del sistema.</li>
              <li><strong>Roles:</strong> Define roles y permisos para cada usuario en tu empresa, asegurando que cada persona tenga acceso solo a las funcionalidades necesarias.</li>
            </ul>
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>
 

       
        <section id="facturacion">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Facturación
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            Configura los datos que aparecerán en tus facturas, como formas de Pago, vencimientos y tipos de constribuyentes:
            <ul>
              <li><strong><Link href="/formas-de-pago" sx={{ textDecoration: "underline", color: "#1976d2", "&:hover": { textDecoration: "none",  }, }}>Formas de Pago:</Link></strong> Configura los métodos de pago que aceptas, como efectivo, transferencia bancaria, tarjetas de crédito/débito o pagos en línea (PayPal, Stripe, etc.). Esto facilita a tus clientes elegir cómo pagar</li>
              <li><strong><Link href="/vencimientos" sx={{ textDecoration: "underline", color: "#1976d2", "&:hover": { textDecoration: "none",  }, }}> Vencimientos:</Link></strong> Define los plazos para que los clientes paguen después de recibir una factura. Puedes especificar días de vencimiento, como 30 o 60 días, y configurar intereses por pagos tardíos.</li>
              <li><strong><Link href="/tipos-de-empresas" sx={{ textDecoration: "underline", color: "#1976d2", "&:hover": { textDecoration: "none",  }, }}>Tipos de empresas:</Link></strong> Clasifica los tipos de empresas con las que trabajas según su naturaleza, como clientes, proveedores, o socios, para facilitar la gestión y organización de tu negocio.</li>
              <li><strong><Link href="/tipos-de-contribuyentes" sx={{ textDecoration: "underline", color: "#1976d2", "&:hover": { textDecoration: "none",  }, }}>Tipos de contribuyentes:</Link></strong> Organiza a tus clientes según su tipo de contribuyente (por ejemplo, empresa, autónomo, exento de impuestos) para una correcta gestión fiscal y tributaria</li>
            </ul>
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="contabilidad">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Contabilidad
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
          Configura aspectos avanzados de contabilidad, como los parámetros contables, los periodos contables y los asientos automáticos:
            <ul>
              <li><strong>Parametrización contable:</strong>Configura las cuentas contables y personaliza el plan de cuentas según las necesidades de tu empresa.</li>
              <li><strong>Períodos contables:</strong> Configuración de períodos fiscales y contables. Define los períodos fiscales y contables para organizar y gestionar correctamente las transacciones de tu empresa.</li>
              <li><strong>Asientos automáticos:</strong> Establece reglas para generar asientos contables automáticamente según las transacciones realizadas.</li>
              <li><strong>Elementos de Gastos:</strong> Define y clasifica los distintos tipos de <Link href="/elementos-de-gastos" sx={{ textDecoration: "underline", color: "#1976d2", "&:hover": { textDecoration: "none",  }, }}> gastos</Link> que tu empresa puede tener, como operativos, administrativos, entre otros.</li>
              <li><strong>Monedas:</strong> Configura las <Link href="/monedas" sx={{ textDecoration: "underline", color: "#1976d2", "&:hover": { textDecoration: "none",  }, }}>monedas</Link> que usarás en tus transacciones y operaciones dentro de Balaxys.</li>
            </ul>
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="inventario">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Inventario
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            Establece configuraciones avanzadas para gestionar, vender y crear tus <Link href="/productos" sx={{ textDecoration: "underline", color: "#1976d2", "&:hover": { textDecoration: "none",  }, }}>  productos</Link>:
            <ul>
              <li><strong>Almacenes:</strong> Organiza y administra eficientemente los diferentes <Link href="/almacenes" sx={{ textDecoration: "underline", color: "#1976d2", "&:hover": { textDecoration: "none",  }, }}>almacenes</Link> donde se guardan, mueven y gestionan los productos de tu inventario.</li>
              <li><strong>Atributos de productos:</strong> Personaliza los <Link href="/atributos" sx={{ textDecoration: "underline", color: "#1976d2", "&:hover": { textDecoration: "none",  }, }}>atributos</Link> de los productos, como tamaño, color, peso, material, o cualquier otra característica relevante para tu inventario.</li>
            </ul>
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="preferencias">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Preferencias
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            Establece configuraciones adicionales para personalizar la experiencia del usuario dentro de Balaxys:
            <ul>
              <li><strong>Generación automática de códigos:</strong> En esta sección, puedes configurar la generación automática de códigos para tus clientes y proveedores. Esto te permite tener códigos únicos y fáciles de gestionar dentro de tu sistema.</li>
              <li><strong>Confirmación de comprobantes:</strong> Configura las opciones para la generación y confirmación de diferentes tipos de comprobantes dentro de Balaxys.</li>
            </ul>
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

{/* Artículos relacionados */}
<section id="articulos-relacionados">
  <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
    Artículos Relacionados
  </Typography>
  <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
    Aquí algunos artículos y guías relacionadas con el uso de Balaxys:
    <ul>
      <li>
        <Link href="/perfil-empresa/planes"  sx={{ textDecoration: "none", color: "#1976d2" }}>
          Los planes de suscripción en Balaxys
        </Link>
      </li>
      <li>
        <Link href="/perfil-empresa/usuarios"sx={{ textDecoration: "none", color: "#1976d2" }}>
          Crear usuarios en el sistema
        </Link>
      </li>
      <li>
        <Link href="/perfil-empresa/roles" sx={{ textDecoration: "none", color: "#1976d2" }}>
          Crear nuevos Roles en Balaxys
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

export default Configuracion;
