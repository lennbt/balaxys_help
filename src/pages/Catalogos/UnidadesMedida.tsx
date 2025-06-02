// src/pages/Catalogos/UnidadesDeMedida.tsx

import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Box,
  Typography,
  List,
  ListItem,
  Link as MUILink,
  ListItemText,
  Divider,
} from "@mui/material";

/**
 * Página de ayuda: Unidades de Medida en Balaxys ERP
 * Incluye meta tags para SEO usando react-helmet-async.
 */
const UnidadesDeMedida: React.FC = () => {
  return (
    <>
      {/* ===================================================== */}
      {/* META SEO: react-helmet-async */}
      {/* ===================================================== */}
      <Helmet>
        <title>Unidades de Medida en Balaxys ERP | Guía de Ayuda</title>
        <meta
          name="description"
          content="Aprende a gestionar las Unidades de Medida en Balaxys ERP: cómo ver el listado, crear nuevas unidades, editarlas y entender cada campo. Guía paso a paso con ejemplos e imágenes."
        />
        <link
          rel="canonical"
          href="https://help.balaxys.com/catalogos/unidades-de-medida"
        />
      </Helmet>

      <Box sx={{ display: "flex", padding: "20px" }}>
        {/* ===================================================== */}
        {/* 1. ÍNDICE DE NAVEGACIÓN (Sidebar fijo)              */}
        {/* ===================================================== */}
        <Box
          sx={{
            flex: 1,
            position: "sticky", // Fija el índice a la pantalla
            top: 20, // Espacio desde la parte superior
            height: "100vh", // Que ocupe toda la altura de la ventana
            paddingRight: "20px",
            paddingLeft: "20px",
            overflowY: "auto", // Permite scroll si es necesario
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
              <MUILink
                href="#introduccion"
                sx={{
                  textDecoration: "none",
                  color: "#1976d2",
                }}
              >
                <ListItemText primary="Introducción" />
              </MUILink>
            </ListItem>
            <ListItem>
              <MUILink
                href="#vista-listado"
                sx={{
                  textDecoration: "none",
                  color: "#1976d2",
                }}
              >
                <ListItemText primary="Vista de Listado" />
              </MUILink>
            </ListItem>
            <ListItem>
              <MUILink
                href="#crear-unidad"
                sx={{
                  textDecoration: "none",
                  color: "#1976d2",
                }}
              >
                <ListItemText primary="Crear Nueva Unidad" />
              </MUILink>
            </ListItem>
            <ListItem>
              <MUILink
                href="#campos-formulario"
                sx={{
                  textDecoration: "none",
                  color: "#1976d2",
                }}
              >
                <ListItemText primary="Campos del Formulario" />
              </MUILink>
            </ListItem>
            <ListItem>
              <MUILink
                href="#editar-unidad"
                sx={{
                  textDecoration: "none",
                  color: "#1976d2",
                }}
              >
                <ListItemText primary="Editar o Eliminar Unidad" />
              </MUILink>
            </ListItem>
            <ListItem>
              <MUILink
                href="#preguntas-frecuentes"
                sx={{
                  textDecoration: "none",
                  color: "#1976d2",
                }}
              >
                <ListItemText primary="Preguntas Frecuentes" />
              </MUILink>
            </ListItem>
          </List>
        </Box>

        {/* ===================================================== */}
        {/* 2. CONTENIDO PRINCIPAL                               */}
        {/* ===================================================== */}
        <Box sx={{ flex: 3, overflowY: "auto", paddingLeft: "20px" }}>
          {/* ----------------------------------------------------- */}
          {/* SECCIÓN: Introducción                                */}
          {/* ----------------------------------------------------- */}
          <section id="introduccion">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
            Unidades de Medida en Balaxys ERP
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              En Balaxys ERP, la sección de <strong>Unidades de Medida</strong>{" "}
              permite gestionar las unidades en las que se miden los productos.
              Desde esta pantalla podrás ver todas las unidades habilitadas,
              crear nuevas, editarlas o eliminarlas según sea necesario. Cada
              unidad se utiliza en los formularios de productos, facturas,
              órdenes de compra y demás documentos, asegurando que las
              cantidades se representen correctamente.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/* ----------------------------------------------------- */}
          {/* SECCIÓN: Vista de listado                            */}
          {/* ----------------------------------------------------- */}
          <section id="vista-listado">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              Vista de Listado de Unidades
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Al ingresar a <em>Catálogos → Unidades de Medida</em>, verás un
              listado que muestra todas las unidades existentes:
            </Typography>
            <Box
              component="img"
              src="/assets/img/unidades_listado.png"
              alt="Listado de Unidades de Medida"
              sx={{
                width: "100%",
                borderRadius: "4px",
                marginBottom: "16px",
              }}
            />
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              El listado contiene las siguientes columnas:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  <strong>Código:</strong> Abreviatura única (ej.: “kg”, “m”, “L”).
                </li>
                <li>
                  <strong>Nombre:</strong> Descripción completa de la unidad
                  (ej.: “kilogramo”, “metro”, “litro”).
                </li>
                <li>
                  <strong>Acciones:</strong> Íconos para ver, editar o eliminar
                  la unidad.
                </li>
              </ul>
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Para refrescar la pantalla, haz clic en el ícono de{" "}
              <em>Recargar</em>. Para agregar una nueva unidad, pulsa el botón{" "}
              <em>“Nueva unidad de medida”</em>.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/* ----------------------------------------------------- */}
          {/* SECCIÓN: Crear nueva unidad                           */}
          {/* ----------------------------------------------------- */}
          <section id="crear-unidad">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              Crear Nueva Unidad de Medida
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Para registrar una nueva unidad, haz clic en el botón{" "}
              <em>“Nueva unidad de medida”</em>. Esto abrirá un diálogo modal
              con el siguiente formulario:
            </Typography>
            <Box
              component="img"
              src="/assets/img/unidades_modal_nueva.png"
              alt="Formulario Nueva Unidad de Medida"
              sx={{
                width: "100%",
                borderRadius: "4px",
                marginBottom: "16px",
              }}
            />
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              El formulario contiene:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  <strong>Código *:</strong> Abreviatura breve para la unidad
                  (ej.: “kg”, “m”). Debe ser único.
                </li>
                <li>
                  <strong>Nombre *:</strong> Descripción completa (ej.: “kilogramo”,
                  “metro”). Debe reflejar su significado real y ser comprensible.
                </li>
              </ul>
              Ambos campos son de carácter obligatorio (marcados con *). Si no
              completas alguno, el sistema mostrará un mensaje de “Campo
              requerido” y no podrás guardar.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/* ----------------------------------------------------- */}
          {/* SECCIÓN: Campos del Formulario                       */}
          {/* ----------------------------------------------------- */}
          <section id="campos-formulario">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              Detalle de Campos del Formulario
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              A continuación ampliamos la descripción de cada campo:
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Box sx={{ width: "100%" }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Código *
                </Typography>
                <Typography variant="body1" paragraph sx={{ marginLeft: "20px" }}>
                  - Debe ser una cadena corta (2-5 caracteres) en minúsculas o
                  mayúsculas (ej.: “kg”, “m”, “lts”).  
                  <br />
                  - No puede repetirse: si ya existe una unidad con ese código,
                  se mostrará alerta y no permitirá guardar.
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Nombre *
                </Typography>
                <Typography variant="body1" paragraph sx={{ marginLeft: "20px" }}>
                  - Texto que describe la unidad (ej.: “kilogramo”, “metro”,
                  “litro”).  
                  <br />
                  - Debe ser comprensible para todos los usuarios y reflejar el
                  uso real en documentos (facturas, ajustes, vales).
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/* ----------------------------------------------------- */}
          {/* SECCIÓN: Editar o Eliminar Unidad                     */}
          {/* ----------------------------------------------------- */}
          <section id="editar-unidad">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              Editar o Eliminar Unidad de Medida
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              En el listado de unidades, cada fila tiene íconos de acción:
            </Typography>
            <Box
              component="img"
              src="/assets/img/unidades_listado_acciones.png"
              alt="Acciones en Listado de Unidades"
              sx={{
                width: "100%",
                borderRadius: "4px",
                marginBottom: "16px",
              }}
            />
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              - <strong>Ver (ícono ojo):</strong> Muestra los detalles de la
              unidad en modo solo lectura.  
              - <strong>Editar (ícono lápiz):</strong> Abre el modal con los
              campos de “Código” y “Nombre” cargados para su modificación.  
              - <strong>Eliminar (ícono papelera):</strong> Muestra un diálogo
              de confirmación. Si la unidad está siendo usada en algún
              documento (producto, factura, ajuste), el sistema no permitirá
              eliminar hasta que se desasocie o elimine el uso.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/* ----------------------------------------------------- */}
          {/* SECCIÓN: Preguntas Frecuentes                         */}
          {/* ----------------------------------------------------- */}
          <section id="preguntas-frecuentes">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              Preguntas Frecuentes
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, marginBottom: "4px" }}
            >
              ¿Qué diferencia hay entre “litro” y “lts” como código?
            </Typography>
            <Typography
              variant="body2"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Ambos códigos se refieren a la misma unidad. La convención en
              Balaxys es usar códigos cortos de 2‐3 letras (ej.: “L” o “lts”),
              pero el nombre debe ser claro (“litro”). Elige la abreviatura que
              prefieras siempre y cuando no se repita con otra unidad.
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, marginBottom: "4px" }}
            >
              ¿Puedo cambiar el código de una unidad ya usada en facturas?
            </Typography>
            <Typography
              variant="body2"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              No directamente. Si una unidad ya está asociada a documentos o
              productos, el sistema impedirá cambiar el código para evitar
              incongruencias históricas. Debes crear una unidad nueva con el
              código deseado y luego actualizar manualmente los productos o
              documentos que requieras.
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, marginBottom: "4px" }}
            >
              ¿Cómo agrego una unidad personalizada para mí?
            </Typography>
            <Typography
              variant="body2"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Al hacer clic en “Nueva unidad de medida”, ingresa el código y
              nombre deseado, luego guarda. Esa unidad estará disponible para
              todos los módulos (productos, ajustes, vales, facturas).
            </Typography>
          </section>
        </Box>
      </Box>
    </>
  );
};

export default UnidadesDeMedida;
