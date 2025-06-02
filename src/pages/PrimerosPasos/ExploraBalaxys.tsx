// src/pages/PrimerosPasos/ExploraBalaxys.tsx

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
import { Helmet } from "react-helmet-async";

/**
 * Página de ayuda “Explora Balaxys ERP”
 * Guía introductoria para familiarizarse con los menús, botones y componentes comunes de la interfaz.
 * Basada en las capturas de pantalla del panel lateral, menú superior, menú inferior y componentes UI.
 */
const ExploraBalaxys: React.FC = () => {
  return (
    <>
      {/* ========================= */}
      {/*   HEAD / META (SEO)      */}
      {/* ========================= */}
      <Helmet>
        <title>Explora Balaxys ERP | Guía de Navegación</title>
        <meta
          name="description"
          content="Conoce cómo navegar por Balaxys ERP: barra lateral, menús superior e inferior, y aprende a usar los componentes básicos de la interfaz."
        />
        <link
          rel="canonical"
          href="https://help.balaxys.com/primeros-pasos/explora-balaxys"
        />
      </Helmet>

      {/* ========================= */}
      {/*   CONTENEDOR PRINCIPAL   */}
      {/* ========================= */}
      <Box sx={{ display: "flex", padding: "20px" }}>
        {/* -------------------------------- */}
        {/* 1. ÍNDICE DE SECCIONES           */}
        {/* -------------------------------- */}
        <Box
          component="nav"
          aria-label="Índice de Explora Balaxys"
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
            sx={{ fontWeight: 600, marginBottom: "16px", color: "#1976d2" }}
          >
            ÍNDICE
          </Typography>
          <List>
            <ListItem>
              <Link href="#introduccion" underline="hover" color="#1976d2">
                <ListItemText primary="Introducción" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#barra-lateral" underline="hover" color="#1976d2">
                <ListItemText primary="1. Barra Lateral" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#menu-superior" underline="hover" color="#1976d2">
                <ListItemText primary="2. Menú Superior" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#menu-inferior" underline="hover" color="#1976d2">
                <ListItemText primary="3. Menú Inferior" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#componentes-ui" underline="hover" color="#1976d2">
                <ListItemText primary="4. Componentes UI" />
              </Link>
            </ListItem>
          </List>
        </Box>

        {/* -------------------------------- */}
        {/* 2. CONTENIDO PRINCIPAL           */}
        {/* -------------------------------- */}
        <Box component="main" sx={{ flex: 3, overflowY: "auto", paddingLeft: "24px" }}>
          {/* ============================= */}
          {/* SECCIÓN: Introducción        */}
          {/* ============================= */}
          <section id="introduccion">
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Introducción
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Familiarizarse con Balaxys ERP puede parecer un reto al principio, pero con
              práctica verás que la plataforma es muy intuitiva. Los elementos principales son:
              la <strong>barra lateral</strong> para acceder a módulos, el <strong>menú superior</strong>
              para gestionar la cuenta, y el <strong>menú inferior</strong> para tu perfil. Además,
              en cada pantalla encontrarás componentes comunes (listados, filtros, menú de tres
              puntos, icono de descarga, barra de búsqueda y selectores de fecha) que siguen
              una misma lógica en todo el sistema. A continuación, profundizaremos en cada uno.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/* ============================= */}
          {/* SECCIÓN 1: Barra Lateral      */}
          {/* ============================= */}
          <section id="barra-lateral">
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              1. Barra Lateral
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              La barra lateral se encuentra a la izquierda y es el punto de partida para acceder
              a todas las áreas de Balaxys ERP. Cada ítem principal (por ejemplo, “Clientes”,
              “Proveedores”, “Inventario”, “Contabilidad”, etc.) se despliega para mostrar sus
              subsecciones. Observa la siguiente captura:
            </Typography>
            <Box
              component="img"
              src="/assets/img/barra_lateral.png"
              alt="Barra lateral de Balaxys ERP"
              sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
            />
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              En la parte superior de la barra lateral, verás el logotipo de Balaxys y tu empresa
              activa (“Empresa LTD”). Debajo, cada módulo incluye:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  <strong>Ícono representativo:</strong> Facilita reconocer el módulo de un vistazo.
                </li>
                <li>
                  <strong>Texto descriptivo:</strong> Nombre del área (e.g., “Clientes”).
                </li>
                <li>
                  <strong>Flecha desplegable:</strong> Al hacer clic, se abren las subsecciones.
                </li>
              </ul>
              Haz clic sobre cualquier módulo para expandirlo y ver sus submenús. Por ejemplo,
              en “Clientes” encontrarás “Facturas de venta”, “Cobros”, “Notas de crédito”, etc.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/* ============================= */}
          {/* SECCIÓN 2: Menú Superior      */}
          {/* ============================= */}
          <section id="menu-superior">
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              2. Menú Superior
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              En la esquina superior izquierda (por encima de la barra lateral), está el enlace
              principal a tu cuenta de Balaxys. Muestra el nombre de tu empresa activa (“Empresa
              LTD”). Al hacer clic, se despliega el <strong>Menú Superior</strong>:
            </Typography>
            <Box
              component="img"
              src="/assets/img/menu_superior.png"
              alt="Menú superior con opciones de Configuración, Planes, Roles, Usuarios, Gemas Balaxys"
              sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
            />
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Dentro de este menú encontrarás:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  <strong>Configuración:</strong> Ajustes generales de tu cuenta y empresa.
                </li>
                <li>
                  <strong>Planes:</strong> Información y cambio de tu suscripción a Balaxys.
                </li>
                <li>
                  <strong>Roles:</strong> Administración de permisos y perfiles de usuario.
                </li>
                <li>
                  <strong>Usuarios:</strong> Listado de usuarios registrados y creación de nuevos.
                </li>
                <li>
                  <strong>Gemas Balaxys:</strong> Acceso a propuestas de funcionalidades (feedback).
                </li>
              </ul>
              El <strong>Menú Superior</strong> agrupa todas las opciones relacionadas con la
              gestión de tu cuenta en Balaxys.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/* ============================= */}
          {/* SECCIÓN 3: Menú Inferior      */}
          {/* ============================= */}
          <section id="menu-inferior">
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              3. Menú Inferior
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              En la parte inferior de la barra lateral, verás nuevamente tu nombre de usuario
              (o empresa) junto a un ícono de usuario. Al hacer clic, se abre el <strong>Menú
              Inferior</strong>, que permite acceder a tu perfil y preferencias personales:
            </Typography>
            <Box
              component="img"
              src="/assets/img/menu_inferior.png"
              alt="Menú inferior de usuario con acceso a Mi perfil"
              sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
            />
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              En este menú encontrarás:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  <strong>Mi perfil:</strong> Para editar tu información personal (nombre,
                  apellidos, teléfono, país, idioma y cambiar contraseña).
                </li>
                <li>
                  <strong>Cerrar sesión:</strong> Para salir de tu cuenta.
                </li>
                <li>
                  <strong>Centro de ayuda:</strong> Acceso directo a la documentación y soporte.
                </li>
              </ul>
              El <strong>Menú Inferior</strong> agrupa las opciones de perfil y configuración
              personal.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/* ============================= */}
          {/* SECCIÓN 4: Componentes UI     */}
          {/* ============================= */}
          <section id="componentes-ui">
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              4. Componentes UI Comunes
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              En todas las pantallas de Balaxys ERP encontrarás una serie de componentes que
              repiten la misma lógica para facilitar la navegación y el uso. A continuación,
              describimos cada uno:
            </Typography>

            {/* Sub-sección: Listados */}
            <Typography variant="h5" sx={{ fontWeight: 600, marginTop: "24px" }}>
              4.1 Listados
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Los listados son tablas que muestran múltiples registros (facturas, productos,
              clientes, etc.). Suelen incluir:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  Columnas personalizables: Haz clic en “Columnas” para elegir cuáles mostrar.
                </li>
                <li>
                  Ordenamiento: Haz clic en el encabezado de la columna para ordenar (ascendente/
                  descendente).
                </li>
                <li>
                  Paginación: Navega entre páginas si hay muchos registros.
                </li>
              </ul>
            </Typography>
            <Box
              component="img"
              src="/assets/img/componente_listado.png"
              alt="Ejemplo de listado con columnas y paginación"
              sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
            />

            {/* Sub-sección: Filtros y Segmentos */}
            <Typography variant="h5" sx={{ fontWeight: 600, marginTop: "24px" }}>
              4.2 Filtros y Segmentos
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              En la parte superior de muchos listados verás un icono de “columnas” y un desplegable
              de “filtros”. También puedes encontrar segmentos (etiquetas que agrupan criterios,
              por ejemplo “Estado: Confirmado” o “Almacén: Principal”).  
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  <strong>Buscar rápido:</strong> Caja de búsqueda para localizar registros por texto.
                </li>
                <li>
                  <strong>Filtros avanzados:</strong> Permiten refinar por varios criterios (fechas,
                  categorías, estados, etc.).
                </li>
                <li>
                  <strong>Segmentos (chips):</strong> Muestran los filtros aplicados y permiten quitarlos
                  fácilmente.
                </li>
              </ul>
            </Typography>
            <Box
              component="img"
              src="/assets/img/componente_filtros.png"
              alt="Ejemplo de filtros, segmentos y búsqueda rápida"
              sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
            />

            {/* Sub-sección: Menú de Tres Puntos */}
            <Typography variant="h5" sx={{ fontWeight: 600, marginTop: "24px" }}>
              4.3 Menú de Tres Puntos
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Al lado derecho de cada fila en los listados suele aparecer un <em>menú de tres puntos</em>
              (⋮). Al hacer clic, se despliegan acciones contextuales:
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>Ver detalles:</strong> Abre un modal con la información completa.</li>
                <li><strong>Editar:</strong> Permite modificar el registro.</li>
                <li><strong>Eliminar:</strong> Borra el registro (generalmente pide confirmación).</li>
                <li><strong>Otras acciones:</strong> Por ejemplo, “Exportar”, “Descargar PDF”, “Duplicar”, etc.</li>
              </ul>
            </Typography>
            <Box
              component="img"
              src="/assets/img/componente_tres_puntos.png"
              alt="Menú de tres puntos con acciones contextuales"
              sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
            />

            {/* Sub-sección: Icono de Descarga */}
            <Typography variant="h5" sx={{ fontWeight: 600, marginTop: "24px" }}>
              4.4 Icono de Descarga
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              En ciertos listados y reportes aparece un <em>icono de descarga</em> (flecha hacia abajo o
              elipsis con opción “Descargar a Excel”). Al pulsarlo, genera un archivo XLS o CSV con los datos
              filtrados:
            </Typography>
            <Box
              component="img"
              src="/assets/img/componente_descarga.png"
              alt="Icono de descarga en listado para exportar a Excel"
              sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
            />

            {/* Sub-sección: Barra de Búsqueda */}
            <Typography variant="h5" sx={{ fontWeight: 600, marginTop: "24px" }}>
              4.5 Barra de Búsqueda
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              La <em>barra de búsqueda</em> suele estar arriba a la derecha en cada módulo. Permite filtrar
              en tiempo real por texto (nombres de cliente, referencias de factura, códigos de producto, etc.).
            </Typography>
            <Box
              component="img"
              src="/assets/img/componente_busqueda.png"
              alt="Barra de búsqueda rápida en módulo"
              sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
            />

            {/* Sub-sección: Fechas y Calendario */}
            <Typography variant="h5" sx={{ fontWeight: 600, marginTop: "24px" }}>
              4.6 Fechas y Calendario
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Al crear o filtrar documentos (facturas, pagos, asientos, reportes), verás selectores de fecha:
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>Fecha de emisión / confirmación:</strong> Selecciona desde un calendario desplegable.</li>
                <li><strong>Rango de fechas:</strong> Algunos reportes permiten definir “Desde” y “Hasta”.</li>
                <li><strong>Validaciones:</strong> El sistema te alerta si la fecha no corresponde al periodo contable actual.</li>
              </ul>
            </Typography>
            <Box
              component="img"
              src="/assets/img/componente_calendario.png"
              alt="Selector de fecha con calendario desplegable"
              sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
            />
          </section>
        </Box>
      </Box>
    </>
  );
};

export default ExploraBalaxys;
