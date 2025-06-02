// src/pages/Compras/AyudaCrearFacturaCompra.tsx
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
 * Página de ayuda para “Nueva factura de compra” en Balaxys ERP.
 * Explica cómo acceder, completar los campos del formulario, usar la tabla de productos,
 * y las acciones disponibles (Cerrar, Guardar, Guardar y Confirmar).
 */
const AyudaCrearFacturaCompra: React.FC = () => {
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
              href="#acceso-modulo"
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
              href="#campos-adicionales"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Campos adicionales" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#resumen-total"
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
            Nueva factura de compra
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            El módulo de <strong>“Nueva factura de compra”</strong> en Balaxys ERP permite
            registrar compras de productos o servicios para un proveedor. Aquí aprenderás:
            <ul style={{ marginLeft: "20px" }}>
              <li>Cómo acceder al formulario desde el módulo de Compras.</li>
              <li>Significado de cada campo del encabezado.</li>
              <li>Cómo usar la tabla para agregar líneas de productos.</li>
              <li>Campos adicionales como nota, forma de pago y registro de pago inmediato.</li>
              <li>Interpretación del resumen de totales (subtotal, IVA, importe total).</li>
              <li>Botones y acciones disponibles: “Cerrar”, “Guardar” y “Guardar y Confirmar”.</li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Acceso al formulario          */}
        {/* ----------------------------- */}
        <section id="acceso-modulo">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            1. Acceso al formulario
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Para abrir “Nueva factura de compra”:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                Ingresa a <em>Compras → Facturas de compras</em> en el menú lateral.
              </li>
              <li>
                Haz clic en el botón azul <strong>“Nueva factura”</strong> ubicado en la esquina
                superior derecha de la pantalla de listado.
              </li>
            </ul>
            Se abrirá un formulario modal donde podrás ingresar todos los detalles de la factura.
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_nueva_factura_btn.png"
            alt="Botón Nueva factura en listado de Compras"
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
            En la parte superior del formulario encontrarás los campos básicos:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Moneda *:</strong> Selecciona la moneda en la que está expresada la factura
                (ej.: ARS - Peso Argentino).
              </li>
              <li>
                <strong>Proveedor *:</strong> Desplegable para elegir el proveedor quien emite la factura.
                Obligatorio.
              </li>
              <li>
                <strong>Almacén *:</strong> Selecciona el almacén donde se registrarán los productos recibidos.
                Obligatorio.
              </li>
              <li>
                <strong>Centro de costo:</strong> (Opcional) Permite asignar la factura a un centro de costo
                específico.
              </li>
              <li>
                <strong>Número:</strong> Código identificador de la factura (p. ej.: RE-5/06/2025). Puedes
                ingresar manualmente o dejar en blanco para que el sistema genere uno automático.
              </li>
              <li>
                <strong>Fecha emisión *:</strong> Indica la fecha en que se emite la factura (formato DD/MM/YYYY).
                Obligatorio.
              </li>
              <li>
                <strong>Fecha confirmación *:</strong> Fecha en que validas la factura en el sistema. Obligatorio.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_nueva_factura_encabezado.png"
            alt="Campos del encabezado en formulario de Nueva factura"
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
            En el centro del formulario verás una tabla para añadir cada línea de producto:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Código *:</strong> Desplegable donde seleccionas el código del producto. Obligatorio.
              </li>
              <li>
                <strong>Descripción *:</strong> Se completa automáticamente al elegir un código o puedes escribir
                texto manualmente. Obligatorio.
              </li>
              <li>
                <strong>U.M:</strong> Unidad de medida del producto (p. ej.: kg, unidad). Campo de solo lectura.
              </li>
              <li>
                <strong>Disponibilidad:</strong> Muestra la cantidad en stock actual del producto. Solo lectura.
              </li>
              <li>
                <strong>Cantidad *:</strong> Cantidad de unidades adquiridas. Obligatorio.
              </li>
              <li>
                <strong>Costo unitario *:</strong> Precio de compra por unidad. Obligatorio.
              </li>
              <li>
                <strong>IVA:</strong> Tasa de impuesto correspondiente (ej.: 0%, 10%, 21%). Obligatorio.
              </li>
              <li>
                <strong>Importe:</strong> Cálculo automático: Cantidad × Costo unitario × (1 + IVA).  
                Solo lectura.
              </li>
              <li>
                <strong>Eliminar (ícono papelera):</strong> Borra la fila de la tabla si agregaste el producto
                por error.
              </li>
            </ul>
            Para agregar más líneas de producto, haz clic en <strong>“Agregar producto”</strong> debajo de la última fila.
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_nueva_factura_tabla.png"
            alt="Tabla de productos en formulario de Nueva factura"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Campos adicionales            */}
        {/* ----------------------------- */}
        <section id="campos-adicionales">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            4. Campos adicionales
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Debajo de la tabla de productos encontrarás:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Nota:</strong> Campo de texto multiline donde puedes agregar comentarios o instrucciones
                relacionadas con la factura.
              </li>
              <li>
                <strong>Forma de pago:</strong> Desplegable para seleccionar el método de pago (p. ej.: transferencia,
                cheque, efectivo).
              </li>
              <li>
                <strong>¿Pagar? (casilla):</strong> Si marcas esta casilla, el formulario añadirá zonas para completar
                datos de pago inmediato (fecha y monto). Si la dejas desmarcada, podrás registrar el pago más tarde
                desde el módulo de pagos.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_nueva_factura_adicionales.png"
            alt="Campos adicionales en formulario de Nueva factura"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Resumen de totales             */}
        {/* ----------------------------- */}
        <section id="resumen-total">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            5. Resumen de totales
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En la esquina inferior derecha del formulario ves el resumen con:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Subtotal:</strong> Suma de todos los importes de línea sin IVA.
              </li>
              <li>
                <strong>IVA:</strong> Total de impuestos calculados sobre todas las líneas.
              </li>
              <li>
                <strong>Importe total:</strong> Suma final (Subtotal + IVA).
              </li>
            </ul>
            Estos valores se actualizan en tiempo real conforme agregas o modificas las líneas de la tabla.
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_nueva_factura_resumen.png"
            alt="Resumen de totales en formulario"
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
            Al tope del modal encontrarás tres botones principales:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Opciones (icono de engranaje):</strong> Muestra opciones adicionales, como clonar
                la factura, descargar plantilla o ajustes específicos del formulario.
              </li>
              <li>
                <strong>Cerrar:</strong> Descarta los cambios y cierra el formulario sin guardar nada.
              </li>
              <li>
                <strong>Guardar:</strong> Registra la factura como “Sin confirmar”. Podrás revisarla o editarla
                más tarde antes de confirmar en el listado.
              </li>
              <li>
                <strong>Guardar y Confirmar:</strong> Valida que los totales y las líneas estén correctos.
                Si todo está balanceado, cambia el estado a “Confirmada”, genera los asientos contables
                correspondientes y actualiza inventarios.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_nueva_factura_acciones.png"
            alt="Botones Cerrar, Guardar, Guardar y Confirmar en formulario"
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
            ¿Qué pasa si no completo un campo obligatorio?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            El sistema validará los campos obligatorios (Moneda, Proveedor, Almacén, Fecha
            emisión, Fecha confirmación, Código, Cantidad, Costo unitario). Si falta alguno, te
            mostrará un mensaje de error e impedirá guardar o confirmar hasta corregirlo.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Cómo agrego más de dos productos?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Haz clic en <strong>“Agregar producto”</strong> bajo la última fila de la tabla de
            productos. Se generará una nueva línea donde podrás seleccionar el siguiente producto
            y completar sus datos.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Qué significa marcar “¿Pagar?”?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Al marcar la casilla “¿Pagar?”, se mostrarán campos adicionales para ingresar la fecha
            y el monto del pago de la factura en el mismo momento. Si prefieres registrar el pago más
            tarde desde el módulo de Pagos, deja la casilla desmarcada.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Puedo editar la factura una vez confirmada?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            No. Una vez que uses <strong>“Guardar y Confirmar”</strong>, la factura se considera
            definitiva. Si necesitas corregir algo, debes anular la factura en el listado de facturas
            de compra y crear una nueva.
          </Typography>
        </section>
      </Box>
    </Box>
  );
};

export default AyudaCrearFacturaCompra;
