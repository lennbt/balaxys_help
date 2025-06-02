// src/pages/Impuestos/QuePuedesHacerImpuestos.tsx

import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Box,
  Typography,
  List,
  ListItem,
  Link,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

/**
 * Página de ayuda: ¿Qué puedes hacer en el apartado de Impuestos? (Balaxys ERP)
 * Incluye SEO optimizado mediante react-helmet-async.
 */
const QuePuedesHacerImpuestos: React.FC = () => {
  return (
    <>
      {/* ======================================= */}
      {/* 0. META SEO con react-helmet-async      */}
      {/* ======================================= */}
      <Helmet>
        <title>¿Qué puedes hacer en Impuestos? | Balaxys ERP Ayuda</title>
        <meta
          name="description"
          content="Aprende a gestionar impuestos de ventas, compras y nóminas en Balaxys ERP. Presenta modelos ante Hacienda con agilidad."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://help.balaxys.com/impuestos/que-puedes-hacer"
        />
      </Helmet>

      <Box sx={{ display: "flex", padding: "20px" }}>
        {/* ======================================= */}
        {/* 1. ÍNDICE DE NAVEGACIÓN               */}
        {/* ======================================= */}
        <Box
          sx={{
            flex: 1,
            position: "sticky",
            top: 20,
            height: "100vh",
            paddingRight: "20px",
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
                href="#impuestos-ventas"
                sx={{ textDecoration: "none", color: "#1976d2" }}
              >
                <ListItemText primary="Gestión de Impuestos en Ventas" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#impuestos-compras"
                sx={{ textDecoration: "none", color: "#1976d2" }}
              >
                <ListItemText primary="Gestión de Impuestos en Compras" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#impuestos-empleados"
                sx={{ textDecoration: "none", color: "#1976d2" }}
              >
                <ListItemText primary="Impuestos Relacionados con Empleados" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#presentar-modelos"
                sx={{ textDecoration: "none", color: "#1976d2" }}
              >
                <ListItemText primary="Presentación de Modelos ante Hacienda" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#preguntas-frecuentes"
                sx={{ textDecoration: "none", color: "#1976d2" }}
              >
                <ListItemText primary="Preguntas Frecuentes" />
              </Link>
            </ListItem>
          </List>
        </Box>

        {/* ======================================= */}
        {/* 2. CONTENIDO PRINCIPAL                 */}
        {/* ======================================= */}
        <Box sx={{ flex: 3, overflowY: "auto", paddingLeft: "20px" }}>
          {/* ----------------------------- */}
          {/* SECCIÓN: Introducción        */}
          {/* ----------------------------- */}
          <section id="introduccion">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 700, marginBottom: "16px" }}
            >
              ¿Qué puedes hacer en Impuestos?
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              En Balaxys ERP, la sección de <strong>Impuestos</strong> está diseñada
              para centralizar todas las obligaciones fiscales de tu negocio: desde la
              liquidación de impuestos sobre ventas y compras hasta la gestión de las
              retenciones de nómina y la presentación de los modelos oficiales ante
              Hacienda. Gracias a esta área, podrás:
              <ul style={{ marginLeft: "20px", marginTop: "8px" }}>
                <li>
                  Configurar y actualizar tasas de IVA, retenciones y percepciones
                  según la normativa local.
                </li>
                <li>
                  Calcular automáticamente los impuestos asociados a facturas de
                  venta y de compra.
                </li>
                <li>
                  Generar y descargar los modelos fiscales oficiales listos para
                  presentar ante Hacienda (por ejemplo, Formularios 111, 182, 2001,
                  etc.).
                </li>
                <li>
                  Visualizar reportes de impuestos acumulados para periodos específicos,
                  facilitando el control y la toma de decisiones.
                </li>
                <li>
                  Gestionar las retenciones y aportes de nómina de tus empleados,
                  integrándolos directamente con tu contabilidad.
                </li>
              </ul>
            </Typography>
          </section>
          <Divider sx={{ margin: "16px 0" }} />

          {/* -------------------------------- */}
          {/* SECCIÓN: Gestión en Ventas       */}
          {/* -------------------------------- */}
          <section id="impuestos-ventas">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              Gestión de Impuestos en Ventas
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Cada vez que creas una <Link
                component={RouterLink}
                to="/clientes/crear-factura-venta"
                sx={{
                  textDecoration: "underline",
                  color: "#1976d2",
                  "&:hover": { textDecoration: "none" },
                }}
              >
                factura de venta
              </Link>{" "}
              en Balaxys, el sistema calcula automáticamente el IVA e incluye las
              percepciones correspondientes. Además, en esta sección podrás:
              <ul style={{ marginLeft: "20px", marginTop: "8px" }}>
                <li>
                  Configurar distintas tasas de IVA (0%, 10%, 22% o específicas de tu
                  país).
                </li>
                <li>
                  Definir percepciones, retenciones o impuestos locales que se
                  adicionan a la venta (por ejemplo, percepciones municipales).
                </li>
                <li>
                  Consultar el historial de impuestos generados por periodo: mes,
                  trimestre o año.
                </li>
                <li>
                  Descargar reportes de Ventas por tipo de impuesto, útiles para
                  conciliaciones contables y presentación de declaraciones.
                </li>
                <li>
                  Aplicar exenciones o regímenes especiales para clientes que estén
                  alcanzados por condiciones específicas.
                </li>
              </ul>
            </Typography>
            <Box
              component="img"
              src="/assets/img/impuestos_ventas_listado.png"
              alt="Listado Impuestos en Ventas"
              sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
            />
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Observa cómo en el listado de facturas de venta aparece una columna
              “IVA”, que muestra el importe total de impuestos. Al hacer clic en el
              ícono de “Ver detalles”, podrás ver el desglose por tasa y base
              imponible de cada factura.
            </Typography>
          </section>
          <Divider sx={{ margin: "16px 0" }} />

          {/* -------------------------------- */}
          {/* SECCIÓN: Gestión en Compras      */}
          {/* -------------------------------- */}
          <section id="impuestos-compras">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              Gestión de Impuestos en Compras
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Al registrar una <Link
                component={RouterLink}
                to="/proveedores/crear-factura-compra"
                sx={{
                  textDecoration: "underline",
                  color: "#1976d2",
                  "&:hover": { textDecoration: "none" },
                }}
              >
                factura de compra
              </Link>
              , Balaxys aplica automáticamente el cálculo de IVA e incorpora las
              retenciones de IVA en la sección correspondiente. Dentro de “Compras →
              Facturas de proveedor” podrás:
              <ul style={{ marginLeft: "20px", marginTop: "8px" }}>
                <li>
                  Configurar tasas de IVA para importaciones o servicios específicos
                  (por ejemplo, importaciones con tasa cero, servicios profesionales).
                </li>
                <li>
                  Definir retenciones de IVA o IIBB (Impuesto a los Ingresos Brutos)
                  según el régimen del proveedor.
                </li>
                <li>
                  Descargar reportes de Compras con desglose de IVA y retenciones,
                  facilitando la declaración de gastos.
                </li>
                <li>
                  Registrar facturas de importación con detalle de aranceles,
                  impuestos aduaneros y demás tributos.
                </li>
                <li>
                  Integrar automáticamente estos importes con la contabilidad,
                  generando los asientos correspondientes (Cuentas por Pagar,
                  IVA Crédito Fiscal).
                </li>
              </ul>
            </Typography>
            <Box
              component="img"
              src="/assets/img/impuestos_compras_listado.png"
              alt="Listado Impuestos en Compras"
              sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
            />
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              En la vista de detalle de cada factura de compra, encontrarás un
              apartado “IVA Crédito Fiscal” donde se indica la base imponible y el
              importe de impuestos recuperables. Esto te ayudará a preparar tu
              declaración de IVA Crédito con rapidez.
            </Typography>
          </section>
          <Divider sx={{ margin: "16px 0" }} />

          {/* -------------------------------- */}
          {/* SECCIÓN: Impuestos de Empleados  */}
          {/* -------------------------------- */}
          <section id="impuestos-empleados">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              Impuestos Relacionados con Empleados
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Balaxys ERP incorpora un módulo de <strong>Nómina y Recursos Humanos</strong>,
              donde podrás gestionar los impuestos y retenciones vinculados con tus
              colaboradores. En este apartado podrás:
              <ul style={{ marginLeft: "20px", marginTop: "8px" }}>
                <li>
                  Configurar las bases de cálculo de retenciones de impuesto a la
                  renta (por ejemplo, IRPF) según escalas y catálogos oficiales.
                </li>
                <li>
                  Calcular automáticamente las retenciones de seguridad social y obra
                  social para cada remuneración.
                </li>
                <li>
                  Generar los comprobantes de retención para los empleados, listos para
                  presentar ante el organismo de recaudación.
                </li>
                <li>
                  Visualizar un reporte consolidado de retenciones de nómina por
                  periodo, Que puede servir para tus declaraciones ante autoridades.
                </li>
                <li>
                  Integrar todos los valores retenidos con tu contabilidad, asegurando
                  la coherencia entre nómina e impuestos.
                </li>
              </ul>
            </Typography>
            <Box
              component="img"
              src="/assets/img/impuestos_empleados_formulario.png"
              alt="Formulario Impuestos de Empleados"
              sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
            />
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Dentro del formulario de nómina, al generar el recibo de sueldos, se
              visualizarán automáticamente las retenciones de Ley (IRPF, Seguridad
              Social, etc.). Así, cada liquidación impacta el libro diario con los
              asientos contables correspondientes (Gastos de Personal,
              Retenciones por Pagar).
            </Typography>
          </section>
          <Divider sx={{ margin: "16px 0" }} />

          {/* -------------------------------- */}
          {/* SECCIÓN: Presentar Modelos       */}
          {/* -------------------------------- */}
          <section id="presentar-modelos">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              Presentación de Modelos ante Hacienda
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Uno de los puntos más críticos del ciclo fiscal es la presentación de
              formularios oficiales a las autoridades tributarias. En Balaxys ERP,
              contamos con un área dedicada a generar y descargar todos los modelos
              (formularios) autorizados:
              <ul style={{ marginLeft: "20px", marginTop: "8px" }}>
                <li>
                  <strong>Modelo 111:</strong> Retenciones de IRPF mensuales.
                </li>
                <li>
                  <strong>Modelo 2001:</strong> Declaración mensual de IVA (ventas y
                  compras).
                </li>
                <li>
                  <strong>Modelo 182:</strong> Percepciones de ingresos brutos
                  provinciales.
                </li>
                <li>
                  <strong>Modelo 343:</strong> Declaración anual de operaciones con
                  clientes y proveedores.
                </li>
                <li>
                  <strong>Otros modelos:</strong> Declaraciones de retenciones de
                  exportaciones, regímenes especiales de IVA, etc.
                </li>
              </ul>
            </Typography>
            <Box
              component="img"
              src="/assets/img/impuestos_modelos_descarga.png"
              alt="Descarga de Modelos Fiscales"
              sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
            />
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Para generar un modelo, selecciona el periodo deseado (mes, trimestre
              o año), el tipo de formulario y haz clic en “Generar PDF”. El sistema
              compilará todos los datos fiscales en un archivo listo para imprimir o
              presentar electrónicamente. Esto elimina gran parte del trabajo manual
              y reduce errores en las declaraciones.
            </Typography>
          </section>
          <Divider sx={{ margin: "16px 0" }} />

          {/* -------------------------------- */}
          {/* SECCIÓN: Preguntas Frecuentes    */}
          {/* -------------------------------- */}
          <section id="preguntas-frecuentes">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              Preguntas Frecuentes
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, marginTop: "16px" }}
            >
              ¿Cómo configuro la tasa de IVA para un nuevo producto?
            </Typography>
            <Typography variant="body2" paragraph>
              Ve a <strong>Catálogos → Productos y Servicios</strong>, edita o crea un
              producto y asigna la tasa de IVA correspondiente en el campo “IVA”.
              Balaxys aplicará automáticamente ese porcentaje cada vez que
              factures ese producto.
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, marginTop: "16px" }}
            >
              ¿Puedo presentar modelos trimestrales de IVA?
            </Typography>
            <Typography variant="body2" paragraph>
              Sí. En la sección de modelaje fiscal, selecciona “Modelo 2001” y luego
              el periodo trimestral deseado (por ejemplo, Q1 2025). El sistema
              agrupará todas las facturas de venta y compra de ese trimestre para
              generar el formulario en un solo paso.
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, marginTop: "16px" }}
            >
              ¿Cómo registro retenciones de alquileres o servicios?
            </Typography>
            <Typography variant="body2" paragraph>
              En <strong>Configuración → Impuestos y Retenciones</strong>, agrega un
              nuevo tipo de retención con el porcentaje que corresponda. Luego, al
              ingresar una factura relacionada (compra de servicio o gasto de
              alquiler), selecciona esa retención y Balaxys descontará la base para
              calcular el monto retenido.
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, marginTop: "16px" }}
            >
              ¿Puedo exportar los datos fiscales a Excel?
            </Typography>
            <Typography variant="body2" paragraph>
              Claro. En cada listado de impuestos (Ventas, Compras o Empleados),
              encontrarás un ícono de “Descargar a Excel” en la esquina superior.
              Esto te permitirá obtener un reporte en formato .xlsx para análisis o
              envío a tu contador externo.
            </Typography>
          </section>
        </Box>
      </Box>
    </>
  );
};

export default QuePuedesHacerImpuestos;
