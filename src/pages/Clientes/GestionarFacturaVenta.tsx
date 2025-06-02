// src/pages/Clientes/AyudaGestionarFactura.tsx
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

import React from "react";
import { Box, Typography, List, ListItem, Link, ListItemText, Divider } from "@mui/material";

/**
 * Página de ayuda para "Gestionar Facturas de Venta" (Listado) en Balaxys ERP.
 * Proporciona guía completa sobre cómo utilizar el listado de facturas: columnas, filtros y acciones.
 */
const GestionarFacturaVenta: React.FC = () => {
  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* ============================= */}
      {/* 1. ÍNDICE DE SECCIONES        */}
      {/* ============================= */}
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
              <ListItemText primary="Vista de Listado" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#columnas" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Columnas del Listado" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#filtros" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Filtros y Búsqueda" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#acciones" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Acciones disponibles" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#preguntas" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Preguntas Frecuentes" />
            </Link>
          </ListItem>
        </List>
      </Box>

      {/* ============================= */}
      {/* 2. CONTENIDO PRINCIPAL       */}
      {/* ============================= */}
      <Box sx={{ flex: 3, overflowY: "auto", paddingLeft: "20px" }}>
        {/* ----------------------------- */}
        {/* Introducción                 */}
        {/* ----------------------------- */}
        <section id="introduccion">
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            Gestionar Facturas de Venta
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En Balaxys ERP, la sección de <strong>Facturas de venta</strong> permite visualizar y administrar todas las facturas emitidas.
            Desde aquí podrás filtrar, buscar, ver detalles, confirmar, anular, reenviar y facturar presupuestos.
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Esta guía explica cómo utilizar el listado de facturas: entender cada columna, aplicar filtros y realizar las acciones disponibles.
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Vista de Listado             */}
        {/* ----------------------------- */}
        <section id="vista-listado">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Vista de Listado
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Al ingresar a <em>Facturas de venta</em>, verás el listado principal con todas las facturas registradas:
          </Typography>
          <Box
            component="img"
            src="/assets/img/facturas_listado.png"
            alt="Listado de Facturas de Venta"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            La parte superior ofrece:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Botón "Nueva factura"</strong>: Para abrir el formulario de factura.</li>
              <li><strong>Ícono "Recargar"</strong>: Actualiza el listado en tiempo real.</li>
              <li><strong>Barra de búsqueda</strong>: Filtra por texto en número, cliente o código.</li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Columnas del Listado          */}
        {/* ----------------------------- */}
        <section id="columnas">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Columnas del Listado
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Cada fila de la tabla muestra los siguientes campos:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Estado factura:</strong> Indica si está <em>Pendiente</em>, <em>Confirmada</em> o <em>Anulada</em>.</li>
              <li><strong>Almacén:</strong> Sede que emitió la factura (ej.: Principal, Secundario).</li>
              <li><strong>Fecha confirmación:</strong> Fecha en formato <em>YYYY-MM-DD</em> de confirmación.</li>
              <li><strong>Número de factura:</strong> Identificador único (ej.: FA-1/01/2025).</li>
              <li><strong>Cliente:</strong> Nombre del cliente.</li>
              <li><strong>Subtotal:</strong> Monto de productos sin incluir IVA.</li>
              <li><strong>IVA:</strong> Total de impuestos aplicados.</li>
              <li><strong>Importe total:</strong> Suma de <em>Subtotal + IVA</em>.</li>
              <li><strong>Estado de cobro:</strong> Puede ser <em>Pendiente</em>, <em>Parcial</em> o <em>Cobrado</em>.</li>
              <li><strong>Acciones:</strong> Iconos para ver, confirmar, anular, reenviar, duplicar y facturar.
              </li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Filtros y Búsqueda            */}
        {/* ----------------------------- */}
        <section id="filtros">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Filtros y Búsqueda
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Para localizar rápidamente facturas, utiliza los siguientes filtros:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Buscador global:</strong> Ingresa texto libre para buscar en número, cliente o descripción.</li>
              <li><strong>Filtro por Estado:</strong> Selecciona "Pendiente", "Confirmada" o "Anulada".
              </li>
              <li><strong>Filtro por Fecha:</strong> Rango de fechas para ver facturas emitidas o confirmadas en ese periodo.
              </li>
              <li><strong>Filtro por Cliente:</strong> Selecciona un cliente específico para ver solo sus facturas.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/facturas_listado_filtros.png"
            alt="Filtros en listado de facturas"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Acciones disponibles          */}
        {/* ----------------------------- */}
        <section id="acciones">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Acciones disponibles
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En la columna de acciones encontrarás iconos para:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Ver detalles (ojo):</strong> Muestra información completa en modo lectura.
              </li>
              <li><strong>Confirmar (check):</strong> Cambia el estado de "Pendiente" a "Confirmado".
              </li>
              <li><strong>Anular (papelera):</strong> Anula la factura, cambia el estado a "Anulado" y detiene su contabilización.
              </li>
              <li><strong>Reenviar (email):</strong> Envía la factura por correo electrónico al cliente.
              </li>
              <li><strong>Duplicar (copiar):</strong> Crea una nueva factura copiada con los mismos datos (útil para facturación recurrente).
              </li>
              <li><strong>Facturar presupuesto (carpeta):</strong> Si la factura fue creada desde un presupuesto, permite el acceso rápido al presupuesto original.
              </li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Preguntas Frecuentes          */}
        {/* ----------------------------- */}
        <section id="preguntas">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Preguntas Frecuentes
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Cómo refresco el listado de facturas?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Haz clic en el ícono de <em>Recargar</em> (flecha circular) ubicado en la parte superior del listado.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Puedo ver solo facturas de un cliente específico?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Sí. Utiliza el filtro "Cliente" en la parte superior para seleccionar el cliente deseado.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Qué sucede al anular una factura?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            La factura cambia a estado <em>Anulado</em>, deja de afectar inventario y contabilidad.
            Ya no aparece en reportes de facturación activa.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Cómo duplico una factura recurrente?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Haz clic en el ícono de <em>Duplicar</em> (copiar) en la fila de la factura que deseas replicar.
            Se abrirá un modal con datos prellenados para ajustes y confirmación.
          </Typography>
        </section>
      </Box>
    </Box>
  );
};

export default GestionarFacturaVenta;