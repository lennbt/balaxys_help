// src/pages/Clientes/AyudaCrearFacturaVenta.tsx

import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

import React from "react";
import { Box, Typography, List, ListItem, Link, ListItemText, Divider } from "@mui/material";
import { Helmet } from "react-helmet-async";

/**
 * Página de ayuda para la sección "Crear Factura de Venta" en Balaxys ERP.
 * Sigue las pautas de interfaz establecidas para la web de ayuda y toma como referencia
 * las capturas de pantalla de la lista de facturas y el formulario de creación.
 */
const CrearFacturaVenta: React.FC = () => {
  
  return (
     <>
      {/* ---------- SEO META HEAD ---------- */}
      <Helmet>
        <title>Cómo Crear una Factura de Venta | Balaxys ERP</title>
        <meta
          name="description"
          content="Guía paso a paso para crear una factura de venta en Balaxys ERP: desde el listado hasta guardar y confirmar la factura."
        />
        <link rel="canonical" href="https://ayuda.balaxys.com/clientes/crear-factura-venta" />
      </Helmet>

      {/* ------- Contenido de la página ------- */}
      <Box sx={{ display: "flex", padding: "20px" }}>
        
      {/* ======================================= */}
      {/* 1. ÍNDICE DE SECCIONES                  */}
      {/* ======================================= */}
      <Box
        sx={{
          flex: 1,
          position: "sticky",
          top: 20,
          height: "100vh",
          paddingRight: "20px",
          paddingLeft: "20px",
          overflowY: "auto",
          borderRight: "1px solid #e0e0e0",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "16px", color: "#1976d2" }}>
          ÍNDICE
        </Typography>
        <List>
          <ListItem>
            <Link href="#introduccion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Introducción" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#vista-listado" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Vista de Listado de Facturas" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#abrir-modal" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Abrir modal de Nueva Factura" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#campos-cabecera" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Campos de Cabecera" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#detalle-productos" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Detalle de Productos" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#nota-y-pago" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Campo Nota y Forma de Pago" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#resumen-montos" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Resumen de Montos" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#guardar-confirmar" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Guardar y Confirmar Factura" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#preguntas" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Preguntas Frecuentes" />
            </Link>
          </ListItem>
        </List>
      </Box>

      {/* ======================================= */}
      {/* 2. CONTENIDO PRINCIPAL                  */}
      {/* ======================================= */}
      <Box sx={{ flex: 3, overflowY: "auto", paddingLeft: "20px" }}>
        {/* ----------------------------- */}
        {/* SECCIÓN: Introducción       */}
        {/* ----------------------------- */}
        <section id="introduccion">
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            Crear Factura de Venta
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En Balaxys ERP, la sección de <strong>Facturas de ventas</strong> permite registrar, confirmar y gestionar las facturas emitidas.
            En esta guía encontrarás:
            <ul style={{ marginLeft: "20px" }}>
              <li>Cómo acceder al listado de facturas y sus acciones disponibles.</li>
              <li>Pasos para abrir el modal de creación de una nueva factura.</li>
              <li>Descripción detallada de cada campo del formulario.</li>
              <li>Ejemplos visuales con capturas de pantalla de la interfaz real.</li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* -------------------------------- */}
        {/* SECCIÓN: Vista de Listado       */}
        {/* -------------------------------- */}
        <section id="vista-listado">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Vista de Listado de Facturas
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Al ingresar al módulo <em>Facturas de ventas</em>, verás una tabla que muestra todas las facturas registradas:
          </Typography>
          <Box
            component="img"
            src="/assets/img/facturas_listado.png"
            alt="Listado de Facturas de Venta"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            La tabla incluye las siguientes columnas:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Estado factura:</strong> Indica si está <em>Pendiente</em>, <em>Confirmado</em> o <em>Anulado</em>.</li>
              <li><strong>Almacén:</strong> Sede desde donde se emite la factura.</li>
              <li><strong>Confirmación:</strong> Fecha en formato YYYY-MM-DD en que se confirmó.
              </li>
              <li><strong>Número:</strong> Identificador de la factura (e.g., FA-1/01/2025).</li>
              <li><strong>Cliente:</strong> Nombre del cliente al que se factura.</li>
              <li><strong>Subtotal:</strong> Suma de productos sin IVA.</li>
              <li><strong>IVA:</strong> Total de impuestos.
              </li>
              <li><strong>Importe:</strong> Monto final (Subtotal + IVA).</li>
              <li><strong>Estado cobro:</strong> Puede ser <em>Pendiente</em>, <em>Parcial</em> o <em>Cobrado</em>.
              </li>
              <li><strong>Acciones:</strong> Íconos para ver detalles, confirmar, anular, reenviar o duplicar.
              </li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Para refrescar el listado, haz clic en el ícono de <em>Recargar</em>. Para crear una nueva factura, pulsa el botón <em>Nueva factura</em>.
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* -------------------------------- */}
        {/* SECCIÓN: Abrir modal           */}
        {/* -------------------------------- */}
        <section id="abrir-modal">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Abrir modal de Nueva Factura
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Para iniciar la creación de una factura, haz clic en el botón <em>Nueva factura</em> que se encuentra en la parte superior derecha del listado. Esto abrirá un diálogo (modal) con el formulario de registro.
          </Typography>
          <Box
            component="img"
            src="/assets/img/facturas_boton_nuevo.png"
            alt="Botón Nueva Factura"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* -------------------------------- */}
        {/* SECCIÓN: Campos de Cabecera     */}
        {/* -------------------------------- */}
        <section id="campos-cabecera">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Campos de Cabecera
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En la parte superior del modal, encontrarás los campos principales:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Moneda *:</strong> Selecciona la divisa de la factura (UYU, USD, EUR). Por defecto, se propone <em>UYU</em>.
              </li>
              <li><strong>Cliente *:</strong> Desplegable con la lista de clientes registrados.
              </li>
              <li><strong>Almacén *:</strong> Selecciona la sede de origen (Principal, Secundario).
              </li>
              <li><strong>Número:</strong> Ingresa un identificador de factura (por ejemplo, FA-2/2025). Si se deja vacío, el sistema genera uno automático.
              </li>
              <li><strong>Lista de precios:</strong> Opcional. Elige la lista tarifaria aplicable.
              </li>
              <li><strong>Centro de costo:</strong> Opcional. Asigna un área contable (Administración, Ventas, Producción).
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/facturas_modal_cabecera.png"
            alt="Formulario Nueva Factura: cabecera"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* -------------------------------- */}
        {/* SECCIÓN: Detalle de Productos    */}
        {/* -------------------------------- */}
        <section id="detalle-productos">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Detalle de Productos
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En la tabla de detalle, cada fila contiene:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Código *:</strong> Desplegable con códigos de productos. Al seleccionar, se autopuebla:</li>
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>Descripción:</strong> Nombre del producto.</li>
                <li><strong>U.M:</strong> Unidad de medida (unidad, kg, litro) en modo solo lectura.</li>
                <li><strong>Disponibilidad:</strong> Stock disponible en el almacén seleccionado.</li>
              </ul>
              <li><strong>Cantidad *:</strong> Campo numérico para ingresar el número de unidades a facturar.</li>
              <li><strong>Precio unitario *:</strong> Precio por unidad. Autopuebla al elegir producto pero editable si se aplica precio especial.</li>
              <li><strong>IVA:</strong> Porcentaje de impuesto (0 %, 10 %, 22 %).</li>
              <li><strong>Importe:</strong> Campo solo lectura que calcula automáticamente <em>cantidad × precio unitario × (1 + IVA/100)</em>.</li>
              <li><strong>Acciones:</strong> Botón papelera para eliminar la fila.</li>
            </ul>
            Para agregar más productos, haz clic en el botón <em>Agregar producto</em> debajo de la tabla.
          </Typography>
          <Box
            component="img"
            src="/assets/img/facturas_modal_detalle.png"
            alt="Formulario Nueva Factura: detalle de productos"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* -------------------------------- */}
        {/* SECCIÓN: Nota y Forma de Pago   */}
        {/* -------------------------------- */}
        <section id="nota-y-pago">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Campo Nota y Forma de Pago
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Debajo de la tabla de detalle encontrarás:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Nota:</strong> Campo multiline para agregar comentarios o instrucciones específicas. Puede usarse para observaciones contables o internas.</li>
              <li><strong>Forma de pago:</strong> Desplegable para elegir cómo se efectuará el pago (Efectivo, Transferencia, Cheque).</li>
              <li><strong>¿Cobrar?</strong> Checkbox que, si se marca, indica que se cobrará inmediatamente y cambia el estado de cobro.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/facturas_modal_nota_pago.png"
            alt="Formulario Nueva Factura: nota y forma de pago"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* -------------------------------- */}
        {/* SECCIÓN: Resumen de Montos       */}
        {/* -------------------------------- */}
        <section id="resumen-montos">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Resumen de Montos
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            A la derecha del formulario se muestran los totales en tiempo real:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Subtotal:</strong> Suma de <em>cantidad × precio unitario</em> de cada línea.</li>
              <li><strong>IVA total:</strong> Suma de <em>(subtotal línea × IVA/100)</em> por cada línea.</li>
              <li><strong>Importe total:</strong> Suma de <em>Subtotal + IVA total</em>.
              </li>
            </ul>
            Verifica que los valores sean correctos antes de guardar.
          </Typography>
          <Box
            component="img"
            src="/assets/img/facturas_modal_resumen.png"
            alt="Formulario Nueva Factura: resumen de montos"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* -------------------------------- */}
        {/* SECCIÓN: Guardar y Confirmar     */}
        {/* -------------------------------- */}
        <section id="guardar-confirmar">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Guardar y Confirmar Factura
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Al finalizar:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Cerrar:</strong> Descarta cambios y cierra el modal sin guardar.</li>
              <li><strong>Guardar:</strong> Registra la factura en estado <em>Pendiente</em> y se agrega al listado.</li>
              <li><strong>Guardar y Confirmar:</strong> Registra y cambia el estado a <em>Confirmado</em>, asignando un número automático si no se especificó.</li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/facturas_modal_guardar.png"
            alt="Botones Guardar y Confirmar Factura"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* -------------------------------- */}
        {/* SECCIÓN: Preguntas Frecuentes     */}
        {/* -------------------------------- */}
        <section id="preguntas">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Preguntas Frecuentes
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Puedo editar una factura después de confirmarla?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            No. Una vez confirmada, la factura cambia a estado <em>Confirmado</em> y no puede modificarse.
            Si necesitas realizar cambios, anúlala y crea una nueva.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Qué ocurre si anulo una factura?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Al anularla, la factura pasa a estado <em>Anulado</em> y deja de afectar stock o contabilidad.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Cómo se refleja el estado de cobro?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Si marcaste <em>¿Cobrar?</em> al crear, el estado de cobro cambiará a <em>Cobrado</em>. Si parcializas el pago,
            aparecerá <em>Parcial</em> y podrás registrar cobros adicionales desde el módulo de Cobros.
          </Typography>
        </section>
      </Box>
    </Box>
    </>
  );
};

export default CrearFacturaVenta;
