// src/pages/Reportes/AyudaPerdidasGanancias.tsx
import React from "react";
import { Box, Typography, List, ListItem, Link, ListItemText, Divider } from "@mui/material";

/**
 * Página de ayuda para el reporte “Pérdidas y Ganancias” (Estado de Resultado) en Balaxys ERP.
 * Explica cómo acceder y usar los filtros, interpretar las secciones del reporte,
 * y menciona la futura integración de IA para análisis en lenguaje natural.
 */
const AyudaPerdidasGanancias: React.FC = () => {
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
            <Link href="#filtros-fechas" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Filtros de fechas" />
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
            <Link href="#futuro-ia" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Futura integración de IA" />
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
            Pérdidas y Ganancias (Estado de Resultado)
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            El reporte de <strong>Pérdidas y Ganancias</strong> (también llamado Estado de Resultado) muestra
            los ingresos, costos y gastos de la empresa en un período determinado, para determinar la utilidad o pérdida.
            En esta guía encontrarás instrucciones paso a paso para:
            <ul style={{ marginLeft: "20px" }}>
              <li>Acceder al reporte desde el menú de Reportes.</li>
              <li>Configurar filtros de fecha.</li>
              <li>Comprender la estructura jerárquica del Estado de Resultado.</li>
              <li>Interpretar cada sección (Ingresos operacionales, Costos de ventas, Gastos, etc.).</li>
              <li>Exportar o imprimir el reporte.</li>
              <li>Visión de futuro: cómo la IA describirá este reporte en lenguaje natural.</li>
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
            1. En el menú lateral principal, selecciona <em>Reportes → Finanzas → Estado resultado</em>.<br />
            2. Aparecerá la pantalla del Estado de Resultado con las fechas por defecto del mes en curso.<br />
            3. Observa el panel izquierdo, donde se despliega la carpeta “Finanzas” y, dentro de ella,
            la opción “Estado resultado”.
          </Typography>
          <Box
            component="img"
            src="/assets/img/reporte_estado_resultado_menu.png"
            alt="Menú: Acceder a Estado Resultado"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Filtros de fechas             */}
        {/* ----------------------------- */}
        <section id="filtros-fechas">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Filtros de fechas
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Justo encima del reporte, encontrarás dos selectores:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Desde *:</strong> Fecha de inicio del período (obligatorio). Por defecto aparece el primer día del mes.
              </li>
              <li>
                <strong>Hasta *:</strong> Fecha de cierre del período (obligatorio). Por defecto aparece la fecha actual.
              </li>
            </ul>
            Para cambiar el rango:
            <ul style={{ marginLeft: "20px" }}>
              <li>Haz clic en el ícono de calendario junto a “Desde” y selecciona la fecha deseada.</li>
              <li>Haz clic en el ícono de calendario junto a “Hasta” y elige la fecha de cierre del informe.</li>
              <li>El sistema recargará automáticamente el reporte para reflejar los nuevos datos.</li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/reporte_estado_resultado_fechas.png"
            alt="Filtros de fechas en Estado Resultado"
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
            El reporte se estructura en forma de tablas anidadas. A la izquierda aparece la columna “Cuenta” donde
            se listan las categorías y subcategorías de cuentas, y a la derecha la columna “Importe” con los valores.
            Generalmente, la jerarquía es:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Ingresos operacionales</strong>
                <ul style={{ marginLeft: "20px" }}>
                  <li>4101. Ventas de Productos</li>
                  <li>4102. Prestación de Servicios</li>
                  <li>4109. Descuentos sobre Ventas</li>
                </ul>
              </li>
              <li>
                <strong>Costos de ventas</strong>
                <ul style={{ marginLeft: "20px" }}>
                  <li>5101. Costo de Mercaderías Vendidas</li>
                  <li>5102. Costo de Servicios Prestados</li>
                </ul>
              </li>
              <li>
                <strong>Utilidad bruta</strong> (subtotal = Ingresos – Costos)
              </li>
              <li>
                <strong>Gastos de administración</strong>
                <ul style={{ marginLeft: "20px" }}>
                  <li>5201. Sueldos y Salarios Administrativos</li>
                  <li>5202. Gastos de Oficina</li>
                </ul>
              </li>
              <li>
                <strong>Gastos de venta</strong>
                <ul style={{ marginLeft: "20px" }}>
                  <li>5301. Publicidad y Promoción</li>
                  <li>5302. Comisiones de Ventas</li>
                  <li>5303. Viáticos y Gastos de Representación</li>
                </ul>
              </li>
              <li>
                <strong>Utilidad operativa</strong> (subtotal = Utilidad Bruta – Gastos Operativos)
              </li>
              <li>
                <strong>Ingresos no operacionales</strong>
                <ul style={{ marginLeft: "20px" }}>
                  <li>4200. Devoluciones sobre Ventas</li>
                  <li>4210. Otros Ingresos</li>
                </ul>
              </li>
              <li>
                <strong>Gastos no operacionales</strong>
                <ul style={{ marginLeft: "20px" }}>
                  <li>5400. Gastos Financieros</li>
                  <li>5410. Pérdidas por Tipo de Cambio</li>
                </ul>
              </li>
              <li>
                <strong>Utilidad antes de impuestos</strong>
              </li>
              <li>
                <strong>Impuesto a las ganancias</strong> (Cálculo automático)
              </li>
              <li>
                <strong>Utilidad neta</strong> (Resultado final después de impuestos)
              </li>
            </ul>
            Cada sección puede expandirse o comprimirse haciendo clic en el pequeño triángulo a la izquierda del nombre de la categoría.
          </Typography>
          <Box
            component="img"
            src="/assets/img/reporte_estado_resultado_estructura.png"
            alt="Estructura jerárquica del Estado Resultado"
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
            A continuación se describen brevemente las principales secciones y qué representa cada una:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Ingresos operacionales:</strong> Total de ventas de productos y servicios que la empresa genera
                en su actividad principal. Un valor positivo indica mayor venta.
              </li>
              <li>
                <strong>Costos de ventas:</strong> Corresponde al costo directo de producir o adquirir los bienes/servicios
                vendidos. Se resta de los ingresos para obtener la utilidad bruta.
              </li>
              <li>
                <strong>Utilidad bruta:</strong> Diferencia entre ingresos operacionales y costos de ventas. Mide la eficiencia
                en la producción y venta antes de gastos operativos.
              </li>
              <li>
                <strong>Gastos de administración:</strong> Costos indirectos pagados para mantener la operación (sueldos,
                alquiler, servicios). Se restan para calcular la utilidad operativa.
              </li>
              <li>
                <strong>Gastos de venta:</strong> Gastos relacionados con la comercialización (publicidad, comisiones).
                También se restan antes de utilidad operativa.
              </li>
              <li>
                <strong>Utilidad operativa:</strong> Resultado de utilidad bruta menos gastos operativos. Indica la rentabilidad
                del negocio central.
              </li>
              <li>
                <strong>Ingresos no operacionales:</strong> Ingresos externos a la actividad principal (intereses ganados,
                devoluciones). Se suman o restan para llegar a utilidad antes de impuestos.
              </li>
              <li>
                <strong>Gastos no operacionales:</strong> Gastos fuera de la operación diaria (pérdidas financieras,
                multas). Se restan antes de impuestos.
              </li>
              <li>
                <strong>Utilidad antes de impuestos:</strong> Monto que resulta de sumar/restar todas las secciones anteriores.
              </li>
              <li>
                <strong>Impuesto a las ganancias:</strong> Monto estimado o calculado automáticamente de los impuestos
                sobre la utilidad antes de impuestos.
              </li>
              <li>
                <strong>Utilidad neta:</strong> Resultado final después de impuestos. Si es positivo, la empresa obtuvo ganancia;
                si es negativo, hubo pérdida.
              </li>
            </ul>
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
            En la esquina superior derecha (tres puntos verticales), puedes:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Exportar a PDF:</strong> Genera un archivo PDF con el reporte completo, conservando la jerarquía
                de secciones y valores.
              </li>
              <li>
                <strong>Exportar a Excel:</strong> Descarga un archivo .xlsx que incluye todas las cuentas y valores en
                formato de celdas para análisis posterior.
              </li>
              <li>
                <strong>Imprimir:</strong> Abre la interfaz de impresión del navegador para obtener una copia física
                o guardar como PDF desde ahí.
              </li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Futura integración de IA       */}
        {/* ----------------------------- */}
        <section id="futuro-ia">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Futura integración de IA
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En próximas actualizaciones, Balaxys ERP incorporará una inteligencia artificial que:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                Analizará automáticamente los resultados financieros del período y generará un resumen en lenguaje natural:
                “Este mes, los ingresos operacionales ascendieron a $X, mientras que los costos de ventas fueron $Y,
                resultando en una utilidad bruta de $Z...”
              </li>
              <li>
                Proporcionará sugerencias para mejorar la rentabilidad, detectará tendencias anómalas y destacará variaciones
                significativas entre períodos.
              </li>
              <li>
                Permitir&aacute; hacer preguntas de texto libre sobre el reporte, como “¿Cuál fue la cuenta de gasto que más
                aumentó respecto al mes anterior?” o “¿Cómo evolucionó la utilidad neta trimestral?”, y la IA responderá en minutos.
              </li>
            </ul>
            Esto facilitará la interpretación rápida del Estado de Resultado y la toma de decisiones estratégicas.
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
            ¿Qué fechas debo usar para comparar resultados?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Puedes comparar períodos mes a mes o trimestres completos. Por ejemplo, establece “Desde” 01/01/2025 y “Hasta”
            31/03/2025 para ver el primer trimestre.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Cómo interpreto un valor negativo en “Utilidad neta”?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Un valor negativo indica que la empresa reportó una pérdida en ese período (más costos y gastos que ingresos).
            Revisa los gastos no operativos o las secciones de costos para identificar áreas de ajuste.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Puedo ver cuántas cuentas hay en cada sección?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Sí. Haciendo clic en el triángulo junto al nombre de la sección (por ejemplo, “Gastos de administración”), 
            se desplegarán todas las subcuentas y se mostrará el número de ítems debajo.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Hay filtros adicionales disponibles?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Por el momento, solo se filtra por rango de fechas. En futuras versiones podrías filtrar por centros de costo,
            proyectos o incluso segmentos personalizados mediante IA.
          </Typography>
        </section>
      </Box>
    </Box>
  );
};

export default AyudaPerdidasGanancias;
