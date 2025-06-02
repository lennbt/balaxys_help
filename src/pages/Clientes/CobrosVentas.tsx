// src/pages/Ventas/AyudaCobrosVenta.tsx
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
import cobroListado from "../../assets/images/cobro_listado.png";
import cobroencabezado from "../../assets/images/cobro_encabezado.png";



/**
 * Página de ayuda para “Nuevo Cobro de Venta” en Balaxys ERP.
 * Explica cómo acceder, completar los campos del encabezado de cobro, buscar la factura de venta,
 * llenar la tabla de líneas (definir importe a cobrar), agregar notas, interpretar el resumen de totales
 * y utilizar los botones “Cerrar”, “Guardar” y “Guardar y Confirmar”.
 */
const CobrosVentas: React.FC = () => {
  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* ======================================= */}
      {/* 1. ÍNDICE DE SECCIONES                  */}
      {/* ======================================= */}
      <Box
        sx={{
          flex: 1,
          position: "sticky",     // Fija el índice en la pantalla
          top: 20,                // Espacio desde la parte superior
          height: "100vh",        // Ocupa toda la altura de la ventana
          paddingRight: "20px",
          paddingLeft: "20px",
          overflowY: "auto",      // Permite scroll vertical
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
            <Link href="#introduccion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Introducción" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#acceso-formulario" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Acceso al formulario" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#campos-encabezado" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Campos del encabezado" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#buscar-factura" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Cómo buscar la factura de venta" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#tabla-lineas" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Tabla de líneas (importe a cobrar)" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#campo-nota" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Campo Nota" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#resumen-totales" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Resumen de totales" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#acciones-formulario" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Acciones del formulario" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#preguntas" sx={{ textDecoration: "none", color: "#1976d2" }}>
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
            Nuevo Cobro
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            El módulo de <strong>“Nuevo Cobro</strong> te permite registrar cobros parciales o totales a
            facturas de venta confirmadas. En esta guía aprenderás a:
            <ul style={{ marginLeft: "20px" }}>
              <li>Acceder al formulario de cobro.</li>
              <li>Rellenar los campos del encabezado (cliente, forma de pago, fechas, etc.).</li>
              <li>Buscar la factura de venta que deseas cobrar usando la lupa.</li>
              <li>Completar la tabla de líneas indicando el importe a cobrar.</li>
              <li>Agregar una nota opcional.</li>
              <li>Interpretar el resumen de totales (importe documento, total a cobrar, por cobrar).</li>
              <li>Usar los botones “Cerrar”, “Guardar” y “Guardar y Confirmar”.</li>
            </ul>
          </Typography>
<Box
  component="img"
  src={cobroListado}
  alt="Listado de Cobros en Ventas"
  sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
/>
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
            Para abrir la pantalla de “Nuevo Cobro”:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                Ingresa al módulo <em>Ventas → Cobros</em> desde el menú lateral.
              </li>
              <li>
                Haz clic en el botón azul <strong>“Nuevo cobro”</strong> en la parte superior derecha.
              </li>
            </ul>
            Se mostrará un modal con el formulario para registrar el cobro de una factura.
          </Typography>
        
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
            En la parte superior del formulario verás los siguientes campos obligatorios y opcionales:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Cliente *:</strong> Selecciona el cliente al cual pertenece la factura que vas a cobrar.
              </li>
              <li>
                <strong>Forma de pago *:</strong> Elige el método (Efectivo, Cheque, Transferencia, Tarjeta, etc.).
                Si necesitas agregar una nueva forma, haz clic en <strong>“+ Adicionar”</strong> dentro del desplegable.
              </li>
              <li>
                <strong>Número de referencia:</strong> (Opcional) Número de cheque, transacción, etc.
              </li>
              <li>
                <strong>Cuenta bancaria:</strong> (Opcional) Cuenta desde la cual recibes el pago.
              </li>
              <li>
                <strong>Moneda *:</strong> Moneda del cobro (ej.: UYU – Peso Uruguayo).
              </li>
              <li>
                <strong>Fecha emisión *:</strong> Fecha en que se registra el cobro (DD/MM/YYYY). Debe coincidir con un período contable abierto.
              </li>
              <li>
                <strong>Fecha confirmación *:</strong> Fecha en que confirmas el cobro. Obligatorio.
              </li>
            </ul>
          </Typography>
        <Box
  component="img"
  src={cobroencabezado}
  alt="Campos Encabezado de  nuevo cobro"
  sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
/>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Cómo buscar la factura        */}
        {/* ----------------------------- */}
        <section id="buscar-factura">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            3. Cómo buscar la factura de venta
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Después de elegir el cliente:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                Debajo del encabezado, aparecerán los campos <strong>“Número documento”</strong> y <strong>“Fecha”</strong>.
                Para cambiar la factura mostrada por defecto, haz clic en el campo <strong>“Número documento”</strong> y
                luego en el ícono de <strong>lupa</strong> que aparece a su lado.
              </li>
              <li>
                En el modal emergente, usa filtros (número de factura, fecha, estado de cobro) para encontrar la factura correcta.
              </li>
              <li>
                Al seleccionar la factura deseada, se cargarán todos los datos en la fila de abajo:
                <strong>“Fecha”</strong>, <strong>“Moneda”</strong>, <strong>“Importe total”</strong>, <strong>“Importe cobrado”</strong>
                y <strong>“Importe por cobrar”</strong>.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/ventas_nuevo_cobro_buscar_factura.png"
            alt="Cómo buscar factura con lupa en Nuevo Cobro"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Tabla de líneas (importe a cobrar) */}
        {/* ----------------------------- */}
        <section id="tabla-lineas">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            4. Tabla de líneas (importe a cobrar)
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En el centro del formulario verás una tabla con una sola fila (la factura seleccionada) que incluye:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Número documento:</strong> Código de la factura de venta (ej.: FA-1/01/2025). Solo lectura.
              </li>
              <li>
                <strong>Fecha:</strong> Fecha de emisión de la factura original. Solo lectura.
              </li>
              <li>
                <strong>Moneda:</strong> Moneda de la factura (ej.: UYU). Solo lectura.
              </li>
              <li>
                <strong>Importe total:</strong> Monto total facturado (incluye impuestos). Solo lectura.
              </li>
              <li>
                <strong>Importe cobrado:</strong> Monto que ya se ha cobrado anteriormente de esa factura. Solo lectura.
              </li>
              <li>
                <strong>Importe por cobrar:</strong> Saldo pendiente de la factura. Solo lectura.
              </li>
              <li>
                <strong>Importe a cobrar *:</strong> Campo editable donde indicas cuánto vas a cobrar en esta transacción.
                Obligatorio. No puede superar el <strong>Importe por cobrar</strong>.
              </li>
              <li>
                <strong>Eliminar (papelera):</strong> Si agregaste esta línea de factura por error, haz clic en el icono
                de papelera para quitarla.  
                Nota: como solo permitimos cobrar una factura a la vez, normalmente solo habrá una fila.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/ventas_nuevo_cobro_tabla.png"
            alt="Tabla de líneas en Nuevo Cobro"
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
            Debajo de la tabla verás un cuadro de texto llamado <strong>“Nota”</strong>. Se utiliza para:
            <ul style={{ marginLeft: "20px" }}>
              <li>Agregar comentarios internos sobre este cobro (p. ej., “Cliente abonó en efectivo”).</li>
              <li>Incluir referencias adicionales, como número de recibo o detalles de pago parcial.</li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/ventas_nuevo_cobro_nota.png"
            alt="Campo Nota en Nuevo Cobro"
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
            En la esquina inferior derecha del modal verás un resumen que incluye:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Importe documento:</strong> Total de la factura original (por ejemplo, $U 200,00).
              </li>
              <li>
                <strong>Total a cobrar:</strong> Monto que vas a cobrar en esta transacción (por ejemplo, $U 200,00).
              </li>
              <li>
                <strong>Por cobrar:</strong> Saldo restante luego de este cobro (por ejemplo, $U 0,00).  
              </li>
            </ul>
            Estos valores se actualizan en tiempo real conforme modificas el campo
            <strong>“Importe a cobrar”</strong>.
          </Typography>
          <Box
            component="img"
            src="/assets/img/ventas_nuevo_cobro_resumen.png"
            alt="Resumen de totales en Nuevo Cobro"
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
            En la parte superior derecha del modal se encuentran tres botones:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Cerrar:</strong> Cierra el formulario sin guardar cambios.
              </li>
              <li>
                <strong>Guardar:</strong> Registra el cobro en estado “Sin confirmar”. No se genera
                aún el asiento contable ni se actualiza el saldo de la factura. Podrás editarlo
                o confirmarlo más tarde desde el listado de cobros.
              </li>
              <li>
                <strong>Guardar y Confirmar:</strong> Verifica que el “Importe a cobrar” sea válido
                (≤ “Importe por cobrar”). Al confirmar, se genera el asiento contable correspondiente
                y se reduce el saldo pendiente de la factura original.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/ventas_nuevo_cobro_acciones.png"
            alt="Botones Cerrar, Guardar, Guardar y Confirmar en Nuevo Cobro"
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
            ¿Por qué no puedo cobrar más del “Importe por cobrar”?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            El campo <strong>“Importe a cobrar”</strong> debe ser menor o igual al saldo pendiente
            (“Importe por cobrar”). Si intentas ingresar un monto mayor, el sistema mostrará un
            error y no permitirá confirmar el cobro.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Qué sucede si guardo sin confirmar?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Al hacer clic en <strong>“Guardar”</strong>, el cobro queda registrado como “Sin confirmar”.
            No se crea todavía el asiento contable y la factura no se actualiza hasta que confirmes
            el cobro más adelante.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Cómo edito un cobro sin confirmar?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Desde el listado de Cobros (Ventas → Cobros), busca el cobro con estado “Sin confirmar”
            y haz clic en el icono de lápiz para volver a abrirlo y modificar cualquier campo. Una
            vez confirmado, ya no podrás editarlo; en su lugar, deberás crear un nuevo cobro o
            emitir una nota de crédito.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Puedo cobrar varias facturas en un solo cobro?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Si, el formulario “Nuevo Cobro” permite seleccionar y cobrar factura de venta
            para un mismo cliente. Si necesitas cobrar varias facturas de diferentes cliente, crea cobros separados para cada uno.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Dónde veo el historial completo de un cobro?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Haz clic en el icono de <strong>Ver (ojo)</strong> en la fila del cobro dentro del listado de Cobros.
            Esto abrirá un modal con el detalle completo del cobro, incluyendo fechas de creación,
            confirmación, notas y facilidad de imprimir o descargar comprobante.
          </Typography>
        </section>
      </Box>
    </Box>
  );
};

export default CobrosVentas;
