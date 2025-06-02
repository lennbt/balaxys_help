// src/pages/Catalogos/AyudaCategoriaProductos.tsx
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

import React from "react";
import { Box, Typography, List, ListItem, Link, ListItemText, Divider } from "@mui/material";

/**
 * Página de ayuda para la sección "Categorías y Subcategorías" en Balaxys ERP.
 * Muestra un índice de navegación y explicación detallada con capturas de pantalla reales.
 */
const AyudaCategoriaProductos: React.FC = () => {
  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* ========================================= */}
      {/* 1. ÍNDICE ALFABÉTICO (columna izquierda)   */}
      {/* ========================================= */}
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
              <ListItemText primary="¿Cuándo usar categorías?" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#flujo-principal" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Flujo principal" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#paso-a-paso" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Paso a paso: Crear categoría" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#detalle-campos" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Detalles de campos" />
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

      {/* ========================================= */}
      {/* 2. CONTENIDO PRINCIPAL (columna derecha)   */}
      {/* ========================================= */}
      <Box sx={{ flex: 3, overflowY: "auto", paddingLeft: "20px" }}>
        {/* ----------------------------- */}
        {/* Introducción                 */}
        {/* ----------------------------- */}
        <section id="introduccion">
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            Ayuda: Categorías y Subcategorías
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En Balaxys ERP, la sección de <strong>Catálogos → Categorías y Subcategorías</strong>
            permite organizar los productos en agrupaciones lógicas. Cada categoría puede contener
            múltiples subcategorías, facilitando la clasificación, búsqueda y filtrado dentro del
            inventario.
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            A continuación encontrarás una guía completa para crear, editar y eliminar categorías y
            sus subcategorías, con ejemplos reales de la interfaz de Balaxys.
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* ¿Cuándo usar categorías?     */}
        {/* ----------------------------- */}
        <section id="cuando-usar">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            ¿Cuándo usar categorías y subcategorías?
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            - **Agrupar productos similares**: Por ejemplo, “Ropa” → “Camisas”, “Pantalones”.
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            - **Mejorar la navegación**: Los usuarios pueden filtrar por categoría para encontrar rápidamente
            productos relacionados.
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            - **Reportes y análisis**: Permite generar estadísticas por categoría.  
            <ul style={{ marginLeft: "20px" }}>
              <li>Ventas por categoría.</li>
              <li>Stock pendiente por subcategoría.</li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* -------------------------------- */}
        {/* Flujo principal: listado y modal  */}
        {/* -------------------------------- */}
        <section id="flujo-principal">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Flujo principal: Listado y creación de categorías
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            1. En el menú lateral, navega a <strong>Catálogos → Categorías y Subcategorías</strong>.
          </Typography>
          <Box
            component="img"
            src="/assets/img/categoria_listado.png"
            alt="Listado de categorías y subcategorías"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            2. Verás un <strong>Listado en tabla</strong> con columnas:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Código</strong>: Identificador de la categoría.</li>
              <li><strong>Nombre</strong>: Título descriptivo de la categoría.</li>
              <li><strong>Subcategorías</strong>: Listado de pares “código - nombre” de cada subcategoría.</li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            3. Para crear una nueva categoría, haz clic en el botón azul <strong>“Nueva categoría”</strong>:
          </Typography>
          <Box
            component="img"
            src="/assets/img/categoria_nueva_btn.png"
            alt="Botón Nueva categoría"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* -------------------------------- */}
        {/* Paso a paso: Crear categoría      */}
        {/* -------------------------------- */}
        <section id="paso-a-paso">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Paso a paso: Crear categoría y subcategorías
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            1. Completar datos de categoría (cabecera)
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            - <strong>Código *</strong>: Ingresa un identificador único, por ejemplo <em>10</em>.
            <br />
            - <strong>Nombre *</strong>: Nombre descriptivo, por ejemplo <em>Camisas</em>.
          </Typography>
          <Box
            component="img"
            src="/assets/img/categoria_modal_cabecera.png"
            alt="Formulario: código y nombre de categoría"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />

          <Typography variant="subtitle1" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            2. Agregar subcategorías
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            - En la sección “Subcategorías”, verás una fila por defecto con campos vacíos:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Código subcategoría *</strong>: Ejemplo <em>101</em>.</li>
              <li><strong>Nombre subcategoría *</strong>: Ejemplo <em>Manga Corta</em>.</li>
            </ul>
            - Si deseas agregar más, haz clic en <strong>“Agregar subcategoría”</strong> (ícono +).  
            - Para eliminar una fila, haz clic en el ícono de papelera a la derecha.
          </Typography>
          <Box
            component="img"
            src="/assets/img/categoria_modal_subcats.png"
            alt="Formulario: agregar subcategorías"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />

          <Typography variant="subtitle1" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            3. Guardar la categoría
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            - Una vez completados <em>código</em>, <em>nombre</em> y al menos una subcategoría, haz clic en
            <strong> “Guardar”</strong>.
            - Si falta algún campo obligatorio (*), aparecerá un mensaje de alerta.
            - Tras guardar, la nueva categoría se agrega al listado y se actualiza la tabla.
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* -------------------------------- */}
        {/* Detalles de los campos           */}
        {/* -------------------------------- */}
        <section id="detalle-campos">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Detalles de cada campo
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Código
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            - Identificador único para la categoría. Debe ser un valor alfanumérico o numérico sin espacios.
            - Ejemplos: <em>10</em>, <em>ELEC</em>, <em>ROPA-MUJER</em>.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Nombre
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            - Descripción legible de la categoría. Puede incluir espacios y caracteres especiales.
            - Ejemplos: <em>Camisas</em>, <em>Pantalones</em>, <em>Electrónica</em>.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Subcategorías: Código subcategoría
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            - Identificador único para cada subcategoría dentro de la categoría principal.
            - Debe seguir una numeración o convención clara, p. ej. “101” y “102” para “Camisas.”
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Subcategorías: Nombre subcategoría
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            - Descripción de la subcategoría, visible en listados y filtros.
            - Ejemplos: <em>Manga Larga</em>, <em>Polo</em>, <em>Casacas</em>.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Botón “Agregar subcategoría”
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            - Permite añadir una nueva fila vacía para ingresar más subcategorías.
            - Se recomienda numerar en orden consecutivo para mantener consistencia.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Ícono papelera (Eliminar subcategoría)
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            - Elimina la fila de la subcategoría correspondiente.
            - Si solo queda una fila vacía, al eliminarla se mantiene una fila en blanco para nuevos datos.
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* -------------------------------- */}
        {/* Ejemplos y capturas              */}
        {/* -------------------------------- */}
        <section id="ejemplos">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Ejemplos y capturas de pantalla
          </Typography>

          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            <strong>Listado de Categorías:</strong>
            <br />
            En este ejemplo se muestra la tabla con dos categorías existentes:
          </Typography>
          <Box
            component="img"
            src="/assets/img/categoria_listado_ejemplo.png"
            alt="Ejemplo listado de categorías"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />

          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            <strong>Formulario: Nueva Categoría</strong>
            <br />
            Se observa cómo se ingresan <em>código</em>, <em>nombre</em> y se agregan dos
            subcategorías:
            <ul style={{ marginLeft: "20px" }}>
              <li>Código subcategoría: <em>101</em>, Nombre subcategoría: <em>Manga Corta</em>.</li>
              <li>Código subcategoría: <em>102</em>, Nombre subcategoría: <em>Manga Larga</em>.</li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/categoria_modal_ejemplo.png"
            alt="Ejemplo formulario nueva categoría"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* -------------------------------- */}
        {/* Preguntas frecuentes             */}
        {/* -------------------------------- */}
        <section id="preguntas">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Preguntas frecuentes
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Puedo editar una categoría existente?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            No actualmente. Para modificar una categoría, anúlala y crea una nueva con los datos
            actualizados. Próximamente se habilitará la función de edición directa.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Qué pasa si elimino todas las subcategorías?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            El sistema mantiene siempre una fila vacía en blanco para facilitar la creación de nuevas
            subcategorías. Si deseas no tener subcategorías, deja los campos vacíos y guarda; la categoría
            se creará sin subcategorías.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Cómo se reflejan estas categorías en otros módulos?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Las categorías creadas aquí se utilizan en:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Productos:</strong> Al crear o editar productos, podrás asignarlos a una
                categoría y subcategoría específicas para organizarlos en catálogos y reportes.</li>
              <li><strong>Filtros de inventario:</strong> En el inventario general, puedes filtrar por
                categoría para ver solo los productos de un grupo.</li>
            </ul>
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Cómo se anula una categoría?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Actualmente no existe una función de anulación. Si deseas desactivar una categoría, no la asignes
            a nuevos productos y se ocultará en los menús de selección.
          </Typography>
        </section>
      </Box>
    </Box>
  );
};

export default AyudaCategoriaProductos;
