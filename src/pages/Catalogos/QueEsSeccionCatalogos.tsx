// src/pages/Catalogos/QueEsSeccionCatalogos.tsx

import React from "react";
import { Helmet } from "react-helmet-async";
import { Box, Typography, List, ListItem, Link, ListItemText, Divider } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

/**
 * Página de ayuda: ¿Qué es la Sección de Catálogos en Balaxys?
 * Incluye meta-tags optimizados para SEO mediante react-helmet-async.
 * Describe cada subsección: Almacenes, Categoría de productos,
 * Atributos de producto, Centros de costo y Unidades de medida.
 */
const QueEsSeccionCatalogos: React.FC = () => {
  return (
    <>
      {/* ====================== */}
      {/*  META SEO & HEAD     */}
      {/* ====================== */}
      <Helmet>
        <title>¿Qué es la Sección de Catálogos? | Balaxys ERP</title>
        <meta
          name="description"
          content="Descubre la Sección de Catálogos en Balaxys ERP: gestiona Almacenes, Categorías de productos, Atributos, Centros de costo y Unidades de medida. Guía paso a paso."
        />
        <link rel="canonical" href="https://help.balaxys.com/catalogos/que-es-seccion-catalogos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      {/* ====================== */}
      {/*  CONTENIDO PRINCIPAL  */}
      {/* ====================== */}
      <Box sx={{ display: "flex", padding: "20px" }}>
        {/* ====================== */}
        {/*  1. ÍNDICE DE NAVEGACIÓN */}
        {/* ====================== */}
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
              <Link href="#almacenes" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Almacenes" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#categoria-productos" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Categoría de Productos" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#atributos-producto" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Atributos de Producto" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#centros-costo" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Centros de Costo" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#unidades-medida" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Unidades de Medida" />
              </Link>
            </ListItem>
          </List>
        </Box>

        {/* ====================== */}
        {/*  2. CONTENIDO DETALLADO */}
        {/* ====================== */}
        <Box sx={{ flex: 3, overflowY: "auto", paddingLeft: "20px" }}>
          {/* Título principal */}
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            ¿Qué es la Sección de <em>Catálogos</em> en Balaxys?
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En Balaxys ERP, la sección de <strong>Catálogos</strong> agrupa todos los
            “nomencladores” y listados básicos que utilizan múltiples módulos del sistema.
            Aquí podrás definir y gestionar los elementos maestros que alimentan tu flujo
            completo de ventas, compras, inventario y contabilidad. Cada elemento de Catálogos
            funciona como fuente de datos centralizada, asegurando consistencia y evitando
            duplicidades.
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Las principales subsecciones de Catálogos incluyen:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Almacenes:</strong> Define las ubicaciones físicas donde almacenas mercancía.</li>
              <li><strong>Categoría de Productos:</strong> Crea jerarquías para clasificar productos en familias y subfamilias.</li>
              <li><strong>Atributos de Producto:</strong> Configura variantes como color, talla o material para tus productos.</li>
              <li><strong>Centros de Costo:</strong> Asigna costos y gastos a áreas específicas de tu operación (por ejemplo, Administración, Ventas).</li>
              <li><strong>Unidades de Medida:</strong> Establece el sistema de medición de tus productos (unidades, kilogramos, litros, etc.).</li>
            </ul>
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />

          {/* --------------------------- */}
          {/* SECCIÓN: Almacenes         */}
          {/* --------------------------- */}
          <section id="almacenes">
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
              Almacenes
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              La subsección de <strong>Almacenes</strong> te permite crear y gestionar todas las
              ubicaciones físicas o virtuales donde almacenas inventario. Cada almacén define:
              <ul style={{ marginLeft: "20px" }}>
                <li>Un nombre descriptivo (por ejemplo, “Principal”, “Bodega Norte”).</li>
                <li>Dirección física (si aplica) y referencias para identificar su localización.</li>
                <li>Capacidad o límites de stock, si necesitas controlar aforos.</li>
              </ul>
              Luego, al crear facturas, ajustes o vales de salida, siempre seleccionarás uno de los
              almacenes configurados. Esto asegura que los movimientos de stock estén correctamente
              asignados al lugar correspondiente.
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Para acceder a esta funcionalidad:
              <ul style={{ marginLeft: "20px" }}>
                <li>Navega a <strong>Catálogos → Almacenes</strong> en el menú lateral.</li>
                <li>Haz clic en el botón <em>“Nuevo almacén”</em> para abrir el formulario.</li>
                <li>Completa los datos obligatorios (<strong>Nombre</strong>, <strong>Ubicación</strong>).</li>
                <li>Guarda para que el almacén quede disponible en todo el sistema de inventario y ventas.</li>
              </ul>
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/* --------------------------- */}
          {/* SECCIÓN: Categoría Productos */}
          {/* --------------------------- */}
          <section id="categoria-productos">
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
              Categoría de Productos
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Las <strong>Categorías de Productos</strong> te ayudan a organizar tu catálogo de artículo
              mediante clasificación jerárquica. Cada categoría puede tener:
              <ul style={{ marginLeft: "20px" }}>
                <li>Un código alfanumérico único.</li>
                <li>Un nombre descriptivo (por ejemplo, “10 - Camisas”, “20 - Pantalones”).</li>
                <li>Subcategorías anidadas que heredan la familia principal (e.g., “10.01 - Manga Corta”).</li>
              </ul>
              Esta estructura es vital para filtrar productos en listados, construir informes de ventas
              y exportar datos. Además, facilita la navegación rápida cuando necesitas encontrar un
              producto específico.
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Para definir categorías:
              <ul style={{ marginLeft: "20px" }}>
                <li>Dirígete a <strong>Catálogos → Categoría de productos</strong>.</li>
                <li>Pulsa <em>“Nueva categoría”</em> para abrir el modal.</li>
                <li>Ingresa el <strong>Código</strong>, <strong>Nombre</strong> y, opcionalmente,
                  agrega <strong>Subcategorías</strong>.</li>
                <li>Guarda para que las categorías estén disponibles al crear productos o al generar
                  reportes.</li>
              </ul>
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/* --------------------------- */}
          {/* SECCIÓN: Atributos Producto */}
          {/* --------------------------- */}
          <section id="atributos-producto">
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
              Atributos de Producto
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Los <strong>Atributos de Producto</strong> definen variantes o características adicionales
              para tus artículos. Por ejemplo, color, talla, material o estilo. Al configurar atributos,
              puedes:
              <ul style={{ marginLeft: "20px" }}>
                <li>Crear un nuevo atributo (por ejemplo, “Color”) con sus posibles valores (“Rojo”,
                  “Azul”, “Verde”).</li>
                <li>Asignar múltiples valores a un mismo producto para generar SKUs automáticos.</li>
                <li>Filtrar productos en inventario o ventas por atributos específicos.</li>
              </ul>
              El uso de atributos permite detallar mejor tu oferta y facilita la gestión de variantes
              complejas (por ejemplo, camisetas en distintas tallas y colores).
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Para trabajar con atributos:
              <ul style={{ marginLeft: "20px" }}>
                <li>Selecciona <strong>Catálogos → Atributos de producto</strong> en el menú.</li>
                <li>Haz clic en <em>“Nuevo atributo”</em>.</li>
                <li>Define el <strong>Nombre de la Variante</strong> (por ejemplo, “Tamaño”) y agrega
                  <strong>Valores</strong> (“S”, “M”, “L”, etc.).</li>
                <li>Guarda para que este atributo esté disponible al crear o editar un producto y así
                  elegir sus variantes.</li>
              </ul>
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/* --------------------------- */}
          {/* SECCIÓN: Centros de Costo   */}
          {/* --------------------------- */}
          <section id="centros-costo">
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
              Centros de Costo
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Los <strong>Centros de Costo</strong> son estructuras contables que asignan gastos o ingresos
              a diferentes áreas internas (por ejemplo, “Administración”, “Ventas”, “Producción”). Cada
              centro de costo puede tener múltiples <strong>Áreas</strong> (subniveles), como subáreas
              dentro de un departamento.
              <ul style={{ marginLeft: "20px" }}>
                <li>Asignar un código único a cada centro de costo (ej.: “10” para Administración).</li>
                <li>Definir subáreas (ej.: “10.01 - Contabilidad”).</li>
                <li>Utilizar estos centros al crear facturas o pagar gastos para analizar resultados por área.</li>
              </ul>
              Esta funcionalidad es esencial para informes contables y presupuestarios: permite desglosar
              resultados por departamento, comparar gastos previstos frente a reales y facilitar auditorías.
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Para agregar centros de costo:
              <ul style={{ marginLeft: "20px" }}>
                <li>Navega a <strong>Catálogos → Centros de costo</strong>.</li>
                <li>Pulsa <em>“Nuevo centro de costo”</em> y completa el <strong>Código</strong> y
                  <strong>Nombre</strong>.</li>
                <li>Agrega áreas dentro de ese centro (por ejemplo, “10.01 - Contabilidad”).</li>
                <li>Guarda; estos centros estarán disponibles en facturas, presupuestos y reportes contables.</li>
              </ul>
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/* --------------------------- */}
          {/* SECCIÓN: Unidades de Medida */}
          {/* --------------------------- */}
          <section id="unidades-medida">
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
              Unidades de Medida
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Las <strong>Unidades de Medida</strong> definen cómo cuantificas tus productos: metros, kilogramos,
              litros, unidades, etc. Cada unidad de medida tiene:
              <ul style={{ marginLeft: "20px" }}>
                <li>Un <strong>Código corto</strong> (ej.: “kg”, “m”, “L”, “cm”).</li>
                <li>Un <strong>Nombre descriptivo</strong> (ej.: “kilogramo”, “metro”, “litro”).</li>
              </ul>
              Esto garantiza que el inventario, las facturas y los reportes usen medidas consistentes y
              evites errores de conversión. Asimismo, facilita la gestión de productos con distintas
              presentaciones.
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Para configurar unidades:
              <ul style={{ marginLeft: "20px" }}>
                <li>Selecciona <strong>Catálogos → Unidades de medida</strong> en el menú.</li>
                <li>Haz clic en <em>“Nueva unidad de medida”</em>.</li>
                <li>Ingresa el <strong>Código</strong> (por ejemplo “kg”) y el <strong>Nombre</strong> (“kilogramo”).</li>
                <li>Guarda; la unidad estará disponible al crear productos y documentos de inventario.</li>
              </ul>
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/* --------------------------- */}
          {/*  Artículos relacionados    */}
          {/* --------------------------- */}
          <section id="articulos-relacionados">
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
              Artículos Relacionados
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Aquí tienes otros artículos de ayuda relacionados con la gestión de Catálogos:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  <Link
                    component={RouterLink}
                    to="/catalogos/almacenes"
                    sx={{ textDecoration: "none", color: "#1976d2" }}
                  >
                    Gestión de Almacenes
                  </Link>
                </li>
                <li>
                  <Link
                    component={RouterLink}
                    to="/catalogos/categoria-productos"
                    sx={{ textDecoration: "none", color: "#1976d2" }}
                  >
                    Categoría de Productos
                  </Link>
                </li>
                <li>
                  <Link
                    component={RouterLink}
                    to="/catalogos/atributos-producto"
                    sx={{ textDecoration: "none", color: "#1976d2" }}
                  >
                    Atributos de Producto
                  </Link>
                </li>
                <li>
                  <Link
                    component={RouterLink}
                    to="/catalogos/centros-costos"
                    sx={{ textDecoration: "none", color: "#1976d2" }}
                  >
                    Centros de Costo
                  </Link>
                </li>
                <li>
                  <Link
                    component={RouterLink}
                    to="/catalogos/unidades-medida"
                    sx={{ textDecoration: "none", color: "#1976d2" }}
                  >
                    Unidades de Medida
                  </Link>
                </li>
              </ul>
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>
        </Box>
      </Box>
    </>
  );
};

export default QueEsSeccionCatalogos;
