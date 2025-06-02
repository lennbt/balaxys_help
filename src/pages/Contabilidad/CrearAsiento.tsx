// src/pages/Configuracion/AyudaCrearAsiento.tsx
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

import React from "react";
import { Box, Typography, List, ListItem, Link, ListItemText, Divider } from "@mui/material";

/**
 * Página de ayuda para “Crear Asiento Automático” en Balaxys ERP.
 * Se enfoca únicamente en el formulario (modal) para definir una nueva plantilla de asiento.
 */
const AyudaCrearAsiento: React.FC = () => {
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
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "16px", color: "#1976d2" }}>
          ÍNDICE
        </Typography>
        <List>
          <ListItem>
            <Link href="#abrir-formulario" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Abrir formulario" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#datos-transaccion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Datos de la transacción" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#detalle-lineas" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Detalle de líneas" />
            </Link>
          </ListItem>
          <ListItem>
         
              <ListItemText primary="Acciones: Guardar y Cancelar" />
            </ListItem>
        </List>
      </Box>

      {/* ======================================= */}
      {/* 2. CONTENIDO PRINCIPAL                  */}
      {/* ======================================= */}
      <Box sx={{ flex: 3, overflowY: "auto", paddingLeft: "20px" }}>
        {/* ----------------------------- */}
        {/* Abrir formulario            */}
        {/* ----------------------------- */}
        <section id="abrir-formulario">
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            Crear Asiento Automático
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Para definir una nueva plantilla de asiento automático, pulsa el botón <strong>“Nuevo asiento automático”</strong> en la esquina superior del listado. 
            Esto abrirá un formulario modal donde podrás ingresar todos los datos necesarios.
          </Typography>
          <Box
            component="img"
            src="/assets/img/asientos_modal_btn.png"
            alt="Botón Nuevo asiento automático"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Datos de la transacción       */}
        {/* ----------------------------- */}
        <section id="datos-transaccion">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            1. Datos de la transacción
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En la parte superior del modal, encontrarás el siguiente campo obligatorio:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Tipo de asiento *:</strong> Menú desplegable con opciones:
                <ul style={{ marginLeft: "20px" }}>
                  <li>Recepción</li>
                  <li>Factura</li>
                  <li>Ajuste</li>
                  <li>Vale de salida</li>
                  <li>Pago</li>
                  <li>Cobro</li>
                </ul>
                Seleccionar el tipo según la transacción que deseas automatizar.
              </li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Debajo de este dropdown, verás el bloque “<strong>Datos de la transacción</strong>” que incluye:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Producto:</strong> Desplegable para buscar y seleccionar un producto o ítem. 
                Al elegirlo, se asigna la categoría contable correspondiente.
              </li>
              <li>
                <strong>Proveedor / Cliente:</strong> Dependiendo del tipo de asiento:
                <ul style={{ marginLeft: "20px" }}>
                  <li>Si es Recepción o Pago, verás “Proveedor”.</li>
                  <li>Si es Cobro o Factura, aparecerá “Cliente”.</li>
                </ul>
                Selecciona la cuenta principal asociada.
              </li>
              <li>
                <strong>Transacción *:</strong> Dropdown que lista las transacciones disponibles 
                (p. ej., “Recepción de mercancía”, “Pago a proveedor”, “Cobro a cliente”).
              </li>
              <li>
                <strong>Almacén *:</strong> Selecciona la ubicación física donde se aplicará el asiento 
                (ej.: “Principal”, “Secundario”). Afecta la cuenta de inventarios o bancos correspondientes.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/asientos_modal_transaccion.png"
            alt="Formulario: Datos de la transacción"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Detalle de líneas             */}
        {/* ----------------------------- */}
        <section id="detalle-lineas">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            2. Detalle de líneas del asiento
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            La sección “Detalle de líneas” se despliega debajo de los datos de la transacción. Aquí defines cada asiento contable. 
            Cada fila contiene los siguientes campos:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Operación:</strong> Dropdown con opciones “Débito” o “Crédito”. 
                Selecciona según cómo deba afectar la cuenta.
              </li>
              <li>
                <strong>%:</strong> Campo numérico que indica el porcentaje de la base que se aplica. 
                Generalmente se usa “100”.
              </li>
              <li>
                <strong>Valor afectado:</strong> Selecciona la base de cálculo (ej.: “Importe costo”, “IVA compra”).
              </li>
              <li>
                <strong>Cuenta:</strong> Desplegable con la lista de cuentas contables (ej.: “Inventarios de Mercadería”, “Cuentas por Pagar”). 
                Elige la cuenta que se debitará o acreditará.
              </li>
              <li>
                <strong>Tipo Subcuenta:</strong> Si la cuenta requiere desglose, selecciona el tipo de subcuenta 
                (por ejemplo, “Proveedor” cuando la cuenta es Cuentas por Pagar).
              </li>
              <li>
                <strong>Subcuenta:</strong> Campo para ingresar o buscar la subcuenta específica. 
                Por ejemplo, nombre exacto del proveedor o centro de costo.
              </li>
              <li>
                <strong>Tipo Análisis:</strong> Desplegable opcional para asignar un criterio de análisis contable (ej.: “Centro de Costo”, “Proyecto”).
              </li>
              <li>
                <strong>Análisis:</strong> Campo libre o desplegable para especificar el valor de análisis (ej.: “Administración”, “Ventas”).
              </li>
              <li>
                <strong>Tipo Subanálisis:</strong> Desplegable secundario para mayor desglose del análisis 
                (por ejemplo, “Sucursal Norte” dentro de “Centro de Costo”).
              </li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Para agregar más filas, haz clic en el enlace <strong>“Agregar línea”</strong> que aparece debajo del último registro. 
            Para eliminar una fila existente, usa el icono de papelera al final de la misma.
          </Typography>
          <Box
            component="img"
            src="/assets/img/asientos_modal_lineas.png"
            alt="Formulario: Detalle de líneas del asiento"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Acciones del formulario        */}
        {/* ----------------------------- */}
        <section id="acciones-formulario">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            3. Acciones: Guardar y Cancelar
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Una vez completados todos los campos, encontrarás en la parte inferior del modal dos botones:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Guardar:</strong> Al pulsar este botón, el sistema valida los datos y, si todo es correcto, 
                almacena la nueva plantilla de asiento en la base de datos. La plantilla aparecerá inmediatamente en el listado.
              </li>
              <li>
                <strong>Cancelar:</strong> Cierra el modal sin guardar cambios. Cualquier dato ingresado se perderá.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/asientos_modal_guardar_cancelar.png"
            alt="Formulario: Botones Guardar y Cancelar"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
      </Box>
    </Box>
  );
};

export default AyudaCrearAsiento;
