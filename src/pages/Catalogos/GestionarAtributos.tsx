// src/pages/Catalogos/AyudaGestionarAtributos.tsx
import React from "react";
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
 * Página de ayuda para “Gestión de atributos de productos” en Balaxys ERP.
 * Describe la pantalla de listado de atributos, sus columnas, el botón “Nuevo atributo”,
 * la búsqueda rápida, las acciones disponibles (ver, editar, eliminar),
 * y explica cómo funciona el formulario modal para crear o editar un atributo.
 */
const GestionarAtributos: React.FC = () => {
  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* ======================================= */}
      {/* 1. ÍNDICE DE SECCIONES                  */}
      {/* ======================================= */}
      <Box
        sx={{
          flex: 1,
          position: "sticky",     // Fija el índice en la pantalla
          top: 20,                // Espacio desde la parte superior
          height: "100vh",        // Ocupa toda la altura de la ventana
          paddingRight: "20px",
          paddingLeft: "20px",
          overflowY: "auto",      // Permite scroll vertical
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
            <Link href="#introduccion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Introducción" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#acceso-listado" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Acceso al listado de atributos" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#columnas-tabla" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Descripción de columnas" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#boton-nuevo" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Botón “Nuevo atributo”" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#busqueda-rapida" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Búsqueda rápida" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#acciones-fila" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Acciones por fila" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#formulario-modal" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Formulario modal (Crear / Editar)" />
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
            Ayuda: Gestión de Atributos de Productos
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En esta sección podrás ver, crear, editar y eliminar los atributos
            (variantes) asociados a tus productos. Un <strong>atributo</strong> permite
            definir variantes como “Color”, “Talla” o “Material”, cada uno con su
            conjunto de valores. Desde aquí puedes:
            <ul style={{ marginLeft: "20px" }}>
              <li>Visualizar el listado de atributos existentes.</li>
              <li>Buscar rápidamente un atributo por nombre.</li>
              <li>Crear nuevos atributos haciendo clic en “Nuevo atributo”.</li>
              <li>Editar o eliminar atributos existentes.</li>
              <li>Ver los valores de cada atributo (p. ej. “Rojo, Azul, Verde”).</li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/catalogos_atributos_listado.png"
            alt="Listado de Atributos de Productos"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Acceso al listado             */}
        {/* ----------------------------- */}
        <section id="acceso-listado">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            1. Acceso al listado de atributos
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Para acceder a la pantalla de “Atributos de productos”:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                Desde el menú lateral de Balaxys, navega a <em>Catálogos → Atributos</em>.
              </li>
              <li>
                Se mostrará automáticamente el listado con todos los atributos creados,
                ordenados alfabéticamente por <strong>Nombre variante</strong>.
              </li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Descripción de columnas        */}
        {/* ----------------------------- */}
        <section id="columnas-tabla">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            2. Descripción de columnas
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            El listado muestra las siguientes columnas principales:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Nombre variante:</strong> Nombre del atributo (por ejemplo, “Color”,
                “Talla”, “Material”). Identifica la característica que variará en los productos.
              </li>
              <li>
                <strong>Valores:</strong> Lista separada por comas de los valores disponibles para
                ese atributo (ej.: “Rojo, Azul, Verde”).
              </li>
              <li>
                <strong>Acciones:</strong> Iconos para ver detalles, editar o eliminar el atributo.
                <ul style={{ marginLeft: "20px" }}>
                  <li>
                    <strong>Ver (ojos):</strong> Despliega un modal con todos los valores del atributo en forma detallada.
                  </li>
                  <li>
                    <strong>Editar (lápiz):</strong> Abre el formulario modal para modificar tanto el nombre del atributo como sus valores.
                  </li>
                  <li>
                    <strong>Eliminar (papelera):</strong> Borra el atributo definitivamente
                    (se recomienda no eliminar si ya está asignado a productos).
                  </li>
                </ul>
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/catalogos_atributos_columnas.png"
            alt="Columnas en listado de Atributos"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Botón “Nuevo atributo”         */}
        {/* ----------------------------- */}
        <section id="boton-nuevo">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            3. Botón “Nuevo atributo”
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En la esquina superior derecha de la pantalla encontrarás el botón azul
            <strong> “Nuevo atributo”</strong>. Para crear un atributo:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                Haz clic en <strong>“Nuevo atributo”</strong>.
              </li>
              <li>
                Aparecerá un formulario modal donde podrás definir:
                <ul style={{ marginLeft: "20px" }}>
                  <li><strong>Nombre variante *:</strong> Nombre para el nuevo atributo (ej.: “Estilo”).</li>
                  <li><strong>Valores *</strong> (separados por coma): Lista inicial de valores que podrán asignarse a los productos (ej.: “Casual, Formal, Deportivo”).</li>
                </ul>
              </li>
              <li>
                Al llenar ambos campos, haz clic en <strong>“Guardar”</strong> para registrar el atributo.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/catalogos_atributos_nuevo_btn.png"
            alt="Botón Nuevo atributo"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Búsqueda rápida               */}
        {/* ----------------------------- */}
        <section id="busqueda-rapida">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            4. Búsqueda rápida
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Encima del listado de atributos encontrarás el campo de
            <strong> “Búsqueda rápida”</strong>:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                Escribe texto relacionado con el nombre del atributo o con alguno de sus valores.
              </li>
              <li>
                A medida que escribes, la tabla se filtrará en tiempo real para mostrar
                únicamente los atributos que coincidan con el texto ingresado.
              </li>
              <li>
                Esto facilita localizar un atributo específico cuando la lista es extensa.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/catalogos_atributos_busqueda.png"
            alt="Campo Búsqueda rápida en listado de Atributos"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Acciones por fila              */}
        {/* ----------------------------- */}
        <section id="acciones-fila">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            5. Acciones por fila
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Cada fila de atributo incluye tres iconos en la columna <strong>Acciones</strong>:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Ver (ícono ojo):</strong> Muestra un modal emergente con la lista completa
                de todos los valores asociados a ese atributo. Útil para revisar sin editar.
              </li>
              <li>
                <strong>Editar (ícono lápiz):</strong> Abre el formulario modal en modo edición,
                permitiendo cambiar el nombre del atributo y/o modificar los valores (agregar, eliminar, editar).
              </li>
              <li>
                <strong>Eliminar (ícono papelera):</strong> Borra permanentemente el atributo y sus valores.
                Antes de eliminar, asegúrate de que no esté asignado a ningún producto, ya que esto podría
                afectar la integridad de tu catálogo.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/catalogos_atributos_acciones.png"
            alt="Iconos de acciones en lista de Atributos"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Formulario modal (Crear / Editar) */}
        {/* ----------------------------- */}
        <section id="formulario-modal">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            6. Formulario modal (Crear / Editar)
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Cuando creas o editas un atributo, aparece un modal con estos campos:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Nombre variante *:</strong> Campo de texto para ingresar o modificar el nombre del
                atributo (ej.: “Talla”, “Género”, “Material”). Obligatorio.
              </li>
              <li>
                <strong>Valores *</strong> (separados por coma): Campo de texto amplio donde escribes
                los valores disponibles para este atributo, separados por comas (ej.: “S, M, L, XL”). Obligatorio.
              </li>
              <li>
                <strong>Notas / Instrucciones:</strong> (Opcional) Cuadro de texto para agregar comentarios
                internos sobre el uso del atributo o recomendaciones (por ejemplo, “Usar únicamente en productos de verano”).
              </li>
            </ul>
            Al terminar de completar o modificar, haz clic en:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Guardar:</strong> Para guardar los cambios y actualizar el listado.</li>
              <li><strong>Cancelar:</strong> Para cerrar el modal sin guardar ninguna modificación.</li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/catalogos_atributos_formulario.png"
            alt="Formulario modal de Nuevo / Editar Atributo"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Preguntas frecuentes           */}
        {/* ----------------------------- */}
        <section id="preguntas">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            7. Preguntas frecuentes
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Qué es un atributo de producto?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Un atributo (o variante) es una característica que puede tener múltiples valores
            y permite diferenciar versiones de un mismo producto. Por ejemplo, “Color” con valores
            “Rojo, Azul, Verde”; o “Talla” con valores “S, M, L, XL”.  
            Estos atributos después se asignan a productos específicos en tu inventario.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Cómo agrego una nueva variante (valor) a un atributo existente?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Haz clic en el icono <strong>Editar (lápiz)</strong> de la fila del atributo que desees modificar.
            En el formulario modal, en el campo <strong>“Valores”</strong>, agrega la nueva variante separada
            por coma (ej.: si antes eran “Rojo, Azul”, y quieres agregar “Verde”, escribe “Rojo, Azul, Verde”).
            Luego haz clic en <strong>“Guardar”</strong>.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Qué sucede si elimino un atributo que ya está asignado a productos?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            No se recomienda eliminar atributos que ya estén asignados, ya que
            los productos perderán esa variante y podría generar inconsistencias
            en tu catálogo. El sistema mostrará un aviso de advertencia si detecta
            que el atributo está en uso y te pedirá confirmación antes de eliminarlo.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Cómo busco un atributo específico?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Utiliza el campo <strong>“Búsqueda rápida”</strong> en la parte superior de la tabla.
            Escribe parte o toda la palabra del <strong>Nombre variante</strong> o de alguno de sus valores,
            y la tabla se filtrará automáticamente para mostrar solo los atributos que coincidan.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Puedo ver todos los valores de un atributo sin editarlo?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Sí. Haz clic en el icono <strong>Ver (ojo)</strong> en la fila del atributo.
            Aparecerá un modal que lista cada valor en una línea separada, lo cual facilita
            la lectura cuando hay muchos valores asociados.
          </Typography>
        </section>
      </Box>
    </Box>
  );
};

export default GestionarAtributos;
