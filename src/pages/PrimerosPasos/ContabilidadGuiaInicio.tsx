// src/pages/Contabilidad/ContabilidadGuiaInicio.tsx

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

/**
 * Página de ayuda “Guía de Inicio – Contabilidad” para Balaxys ERP.
 * Explica los conceptos básicos de cómo funcionan los asientos contables automáticos,
 * cómo revisar asientos generados y opciones de importación masiva.
 */
const ContabilidadGuiaInicio: React.FC = () => {
  return (
    <>
      {/** ================================= **/}
      {/**   HEAD / META (SEO)             **/}
      {/** ================================= **/}
      <Helmet>
        <title>Guía de Inicio Contabilidad | Balaxys ERP</title>
        <meta
          name="description"
          content="Descubre cómo Balaxys ERP genera asientos contables automáticamente, verifica registros y aprovecha la importación masiva de asientos."
        />
        <link
          rel="canonical"
          href="https://help.balaxys.com/contabilidad/contabilidad-guia-inicio"
        />
      </Helmet>

      {/** ================================= **/}
      {/**   CONTENEDOR PRINCIPAL          **/}
      {/** ================================= **/}
      <Box sx={{ display: "flex", padding: "20px" }}>
        {/** --------------------------------- **/}
        {/**   1. ÍNDICE DE SECCIONES           **/}
        {/** --------------------------------- **/}
        <Box
          component="nav"
          aria-label="Índice Contabilidad Guía Inicio"
          sx={{
            flex: 1,
            position: "sticky",
            top: 20,
            height: "100vh",
            paddingRight: "24px",
            paddingLeft: "16px",
            overflowY: "auto",
            borderRight: "1px solid #e0e0e0",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              marginBottom: "16px",
              color: "#1976d2",
            }}
          >
            ÍNDICE
          </Typography>
          <List>
            <ListItem>
              <Link href="#introduccion" underline="hover" color="#1976d2">
                <ListItemText primary="0. Antes de Empezar" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#configuracion-basica" underline="hover" color="#1976d2">
                <ListItemText primary="1. Configuración Básica" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#verificar-asientos" underline="hover" color="#1976d2">
                <ListItemText primary="2. Registrar Factura y Verificar Asiento" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#importar-asientos" underline="hover" color="#1976d2">
                <ListItemText primary="3. Importación de Asientos Contables" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#ia-importador" underline="hover" color="#1976d2">
                <ListItemText primary="4. Importador IA Personalizado" />
              </Link>
            </ListItem>
          </List>
        </Box>

        {/** --------------------------------- **/}
        {/**   2. CONTENIDO PRINCIPAL           **/}
        {/** --------------------------------- **/}
        <Box
          component="main"
          sx={{ flex: 3, overflowY: "auto", paddingLeft: "24px" }}
        >
          {/** ------------------------------------------- **/}
          {/** SECCIÓN 0: Introducción                  **/}
          {/** ------------------------------------------- **/}
          <section id="introduccion">
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Primeros pasos en Balaxys Contabilidad
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              En Balaxys ERP, los asientos contables se generan automáticamente
              a partir de los documentos que registras en la plataforma. Cada
              vez que creas una factura de venta, una factura de compra o cualquier
              otro documento financiero, Balaxys crea el asiento correspondiente
              y lo publica en los libros contables correspondientes.
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Aunque no necesitas ingresar manualmente cada movimiento contable,
              es fundamental que comprendas la lógica detrás de estos registros.
              De esta forma podrás interpretar el impacto de cada transacción en
              la salud financiera de tu empresa y tomar decisiones informadas.
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Esta guía te llevará paso a paso por las principales funcionalidades
              del módulo de Contabilidad: configuración inicial, verificación de asientos
              automáticos, opciones de importación y la vista general de los estados
              contables, para que domines la contabilidad de tu negocio sin contratiempos.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/** ------------------------------------------- **/}
          {/** SECCIÓN 1: Configuración Básica            **/}
          {/** ------------------------------------------- **/}
          <section id="configuracion-basica">
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              1. Configuración Básica
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Antes de registrar asientos, asegúrate de que la configuración contable
              esté completa:
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify", marginLeft: "20px" }}>
              1. Desde el menú lateral, expande <strong>Contabilidad</strong> y haz clic en
              <strong> Parametrización contable</strong>. Verifica que tus libros contables
              estén activados y que las cuentas principales (activo, pasivo, patrimonio,
              ingresos y gastos) estén bien definidas.
            </Typography>
            <Box
              component="img"
              src="/assets/img/contabilidad_parametrizacion.png"
              alt="Parametrización Contable"
              sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
            />
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              2. En <strong>Contabilidad &gt; Periodos contables</strong>, revisa que el año
              y los meses que vayas a utilizar estén abiertos. Si tu periodo no está abierto,
              Balaxys no te permitirá registrar documentos con fechas fuera del periodo vigente.
            </Typography>
            <Box
              component="img"
              src="/assets/img/contabilidad_periodos.png"
              alt="Periodos Contables"
              sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
            />
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              3. Asegúrate de que el resto de parámetros (subcuentas, asientos automáticos,
              elementos de gastos) estén configurados correctamente para tu plan de cuentas.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/** ------------------------------------------- **/}
          {/** SECCIÓN 2: Registrar Factura y Verificar Asiento **/}
          {/** ------------------------------------------- **/}
          <section id="verificar-asientos">
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              2. Registrar Factura y Verificar Asiento
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Cada vez que emites o confirmas una factura (de compra o venta), Balaxys
              crea automáticamente un asiento contable. Para revisar ese asiento:
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify", marginLeft: "20px" }}>
              1. Ve al módulo correspondiente (<strong>Clientes &gt; Gestionar facturas de venta</strong>
              o <strong>Proveedores &gt; Gestionar facturas de compra</strong>). Busca la factura
              confirmada y haz clic en el icono de <em>Ver</em> (ojo).
            </Typography>
            <Box
              component="img"
              src="/assets/img/contabilidad_ver_factura.png"
              alt="Ver Factura y Asiento"
              sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
            />
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              2. En la vista detallada de la factura, expande la sección <strong>Contabilidad</strong>
              para ver el asiento generado:
            </Typography>
            <Box
              component="img"
              src="/assets/img/contabilidad_asiento_factura.png"
              alt="Asiento Contable Automático"
              sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
            />
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              3. Verifica que las cuentas, débitos y créditos coincidan con tu lógica contable.
              Si encuentras discrepancias, revisa la parametrización de tu plan de cuentas y
              los elementos de gasto utilizados por Balaxys.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/** ------------------------------------------- **/}
          {/** SECCIÓN 3: Importación de Asientos Contables **/}
          {/** ------------------------------------------- **/}
          <section id="importar-asientos">
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              3. Importación de Asientos Contables
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Si cuentas con asientos previamente elaborados en otro sistema o en Excel,
              Balaxys te permite importarlos masivamente:
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify", marginLeft: "20px" }}>
              1. En <strong>Contabilidad &gt; Libro Diario</strong>, haz clic en el icono ⋮
              (menú de tres puntos) en la esquina superior derecha del listado. Selecciona
              “Importar asientos desde Excel”:
            </Typography>
            <Box
              component="img"
              src="/assets/img/contabilidad_importar_1.png"
              alt="Opción Importar Asientos"
              sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
            />
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              2. Descarga la <strong>plantilla de importación de asientos</strong> y completa las
              columnas obligatorias: Fecha, Cuenta, Tipo (Débito o Crédito), Monto, Descripción.
            </Typography>
            <Box
              component="img"
              src="/assets/img/contabilidad_importar_2.png"
              alt="Plantilla Excel Asientos"
              sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
            />
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              3. Sube el archivo corregido, revisa el mapeo de columnas y haz clic en
              “Importar”. Balaxys validará cada fila y creará los asientos en tu libro diario.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/** ------------------------------------------- **/}
          {/** SECCIÓN 4: Importador IA Personalizado        **/}
          {/** ------------------------------------------- **/}
          <section id="ia-importador">
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              4. Importador IA Personalizado de Asientos
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Próximamente, Balaxys incorporará un módulo avanzado de importación de asientos
              basado en Inteligencia Artificial. Esta solución permitirá:
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify", marginLeft: "20px" }}>
              • Reconocer automáticamente el formato de tus archivos contables antiguos.<br />
              • Validar inconsistencias de forma inteligente (cuentas sin clasificar, montos incorrectos).<br />
              • Sugerir mapeos de cuentas y categorías a partir de patrones de uso histórico.<br />
              • Prever posibles errores y avisarte antes de la carga definitiva.<br />
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Esta funcionalidad avanzada estará disponible en un futuro cercano; mantente atento
              a las novedades de Balaxys para aprovechar esta importación inteligente de asientos.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>
        </Box>
      </Box>
    </>
  );
};

export default ContabilidadGuiaInicio;
