// src/pages/Contabilidad/QueEsLaSeccionContabilidad.tsx

import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Divider, Link as MuiLink } from "@mui/material";

/**
 * ¿Qué es la sección “Contabilidad” en Balaxys?
 * 
 * Desde aquí accedes a:
 * - Libro diario
 * - Submayor contable
 * - Plan de cuentas
 * - Estado resultado
 * - Balance de situación
 */
const QueEsLaSeccionContabilidad: React.FC = () => {
  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* ÍNDICE LATERAL (sticky) */}
      <Box
        sx={{
          flex: 1,
          position: "sticky",
          top: 20,
          height: "100vh",
          paddingRight: "20px",
          overflowY: "auto",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "16px", color: "#1976d2" }}>
          ÍNDICE
        </Typography>
        <List>
          <ListItem>
            <MuiLink href="#libro-diario" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Libro Diario" />
            </MuiLink>
          </ListItem>
          <ListItem>
            <MuiLink href="#submayor" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Submayor Contable" />
            </MuiLink>
          </ListItem>
          <ListItem>
            <MuiLink href="#plan-cuentas" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Plan de Cuentas" />
            </MuiLink>
          </ListItem>
          <ListItem>
            <MuiLink href="#estado-resultado" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Estado Resultado" />
            </MuiLink>
          </ListItem>
          <ListItem>
            <MuiLink href="#balance-situacion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Balance de Situación" />
            </MuiLink>
          </ListItem>
        </List>
      </Box>

      {/* CONTENIDO PRINCIPAL */}
      <Box sx={{ flex: 3, overflowY: "auto", paddingLeft: "20px" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          ¿Qué es la Sección de Contabilidad en Balaxys?
        </Typography>
        <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
          La sección de <strong>Contabilidad</strong> centraliza todos los reportes y movimientos contables generados
          automáticamente por tus documentos (facturas, compras, ajustes, recibos, pagos, notas de crédito/débito, etc.).
          Aquí puedes consultar el Libro Diario, el Submayor por cuentas, configurar tu Plan de Cuentas y visualizar reportes
          como Estado de Resultado y Balance de Situación.
        </Typography>
        <Divider sx={{ margin: "16px 0" }} />

        {/* 3.1. LIBRO DIARIO */}
        <section id="libro-diario">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Libro Diario
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En <em>Contabilidad → Libro diario</em> se muestran todos los asientos pendientes o confirmados en orden cronológico.
            Cada fila (o bloque desplegable) agrupa los movimientos de débito y crédito de un mismo asiento. Las columnas clave:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Estado del asiento:</strong> Puede ser <em>Sin Confirmar</em> (ícono reloj) o <em>Confirmado</em> (ícono check).</li>
              <li><strong>Número:</strong> Identificador del asiento (ej. CP-1/5/2025, donde “CP”=Cobro, “RE”=Recepción, “FA”=Factura, etc.).</li>
              <li><strong>Fecha:</strong> Fecha de emisión del documento origen.</li>
              <li><strong>Tipo asiento:</strong> Indica la transacción origen (Facturas, Pagos, Cobros, Recepciones, Ajustes).</li>
              <li><strong>Cuentas:</strong> Muestra, en filas desplegables, cada subcuenta afectada con su débito o crédito.</li>
              <li><strong>D/S:</strong> Monto total debitado y total acreditado (son iguales si el asiento está cuadrado).</li>
              <li><strong>Acciones:</strong> Ver (+), Editar (si está Sin Confirmar), Confirmar, Eliminar.</li>
            </ul>
            Para generar un nuevo asiento manual (no recomendado, pues se generan automáticamente), pulsa <em>“Nuevo asiento”</em>.
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        {/* 3.2. SUBMAYOR CONTABLE */}
        <section id="submayor">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Submayor Contable
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            El <em>Submayor contable</em> agrupa movimientos y saldos por cada subcuenta de tu Plan de Cuentas. En <strong>Contabilidad → Submayor contable</strong>:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Árbol de cuentas:</strong> Lista jerárquica de todas las cuentas activas (Activos, Pasivos, Patrimonio, Ingresos, Gastos, etc.).</li>
              <li><strong>Información de cuenta:</strong> Al seleccionar una cuenta, a la derecha se muestra Código, Nombre, Clasificación, Subclasificación y Saldo actual.</li>
              <li><strong>Movimientos contables:</strong> Debajo, un listado con asientos que afectaron esa cuenta (con Fecha, Tipo de Asiento, Débito, Crédito y Saldo resultante).</li>
              <li><strong>Rangos de fechas:</strong> Filtra movimientos por fechas (Desde/Hasta) para analizar periodos específicos.</li>
              <li><strong>Botón “Nuevo asiento”:</strong> Permite crear un asiento contable manual asignado a la cuenta seleccionada.</li>
            </ul>
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        {/* 3.3. PLAN DE CUENTAS */}
        <section id="plan-cuentas">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Plan de Cuentas
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En <em>Contabilidad → Plan de cuentas</em> se configura la estructura contable de tu empresa. Aquí:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Jerarquía de cuentas:</strong> Se organizan las cuentas contables en grupos (1. Activos, 2. Pasivos, 3. Patrimonio, 4. Ingresos, 5. Gastos, 6. Impuestos, etc.).</li>
              <li><strong>Crear nueva cuenta:</strong> Pulsa el ícono “+” en la parte superior derecha. En el modal, selecciona la cuenta padre (ej. “51. Costos de Ventas”) y completa: Nombre de subcuenta, Naturaleza (Deudora/Acreedora) y, opcionalmente, marca “Cuenta reguladora” o “Cuenta de banco”.</li>
              <li><strong>Editar o eliminar:</strong> Al pasar el cursor sobre una cuenta aparecerán íconos de lápiz (editar) y basurero (eliminar).</li>
            </ul>
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        {/* 3.4. ESTADO RESULTADO */}
        <section id="estado-resultado">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Estado Resultado
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            El <em>Estado de Resultado</em> (o reporte de pérdidas y ganancias) muestra:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Periodo seleccionado:</strong> Fechas Desde y Hasta (ej. 01/05/2025 a 31/05/2025).</li>
              <li><strong>Cuentas agrupadas:</strong> Agrupa ingresos operacionales, costos de ventas, gastos de administración, gastos de ventas, etc., con sus subcuentas propias.</li>
              <li><strong>Totales:</strong> Muestra importes sumados para cada grupo (Ingresos, Costos, Gastos) y calcula utilidades bruta, operativa y neta.</li>
              <li><strong>Iconos expandir/contraer:</strong> Permite ver el detalle de cada subcuenta dentro de cada grupo.</li>
              <li><strong>Botón de descarga:</strong> (tres puntos verticales) Permite exportar a Excel o PDF.</li>
            </ul>
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        {/* 3.5. BALANCE DE SITUACIÓN */}
        <section id="balance-situacion">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Balance de Situación
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En <em>Contabilidad → Balance de situación</em> se muestra la posición financiera de tu empresa a una fecha determinada:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Activos:</strong> Agrupados en Activos Corrientes y No Corrientes.</li>
              <li><strong>Pasivos:</strong> Agrupados en Pasivos Corrientes y No Corrientes.</li>
              <li><strong>Patrimonio:</strong> Incluye capital social, reservas, resultados acumulados.</li>
              <li><strong>Importes:</strong> Muestra el saldo de cada cuenta a la fecha seleccionada.</li>
              <li><strong>Descarga:</strong> Botón de tres puntos para exportar reporte.</li>
            </ul>
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>
      </Box>
    </Box>
  );
};

export default QueEsLaSeccionContabilidad;
