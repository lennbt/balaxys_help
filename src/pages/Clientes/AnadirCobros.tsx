// src/pages/Cobros/AyudaAnadirCobros.tsx
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

import React from "react";
import { Box, Typography, List, ListItem, Link, ListItemText, Divider } from "@mui/material";

/**
 * Página de ayuda para la sección "Cobros" en Balaxys ERP.
 * Sigue las pautas de la interfaz de la web de ayuda.
 */
const AyudaAnadirCobros: React.FC = () => {
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
            <Link href="#cuando-usar" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="¿Cuándo usar Cobros?" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#flujo-principal" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Flujo principal" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#paso-a-paso" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Paso a paso: Nuevo Cobro" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#detalles-campos" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Detalles de los campos" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#ejemplos" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Ejemplos y capturas" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#preguntas" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Preguntas frecuentes" />
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
            Ayuda: Cobros en Balaxys ERP
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            La sección de <strong>Cobros</strong> permite registrar y gestionar los pagos recibidos de clientes.
            Aquí podrás ingresar nuevos cobros asociados a facturas, ver el estado de cada cobro y realizar acciones
            como confirmar o anular un cobro pendiente.
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* ¿Cuándo usar Cobros?         */}
        {/* ----------------------------- */}
        <section id="cuando-usar">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            ¿Cuándo usar Cobros?
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Utiliza esta funcionalidad cuando necesites:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Registrar pagos recibidos</strong> de clientes por facturas emitidas.
              </li>
              <li>
                <strong>Ver el estado</strong> de cada cobro (Pendiente, Confirmado, Anulado).
              </li>
              <li>
                <strong>Asociar cobros</strong> a cuentas bancarias y referencias de pago.
              </li>
              <li>
                <strong>Generar reportes</strong> de monto cobrado y pendiente de cobro.
              </li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Flujo principal               */}
        {/* ----------------------------- */}
        <section id="flujo-principal">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Flujo principal: Listado y opciones
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            1. En el menú lateral, ve a <strong>Cobros</strong>.
          </Typography>
          <Box
            component="img"
            src="/assets/img/cobros_listado.png"
            alt="Listado de cobros"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            2. Verás una tabla con las columnas:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Estado:</strong> Pendiente, Confirmado o Anulado.</li>
              <li><strong>Cobro:</strong> Fecha del cobro.</li>
              <li><strong>Número cobro:</strong> Identificador automático (CO-1/2025).</li>
              <li><strong>Cliente:</strong> Nombre del cliente que realiza el pago.</li>
              <li><strong>Moneda:</strong> Divisa del cobro (UYU, USD, EUR).</li>
              <li><strong>Importe total:</strong> Monto total de la factura asociada.</li>
              <li><strong>Cobrado:</strong> Monto efectivamente recibido.</li>
              <li><strong>Por cobrar:</strong> Monto pendiente de pago.</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            3. Para crear un nuevo cobro, haz clic en el botón azul <strong>"Nuevo cobro"</strong>:
          </Typography>
          <Box
            component="img"
            src="/assets/img/cobros_nuevo_btn.png"
            alt="Botón Nuevo cobro"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Paso a paso                   */}
        {/* ----------------------------- */}
        <section id="paso-a-paso">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Paso a paso: Crear un nuevo cobro
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            1. Completar campos de cabecera
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            - <strong>Cliente *:</strong> Selecciona el cliente que realiza el pago.
            <br />
            - <strong>Forma de pago *:</strong> Elije el método (Efectivo, Transferencia, Cheque).
            <br />
            - <strong>Número de referencia:</strong> Opcional, para ingresar el número de recibo o referencia bancaria.
            <br />
            - <strong>Cuenta bancaria:</strong> Opcional, para seleccionar la cuenta donde se registra el pago.
            <br />
            - <strong>Moneda *:</strong> Divisa del cobro; predeterminado "UYU".
          </Typography>
          <Box
            component="img"
            src="/assets/img/cobros_modal_cabecera.png"
            alt="Formulario Cobros: campos cabecera"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />

          <Typography variant="subtitle1" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            2. Ingresar fechas
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            - <strong>Fecha emisión *:</strong> Fecha en que se registra el cobro.
            <br />
            - <strong>Fecha confirmación *:</strong> Fecha en que se confirma el cobro.
          </Typography>
          <Box
            component="img"
            src="/assets/img/cobros_modal_fechas.png"
            alt="Formulario Cobros: fechas"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />

          <Typography variant="subtitle1" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            3. Asociar facturas pendientes
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            - Una vez seleccionado el cliente, debajo aparece una tabla con sus facturas pendientes:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Número documento:</strong> Número de factura (FA-1/2025).</li>
              <li><strong>Fecha:</strong> Fecha de la factura.</li>
              <li><strong>Moneda:</strong> Divisa de la factura.</li>
              <li><strong>Importe total:</strong> Total de la factura.</li>
              <li><strong>Importe cobrado:</strong> Monto ya abonado a esa factura.</li>
              <li><strong>Importe por cobrar:</strong> Monto pendiente de pago.</li>
              <li><strong>Importe a cobrar:</strong> Campo editable donde ingresas cuánto del pendiente se está cobrando ahora.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/cobros_modal_tabla.png"
            alt="Formulario Cobros: facturas pendientes"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />

          <Typography variant="subtitle1" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            4. Ingresar nota
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            - <strong>Nota:</strong> Campo de texto libre para agregar comentarios o referencias
            específicas sobre el cobro.
          </Typography>
          <Box
            component="img"
            src="/assets/img/cobros_modal_nota.png"
            alt="Formulario Cobros: campo nota"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />

          <Typography variant="subtitle1" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            5. Revisar resumen de montos
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            A la derecha del formulario se muestran tres valores:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Importe documento:</strong> Total de la factura seleccionada.</li>
              <li><strong>Total a cobrar:</strong> Suma de campos "Importe a cobrar" de todas las facturas.</li>
              <li><strong>Por cobrar:</strong> Diferencia entre importe total y cobranzas previas.
              </li>
            </ul>
            Verifica que los montos coincidan con el pago real recibido.
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            6. Guardar o Guardar y Confirmar
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            - <strong>Cerrar:</strong> Descarta los datos ingresados.
            <br />
            - <strong>Guardar:</strong> Registra el cobro en estado "Pendiente".
            <br />
            - <strong>Guardar y Confirmar:</strong> Registra el cobro y lo marca como "Confirmado",
            asignándole número definitivo (CO-2/2025).
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Preguntas frecuentes          */}
        {/* ----------------------------- */}
        <section id="preguntas">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Preguntas frecuentes
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Puedo editar un cobro después de confirmarlo?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            No. Una vez confirmado, el cobro no se puede modificar. Si necesitas corregir datos,
            anúlalo y crea uno nuevo.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Qué sucede si ingreso un importe a cobrar mayor al pendiente?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            El sistema validará y no permitirá ingresar un valor superior al "Importe por cobrar".
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Cómo visualizo todos los cobros confirmados?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            En el listado principal, filtra por "Estado" = "Confirmado". También puedes exportar
            el informe completo desde el módulo de reportes.
          </Typography>
        </section>
      </Box>
    </Box>
  );
};

export default AyudaAnadirCobros;
