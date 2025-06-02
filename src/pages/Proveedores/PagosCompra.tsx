// src/pages/Compras/AyudaAñadirPagoCompra.tsx
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
 * Página de ayuda para “Nueva pago de compra” en Balaxys ERP.
 * Explica cómo acceder, completar los campos del encabezado, seleccionar la factura a pagar,
 * indicar el monto a pagar, agregar notas, interpretar el resumen de totales
 * y usar las acciones disponibles.
 */
const AyudaAñadirPagoCompra: React.FC = () => {
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
              href="#acceso-formulario"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Acceso al formulario" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#campos-encabezado"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Campos del encabezado" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#seleccionar-factura"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Cómo seleccionar la factura a pagar" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#tabla-pagos"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Tabla de pago detallado" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#campo-nota"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Campo Nota" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#resumen-totales"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Resumen de totales" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#acciones-formulario"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Acciones del formulario" />
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
            Nuevo pago de compra
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            El módulo de <strong>“Nuevo pago de compra”</strong> permite registrar
            pagos parciales o totales a facturas de compra confirmadas. En esta guía
            aprenderás a:
            <ul style={{ marginLeft: "20px" }}>
              <li>Acceder al formulario de pago.</li>
              <li>Completar los campos del encabezado (proveedor, forma de pago, fechas, etc.).</li>
              <li>Seleccionar la factura de compra que deseas pagar.</li>
              <li>Definir el importe a pagar y revisar el saldos pendientes.</li>
              <li>Agregar notas adicionales.</li>
              <li>Interpretar el resumen de totales (importe documento, total a pagar, por pagar).</li>
              <li>Usar los botones “Cerrar”, “Guardar” y “Guardar y Confirmar”.</li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Acceso al formulario          */}
        {/* ----------------------------- */}
        <section id="acceso-formulario">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            1. Acceso al formulario
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Para acceder a “Nuevo pago de compra”:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                Ingresa al módulo <em>Compras → Pagos de compras</em> desde el menú lateral.
              </li>
              <li>
                Haz clic en el botón azul <strong>“Nuevo pago”</strong> en la esquina superior derecha.
              </li>
            </ul>
            Aparecerá un modal con el formulario para registrar el pago.
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_nuevo_pago_btn.png"
            alt="Botón Nuevo pago en listado de Compras"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Campos del encabezado         */}
        {/* ----------------------------- */}
        <section id="campos-encabezado">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            2. Campos del encabezado
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En la parte superior del formulario encontrarás los siguientes campos:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Proveedor *:</strong> Desplegable para seleccionar el proveedor
                al cual pertenece la factura que vas a pagar. Obligatorio.
              </li>
              <li>
                <strong>Forma de pago *:</strong> Elige el método de pago (p. ej. Efectivo,
                Cheque, Transferencia, Tarjeta de crédito, PayPal). Obligatorio.  
                Para agregar una forma de pago nueva, haz clic en <strong>“+ Adicionar”</strong>.
              </li>
              <li>
                <strong>Número de referencia:</strong> (Opcional) Identificador interno del
                pago (p. ej., número de cheque o transacción).
              </li>
              <li>
                <strong>Cuenta bancaria:</strong> (Opcional) Selecciona la cuenta bancaria desde
                la que se efectúa el pago.
              </li>
              <li>
                <strong>Moneda *:</strong> Indica la moneda del pago (ej.: ARS – Peso Argentino).
                Obligatorio.
              </li>
              <li>
                <strong>Fecha emisión *:</strong> Fecha en que se genera el pago (DD/MM/YYYY).
                Obligatorio.
              </li>
              <li>
                <strong>Fecha confirmación *:</strong> Fecha en que confirmas el pago. Obligatorio.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_nuevo_pago_encabezado.png"
            alt="Campos del encabezado en Nuevo pago de compra"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Cómo seleccionar la factura   */}
        {/* ----------------------------- */}
        <section id="seleccionar-factura">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            3. Cómo seleccionar la factura a pagar
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Luego de elegir el proveedor, se habilita la lista de facturas pendientes:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                Debajo de la sección de fechas, verás las columnas: 
                <strong>“Número documento”</strong> y <strong>“Fecha”</strong>.  
              </li>
              <li>
                Por defecto, aparece una factura confirmada (por ejemplo, RE-1/01/2025).
                Para cambiarla, haz clic en el campo <strong>“Número documento”</strong> y
                luego en el ícono de <strong>lupa</strong> al lado para buscar otra factura.
              </li>
              <li>
                En el modal de búsqueda, filtra por número de factura, fecha, estado pago,
                o cualquier texto relacionado. Selecciona la factura correspondiente.
              </li>
              <li>
                Al seleccionar la factura, el sistema cargará automáticamente el
                <strong>“Importe total”</strong> (columna en gris) y el
                <strong>“Importe por pagar”</strong> (columna editable) con el saldo pendiente.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_nuevo_pago_buscar_factura.png"
            alt="Cómo buscar factura con lupa en Nuevo pago"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Tabla de pago detallado        */}
        {/* ----------------------------- */}
        <section id="tabla-pagos">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            4. Tabla de pago detallado
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En la tabla verás las siguientes columnas:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Número documento:</strong> Código de la factura de compra seleccionada
                (ej.: RE-1/01/2025). Solo lectura.
              </li>
              <li>
                <strong>Fecha:</strong> Fecha de emisión de la factura original. Solo lectura.
              </li>
              <li>
                <strong>Importe total:</strong> Total de la factura con impuestos incluidos. Solo lectura.
              </li>
              <li>
                <strong>Importe pagado:</strong> Monto que ya se ha pagado previamente a esa factura.
                Solo lectura.
              </li>
              <li>
                <strong>Importe por pagar:</strong> Saldo pendiente de pago. Solo lectura.
              </li>
              <li>
                <strong>Importe a pagar *:</strong> Monto que deseas pagar en esta transacción.
                Obligatorio. Debe ser ≤ “Importe por pagar”.  
              </li>
              <li>
                <strong>Eliminar (ícono papelera):</strong> Si agregaste una línea de factura por error,
                haz clic en este ícono para eliminarla.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_nuevo_pago_tabla.png"
            alt="Tabla detallada en Nuevo pago de compra"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Campo Nota                     */}
        {/* ----------------------------- */}
        <section id="campo-nota">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            5. Campo Nota
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Debajo de la tabla de facturas hay un cuadro de texto llamado <strong>“Nota”</strong>.
            Utilízalo para agregar comentarios relacionados con el pago, por ejemplo:
            <ul style={{ marginLeft: "20px" }}>
              <li>Referencia del comprobante bancario.</li>
              <li>Instrucciones especiales para contabilidad.</li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_nuevo_pago_nota.png"
            alt="Campo Nota en Nuevo pago de compra"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Resumen de totales             */}
        {/* ----------------------------- */}
        <section id="resumen-totales">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            6. Resumen de totales
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En la esquina inferior derecha verás un resumen con:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Importe documento:</strong> Total de la factura original (por ejemplo, 420,00).
              </li>
              <li>
                <strong>Total a pagar:</strong> Monto que vas a abonar en esta transacción
                (por ejemplo, 400,00).
              </li>
              <li>
                <strong>Por pagar:</strong> Saldo restante después de aplicar este pago
                (por ejemplo, 20,00).  
              </li>
            </ul>
            Estos valores se actualizan automáticamente conforme modificas el campo
            <strong>“Importe a pagar”</strong>.
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_nuevo_pago_resumen.png"
            alt="Resumen de totales en Nuevo pago de compra"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Acciones del formulario        */}
        {/* ----------------------------- */}
        <section id="acciones-formulario">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            7. Acciones del formulario
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En la parte superior derecha del modal encontrarás estos botones:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Cerrar:</strong> Cierra el formulario sin guardar cambios.
              </li>
              <li>
                <strong>Guardar:</strong> Registra el pago en estado “Sin confirmar”. Esto no
                generará inmediatamente el asiento contable ni afectará el saldo pendiente. Podrás
                revisarlo y confirmarlo más tarde.
              </li>
              <li>
                <strong>Guardar y Confirmar:</strong> Verifica que el “Importe a pagar” sea válido
                (≤ “Importe por pagar”). Al confirmar, genera el asiento contable correspondiente
                y reduce el saldo pendiente de la factura original.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_nuevo_pago_acciones.png"
            alt="Botones Cerrar, Guardar, Guardar y Confirmar en Nuevo pago"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Preguntas frecuentes           */}
        {/* ----------------------------- */}
        <section id="preguntas">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            8. Preguntas frecuentes
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Por qué no puedo pagar más del “Importe por pagar”?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            El campo <strong>“Importe a pagar”</strong> no puede exceder el saldo pendiente
            (“Importe por pagar”). Si intentas ingresar un monto superior, el sistema mostrará
            un mensaje de error y no permitirá confirmar el pago.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Qué sucede si guardo sin confirmar?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Al seleccionar <strong>“Guardar”</strong>, el pago queda registrado como “Sin confirmar”.
            No se genera el asiento contable y el saldo de la factura no se reduce. Podrás editar o
            confirmar el pago más adelante desde el listado de pagos.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Cómo edito un pago sin confirmar?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Desde el listado de pagos de compras, busca el pago en estado “Sin confirmar” y haz clic
            en el ícono de lápiz para editarlo. Una vez confirmado, el pago no se podrá modificar.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Puedo pagar varias facturas en un solo pago?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            No. El formulario de “Nuevo pago de compra” solo permite seleccionar una factura
            por transacción. Para pagar varias facturas, crea pagos separados o verifica si tu
            flujo de trabajo requiere un pago combinado en otro módulo (por ejemplo, Inventario o
            Cuentas por Pagar segmentado).
          </Typography>
        </section>
      </Box>
    </Box>
  );
};

export default AyudaAñadirPagoCompra;
