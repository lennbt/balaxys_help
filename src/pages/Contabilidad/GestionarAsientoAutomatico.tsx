// src/pages/Configuracion/AyudaAsientosAutomaticos.tsx
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

import React from "react";
import { Box, Typography, List, ListItem, Link, ListItemText, Divider } from "@mui/material";

/**
 * Página de ayuda para la sección "Gestionar Asiento Automatico" en Balaxys ERP.
 * Describe tanto el listado principal como el formulario de creación de nuevos asientos.
 */
const GestionarAsientoAutomatico: React.FC = () => {
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
            <Link href="#introduccion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Introducción" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#vista-listado" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Vista de listado" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#columnas-listado" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Columnas del listado" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#abrir-modal" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Abrir modal de nuevo asiento" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#campos-transaccion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Campos: Datos de la transacción" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#campos-lineas" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Campos: Detalle de líneas" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#acciones-formulario" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Acciones: Guardar y cancelar" />
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
            Asientos automáticos
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Los <strong>Asientos automáticos</strong> en Balaxys ERP permiten definir patrones contables que se
            aplican automáticamente a distintas transacciones (recepción de mercancía, emisión de facturas,
            ajustes de inventario, pagos o cobros). 
            En esta sección encontrarás:
            <ul style={{ marginLeft: "20px" }}>
              <li>Cómo navegar el listado principal de asientos automáticos.</li>
              <li>Descripción de cada columna en la tabla.</li>
              <li>Cómo abrir y entender el formulario para crear/modificar un asiento automático.</li>
              <li>Explicación de cada campo y acción disponible.</li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Vista de listado             */}
        {/* ----------------------------- */}
        <section id="vista-listado">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Vista de listado
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Al ingresar a <em>Configuración → Asientos automáticos</em>, verás una tabla con pestañas para cada tipo 
            de asiento (Recepción, Factura, Ajuste, Vale de salida, Pago, Cobro). En la pestaña seleccionada 
            (por defecto “Recepción”) aparece el listado de plantillas de asiento automático.
          </Typography>
          <Box
            component="img"
            src="/assets/img/asientos_listado.png"
            alt="Listado de Asientos automáticos"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En la parte superior de la pantalla verás los nombres de las pestañas:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Recepción</strong> – Entrada de inventario.</li>
              <li><strong>Factura</strong> – Asientos generados al emitir una factura de venta.</li>
              <li><strong>Ajuste</strong> – Ajuste manual de inventario.</li>
              <li><strong>Vale de salida</strong> – Salida de mercancía sin factura.</li>
              <li><strong>Pago</strong> – Registro de pagos a proveedores.</li>
              <li><strong>Cobro</strong> – Registro de cobros a clientes.</li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Columnas del listado          */}
        {/* ----------------------------- */}
        <section id="columnas-listado">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Columnas del listado
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Cada fila del listado despliega los campos principales de la plantilla de asiento. 
            A continuación se describen las columnas más relevantes:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Número:</strong> Identificador único de la plantilla, p. ej. RE-3, RE-2, RE-1.</li>
              <li><strong>Producto:</strong> Nombre del producto o grupo de productos asociado al asiento.</li>
              <li><strong>Proveedor / Cliente:</strong> Cuenta principal (Proveedor para recepción, Cliente para cobros).</li>
              <li><strong>Transacción:</strong> Tipo de movimiento (Recepción, Factura, Ajuste, etc.).</li>
              <li><strong>Almacén:</strong> Ubicación física donde se aplicará el asiento (Principal, Secundario).</li>
              <li><strong>Operación:</strong> “Débito” o “Crédito” que se aplicará a la cuenta contable.</li>
              <li><strong>Cuenta:</strong> Cuenta contable a debitar o acreditar (p. ej., Inventarios de Mercadería, Cuentas por Pagar).</li>
              <li><strong>Tipo subcuenta:</strong> Define si hay desglose adicional (p. ej., “Proveedor”).</li>
              <li><strong>Subcuenta / Análisis / Subanálisis:</strong> Campos opcionales para detallar el análisis contable (divisiones internas, centros de costo).</li>
              <li><strong>%:</strong> Porcentaje de la base que se aplica a esta línea de asiento (p. ej., 100%).</li>
              <li><strong>Valor afectado:</strong> Tipo de base para cálculo del valor (Importe costo, IVA compra, etc.).</li>
              <li><strong>Acciones:</strong> Íconos para <em>Editar</em>, <em>Duplicar</em> o <em>Eliminar</em> la plantilla.</li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Abrir modal                   */}
        {/* ----------------------------- */}
        <section id="abrir-modal">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Abrir modal de nuevo asiento
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Para crear una nueva plantilla, haz clic en el botón azul <em>“Nuevo asiento automático”</em> ubicado
            en la esquina superior derecha. Esto abrirá un formulario modal donde podrás definir todos los datos:
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
        {/* Campos de Datos de la Transacción */}
        {/* ----------------------------- */}
        <section id="campos-transaccion">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Campos: Datos de la transacción
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En la parte superior del modal, encontrarás un desplegable para seleccionar el <strong>Tipo de asiento *</strong>:
            Recepción, Factura, Ajuste, Vale de salida, Pago o Cobro. A continuación aparecen los <em>Datos de la transacción</em>:
          </Typography>
          <ul style={{ marginLeft: "20px", marginBottom: "16px" }}>
            <li><strong>Producto:</strong> Desplegable que lista productos o servicios. Al seleccionar, se asocian reglas específicas.</li>
            <li><strong>Proveedor / Cliente:</strong> Para asientos de Recepción y Pago se mostrará “Proveedor”. En Cobro, aparecerá “Cliente”.</li>
            <li><strong>Transacción *:</strong> Tipo de movimiento exacto (p. ej., “Recepción de mercancía”, “Pago a proveedor”).</li>
            <li><strong>Almacén *:</strong> Selecciona la ubicación donde se aplicará el asiento (p. ej., “Principal”).</li>
          </ul>
          <Box
            component="img"
            src="/assets/img/asientos_modal_transaccion.png"
            alt="Formulario Asientos: Datos de la transacción"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Campos de Detalle de Líneas    */}
        {/* ----------------------------- */}
        <section id="campos-lineas">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Campos: Detalle de líneas del asiento
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Debajo de los datos de la transacción, encontrarás la sección de “Detalle de líneas” donde podrás especificar cada asiento contable.  
            Cada fila contiene:
          </Typography>
          <ul style={{ marginLeft: "20px", marginBottom: "16px" }}>
            <li><strong>Operación:</strong> Desplegable con las opciones “Débito” o “Crédito”.</li>
            <li><strong>%:</strong> Campo numérico donde indicas el porcentaje de la base que aplica a esta línea (usualmente 100 %).</li>
            <li><strong>Valor afectado:</strong> Selecciona la base de cálculo (p. ej., “Importe costo”, “IVA compra”).</li>
            <li><strong>Cuenta:</strong> Desplegable con las cuentas contables disponibles (p. ej., “Inventarios de Mercadería”, “Cuentas por Pagar”).</li>
            <li><strong>Tipo Subcuenta:</strong> Si la cuenta contable requiere subcuenta (por ejemplo, Proveedor), elige el tipo de subcuenta.</li>
            <li><strong>Subcuenta:</strong> Campo para ingresar o seleccionar la subcuenta específica (p. ej., nombre del proveedor).</li>
            <li><strong>Tipo Análisis:</strong> Desplegable con tipos de análisis (por ejemplo, Centro de Costo, Proyecto).</li>
            <li><strong>Análisis:</strong> Campo libre o desplegable para detallar un análisis contable adicional.</li>
            <li><strong>Tipo Subanálisis:</strong> Desplegable opcional para mayor desglose de análisis (p. ej., subproyecto).</li>
          </ul>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Para agregar más líneas, haz clic en <strong>“Agregar línea”</strong>. Para eliminar una fila, utiliza el ícono de papelera al final de la línea.
          </Typography>
          <Box
            component="img"
            src="/assets/img/asientos_modal_lineas.png"
            alt="Formulario Asientos: detalle de líneas"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Acciones del formulario        */}
        {/* ----------------------------- */}
        <section id="acciones-formulario">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Acciones: Guardar y Cancelar
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Una vez completada la definición de la plantilla de asiento automático, los botones disponibles en la parte inferior del modal son:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Guardar:</strong> Almacena la plantilla con sus líneas contables en la base de datos. La nueva fila aparece inmediatamente en el listado.</li>
              <li><strong>Cancelar:</strong> Cierra el modal sin guardar cambios.</li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/asientos_modal_guardar_cancelar.png"
            alt="Formulario Asientos: botones Guardar y Cancelar"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Preguntas Frecuentes          */}
        {/* ----------------------------- */}
        <section id="preguntas">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Preguntas frecuentes
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Para qué sirve el porcentaje (%) en cada línea?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            El campo “%” indica qué porción del valor base (por ejemplo, Importe costo) se aplicará a esa línea de asiento. Normalmente se usa 100 % para reflejar la totalidad del importe.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Cómo elijo la cuenta contable correcta?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Cada transacción (Recepción, Factura, Ajuste, etc.) tiene cuentas predeterminadas recomendadas. Si modificas la cuenta manualmente, asegúrate de que coincida con la lógica contable de tu empresa. Puedes ver la lista completa de cuentas en <em>Contabilidad → Cuentas contables</em>.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Qué sucede si no completo “Tipo Subcuenta” o “Subcuenta”?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Si la cuenta seleccionada no requiere subcuenta (por ejemplo, “Inventarios de Mercadería”), puedes dejar estos campos vacíos. El sistema omitirá el desglose adicional.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Puedo duplicar una plantilla existente?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Sí. En la columna de acciones del listado, haz clic en el ícono “Duplicar” para abrir un modal con los datos prellenados. Después, ajusta los valores que necesites y guarda como una plantilla nueva.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Dónde puedo ver todas las plantillas de asientos automáticos?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Navega por las pestañas en la parte superior: <em>Recepción, Factura, Ajuste, Vale de salida, Pago, Cobro</em>. Cada pestaña agrupa las plantillas según el tipo de transacción.
          </Typography>
        </section>
      </Box>
    </Box>
  );
};

export default GestionarAsientoAutomatico;
