// src/pages/Compras/AyudaCrearOrdenCompra.tsx
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
 * Página de ayuda para “Nueva orden de compra” en Balaxys ERP.
 * Describe cómo acceder, completar los campos del encabezado, usar la tabla
 * de productos, términos y condiciones, y acciones disponibles.
 */
const AyudaCrearOrdenCompra: React.FC = () => {
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
              href="#tabla-productos"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Tabla de productos" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#terminos-condiciones"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Términos y condiciones / Notas" />
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
            Nueva orden de compra
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            El módulo de <strong>“Nueva orden de compra”</strong> en Balaxys ERP permite
            generar órdenes previas a la recepción de mercancías. Una orden de compra
            documenta qué productos se encargarán a un proveedor y con qué condiciones.
            En esta guía encontrarás:
            <ul style={{ marginLeft: "20px" }}>
              <li>Cómo acceder al formulario de orden de compra.</li>
              <li>Descripción de los campos del encabezado.</li>
              <li>Uso de la tabla para añadir líneas de productos (cantidad, precio, IVA).</li>
              <li>Sección de Términos y condiciones / Notas.</li>
              <li>Interpretación del resumen de totales (subtotal, IVA, importe total).</li>
              <li>Acciones disponibles: Cerrar, Guardar y Guardar y Confirmar.</li>
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
            Para abrir “Nueva orden de compra”:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                Ingresa a <em>Compras → Órdenes de compra</em> en el menú lateral.
              </li>
              <li>
                Haz clic en el botón azul <strong>“Nueva orden de compra”</strong> que aparece
                en la esquina superior derecha.
              </li>
            </ul>
            El sistema desplegará un modal con el formulario para crear la orden.
          </Typography>
          <Box
            component="img"
            src="/assets/img/orden_compra_nueva_btn.png"
            alt="Botón Nueva orden de compra"
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
                <strong>Moneda *:</strong> Selecciona la moneda en la que se emitirá la orden
                (por ejemplo, ARS – Peso Argentino). Obligatorio.
              </li>
              <li>
                <strong>Proveedor *:</strong> Desplegable para elegir el proveedor a quien se
                solicitará la orden. Obligatorio.
              </li>
              <li>
                <strong>Almacén *:</strong> Selecciona el almacén destino de la futura recepción
                de productos. Obligatorio.
              </li>
              <li>
                <strong>Centro de costo:</strong> (Opcional) Permite vincular esta orden a un
                centro de costo específico para control presupuestario.
              </li>
              <li>
                <strong>Número:</strong> Código identificador de la orden (ej.: OC-10/06/2025).
                Puedes dejarlo en blanco para que el sistema asigne uno automático al confirmar.
              </li>
              <li>
                <strong>Fecha emisión *:</strong> Fecha en que creas la orden. Debe corresponder
                al período contable abierto (ej.: 31/05/2025). Obligatorio. Si la fecha está fuera
                del período, se mostrará un aviso de error.
              </li>
              <li>
                <strong>Fecha confirmación *:</strong> Fecha en que validas la orden en Balaxys.
                Obligatorio.
              </li>
              <li>
                <strong>Fecha entrega *:</strong> (Opcional) Fecha estimada en que esperas recibir
                los productos. Obligatorio rellenar cuando se conozca la fecha de entrega.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/orden_compra_encabezado.png"
            alt="Campos del encabezado en Orden de compra"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Tabla de productos            */}
        {/* ----------------------------- */}
        <section id="tabla-productos">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            3. Tabla de productos
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En el cuerpo del formulario verás una tabla para agregar cada línea de producto:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Código *:</strong> Lista desplegable para seleccionar el código del
                producto a pedir. Obligatorio.
              </li>
              <li>
                <strong>Descripción *:</strong> Se completa automáticamente al elegir el código
                o puedes escribir manualmente. Obligatorio.
              </li>
              <li>
                <strong>U.M:</strong> Unidad de medida del producto (p. ej.: unidad, kg). Solo
                lectura.
              </li>
              <li>
                <strong>Existencia:</strong> Cantidad actual en stock. Solo lectura, para tu
                referencia.
              </li>
              <li>
                <strong>Cantidad *:</strong> Cantidad solicitada en la orden. Obligatorio.
              </li>
              <li>
                <strong>Costo unitario *:</strong> Precio de compra por unidad. Obligatorio.
              </li>
              <li>
                <strong>IVA:</strong> Tasa de impuesto (p. ej.: 0%, 10%, 21%). Obligatorio.
              </li>
              <li>
                <strong>Importe:</strong> Calculado automáticamente (Cantidad × Costo unitario ×
                (1 + IVA)). Solo lectura.
              </li>
              <li>
                <strong>Eliminar (ícono papelera):</strong> Elimina la línea de producto si la
                agregaste por error.
              </li>
            </ul>
            Para agregar más filas, haz clic en <strong>“Agregar producto”</strong> justo debajo
            de la última fila.
          </Typography>
          <Box
            component="img"
            src="/assets/img/orden_compra_tabla.png"
            alt="Tabla de productos en Orden de compra"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Términos y condiciones / Notas */}
        {/* ----------------------------- */}
        <section id="terminos-condiciones">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            4. Términos y condiciones / Notas
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Debajo de la tabla de productos hay dos cuadros de texto:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Términos y condiciones:</strong> Campo de texto donde puedes incluir
                cláusulas generales de la orden, como plazos de pago, requisitos de embalaje,
                acuerdos de entrega o penalizaciones por incumplimiento.
              </li>
              <li>
                <strong>Nota:</strong> Espacio para observaciones internas o comentarios
                específicos sobre esta orden (por ejemplo, instrucciones especiales para el
                proveedor).  
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/orden_compra_terminos_notas.png"
            alt="Términos y condiciones y Notas en Orden de compra"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Resumen de totales             */}
        {/* ----------------------------- */}
        <section id="resumen-totales">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            5. Resumen de totales
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En la esquina inferior derecha del formulario verás el resumen:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Subtotal:</strong> Suma de todos los importes de línea sin IVA.
              </li>
              <li>
                <strong>IVA:</strong> Total del impuesto calculado para toda la orden.
              </li>
              <li>
                <strong>Importe total:</strong> Suma final (Subtotal + IVA).  
              </li>
            </ul>
            Estos valores se actualizan en tiempo real conforme agregas o modificas las
            líneas de productos.
          </Typography>
          <Box
            component="img"
            src="/assets/img/orden_compra_resumen.png"
            alt="Resumen de totales en Orden de compra"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Acciones del formulario        */}
        {/* ----------------------------- */}
        <section id="acciones-formulario">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            6. Acciones del formulario
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En la parte superior derecha del modal encontrarás tres botones principales:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Opciones (ícono de engranaje):</strong> Despliega funcionalidades
                adicionales, como clonar la orden, configurar plantilla o ajustes del formulario.
              </li>
              <li>
                <strong>Cerrar:</strong> Cierra el formulario sin guardar ningún cambio.
              </li>
              <li>
                <strong>Guardar:</strong> Guarda la orden en estado “Sin confirmar”. Podrás
                revisarla o editarla antes de confirmarla definitivamente.
              </li>
              <li>
                <strong>Guardar y Confirmar:</strong> Valida que las fechas, cantidades y
                totales sean correctos. Si todo está en orden, la orden cambia a estado
                “Confirmada” y ya no podrá modificarse.  
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/orden_compra_acciones.png"
            alt="Botones Cerrar, Guardar, Guardar y Confirmar en Orden de compra"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Preguntas frecuentes           */}
        {/* ----------------------------- */}
        <section id="preguntas">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            7. Preguntas frecuentes
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Qué diferencia hay entre “orden de compra” y “factura de compra”?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            - La <strong>orden de compra</strong> es un documento interno que solicita productos
            a un proveedor sin generar de inmediato movimientos contables o de inventario.  
            - La <strong>factura de compra</strong> es el documento oficial que registra la
            transacción, genera movimientos contables y afecta inventario.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Por qué veo un error en “Fecha emisión”?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            La “Fecha emisión” debe corresponder a un período contable abierto. Si ingresas una fecha fuera
            del período activo, aparecerá un mensaje en rojo que te indicará corregirla.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Puedo editar la orden una vez confirmada?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            No. Al usar <strong>“Guardar y Confirmar”</strong>, la orden queda bloqueada. Si necesitas
            cambiar cantidades o precios, anula la orden y crea una nueva.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Cómo agregar más de dos productos en la orden?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Haz clic en <strong>“Agregar producto”</strong> debajo de la última fila de la tabla.  
            El sistema añadirá una nueva línea donde podrás seleccionar otro código de producto y completar
            sus datos.
          </Typography>
        </section>
      </Box>
    </Box>
  );
};

export default AyudaCrearOrdenCompra;
