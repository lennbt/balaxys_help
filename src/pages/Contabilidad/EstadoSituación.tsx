// src/pages/Reportes/AyudaEstadoSituacion.tsx

import React from "react";
import { Box, Typography, List, ListItem, Link, ListItemText, Divider } from "@mui/material";

/**
 * Página de ayuda para el reporte “Balance de situación” (Estado de Situación) en Balaxys ERP.
 * Explica cómo acceder y usar los filtros, interpretar las secciones del reporte,
 * exportar los resultados y resolver dudas frecuentes.
 */
const AyudaEstadoSituacion: React.FC = () => {
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
            <Link href="#acceso-reporte" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Cómo acceder al reporte" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#filtro-fecha" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Filtro de fecha de corte" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#estructura-reporte" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Estructura del reporte" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#interpretacion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Interpretación de secciones" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#exportar" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Exportar e imprimir" />
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
            Ayuda: Balance de situación (Estado de Situación)
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            El reporte de <strong>Balance de situación</strong> muestra la posición financiera de tu empresa
            a una fecha de corte determinada. Se divide en activos, pasivos y patrimonio neto para reflejar
            los recursos y las obligaciones. Esta guía explica:
            <ul style={{ marginLeft: "20px" }}>
              <li>Cómo acceder al reporte desde el menú de Reportes.</li>
              <li>Cómo configurar la fecha de corte para generar el balance.</li>
              <li>La estructura jerárquica del Balance de Situación.</li>
              <li>Cómo interpretar cada sección (Activos, Pasivos, Patrimonio Neto).</li>
              <li>Opciones para exportar o imprimir el balance.</li>
              <li>Resolución de dudas frecuentes.</li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Cómo acceder al reporte        */}
        {/* ----------------------------- */}
        <section id="acceso-reporte">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Cómo acceder al reporte
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            1. En el menú lateral principal, selecciona <em>Reportes → Finanzas → Balance de situación</em>.<br />
            2. Se abrirá la pantalla con el listado de opciones de filtros y el balance vacío hasta definir la fecha.  
            3. El panel izquierdo muestra la carpeta “Finanzas” y la opción “Balance de situación” resaltada.
          </Typography>
          <Box
            component="img"
            src="/assets/img/reporte_balance_menu.png"
            alt="Menú: Acceder a Balance de situación"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Filtro de fecha de corte       */}
        {/* ----------------------------- */}
        <section id="filtro-fecha">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Filtro de fecha de corte
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Encima del balance verás un selector:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Fecha Hasta *:</strong> Fecha de corte obligatoria en formato YYYY-MM-DD.
                El balance mostrará saldos de las cuentas al final de ese día.
              </li>
            </ul>
            Para cambiar la fecha de corte:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                Haz clic en el icono de calendario junto a “Fecha Hasta” y selecciona la fecha deseada
                (ej.: 31/05/2025).
              </li>
              <li>El sistema recargará automáticamente el balance para esa fecha.</li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/reporte_balance_fecha.png"
            alt="Filtro Fecha Hasta en Balance"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Estructura del reporte         */}
        {/* ----------------------------- */}
        <section id="estructura-reporte">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Estructura del reporte
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            El Balance de Situación se presenta en forma de tabla anidada. A la izquierda, la columna “Cuenta”
            muestra categorías y subcategorías; a la derecha, la columna “Importe” con el saldo al corte.
            El orden jerárquico típico es:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>ACTIVOS</strong>
                <ul style={{ marginLeft: "20px" }}>
                  <li>11. Activos Corrientes
                    <ul style={{ marginLeft: "20px" }}>
                      <li>1101. Efectivo y equivalentes</li>
                      <li>1102. Cuentas por cobrar</li>
                      <li>1103. Inventarios</li>
                    </ul>
                  </li>
                  <li>12. Activos No Corrientes
                    <ul style={{ marginLeft: "20px" }}>
                      <li>1201. Propiedades, planta y equipo</li>
                      <li>1202. Activos Intangibles</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>PASIVOS</strong>
                <ul style={{ marginLeft: "20px" }}>
                  <li>21. Pasivos Corrientes
                    <ul style={{ marginLeft: "20px" }}>
                      <li>2101. Cuentas por pagar</li>
                      <li>2102. Préstamos a corto plazo</li>
                    </ul>
                  </li>
                  <li>22. Pasivos No Corrientes
                    <ul style={{ marginLeft: "20px" }}>
                      <li>2201. Préstamos a largo plazo</li>
                      <li>2202. Provisiones</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>PATRIMONIO NETO</strong>
                <ul style={{ marginLeft: "20px" }}>
                  <li>31. Capital Social</li>
                  <li>32. Reservas</li>
                  <li>33. Resultados Acumulados</li>
                  <li>34. Resultado del ejercicio</li>
                </ul>
              </li>
            </ul>
            Cada sección puede expandirse o contraerse haciendo clic en el triángulo a la izquierda del nombre.
          </Typography>
          <Box
            component="img"
            src="/assets/img/reporte_balance_estructura.png"
            alt="Estructura jerárquica de Balance de situación"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Interpretación de secciones    */}
        {/* ----------------------------- */}
        <section id="interpretacion">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Interpretación de secciones
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            A continuación se describe brevemente qué representa cada bloque:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Activos Corrientes:</strong> Recursos líquidos o que se convertirán en liquidez en el ciclo
                operativo (efectivo, cuentas por cobrar, inventarios). Su suma da el total de activos a corto plazo.
              </li>
              <li>
                <strong>Activos No Corrientes:</strong> Recursos de largo plazo (propiedades, equipo, activos intangibles,
                inversiones). Muestra inversiones a largo plazo que no se usan en el ciclo operativo diario.
              </li>
              <li>
                <strong>Pasivos Corrientes:</strong> Obligaciones que deben pagarse en el corto plazo (deudas, proveedores,
                impuestos a pagar). Indican compromisos inmediatos de la empresa.
              </li>
              <li>
                <strong>Pasivos No Corrientes:</strong> Deudas y obligaciones a largo plazo (préstamos bancarios,
                provisiones a largo plazo). Representan compromisos financieros futuros.
              </li>
              <li>
                <strong>Patrimonio Neto:</strong> Suma del capital propio invertido y las ganancias retenidas. 
                Incluye:
                <ul style={{ marginLeft: "20px" }}>
                  <li>Capital Social: Aportaciones de los socios o accionistas.</li>
                  <li>Reservas: Utilidades retenidas para reinversión o contingencias.</li>
                  <li>Resultados Acumulados: Ganancias o pérdidas de ejercicios anteriores.</li>
                  <li>Resultado del Ejercicio: Utilidad o pérdida del período actual según el Estado de Resultado.</li>
                </ul>
              </li>
            </ul>
            La ecuación básica comprobada es: <em>Activos = Pasivos + Patrimonio Neto</em>.
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Exportar e imprimir            */}
        {/* ----------------------------- */}
        <section id="exportar">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Exportar e imprimir
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En la esquina superior derecha del reporte encontrarás un ícono de tres puntos verticales. Al hacer clic,
            verás opciones para:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Descargar a Excel:</strong> Obtén un archivo .xlsx que incluye todas las cuentas y saldos
                al corte, ideal para análisis o conciliaciones posteriores.
              </li>
              <li>
                <strong>Exportar a PDF:</strong> Genera un PDF con el Balance de situación en su forma actual,
                respetando la jerarquía y formato visual.
              </li>
              <li>
                <strong>Imprimir:</strong> Lanza la ventana de impresión del navegador para producir una copia física
                o guardar como PDF desde esa interfaz.
              </li>
            </ul>
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
            ¿Qué pasa si no selecciono una fecha de corte?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            El campo “Fecha Hasta” es obligatorio. Si no lo completas, el sistema no mostrará ningún dato en el balance.
            Selecciona la fecha para visualizar los saldos al cierre de ese día.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Cómo corroboro que “Activos = Pasivos + Patrimonio Neto”?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Expande cada sección y suma manualmente los importes mostrados. El total de activos debe coincidir con la suma
            de pasivos y patrimonio neto. Si hay diferencias, revisa asientos contables pendientes o posibles errores de asignación.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Puedo ver saldos de cuentas de mayor detalle?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Sí. Haz clic en el triángulo al lado de una cuenta para expandir y mostrar sus subcuentas. Cada subcuenta
            muestra su propio saldo. Puedes navegar tantos niveles como existan en tu Plan de cuentas.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Cómo sincronizo el balance con el Estado de Resultado?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            El “Resultado del ejercicio” dentro de Patrimonio Neto se basa en “Utilidad neta” del Estado de Resultado
            para la misma fecha de corte. Asegúrate de usar las mismas fechas en ambos reportes para que los resultados coincidan.
          </Typography>
        </section>
      </Box>
    </Box>
  );
};

export default AyudaEstadoSituacion;
