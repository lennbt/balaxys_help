// src/pages/Bancos/PagoCobroFactura.tsx
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
  Stack,
} from "@mui/material";

const PagoCobroFactura: React.FC = () => {
  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* ============================= */}
      {/* 1. ÍNDICE DE NAVEGACIÓN      */}
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
          textAlign: "left",
          borderRight: "1px solid #e0e0e0",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, marginBottom: "16px", color: "#1976d2" }}
        >
          ÍNDICE DE CONTENIDO
        </Typography>
        <List>
          <ListItem>
            <Link href="#introduccion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="1. Introducción" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#prerrequisitos" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="2. Prerrequisitos" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#registrar-pago-factura" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="3. Registrar Pago o Cobro de Factura" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#detalles-transaccion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="4. Detalles de la Transacción" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#conciliacion-automatica" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="5. Conciliación Automática" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#validacion-y-reportes" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="6. Validación y Reportes" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#faq" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="7. Preguntas Frecuentes" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#enlaces-relacionados" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="8. Enlaces Relacionados" />
            </Link>
          </ListItem>
        </List>
      </Box>

      {/* ============================= */}
      {/* 2. CONTENIDO PRINCIPAL       */}
      {/* ============================= */}
      <Box sx={{ flex: 3, overflowY: "auto", paddingLeft: "20px" }}>
        {/* ----- TÍTULO PRINCIPAL ----- */}
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, textAlign: "justify" }}>
          Cómo Registrar un Pago o Cobro de Factura en Balaxys ERP
        </Typography>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 1. Introducción ======== */}
        <section id="introduccion">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            1. Introducción
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
            En Balaxys ERP, el registro de pagos y cobros de facturas es esencial para mantener el
            flujo de caja actualizado. Este proceso vincula los movimientos bancarios con las facturas
            pendientes, permitiendo un control preciso de las cuentas por cobrar y por pagar.
          </Typography>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 2. Prerrequisitos ======== */}
        <section id="prerrequisitos">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            2. Prerrequisitos
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "8px" }}>
            Antes de registrar un pago o cobro, verifica que:
          </Typography>
          <List sx={{ marginLeft: "20px", marginBottom: "16px" }}>
            <ListItem>
              <ListItemText primary="La factura esté correctamente emitida y aprobada en el módulo de Facturación." />
            </ListItem>
            <ListItem>
              <ListItemText primary="La cuenta bancaria esté creada y configurada en el módulo de Bancos." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Tengas permisos de Registro de Pagos/Cobros en tu rol de usuario." />
            </ListItem>
          </List>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 3. Registrar Pago o Cobro de Factura ======== */}
        <section id="registrar-pago-factura">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            3. Registrar Pago o Cobro de Factura
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "12px" }}>
            Para vincular un movimiento bancario con una factura:
          </Typography>
          <Stack component="ol" sx={{ marginLeft: "20px", marginBottom: "16px" }}>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                Ve al módulo de <strong>“Bancos y Tesorería”</strong> desde el menú de{" "}
                <strong>“Finanzas”</strong>.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                Localiza la cuenta bancaria donde se registrará el pago o cobro y haz clic en{" "}
                <strong>“Ver Detalles”</strong>.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                Dentro de los detalles de la cuenta, selecciona{" "}
                <strong>“Registrar Movimiento”</strong> y elige <strong>“Pago/Cobro de Factura”</strong>.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                Aparecerá un formulario donde podrás buscar la factura por número o cliente/proveedor.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                Selecciona la factura correspondiente; Balaxys autocompletará monto, fecha de emisión y
                saldo pendiente.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                Verifica los datos y ajusta, si fuese necesario, el <em>monto de pago/cobro</em> y la{" "}
                <em>fecha de transacción</em>.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                Si aplican descuentos o recargos, agrégalos en el apartado correspondiente.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                Haz clic en <strong>“Registrar”</strong>. Balaxys vinculará el movimiento bancario con la
                factura y actualizará automáticamente el estado (pagada o parcialmente pagada).
              </Typography>
            </li>
          </Stack>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 4. Detalles de la Transacción ======== */}
        <section id="detalles-transaccion">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            4. Detalles de la Transacción
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "12px" }}>
            Al completar el registro, presta atención a:
          </Typography>
          <List sx={{ marginLeft: "20px", marginBottom: "16px" }}>
            <ListItem>
              <ListItemText primary="Descripción: Texto que aparecerá en el historial de movimientos bancarios." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Referencia: Número de recibo o comprobante interno para rastrear el pago." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Categoría: Etiqueta contable para asignar la transacción (por ejemplo, Ventas, Compras, Otros ingresos)." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Observaciones (Opcional): Cualquier comentario adicional sobre la operación." />
            </ListItem>
          </List>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
            Estos datos facilitan la trazabilidad y el análisis posterior en los reportes bancarios.
          </Typography>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 5. Conciliación Automática ======== */}
        <section id="conciliacion-automatica">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            5. Conciliación Automática
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "12px" }}>
            Si tu banco está conectado y envía los movimientos en tiempo real, Balaxys puede sugerir la
            coincidencia automática entre el pago/cobro de factura y el movimiento bancario. Solo tendrás
            que:
          </Typography>
          <Stack component="ol" sx={{ marginLeft: "20px", marginBottom: "16px" }}>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                Al registrar el pago/cobro, selecciona la opción “Usar Conciliación Automática”.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                Balaxys mostrará una lista de movimientos entrantes en la cuenta bancaria.  
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                Si el monto y la fecha coinciden, simplemente confirma la sugerencia y la transacción se
                conciliará en segundos.
              </Typography>
            </li>
          </Stack>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
            Esto reduce la carga manual y asegura que cada factura quede emparejada con su respectivo
            movimiento bancario.
          </Typography>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 6. Validación y Reportes ======== */}
        <section id="validacion-y-reportes">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            6. Validación y Reportes
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "12px" }}>
            Después de registrar pagos y cobros, revisa:
          </Typography>
          <List sx={{ marginLeft: "20px", marginBottom: "16px" }}>
            <ListItem>
              <ListItemText primary="Historial de Movimientos: En “Ver Detalles” de la cuenta, verifica que el pago/cobro aparezca correctamente." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Reporte Estado de Cuenta: Genera el reporte para confirmar que las transacciones se reflejan con el saldo correcto." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Reporte de Facturas Pendientes: Asegúrate de que las facturas pagadas hayan pasado a estado “Cerrada” o “Pagada” en el módulo de Facturación." />
            </ListItem>
          </List>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
            Estos reportes te permiten auditar el proceso y detectar cualquier discrepancia antes de cerrar
            el período contable.
          </Typography>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 7. Preguntas Frecuentes ======== */}
        <section id="faq">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            7. Preguntas Frecuentes
          </Typography>
          <Box component="dl" sx={{ marginLeft: "20px", marginBottom: "16px" }}>
            <Typography
              component="dt"
              variant="body1"
              sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}
            >
              ¿Puedo registrar un pago parcial de una factura?
            </Typography>
            <Typography
              component="dd"
              variant="body1"
              sx={{ marginBottom: "12px", marginLeft: "20px", textAlign: "justify" }}
            >
              Sí. Al seleccionar la factura, ajusta el campo “Monto de Pago” al valor parcial que vas a
              registrar. El saldo pendiente quedará pendiente para futuras conciliaciones.
            </Typography>

            <Typography
              component="dt"
              variant="body1"
              sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}
            >
              ¿Qué sucede si el monto del banco no coincide exactamente con la factura?
            </Typography>
            <Typography
              component="dd"
              variant="body1"
              sx={{ marginLeft: "20px", marginBottom: "16px", textAlign: "justify" }}
            >
              Si existe una diferencia menor (por ejemplo, comisiones bancarias), Balaxys mostrará el monto
              de diferencia. Puedes registrar un “Ajuste de Diferencia” para conciliar el resto o
              ignorar el movimiento y vincularlo luego manualmente.
            </Typography>
          </Box>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 8. Enlaces Relacionados ======== */}
        <section id="enlaces-relacionados">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            8. Enlaces Relacionados
          </Typography>
          <List sx={{ marginLeft: "20px", marginBottom: "32px" }}>
            <ListItem>
              <Link href="/bancos" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Lista de Bancos y Cajas" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/bancos/crear-conciliacion" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Crear Conciliación Bancaria" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/bancos/glosario-banco" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Glosario de Bancos y Tesorería" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/contabilidad" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Módulo de Contabilidad" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/faq" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Preguntas Frecuentes Generales" />
              </Link>
            </ListItem>
          </List>
        </section>

        <Divider sx={{ margin: "16px 0" }} />
      </Box>
    </Box>
  );
};

export default PagoCobroFactura;
