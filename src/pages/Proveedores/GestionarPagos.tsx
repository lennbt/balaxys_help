// src/pages/Compras/AyudaGestionarPagos.tsx
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

import React from "react";
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
 * Página de ayuda para “Gestión de pagos de compra” en Balaxys ERP.
 * Describe la pantalla de listado de pagos, sus columnas, filtros,
 * y las acciones disponibles (ver, cancelar, nuevo pago).
 */
const AyudaGestionarPagos: React.FC = () => {
  return (
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
              href="#acceso-listado"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Acceso al listado de pagos" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#columnas-tabla"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Descripción de columnas" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#boton-nuevo-pago"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Botón “Nuevo pago”" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#acciones-fila"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Acciones por fila" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#busqueda-rapida"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Búsqueda rápida" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#preguntas"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Preguntas frecuentes" />
            </Link>
          </ListItem>
        </List>
      </Box>

      {/* ======================================= */}
      {/* 2. CONTENIDO PRINCIPAL                  */}
      {/* ======================================= */}
      <Box sx={{ flex: 3, overflowY: "auto", paddingLeft: "20px" }}>
        {/* ----------------------------- */}
        {/* Introducción                 */}
        {/* ----------------------------- */}
        <section id="introduccion">
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            Gestión de pagos de compra
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En esta pantalla podrás visualizar todos los pagos de compra que hayas creado,
            tanto confirmados como pendientes. Desde aquí es posible:
            <ul style={{ marginLeft: "20px" }}>
              <li>Ver el estado y detalles de cada pago.</li>
              <li>Crear un nuevo pago haciendo clic en “Nuevo pago”.</li>
              <li>Buscar rápidamente un pago por número, proveedor o fechas.</li>
              <li>Acceder a acciones sobre cada fila: ver detalles, cancelar pago.</li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_listado_pagos.png"
            alt="Listado de pagos en Compras"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Acceso al listado             */}
        {/* ----------------------------- */}
        <section id="acceso-listado">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            1. Acceso al listado de pagos
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Para acceder a la pantalla de “Pagos”:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                En el menú lateral de Balaxys ERP, ingresa a <em>Compras → Pagos de compras</em>.
              </li>
              <li>
                El sistema mostrará automáticamente el listado con todos los pagos que hayas
                registrado, ordenados por fecha o número de pago.
              </li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Descripción de columnas        */}
        {/* ----------------------------- */}
        <section id="columnas-tabla">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            2. Descripción de columnas
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            El listado contiene varias columnas clave:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Estado:</strong> Muestra si el pago está “Confirmado” (ícono verde) o “Sin confirmar”
                (ícono reloj). Un pago confirmado significa que ya generó el asiento contable y afectó la factura.
              </li>
              <li>
                <strong>Pago:</strong> Fecha en que se emitió o confirmó el pago (formato DD/MM/YYYY).
              </li>
              <li>
                <strong>Número pago:</strong> Código único asignado al pago (ej.: PA-1/2025).
              </li>
              <li>
                <strong>Proveedor:</strong> Nombre del proveedor al que se le realizó el pago.
              </li>
              <li>
                <strong>Importe total:</strong> Total de la factura original que estás abonando (incluye impuestos).
              </li>
              <li>
                <strong>Pagado:</strong> Monto que se pagó en esta transacción.
              </li>
              <li>
                <strong>Por pagar:</strong> Saldo pendiente de la factura después de este pago.
              </li>
              <li>
                <strong>Acciones:</strong> Conjunto de iconos que permiten ver el detalle del pago,
                cancelar un pago confirmado o volver a abrir un pago sin confirmar.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_listado_pagos_columnas.png"
            alt="Columnas del listado de pagos"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Botón “Nuevo pago”             */}
        {/* ----------------------------- */}
        <section id="boton-nuevo-pago">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            3. Botón “Nuevo pago”
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En la esquina superior derecha encontrarás el botón azul <strong>“Nuevo pago”</strong>:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                Haz clic en él para abrir el formulario de <em>“Nuevo pago de compra”</em>,
                donde podrás registrar un pago para una factura existente.
              </li>
              <li>
                Al hacer clic, se desplegará un modal con el formulario ya explicado en la guía de
                “Nuevo pago de compra”.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_listado_pagos_nuevo_btn.png"
            alt="Botón Nuevo pago en listado de Pagos"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Búsqueda rápida               */}
        {/* ----------------------------- */}
        <section id="busqueda-rapida">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            4. Búsqueda rápida
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Para localizar un pago específico, utiliza el campo de <strong>“Búsqueda rápida”</strong> ubicado
            sobre la tabla:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                Ingresa texto relacionado con el pago: número de pago, nombre de proveedor, fecha o montos.
              </li>
              <li>
                Al escribir, la tabla irá filtrando en tiempo real los resultados que coincidan con tu criterio.
              </li>
              <li>
                Esta búsqueda es especialmente útil cuando tienes muchos pagos registrados y necesitas
                encontrar uno rápidamente.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_listado_pagos_busqueda.png"
            alt="Campo Búsqueda rápida en listado de Pagos"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Acciones por fila              */}
        {/* ----------------------------- */}
        <section id="acciones-fila">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            5. Acciones por fila
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Cada fila de la tabla de pagos incluye una columna de <strong>Acciones</strong> con tres iconos:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Ver (ícono ojo):</strong> Abre un modal o pantalla con los detalles completos
                de ese pago (fechas, facturas vinculadas, desglose de importes, notas, etc.).
              </li>
              <li>
                <strong>Reabrir/Desconfirmar (ícono reloj):</strong> Si el pago está en estado “Sin confirmar”,
                este icono te permite volver a abrirlo para editar. Si el pago está “Confirmado”, este icono no aparece.
              </li>
              <li>
                <strong>Cancelar (ícono prohibido/círculo con línea):</strong> Si el pago ya estaba confirmado,
                al hacer clic en este icono podrás anularlo. Esto revertirá el asiento contable y actualizará
                el saldo pendiente de la factura.  
                El icono de cancelar solo aparece para pagos confirmados.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_listado_pagos_acciones.png"
            alt="Iconos de acciones en lista de Pagos"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Preguntas frecuentes           */}
        {/* ----------------------------- */}
        <section id="preguntas">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            6. Preguntas frecuentes
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Cómo sé que un pago está confirmado?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Un pago confirmado muestra un icono de círculo verde con una marca de verificación en la columna
            <strong>“Estado”</strong>. Si ves un reloj en lugar del círculo verde, significa que está como
            “Sin confirmar”.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Puedo cancelar un pago confirmado?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Sí. Para cancelar un pago confirmado, haz clic en el icono de <strong>Cancelar</strong> (círculo con línea).
            Esto revertirá el asiento contable generado y actualizará el saldo pendiente de la factura asociada.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Cómo edito un pago sin confirmar?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Los pagos que estén en estado “Sin confirmar” mostrarán un icono de <strong>Reabrir</strong> (reloj) en lugar
            de <strong>Cancelar</strong>. Haz clic en ese reloj para volver a abrir el pago y editar cualquiera de sus campos.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Dónde puedo ver el historial de un pago?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Para ver el historial completo (fechas de creación, confirmación, cancelación), haz clic en el ícono
            de <strong>Ver</strong> (ojo) en la fila del pago. En la pantalla de detalle encontrarás todo el registro
            de cambios y notas asociadas.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Qué sucede si cierro el periodo contable y tengo pagos pendientes?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Antes de cerrar el período contable, asegúrate de confirmar o anular todos los pagos pendientes. Si cierras el
            período con pagos sin confirmar, no podrás editarlos ni confirmarlos hasta que reabras el periodo contable.
          </Typography>
        </section>
      </Box>
    </Box>
  );
};

export default AyudaGestionarPagos;
