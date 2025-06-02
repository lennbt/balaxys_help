import { Box, Typography, Divider, List, ListItem, Link, ListItemText } from "@mui/material";

const QueEsBalaxys = () => {
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
            <Link href="#introduccion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="¿Qué es Balaxys?" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#caracteristicas" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Características Principales" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#beneficios" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Beneficios de usar Balaxys" />
            </Link>
          </ListItem>
        </List>
      </Box>

      {/* Contenido de la página */}
      <Box sx={{ flex: 3, overflowY: "auto" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          ¿Qué es Balaxys?
        </Typography>

        <Divider sx={{ margin: "16px 0" }} />

        <section id="introduccion">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Introducción
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            Balaxys es un sistema ERP (Enterprise Resource Planning) diseñado para facilitar y optimizar las operaciones de pequeñas y medianas empresas a gestionar sus procesos operativos y financieros de manera eficiente. Desde la gestión de <Link href="/inventario" sx={{ textDecoration: "underline", color: "#1976d2", "&:hover": { textDecoration: "none",  }, }}>  inventarios</Link>, compras, ventas, hasta la contabilidad y análisis de datos avanzados con Power BI integrado, Balaxys centraliza toda la información de la empresa en una única plataforma. Su objetivo es mejorar la toma de decisiones, optimizar la gestión de recursos y aumentar la productividad de las organizaciones.
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="caracteristicas">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Características Principales
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            Las principales características de Balaxys incluyen:
          
          
          <ul>
              <li><strong>Gestión de Inventarios:</strong> Balaxys permite a las empresas gestionar sus <Link href="/productos" sx={{ textDecoration: "underline", color: "#1976d2", "&:hover": { textDecoration: "none",  }, }}>  productos</Link>, vales de salida, ajustes de inventarios, y <strong>mantener un control total sobre las existencias</strong>. Se pueden realizar ajustes de inventario, gestionar precios, realizar <strong>transferencias entre almacenes</strong> y llevar un seguimiento de la mercancía con facilidad.</li>
              <li><strong>Facturación y Ventas: </strong>El sistema facilita la <strong>creación y gestión de facturas, presupuestos, y notas de crédito</strong>. Permite a las empresas llevar un control efectivo de sus ventas, identificar patrones y realizar acciones de forma más eficiente.</li>
              <li><strong>Contabilidad:</strong> Balaxys ofrece herramientas contables que incluyen la <strong>creación de asientos contables</strong>, gestión de cuentas y la integración de impuestos (como IVA) con la contabilidad general de la empresa. La conciliación bancaria y el manejo de las cuentas contables son facilitados por el sistema.</li>
              <li><strong>Gestión de Compras:</strong> A través de Balaxys, las empresas pueden gestionar el proceso completo de compras, desde la creación de órdenes hasta la recepción de productos y la gestión de las facturas de compra. Esto ayuda a mantener un <strong>control adecuado del flujo de mercancías</strong> y la relación con los proveedores</li>
              <li><strong>Informes y Análisis:</strong> El sistema ofrece herramientas avanzadas de análisis de datos e <strong>informes con Power BI integrado</strong>, permitiendo a las empresas generar reportes personalizados y realizar un seguimiento detallado de su desempeño financiero y operativo</li>
              <li><strong>Optimización de Precios y Costos:</strong>  Con Balaxys, las empresas pueden gestionar las <strong>listas de precios</strong>, aplicar descuentos y gestionar los márgenes de beneficio de sus productos de manera eficiente. Además, el sistema permite <strong>registrar el costo de los productos</strong> y calcular los márgenes de ganancia.</li>
              <li><strong>Multimoneda y Localización:</strong> Balaxys soporta transacciones en <strong> múltiples monedas</strong>, adaptándose a las necesidades de las empresas que operan en <strong> diferentes países</strong>. Además, ofrece localización para cumplir con las normativas fiscales y de contabilidad locales.</li>
            </ul>
            </Typography>
         
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="beneficios">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Beneficios de usar Balaxys
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            Al implementar Balaxys en tu empresa, podrás disfrutar de una serie de beneficios clave:
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px",textAlign: "justify" }}>
          1. Centralización de procesos clave en un solo sistema
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
          Balaxys centraliza todas las operaciones de tu empresa en una única plataforma. Desde la gestión de inventarios hasta la contabilidad, todo se encuentra integrado.  <Typography><strong>Ejemplo:</strong></Typography> Imagina que tienes un pequeño negocio con un sistema de ventas independiente, otro para gestionar inventarios y otro más para contabilidad. Esto genera duplicación de datos, errores y procesos manuales. Con Balaxys, todos estos procesos están centralizados: cuando realizas una venta, el inventario se actualiza automáticamente y los asientos contables se generan de manera instantánea, lo que ahorra tiempo y reduce la posibilidad de cometer errores.
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px",textAlign: "justify" }}>
          2. Mejora de la eficiencia operativa mediante la automatización de tareas y procesos
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
           Gracias a la automatización que Balaxys proporciona, muchas de las tareas repetitivas y manuales se realizan de forma automática, lo que mejora la productividad de tu equipo. 
           <Typography><strong>Ejemplo:</strong> </Typography>Supón que tu empresa realiza inventarios regularmente, y cada vez que se actualiza un producto, debe calcularse manualmente el costo total de <Link href="/inventario" sx={{ textDecoration: "none", color: "#1976d2" }}>inventarios</Link>. Balaxys automatiza este proceso, calculando automáticamente los costos de inventarios y actualizando las cifras de ventas, evitando errores y reduciendo el tiempo que tu equipo dedica a estas tareas repetitivas.

          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px",textAlign: "justify" }}>
          3. Toma de decisiones más informada y rápida, con acceso a informes y análisis detallados
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
          Con la información centralizada y la capacidad de generar informes detallados, puedes tomar decisiones rápidas y bien fundamentadas sobre las operaciones de tu empresa. 
          <Typography><strong>Ejemplo:</strong></Typography> Imagina que necesitas tomar una decisión sobre el stock de un producto que está disminuyendo rápidamente. Balaxys te proporciona informes avanzados en Power BI y en tiempo real sobre la venta de ese producto, su rotación y las tendencias de compras pasadas. Con estos datos, puedes tomar decisiones informadas sobre cuándo realizar un nuevo pedido o ajustar los precios para aumentar las ventas.

          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px",textAlign: "justify" }}>
          4. Integración de diferentes departamentos (ventas, compras, contabilidad, inventarios)
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
          La integración de todas las áreas de tu empresa permite te ner una visión completa de cómo se están desarrollando las operaciones en tiempo real, lo que mejora la colaboración entre equipos. 
          <Typography><strong>Ejemplo:</strong></Typography> Cuando cierras un periodo contable, Balaxys actualiza automáticamente el <Link href="/inventario" sx={{ textDecoration: "none", color: "#1976d2" }}>inventarios</Link> y genera los registros contables correspondientes, lo que permite que los departamentos de contabilidad y compras tengan acceso a la información más actualizada sin necesidad de procesos manuales o duplicados. Esto mejora la colaboración, reduce los errores y permite a los equipos tomar decisiones más alineadas.

          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px",textAlign: "justify" }}>
          5. Flexibilidad para adaptarse a las necesidades específicas de cada empresa
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
          Balaxys está diseñado para adaptarse a las necesidades únicas de cada empresa, independientemente de su tamaño o sector, permitiendo personalizar configuraciones y módulos según las especificaciones de tu negocio. 
          <Typography><strong>Ejemplo:</strong> </Typography>Si tu empresa tiene una operación que maneja poductos con variantes complejas, como diferentes tamaños y colores, Balaxys permite configurar cada producto con variantes y gestionar sus precios y stock por separado. Además, si tu empresa opera en diferentes regiones, Balaxys ofrece la opción de personalizar las tasas de IVA y otras normativas locales, lo que hace que la plataforma sea útil para empresas de diversas industrias y ubicaciones geográficas.

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
        <Link href="/productos" sx={{ textDecoration: "none", color: "#1976d2" }}>
          Productos y Servicios en Balaxys
        </Link>
      </li>
      <li>
        <Link href="/ajustes-inventario" sx={{ textDecoration: "none", color: "#1976d2" }}>
          Ajustes de inventarios
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

export default QueEsBalaxys;
