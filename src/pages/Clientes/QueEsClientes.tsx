// src/pages/Clientes/QueEsCliente.tsx

import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Divider, Link } from "@mui/material";
import { Helmet } from "react-helmet-async";

/**
 * Página de ayuda: ¿Qué es la Sección de Clientes?
 * -----------------------------------------------
 * - Se sigue la misma estructura que "¿Qué es la sección de Inventario?"
 * - Ahora abarca conceptos y funcionalidades propias de Clientes (facturas, presupuestos, cobros, notas de crédito).
 */

const QueEsCliente: React.FC = () => {
  return (
    <>
      {/* ---------------- META SEO con react-helmet-async ---------------- */}
      <Helmet>
        <title>¿Qué es la Sección de Clientes en Balaxys ERP?</title>
        <meta
          name="description"
          content="Conoce la sección de Clientes en Balaxys: aprende a manejar facturas, cobros, presupuestos y notas de crédito para tus clientes, paso a paso."
        />
        <meta name="keywords" content="Balaxys, Clientes, Facturas de venta, Cobros, Presupuestos, Notas de crédito, Ayuda" />
      </Helmet>

      <Box sx={{ display: "flex", padding: "20px" }}>
        {/* ============================
            1. ÍNDICE DE NAVEGACIÓN
            ============================ */}
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
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, marginBottom: "16px", color: "#1976d2" }}
          >
            ÍNDICE
          </Typography>
          <List>
            <ListItem>
              <Link
                href="#introduccion"
                sx={{ textDecoration: "none", color: "#1976d2" }}
              >
                <ListItemText primary="Introducción" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#vista-listado-clientes"
                sx={{ textDecoration: "none", color: "#1976d2" }}
              >
                <ListItemText primary="Vista de Listado de Clientes" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#abrir-modal-nuevo-cliente"
                sx={{ textDecoration: "none", color: "#1976d2" }}
              >
                <ListItemText primary="Crear / Editar Cliente" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#facturas"
                sx={{ textDecoration: "none", color: "#1976d2" }}
              >
                <ListItemText primary="Facturas de Venta" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#presupuestos"
                sx={{ textDecoration: "none", color: "#1976d2" }}
              >
                <ListItemText primary="Presupuestos" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#cobros"
                sx={{ textDecoration: "none", color: "#1976d2" }}
              >
                <ListItemText primary="Cobros" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#notas-de-credito"
                sx={{ textDecoration: "none", color: "#1976d2" }}
              >
                <ListItemText primary="Notas de Crédito" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#articulos-relacionados"
                sx={{ textDecoration: "none", color: "#1976d2" }}
              >
                <ListItemText primary="Artículos Relacionados" />
              </Link>
            </ListItem>
          </List>
        </Box>

        {/* ==============================
            2. CONTENIDO PRINCIPAL
            ============================== */}
        <Box sx={{ flex: 3, overflowY: "auto", paddingLeft: "20px" }}>
          {/* ====== SECCIÓN: Introducción ====== */}
          <section id="introduccion">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              ¿Qué es la Sección de Clientes en Balaxys?
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              En Balaxys ERP, la <strong>Sección de Clientes</strong> agrupa todas
              las herramientas necesarias para gestionar tus clientes y sus documentos
              relacionados: desde el registro básico de cada cliente hasta la emisión
              de facturas de venta, presupuestos, cobros y notas de crédito. Esta área
              te permite:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  Mantener un listado completo de clientes registrados, con datos de
                  contacto, información fiscal y límites de crédito.
                </li>
                <li>
                  Emitir y gestionar facturas de venta, revisando su historial y asientos contables.
                </li>
                <li>
                  Crear y convertir presupuestos en facturas cuando el cliente apruebe
                  tu propuesta.
                </li>
                <li>
                  Registrar cobros parciales o totales, vinculándolos a las facturas emitidas.
                </li>
                <li>
                  Generar notas de crédito para devolver importes o corregir facturas
                  previamente emitidas.
                </li>
              </ul>
              Gracias a esta sección, tu flujo de venta se automatiza, la contabilidad
              se genera en segundo plano y dispones de reportes consolidados que te
              ayudan a tomar decisiones financieras rápidas.
            </Typography>
          </section>

          <Divider sx={{ margin: "16px 0" }} />

          {/* ====== SECCIÓN: Vista de Listado de Clientes ====== */}
          <section id="vista-listado-clientes">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              Vista de Listado de Clientes
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Al ingresar a <em>Clientes &gt; Listado de clientes</em>, encontrarás
              una tabla donde se muestran todos los clientes registrados:
            </Typography>
            <Box
              component="img"
              src="/assets/img/clientes_listado.png"
              alt="Listado de Clientes en Balaxys"
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
              Cada columna incluye:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  <strong>Nombre/Razón social:</strong> Nombre completo del cliente o
                  empresa.
                </li>
                <li>
                  <strong>RUT/ID Fiscal:</strong> Identificador tributario o cédula de
                  identidad.
                </li>
                <li>
                  <strong>Correo electrónico:</strong> Email de contacto principal.
                </li>
                <li>
                  <strong>Teléfono:</strong> Número telefónico o celular.
                </li>
                <li>
                  <strong>Estado:</strong> Indica si el cliente está <em>Activo</em> o
                  <em>Inactivo</em>.
                </li>
                <li>
                  <strong>Acciones:</strong> Iconos para ver detalle, editar o eliminar
                  al cliente.
                </li>
              </ul>
              Para filtrar rápidamente, usa el campo de <em>Búsqueda rápida</em> en la
              esquina superior derecha. Para agregar un nuevo cliente, pulsa el botón
              <em>“Nuevo cliente”</em> en la parte superior derecha.
            </Typography>
          </section>

          <Divider sx={{ margin: "16px 0" }} />

          {/* ====== SECCIÓN: Crear / Editar Cliente (modal) ====== */}
          <section id="abrir-modal-nuevo-cliente">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              Crear / Editar Cliente
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Al hacer clic en <em>“Nuevo cliente”</em> (o en el icono de lápiz para
              editar), se abrirá un diálogo (modal) con el formulario de registro:
            </Typography>
            <Box
              component="img"
              src="/assets/img/clientes_modal_nuevo.png"
              alt="Modal Crear o Editar Cliente"
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
              Los campos obligatorios (*) incluyen:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  <strong>Nombre / Razón social *</strong>: Nombre del contacto o la
                  empresa.
                </li>
                <li>
                  <strong>RUT / ID Fiscal *</strong>: Documento tributario del cliente.
                </li>
                <li>
                  <strong>Correo electrónico *</strong>: Email para notificaciones.
                </li>
                <li>
                  <strong>Teléfono:</strong> (Opcional) Número de contacto.
                </li>
                <li>
                  <strong>Dirección:</strong> (Opcional) Ubicación principal del
                  cliente.
                </li>
                <li>
                  <strong>Condición de IVA:</strong> Selecciona “<em>Exento</em>” o
                  “<em>Responsable Inscripto</em>” según corresponda.
                </li>
                <li>
                  <strong>Tope de crédito:</strong> Monto máximo permitido para compras
                  a crédito (opcional).
                </li>
              </ul>
              Una vez completados, haz clic en <em>“Guardar”</em> para registrar el
              cliente en estado <em>Activo</em>.
            </Typography>
          </section>

          <Divider sx={{ margin: "16px 0" }} />

          {/* ====== SECCIÓN: Facturas de Venta ====== */}
          <section id="facturas">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              Facturas de Venta
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Dentro de Clientes, el submenú <em>Facturas</em> muestra todas las
              facturas emitidas a los clientes. La lógica es similar a “Crear factura
              de venta” en la sección de Inventario, pero aquí las facturas se asocian
              directamente a un registro de cliente existente.
            </Typography>
            <Box
              component="img"
              src="/assets/img/clientes_facturas_listado.png"
              alt="Listado de Facturas de Venta en Clientes"
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
              En la tabla se incluyen:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  <strong>Estado factura:</strong> <em>Pendiente</em>, <em>Confirmado</em> o
                  <em>Anulado</em>.
                </li>
                <li>
                  <strong>Cliente:</strong> Nombre del cliente al que se emitió la
                  factura.
                </li>
                <li>
                  <strong>Fecha emisión / Confirmación:</strong> Días en que se creó y
                  validó la factura.
                </li>
                <li>
                  <strong>Subtotal / IVA / Importe:</strong> Totales numéricos.
                </li>
                <li>
                  <strong>Estado cobro:</strong> <em>Pendiente</em>, <em>Parcial</em> o
                  <em>Cobrado</em>.
                </li>
                <li>
                  <strong>Acciones:</strong> Íconos para ver, editar (si está
                  pendiente), anular, duplicar o enviar por mail.
                </li>
              </ul>
              Para crear una <strong>nueva factura</strong>, haz clic en el botón{" "}
              <em>“Nueva factura”</em> en la parte superior derecha.
            </Typography>
          </section>

          <Divider sx={{ margin: "16px 0" }} />

          {/* ====== SECCIÓN: Presupuestos ====== */}
          <section id="presupuestos">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              Presupuestos
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Desde <em>Clientes &gt; Presupuesto</em> podrás crear propuestas de venta
              a tus clientes. La dinámica:
            </Typography>
            <Box
              component="img"
              src="/assets/img/clientes_presupuestos_listado.png"
              alt="Listado de Presupuestos en Balaxys"
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
              Al pulsar <em>“Nuevo presupuesto”</em> se abre un modal idéntico al de
              factura: se elige cliente, items, precios, IVA, etc. Una vez confirmado,
              podrás <em>Convertir a Factura</em> desde el mismo listado haciendo clic
              en el icono de factura al final de cada fila.
            </Typography>
          </section>

          <Divider sx={{ margin: "16px 0" }} />

          {/* ====== SECCIÓN: Cobros ====== */}
          <section id="cobros">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              Cobros
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Para registrar cobros de tus facturas, ve a <em>Clientes &gt; Cobros</em>.
              Allí verás:
            </Typography>
            <Box
              component="img"
              src="/assets/img/clientes_cobros_listado.png"
              alt="Listado de Cobros en Balaxys"
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
              La tabla muestra:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  <strong>Estado cobro:</strong> <em>Confirmado</em> (ícono verde) o{" "}
                  <em>Pendiente</em> (icono amarillo).
                </li>
                <li>
                  <strong>Factura asociada:</strong> Número de la factura de venta
                  parcialmente o totalmente cobrada.
                </li>
                <li>
                  <strong>Fecha emisión / Confirmación:</strong> Días en que se creó y
                  validó el cobro.
                </li>
                <li>
                  <strong>Importe total / Pagado / Por cobrar:</strong> Valores numéricos.
                </li>
                <li>
                  <strong>Acciones:</strong> Iconos para ver detalle o cancelar el cobro.
                </li>
              </ul>
              Para crear un <strong>nuevo cobro</strong>, pulsa el botón{" "}
              <em>“Nuevo pago”</em> en la parte superior.
            </Typography>
          </section>

          <Divider sx={{ margin: "16px 0" }} />

          {/* ====== SECCIÓN: Notas de Crédito ====== */}
          <section id="notas-de-credito">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              Notas de Crédito
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Las notas de crédito se usan para devolver importes o corregir facturas
              emitidas. Accede a <em>Clientes &gt; Notas de crédito</em>:
            </Typography>
            <Box
              component="img"
              src="/assets/img/clientes_notas_credito_listado.png"
              alt="Listado de Notas de Crédito en Balaxys"
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
              Para generar una <strong>nueva nota de crédito</strong>, haz clic en{" "}
              <em>“Nueva nota de crédito”</em>. Se abrirá un modal donde deberás:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  Seleccionar el cliente (o factura) contra la cual se aplicará la
                  nota.
                </li>
                <li>
                  Elegir el almacén y año, luego ingresa el número de factura original
                  y pulsa la lupa para cargar automáticamente las líneas de la factura.
                </li>
                <li>
                  Ajustar las <strong>Cantidades</strong> o <strong>Precios</strong> que
                  se quieren devolver.
                </li>
                <li>
                  Ingresar <strong>Nota</strong> explicativa y <strong>Guardar</strong> o{" "}
                  <strong>Guardar y Confirmar</strong> para aplicarla de inmediato.
                </li>
              </ul>
            </Typography>
          </section>

          <Divider sx={{ margin: "16px 0" }} />

          {/* ====== SECCIÓN: Artículos Relacionados ====== */}
          <section id="articulos-relacionados">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              Artículos Relacionados
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: "16px", textAlign: "justify" }}
            >
              Te recomendamos revisar estos artículos para profundizar en las
              funcionalidades de Clientes:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  <Link
                    href="/clientes/glosario-ventas"
                    sx={{ textDecoration: "none", color: "#1976d2" }}
                  >
                    Glosario de Ventas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/clientes/crear-factura-venta"
                    sx={{ textDecoration: "none", color: "#1976d2" }}
                  >
                    Crear Factura de Venta
                  </Link>
                </li>
                <li>
                  <Link
                    href="/clientes/crear-presupuestos"
                    sx={{ textDecoration: "none", color: "#1976d2" }}
                  >
                    Crear Presupuesto
                  </Link>
                </li>
                <li>
                  <Link
                    href="/clientes/cobros-ventas"
                    sx={{ textDecoration: "none", color: "#1976d2" }}
                  >
                    Añadir Cobros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/clientes/notas-de-creditos"
                    sx={{ textDecoration: "none", color: "#1976d2" }}
                  >
                    Notas de Crédito
                  </Link>
                </li>
              </ul>
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>
        </Box>
      </Box>
    </>
  );
};

export default QueEsCliente;
