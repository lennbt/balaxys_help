// src/pages/Clientes/VentasGuiaInicio.tsx

import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Box,
  Typography,
  List,
  ListItem,
  Link,
  ListItemText,
  Divider,
} from "@mui/material";

/**
 * Página de ayuda “Guía de Inicio – Ventas” para Balaxys ERP.
 * Esta guía acompaña al usuario en los primeros pasos para configurar y emitir
 * facturas de venta: desde completar datos de facturación, elegir plantilla y logo,
 * definir métodos de pago y vencimientos, hasta crear la primera factura.
 */
const VentasGuiaInicio: React.FC = () => {
  return (
    <>
      {/* ================================= */}
      {/*  HEAD / META (SEO)               */}
      {/* ================================= */}
      <Helmet>
        <title>Guía de Inicio Ventas | Balaxys ERP</title>
        <meta
          name="description"
          content="Aprende a configurar y emitir tu primera factura de venta en Balaxys ERP: datos de facturación, plantilla y logo, métodos de pago, vencimientos y emisión."
        />
        <link
          rel="canonical"
          href="https://help.balaxys.com/clientes/ventas-guia-inicio"
        />
      </Helmet>

      {/* ================================= */}
      {/*  CONTENEDOR PRINCIPAL            */}
      {/* ================================= */}
      <Box sx={{ display: "flex", padding: "20px" }}>
        {/* --------------------------------- */}
        {/* 1. ÍNDICE DE SECCIONES            */}
        {/* --------------------------------- */}
        <Box
          component="nav"
          aria-label="Índice Ventas Guía Inicio"
          sx={{
            flex: 1,
            position: "sticky",
            top: 20,
            height: "100vh",
            paddingRight: "24px",
            paddingLeft: "16px",
            overflowY: "auto",
            borderRight: "1px solid #e0e0e0",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              marginBottom: "16px",
              color: "#1976d2",
            }}
          >
            ÍNDICE
          </Typography>
          <List>
            <ListItem>
              <Link
                href="#datos-facturacion"
                underline="hover"
                color="#1976d2"
              >
                <ListItemText primary="1. Completa los Datos de Facturación" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#plantilla-logo"
                underline="hover"
                color="#1976d2"
              >
                <ListItemText primary="2. Plantilla y Logo" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#metodos-pago-vencimientos"
                underline="hover"
                color="#1976d2"
              >
                <ListItemText primary="3. Métodos de Pago y Vencimientos" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#crear-primera-factura"
                underline="hover"
                color="#1976d2"
              >
                <ListItemText primary="4. Crea tu Primera Factura de Venta" />
              </Link>
            </ListItem>
          </List>
        </Box>

        {/* --------------------------------- */}
        {/* 2. CONTENIDO PRINCIPAL            */}
        {/* --------------------------------- */}
        <Box
          component="main"
          sx={{ flex: 3, overflowY: "auto", paddingLeft: "24px" }}
        >
          {/* =========================================== */}
          {/* SECCIÓN 1: Completa datos de facturación   */}
          {/* =========================================== */}
          <section id="datos-facturacion">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              1. Completa los Datos de Facturación
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Antes de emitir facturas, Balaxys necesita conocer la información fiscal
              y comercial de tu empresa. Para ello:
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify", marginLeft: "20px" }}
            >
              1. Dirígete a <strong>Empresa &gt; Configuración</strong> desde el menú superior
              (haz clic en el nombre de tu empresa).  
            </Typography>
            <Box
              component="img"
              src="/assets/img/ventas_datos_facturacion_1.png"
              alt="Acceso a Configuración de Empresa"
              sx={{
                width: "100%",
                borderRadius: "4px",
                marginBottom: "16px",
              }}
            />
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              2. Dentro del modal “Empresa”, completa:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  <strong>Razón social / Nombre Comercial *:</strong> El nombre que
                  aparecerá en tus facturas.
                </li>
                <li>
                  <strong>RUT / NIF *:</strong> Identificación tributaria según tu país.
                </li>
                <li>
                  <strong>Dirección fiscal *:</strong> Calle y ciudad donde opera tu
                  empresa (aparece como pie de página en cada factura).
                </li>
                <li>
                  <strong>Teléfono y Correo electrónico:</strong> Datos de contacto
                  que se mostrarán en la cabecera de tus facturas.
                </li>
                <li>
                  <strong>Website (opcional):</strong> URL de tu página web, si deseas
                  incluirla en la factura.
                </li>
              </ul>
            </Typography>
            <Box
              component="img"
              src="/assets/img/ventas_datos_facturacion_2.png"
              alt="Formulario de datos de facturación en Empresa"
              sx={{
                width: "100%",
                borderRadius: "4px",
                marginBottom: "16px",
              }}
            />
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              3. Una vez completados los campos obligatorios, haz clic en “Guardar” para
              asegurar que tus datos fiscales queden registrados y aparezcan en cada
              factura que emitas.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/* ======================================= */}
          {/* SECCIÓN 2: Selecciona Plantilla y Logo  */}
          {/* ======================================= */}
          <section id="plantilla-logo">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              2. Selecciona una Plantilla y Sube tu Logo
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Balaxys permite personalizar el diseño de tus facturas con plantillas
              predefinidas y tu logotipo. Para configurarlo:
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify", marginLeft: "20px" }}
            >
              1. Ingresa al módulo <strong>Clientes &gt; Factura de venta</strong>.  
              En la esquina superior derecha, haz clic en el ícono de “Opciones” (⋮) y
              selecciona “Configuración de Factura”.
            </Typography>
            <Box
              component="img"
              src="/assets/img/ventas_plantilla_logo_1.png"
              alt="Opción de configuración de plantilla en Facturas"
              sx={{
                width: "100%",
                borderRadius: "4px",
                marginBottom: "16px",
              }}
            />
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              2. En la sección “Diseño de Factura”, elige una de las plantillas disponibles:
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>Clásica:</strong> Encabezado simple, texto centrado.</li>
                <li><strong>Moderna:</strong> Colores y logo en la parte superior.</li>
                <li><strong>Minimalista:</strong> Diseño limpio con márgenes amplios.</li>
              </ul>
            </Typography>
            <Box
              component="img"
              src="/assets/img/ventas_plantilla_logo_2.png"
              alt="Galería de plantillas de factura"
              sx={{
                width: "100%",
                borderRadius: "4px",
                marginBottom: "16px",
              }}
            />
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              3. Para subir tu logotipo, haz clic en “Seleccionar logo” y elige la imagen
              desde tu equipo (preferiblemente .PNG o .JPG con fondo transparente).
              Ajusta el tamaño si es necesario.  
            </Typography>
            <Box
              component="img"
              src="/assets/img/ventas_plantilla_logo_3.png"
              alt="Subir logo de empresa para facturas"
              sx={{
                width: "100%",
                borderRadius: "4px",
                marginBottom: "16px",
              }}
            />
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              4. Verifica la vista previa: asegúrate de que el logo y la plantilla luzcan
              correctamente. Cuando estés conforme, haz clic en “Guardar configuración”.
              A partir de ese momento, todas tus facturas de venta utilizarán el diseño
              personalizado que acabas de definir.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/* ================================================= */}
          {/* SECCIÓN 3: Establece Métodos de Pago y Vencimientos */}
          {/* ================================================= */}
          <section id="metodos-pago-vencimientos">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              3. Establece Métodos de Pago y Vencimientos
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Para agilizar el proceso de cobro y controlar fechas de vencimiento,
              configura de antemano los métodos de pago y los plazos que ofrecerás a tus clientes:
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify", marginLeft: "20px" }}
            >
              1. Ve a <strong>Clientes &gt; Configuración (⋮) &gt; Métodos de Pago</strong>.  
              Allí encontrarás la lista de métodos que Balaxys trae por defecto (Efectivo,
              Transferencia, Cheque, Tarjeta). Para agregar uno nuevo, haz clic en “+ Nuevo Método”:
            </Typography>
            <Box
              component="img"
              src="/assets/img/ventas_pago_vencimientos_1.png"
              alt="Listado de métodos de pago"
              sx={{
                width: "100%",
                borderRadius: "4px",
                marginBottom: "16px",
              }}
            />
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              2. Completa los datos del método:  
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>Nombre *:</strong> Por ejemplo, “PayPal” o “Mercado Pago”.</li>
                <li><strong>Descripción (opcional):</strong> Detalles adicionales para el equipo.</li>
              </ul>
              Haz clic en “Guardar” para que quede disponible en el formulario de factura.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              3. Define los Vencimientos predeterminados:  
              Dentro de la misma sección, encontrarás un submenú “Vencimientos”. Aquí
              puedes crear condiciones de pago estándar:
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>Contado (0 días):</strong> Pago inmediato.</li>
                <li><strong>30 días fecha factura:</strong> Plazo a un mes.</li>
                <li><strong>60 días fecha factura:</strong> Plazo a dos meses.</li>
              </ul>
              Haz clic en “+ Nueva Condición” para agregar un nuevo vencimiento.  
            </Typography>
            <Box
              component="img"
              src="/assets/img/ventas_pago_vencimientos_2.png"
              alt="Configuración de vencimientos"
              sx={{
                width: "100%",
                borderRadius: "4px",
                marginBottom: "16px",
              }}
            />
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              4. Cuando finalices estas configuraciones, tus métodos de pago y vencimientos
              predeterminados aparecerán en el formulario de factura, acelerando la emisión
              y el control de cobros.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/* ================================================= */}
          {/* SECCIÓN 4: Crea tu Primera Factura de Venta       */}
          {/* ================================================= */}
          <section id="crear-primera-factura">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              4. Crea tu Primera Factura de Venta
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Con todos los parámetros listos (datos fiscales, plantilla, logo, métodos y
              vencimientos), ya puedes generar tu primera factura de venta:
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify", marginLeft: "20px" }}
            >
              1. Dirígete a <strong>Clientes &gt; Factura de venta</strong>.  
              Haz clic en “Nueva factura” en la parte superior derecha para abrir el modal:
            </Typography>
            <Box
              component="img"
              src="/assets/img/ventas_nueva_factura_1.png"
              alt="Botón Nueva Factura de Venta"
              sx={{
                width: "100%",
                borderRadius: "4px",
                marginBottom: "16px",
              }}
            />
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              2. En el modal, verifica que la <strong>Moneda</strong> sea la correcta (por defecto
              UYU). Selecciona el <strong>Cliente *</strong> desde el desplegable (puedes crear
              uno nuevo en el momento si es necesario).
            </Typography>
            <Box
              component="img"
              src="/assets/img/ventas_nueva_factura_2.png"
              alt="Formulario de nueva factura - cabecera"
              sx={{
                width: "100%",
                borderRadius: "4px",
                marginBottom: "16px",
              }}
            />
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              3. Agrega los <strong>Productos *</strong> que vendes:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  Haz clic en “Agregar producto” en la tabla de detalle.
                </li>
                <li>
                  Selecciona el <strong>Código *</strong> desde el desplegable (autopobla la descripción
                  y la unidad de medida).
                </li>
                <li>
                  Ingresa la <strong>Cantidad *</strong> y el <strong>Precio unitario *</strong>.
                </li>
                <li>
                  Verifica el <strong>IVA</strong> y observa cómo se calcula el <strong>Importe</strong>
                  automáticamente.
                </li>
              </ul>
            </Typography>
            <Box
              component="img"
              src="/assets/img/ventas_nueva_factura_3.png"
              alt="Formulario de nueva factura - detalle de productos"
              sx={{
                width: "100%",
                borderRadius: "4px",
                marginBottom: "16px",
              }}
            />
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              4. Revisa la sección “Nota” (opcional) y asegúrate de que el <strong>método de pago</strong>
              y <strong>vencimiento</strong> elegidos sean los correctos.  
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              5. En la columna derecha, verifica el <strong>Subtotal</strong>, <strong>IVA total</strong> y
              <strong>Importe total</strong>. Si todo está en orden, haz clic en:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  <strong>Guardar:</strong> La factura quedará en estado “Pendiente” para edición posterior.
                </li>
                <li>
                  <strong>Guardar y Confirmar:</strong> Genera el número automático y
                  cambia el estado a “Confirmado”. Esta acción crea también el asiento contable
                  en el módulo de contabilidad.
                </li>
              </ul>
            </Typography>
            <Box
              component="img"
              src="/assets/img/ventas_nueva_factura_4.png"
              alt="Botones Guardar y Confirmar en formulario de factura"
              sx={{
                width: "100%",
                borderRadius: "4px",
                marginBottom: "16px",
              }}
            />
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              6. Después de confirmar, la factura aparecerá en el listado con estado “Confirmado”,
              lista para ser enviada al cliente o descargada en PDF.  
            </Typography>
            <Box
              component="img"
              src="/assets/img/ventas_factura_confirmada.png"
              alt="Factura confirmada en listado con iconos de acciones"
              sx={{
                width: "100%",
                borderRadius: "4px",
                marginBottom: "16px",
              }}
            />
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              ¡Y eso es todo! Con estos cuatro pasos habrás configurado tu sección de ventas,
              personalizado la presentación de tus facturas y generado tu primera factura de venta
              en Balaxys ERP. A medida que te familiarices con la interfaz, podrás explorar más
              funcionalidades avanzadas como series de facturación, facturas recurrentes y reportes
              detallados de ventas.
            </Typography>
          </section>
        </Box>
      </Box>
    </>
  );
};

export default VentasGuiaInicio;
