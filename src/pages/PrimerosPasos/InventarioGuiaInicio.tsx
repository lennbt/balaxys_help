// src/pages/Inventario/InventarioGuiaInicio.tsx

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
 * Página de ayuda “Guía de Inicio – Inventario” para Balaxys ERP.
 * Explica los pasos esenciales para gestionar productos, ajustes, vales de salida y devoluciones.
 */
const InventarioGuiaInicio: React.FC = () => {
  return (
    <>
      {/** ================================= **/}
      {/**   HEAD / META (SEO)             **/}
      {/** ================================= **/}
      <Helmet>
        <title>Guía de Inicio Inventario | Balaxys ERP</title>
        <meta
          name="description"
          content="Aprende a crear productos, ajustar stock, emitir vales de salida y devoluciones en el módulo de Inventario de Balaxys ERP."
        />
        <link
          rel="canonical"
          href="https://help.balaxys.com/inventario/inventario-guia-inicio"
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
          aria-label="Índice Inventario Guía Inicio"
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
              <Link
                href="#crear-producto"
                underline="hover"
                color="#1976d2"
              >
                <ListItemText primary="1. Crea un Producto" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#agregar-a-factura"
                underline="hover"
                color="#1976d2"
              >
                <ListItemText primary="2. Agrega un Producto a Factura" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#importar-productos"
                underline="hover"
                color="#1976d2"
              >
                <ListItemText primary="3. Importa tus Productos" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#ajuste-inventario"
                underline="hover"
                color="#1976d2"
              >
                <ListItemText primary="4. Crea un Ajuste de Inventario" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#vale-salida"
                underline="hover"
                color="#1976d2"
              >
                <ListItemText primary="5. Crea un Vale de Salida" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#devolucion-vale"
                underline="hover"
                color="#1976d2"
              >
                <ListItemText primary="6. Crea Nueva Devolución de Vale" />
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
          {/** SECCIÓN 1: Crea un Producto                  **/}
          {/** ------------------------------------------- **/}
          <section id="crear-producto">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              1. Crea un Producto
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              En Balaxys ERP, todo comienza con el registro de tus productos o servicios
              en el módulo de Inventario. Sigue estos pasos:
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify", marginLeft: "20px" }}
            >
              1. En la barra lateral, expande <strong>Inventario &gt; Productos y servicios</strong>.
              Haz clic en “+ Nuevo producto” encima del listado:
            </Typography>
            <Box
              component="img"
              src="/assets/img/inventario_crear_producto_1.png"
              alt="Botón Nuevo Producto"
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
              2. En el modal “Nuevo producto”, completa los <strong>Datos Generales</strong> obligatorios:
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>Nombre del producto *:</strong> Descripción clara del artículo.</li>
                <li><strong>SKU *:</strong> Código único para identificarlo en el sistema.</li>
                <li><strong>Fecha entrada *:</strong> Fecha en que agregas el producto al inventario.</li>
                <li><strong>Precio *:</strong> Precio de venta recomendado.</li>
                <li><strong>Costo *:</strong> Costo de adquisición para control de márgenes.</li>
                <li><strong>UM *:</strong> Unidad de medida (unidad, kg, litro, etc.).</li>
                <li>
                  <strong>Es servicio:</strong> Marca si es un servicio en lugar de un artículo‐físico.
                </li>
              </ul>
            </Typography>
            <Box
              component="img"
              src="/assets/img/inventario_crear_producto_2.png"
              alt="Formulario Nuevo Producto"
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
              3. (Opcional) Expande “Opciones avanzadas” para asignar:
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>Categoría:</strong> Agrupa artículos similares.</li>
                <li><strong>Subcategoría:</strong> Si aplica, para clasificar más en detalle.</li>
                <li><strong>Centro de costo:</strong> Para asociarlo a un proyecto o departamento.</li>
                <li><strong>Moneda alternativa:</strong> Si manejas múltiples divisas.</li>
                <li><strong>Stock mínimo:</strong> Umbral de reposición automática.</li>
              </ul>
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              4. (Opcional) En “Información medioambiental”, registra:
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>Huella de carbono:</strong> SI o NO, con detalle si lo deseas.</li>
                <li><strong>Material principal:</strong> Tipo de material para análisis EHS.</li>
                <li><strong>Certificaciones:</strong> Etiquetas ecológicas o de calidad.</li>
              </ul>
            </Typography>
            <Box
              component="img"
              src="/assets/img/inventario_crear_producto_3.png"
              alt="Sección Información Medioambiental"
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
              5. Haz clic en “Guardar” para que el producto se agregue inmediatamente
              a tu inventario. Verás la nueva línea en el listado de “Productos y servicios”.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/** ---------------------------------------------------------- **/}
          {/** SECCIÓN 2: Agrega un Producto a Factura de Venta/Compra     **/}
          {/** ---------------------------------------------------------- **/}
          <section id="agregar-a-factura">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              2. Agrega un Producto a Factura de Venta o de Compra
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Una vez creado, el producto está disponible para cualquier documento
              (venta o compra). Te mostramos cómo agregarlo en cada caso:
            </Typography>

            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              2.1. En una Factura de Venta
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify", marginLeft: "20px" }}
            >
              1. Ve a <strong>Clientes &gt; Crear factura de venta</strong> y abre el modal
              de nueva factura.
            </Typography>
            <Box
              component="img"
              src="/assets/img/inventario_agregar_venta_1.png"
              alt="Factura de Venta en Inventario"
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
              2. En la tabla de detalle, en la columna “Código *”, despliega el selector
              y busca el producto por nombre o SKU.  
              Al seleccionarlo, se completan automáticamente:
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>Descripción:</strong> Título del producto.</li>
                <li><strong>U.M:</strong> Unidad de medida en modo solo lectura.</li>
                <li><strong>Disponibilidad:</strong> Stock actual en el almacén seleccionado.</li>
                <li><strong>Precio unitario:</strong> Precio que definiste al crearlo.</li>
              </ul>
            </Typography>
            <Box
              component="img"
              src="/assets/img/inventario_agregar_venta_2.png"
              alt="Agregar producto a factura de venta"
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
              3. Ajusta la <strong>Cantidad *</strong> que deseas facturar.
              El <strong>Importe</strong> se calcula automáticamente multiplicando
              Cantidad × Precio × (1 + IVA/100).
            </Typography>

            <Divider sx={{ margin: "16px 0" }} />

            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              2.2. En una Factura de Compra
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify", marginLeft: "20px" }}
            >
              1. Ingresa a <strong>Proveedores &gt; Crear factura de compra</strong> y abre
              el modal de nueva factura de compra.
            </Typography>
            <Box
              component="img"
              src="/assets/img/inventario_agregar_compra_1.png"
              alt="Factura de Compra en Inventario"
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
              2. En la sección de detalle, elige tu producto desde “Código *”.
              Automáticamente se completarán:
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>Descripción:</strong> Nombre del artículo.</li>
                <li><strong>U.M:</strong> Unidad de medida.</li>
                <li><strong>Existencia:</strong> Stock actual en el almacén seleccionado.</li>
                <li><strong>Costo unitario:</strong> Costo previamente registrado.</li>
                <li><strong>IVA:</strong> Porcentaje, si aplica.</li>
              </ul>
            </Typography>
            <Box
              component="img"
              src="/assets/img/inventario_agregar_compra_2.png"
              alt="Agregar producto a factura de compra"
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
              3. Ingresa la <strong>Cantidad *</strong> que estás recibiendo y verifica el
              <strong>Nuevo importe</strong>. Pulsa “Guardar y Confirmar” para actualizar stock
              e ingresar el gasto en contabilidad.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/** ------------------------------------------- **/}
          {/** SECCIÓN 3: Importa tus Productos            **/}
          {/** ------------------------------------------- **/}
          <section id="importar-productos">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              3. Importa tus Productos a Balaxys
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Si ya tienes tu catálogo en Excel (CSV, XLS, XLSX), puedes importarlo masivamente:
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify", marginLeft: "20px" }}
            >
              1. Dentro de <strong>Inventario &gt; Productos y servicios</strong>, haz clic en
              el icono ⋮ (menú de tres puntos) en la esquina superior derecha del listado.
              Selecciona “Importar desde Excel”:
            </Typography>
            <Box
              component="img"
              src="/assets/img/inventario_importar_1.png"
              alt="Opción Importar Productos"
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
              2. Descarga la <strong>plantilla de importación</strong> y completa cada fila
              con los campos obligatorios: Nombre, SKU, Precio, Costo, UM.
            </Typography>
            <Box
              component="img"
              src="/assets/img/inventario_importar_2.png"
              alt="Plantilla Excel Productos"
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
              3. Sube el archivo completado, revisa las columnas mapeadas y haz clic en
              “Importar”. Balaxys validará los datos y cargará los productos automáticamente
              en tu inventario.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/** ------------------------------------------------ **/}
          {/** SECCIÓN 4: Crea un Ajuste de Inventario           **/}
          {/** ------------------------------------------------ **/}
          <section id="ajuste-inventario">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              4. Crea un Ajuste de Inventario
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Si necesitas corregir cantidades o costos de tus productos, utiliza la
              función de ajuste de inventario:
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify", marginLeft: "20px" }}
            >
              1. Ve a <strong>Inventario &gt; Ajustes</strong> y haz clic en “+ Nuevo ajuste”:
            </Typography>
            <Box
              component="img"
              src="/assets/img/inventario_ajuste_1.png"
              alt="Listado Ajustes de Inventario"
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
              2. En el modal “Nuevo ajuste de inventario”, selecciona:
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>Almacén *:</strong> Elige la ubicación que vas a ajustar.</li>
                <li>
                  <strong>Fecha emisión *</strong> y <strong>Fecha confirmación *</strong>:
                  Deben corresponder al periodo contable abierto.
                </li>
                <li><strong>Centro de costo:</strong> Opcional, para imputar un departamento.</li>
                <li><strong>Tipo de ajuste *:</strong> Cantidad (solo unidades) o Precio (solo costo unitario).</li>
              </ul>
            </Typography>
            <Box
              component="img"
              src="/assets/img/inventario_ajuste_2.png"
              alt="Formulario Ajuste de Inventario"
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
              3. Haz clic en “Agregar producto” para sumar una línea de ajuste:
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>Código *:</strong> Selecciona el producto que requiera corrección.</li>
                <li><strong>Descripción:</strong> Se completa automáticamente.</li>
                <li><strong>U.M:</strong> Unidad de medida en modo solo lectura.</li>
                <li><strong>Existencia:</strong> Stock actual en el almacén (solo lectura).</li>
                <li><strong>Costo:</strong> Costo unitario vigente (solo lectura si es ajuste por cantidad).</li>
                <li><strong>Nueva Cantidad:</strong> Ingresa la cantidad correctiva reteniendo stock.</li>
                <li><strong>Nuevo Importe:</strong> Si hicieras ajuste por precio, calcula automáticamente Costo × Existencia revisada.</li>
                <li><strong>Ajuste:</strong> Diferencia entre nueva y antigua cantidad (o costo).</li>
              </ul>
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              4. Agrega más productos si es necesario y escribe una nota de respaldo.
              Verifica el “Ajuste total” en la parte inferior derecha.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              5. Haz clic en “Guardar y Confirmar” para aplicar los cambios de forma
              permanente y generar el asiento contable correspondiente.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/** ------------------------------------------------ **/}
          {/** SECCIÓN 5: Crea un Vale de Salida de Inventario     **/}
          {/** ------------------------------------------------ **/}
          <section id="vale-salida">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              5. Crea un Vale de Salida de Inventario
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Un vale de salida registra la entrega de stock hacia un destino interno
              (proyecto, sucursal, departamento). Procede así:
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify", marginLeft: "20px" }}
            >
              1. En <strong>Inventario &gt; Vales de salida</strong>, haz clic en “+ Nuevo vale de salida”:
            </Typography>
            <Box
              component="img"
              src="/assets/img/inventario_vale_salida_1.png"
              alt="Listado Vales de Salida"
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
              2. En el modal “Nuevo vale de salida”, completa:
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>Almacén *:</strong> Origen del stock (ej. “Principal”).</li>
                <li><strong>Centro de costo:</strong> Opcional, para imputar el movimiento.</li>
                <li><strong>Área de responsabilidad:</strong> User responsable del stock.</li>
                <li><strong>Destino *:</strong> Selecciona el destino interno (ej. “Oficina”, “Tienda B”).</li>
                <li>
                  <strong>Fecha emisión *:</strong> Fecha de salida.
                  Debe coincidir con un periodo contable abierto.
                </li>
                <li><strong>Fecha confirmación *:</strong> Fecha en que realmente se entrega el stock.</li>
              </ul>
            </Typography>
            <Box
              component="img"
              src="/assets/img/inventario_vale_salida_2.png"
              alt="Formulario Vale de Salida"
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
              3. Haz clic en “Agregar producto”:
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>Código *:</strong> Elige el producto a entregar.</li>
                <li><strong>Descripción:</strong> Se autocompleta.</li>
                <li><strong>U.M:</strong> Unidad de medida (solo lectura).</li>
                <li><strong>Existencia:</strong> Stock actual antes de salida (solo lectura).</li>
                <li><strong>Costo unitario:</strong> Costo vigente (solo lectura).</li>
                <li><strong>Cantidad *:</strong> Cantidad que vas a mover fuera del almacén.</li>
                <li><strong>Importe:</strong> Calculado automáticamente (Cantidad × Costo unitario).</li>
                <li><strong>Ajuste:</strong> Actualiza el stock automáticamente al confirmar.</li>
              </ul>
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              4. Agrega tantas filas como productos necesites entregar y, cuando termines,
              haz clic en “Guardar y Confirmar”. El stock disminuirá y se generará asiento
              contable.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/** ------------------------------------------------ **/}
          {/** SECCIÓN 6: Crea Nueva Devolución de Vale           **/}
          {/** ------------------------------------------------ **/}
          <section id="devolucion-vale">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              6. Crea Nueva Devolución de Vale
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Si necesitas regresar stock previamente entregado (vale de salida), utiliza
              la función de devolución de vale:
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify", marginLeft: "20px" }}
            >
              1. Navega a <strong>Inventario &gt; Devolución vales de salida</strong>. Haz clic
              en “+ Nueva devolución de vale”:
            </Typography>
            <Box
              component="img"
              src="/assets/img/inventario_devolucion_vale_1.png"
              alt="Listado Devolución de Vales"
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
              2. En el modal “Nueva devolución de vale”, completa:
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>Centro de costo:</strong> Opcional, para imputar un proyecto o área.</li>
                <li><strong>Fecha emisión *:</strong> Fecha en que registras la devolución.</li>
                <li><strong>Fecha confirmación *:</strong> Fecha real de retorno del stock.</li>
                <li><strong>Devolución de *:</strong> Selecciona si la devolución será por Cantidad o por Precio.</li>
              </ul>
              Nota: Para buscar el vale original, primero elige <strong>Almacén</strong>, luego <strong>Año</strong> y finalmente ingresa el número del Vale de Salida. Presiona la lupa para cargar la fila de detalle original.
            </Typography>
            <Box
              component="img"
              src="/assets/img/inventario_devolucion_vale_2.png"
              alt="Formulario Devolución de Vale"
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
              3. Una vez cargado el detalle, podrás ajustar:
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>Cantidad a devolver:</strong> Ingresa la cantidad de unidades a retornar.</li>
                <li><strong>Precio unitario:</strong> Se autocompleta desde el vale originario.</li>
                <li><strong>Importe:</strong> Calculado automáticamente según la cantidad devuelta × precio.</li>
              </ul>
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              4. Agrega una nota descriptiva, si lo deseas, y haz clic en “Guardar y Confirmar” para
              asentar el movimiento contable inverso y aumentar nuevamente el stock.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>
        </Box>
      </Box>
    </>
  );
};

export default InventarioGuiaInicio;
