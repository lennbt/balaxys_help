// src/pages/Proveedores/ComprasGuiaInicio.tsx

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
 * Página de ayuda “Guía de Inicio – Compras” para Balaxys ERP.
 * Acompaña al usuario en los primeros pasos para configurar y registrar
 * recepciones de compras y gastos. Incluye la opción de crear una compra
 * automática desde imagen (OCR).
 */
const ComprasGuiaInicio: React.FC = () => {
  return (
    <>
      {/** ================================= **/}
      {/**   HEAD / META (SEO)             **/}
      {/** ================================= **/}
      <Helmet>
        <title>Guía de Inicio Compras | Balaxys ERP</title>
        <meta
          name="description"
          content="Configura y registra tus compras y gastos en Balaxys ERP: datos del proveedor, métodos de pago, registro manual y OCR desde imagen."
        />
        <link
          rel="canonical"
          href="https://help.balaxys.com/proveedores/compras-guia-inicio"
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
          aria-label="Índice Compras Guía Inicio"
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
                href="#datos-proveedor"
                underline="hover"
                color="#1976d2"
              >
                <ListItemText primary="1. Completa los Datos del Proveedor" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#metodos-pago-gastos"
                underline="hover"
                color="#1976d2"
              >
                <ListItemText primary="2. Métodos de Pago y Categorías de Gasto" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#registro-manual-compra"
                underline="hover"
                color="#1976d2"
              >
                <ListItemText primary="3. Registro Manual de Recepción de Compra" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#registro-ocr-imagen"
                underline="hover"
                color="#1976d2"
              >
                <ListItemText primary="4. Crear Compra desde Imagen (OCR)" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#revisar-y-confirmar"
                underline="hover"
                color="#1976d2"
              >
                <ListItemText primary="5. Revisar y Confirmar Recepción / Gasto" />
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
          {/** =========================================== **/}
          {/** SECCIÓN 1: Completa los Datos del Proveedor **/}
          {/** =========================================== **/}
          <section id="datos-proveedor">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              1. Completa los Datos del Proveedor
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Antes de registrar cualquier compra, debes tener la información básica
              del proveedor cargada en Balaxys ERP:
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify", marginLeft: "20px" }}
            >
              1. Navega a <strong>Proveedores &gt; Gestionar proveedores</strong>.  
              Haz clic en “+ Nuevo proveedor” en la esquina superior derecha:
            </Typography>
            <Box
              component="img"
              src="/assets/img/compras_datos_proveedor_1.png"
              alt="Botón Nuevo Proveedor"
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
              2. Rellena los campos obligatorios:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  <strong>Nombre del Proveedor *:</strong> Razón social o nombre comercial.
                </li>
                <li>
                  <strong>RUT / CUIT / NIF *:</strong> Identificación tributaria según tu país.
                </li>
                <li>
                  <strong>Dirección Fiscal *:</strong> Calle, ciudad y país de la empresa.
                </li>
                <li>
                  <strong>Teléfono / Correo *:</strong> Datos de contacto para tu registro.
                </li>
                <li>
                  <strong>Categoría:</strong> Por ejemplo, “Materia prima”, “Servicios” o “Logística”.
                </li>
              </ul>
            </Typography>
            <Box
              component="img"
              src="/assets/img/compras_datos_proveedor_2.png"
              alt="Formulario Nuevo Proveedor"
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
              3. Haz clic en “Guardar” para que el proveedor quede disponible
              para tus compras y gastos. De esta manera, cada vez que registres
              una factura de compra, podrás seleccionar el proveedor de la lista.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/** =============================================== **/}
          {/** SECCIÓN 2: Métodos de Pago y Categorías de Gasto **/}
          {/** =============================================== **/}
          <section id="metodos-pago-gastos">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              2. Métodos de Pago y Categorías de Gasto
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Para controlar tus pagos y clasificar correctamente los gastos, configura de
              antemano los métodos de pago y las categorías que utilizarás:
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify", marginLeft: "20px" }}
            >
              1. Ve a <strong>Proveedores &gt; Configuración (⋮) &gt; Métodos de Pago</strong>.  
            </Typography>
            <Box
              component="img"
              src="/assets/img/compras_metodos_pago_1.png"
              alt="Listado de Métodos de Pago Compras"
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
              2. Haz clic en “+ Nuevo Método” para agregar formas de pago específicas
              para compras (Transferencia bancaria, Cheque, Tarjeta crédito, etc.).  
              Completa:
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>Nombre *:</strong> Ej. “Transferencia bancaria (Proveedor)”</li>
                <li><strong>Descripción (opcional):</strong> Detalles sobre el método.</li>
              </ul>
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              3. Guarda los cambios para que estos métodos aparezcan en el formulario
              de registro de facturas de compra.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              4. Ahora, configura las <strong>Categorías de Gasto</strong> para clasificar
              tus compras (Materias primas, Servicios, Gastos fijos, etc.).  
              Ingresa a <strong>Proveedores &gt; Configuración (⋮) &gt; Categorías de Gasto</strong>.
            </Typography>
            <Box
              component="img"
              src="/assets/img/compras_categorias_gasto_1.png"
              alt="Listado de Categorías de Gasto"
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
              5. Haz clic en “+ Nueva Categoría” y completa:
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>Nombre *:</strong> Por ejemplo, “Materiales”, “Gastos Operativos”.</li>
                <li><strong>Descripción (opcional):</strong> Información adicional.</li>
              </ul>
              Al guardar, estas categorías estarán disponibles al registrar cada línea
              de tu factura de compra para asignarle el gasto correspondiente.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/** =========================================================== **/}
          {/** SECCIÓN 3: Registro Manual de Recepción de Compra / Gasto  **/}
          {/** =========================================================== **/}
          <section id="registro-manual-compra">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              3. Registro Manual de Recepción de Compra / Gasto
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Para ingresar una factura de compra manualmente desde cero:
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify", marginLeft: "20px" }}
            >
              1. Ingresa a <strong>Proveedores &gt; Facturas de compras</strong>.  
              Haz clic en “+ Nueva factura” en la esquina superior derecha:
            </Typography>
            <Box
              component="img"
              src="/assets/img/compras_nueva_factura_1.png"
              alt="Botón Nueva Factura de Compra"
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
              2. En el modal “Nueva Factura de Compra”, completa en la cabecera:
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>Moneda *:</strong> Por defecto UYU, pero puedes cambiar a USD/EUR si lo requieres.</li>
                <li><strong>Proveedor *:</strong> Selecciona uno de los proveedores que registraste previamente.</li>
                <li><strong>Almacén *:</strong> Ubicación donde ingresa la mercadería (Principal, Secundario).</li>
                <li><strong>Centro de costo:</strong> Opcional, asigna la categoría de gasto o proyecto al que se imputará la compra.</li>
                <li><strong>Número de Factura:</strong> Ingresa el número tal como figura en el documento, o déjalo vacío para que el sistema lo genere automáticamente.</li>
                <li><strong>Fecha emisión *:</strong> Debe corresponder al periodo contable abierto. Si está fuera, aparecerá un mensaje de error.</li>
                <li><strong>Fecha confirmación *:</strong> Fecha en que efectivamente se confirma la recepción del bien o servicio.</li>
              </ul>
            </Typography>
            <Box
              component="img"
              src="/assets/img/compras_formulario_cabecera_1.png"
              alt="Formulario cabecera Factura de Compra"
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
              3. En la sección de detalle de productos / gastos:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  Haz clic en “Agregar producto” para agregar mercadería. Selecciona
                  el <strong>Código *</strong> y luego ingresa la <strong>Cantidad *</strong>,
                  <strong>Costo unitario *</strong> y verifica el <strong>IVA %</strong>.
                </li>
                <li>
                  Si es un gasto (por ejemplo, tarifa de servicio), usa el botón
                  “Agregar fila de gasto” (o similar) para ingresar:
                  <ul style={{ marginLeft: "20px" }}>
                    <li><strong>Cuenta de gasto *</strong>: Selecciona la categoría (e.g., “Servicios”)</li>
                    <li><strong>Descripción *</strong>: Breve descripción del gasto.</li>
                    <li><strong>Importe *</strong>: Monto total del gasto (incluye IVA).</li>
                  </ul>
                </li>
              </ul>
            </Typography>
            <Box
              component="img"
              src="/assets/img/compras_formulario_detalle_1.png"
              alt="Formulario detalle de Factura de Compra"
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
              4. Revisa los campos de “Nota” si deseas agregar observaciones internas,
              y asegúrate de que el <strong>Método de pago</strong> y
              <strong> Condición de pago</strong> (vencimiento) estén correctos.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/** ======================================================= **/}
          {/** SECCIÓN 4: Crear Compra desde Imagen (OCR)             **/}
          {/** ======================================================= **/}
          <section id="registro-ocr-imagen">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              4. Crear Compra desde Imagen (OCR)
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Balaxys ERP incluye una funcionalidad que te permite extraer datos
              automáticamente de una imagen (factura o ticket) mediante OCR:
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify", marginLeft: "20px" }}
            >
              1. Desde <strong>Proveedores &gt; Facturas de compras</strong>, haz clic en la
              flechita junto a “Nueva factura” y selecciona “Subir desde imagen”:
            </Typography>
            <Box
              component="img"
              src="/assets/img/compras_ocr_imagen_1.png"
              alt="Opción Subir desde Imagen OCR"
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
              2. En el diálogo “Nueva factura desde imagen”, haz clic en “Seleccionar archivo”
              y elige el archivo de imagen (JPG, PNG o PDF) que contiene la factura de tu 
              proveedor. El sistema iniciará el análisis OCR:
            </Typography>
            <Box
              component="img"
              src="/assets/img/compras_ocr_imagen_2.png"
              alt="Diálogo Subir Factura desde Imagen"
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
              3. Balaxys extraerá automáticamente:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  <strong>Proveedor:</strong> Si está correcto, se autoseleccionará de tu 
                  lista; si no, podrás buscar manualmente.
                </li>
                <li>
                  <strong>Fecha de emisión y confirmación:</strong> Se rellenan con los 
                  valores extraídos.
                </li>
                <li>
                  <strong>Datos de línea:</strong> Descripciones, cantidades y precios 
                  se extraen como filas de detalle.
                </li>
                <li>
                  <strong>IVA:</strong> Si el OCR detecta el porcentaje de impuesto, se 
                  aplicará automáticamente; en caso contrario, podrás elegirlo manualmente.
                </li>
              </ul>
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              4. Revisa cada campo; corrige cualquier error que el OCR pudiera haber 
              cometido (por ejemplo, conceptos mal interpretados). Una vez validado, 
              haz clic en “Guardar y Confirmar” para registrar la factura directamente 
              en estado “Confirmado”.
            </Typography>
            <Box
              component="img"
              src="/assets/img/compras_ocr_imagen_3.png"
              alt="Edición de datos extraídos por OCR"
              sx={{
                width: "100%",
                borderRadius: "4px",
                marginBottom: "16px",
              }}
            />
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/** ============================================================ **/}
          {/** SECCIÓN 5: Revisar y Confirmar Recepción / Gasto           **/}
          {/** ============================================================ **/}
          <section id="revisar-y-confirmar">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              5. Revisar y Confirmar Recepción / Gasto
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Después de registrar la factura (manual o desde imagen), verás la entrada 
              en el listado de “Facturas de compras”:
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify", marginLeft: "20px" }}
            >
              1. Busca la factura en la lista por <strong>Número</strong>, <strong>Proveedor</strong>
              o <strong>Fecha</strong>.  
            </Typography>
            <Box
              component="img"
              src="/assets/img/compras_listado_revisar_1.png"
              alt="Listado de Facturas de Compras"
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
              2. En la columna “Acciones”, verás íconos para:
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>👁 Ver detalles:</strong> Muestra toda la información completa.</li>
                <li><strong>✏ Editar:</strong> Permite ajustar filas de detalle o cambiar datos de cabecera.</li>
                <li><strong>🗑 Eliminar:</strong> Borra la factura (solo si está en estado “Pendiente”).</li>
                <li><strong>↻ Reenviar:</strong> Genera un PDF para enviar al proveedor si así lo deseas.</li>
              </ul>
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              3. Para confirmar la factura y generar el asiento contable:
              <ul style={{ marginLeft: "20px" }}>
                <li>Cambia el estado de “Pendiente” a “Confirmado” haciendo clic en el botón de confirmación.</li>
                <li>El sistema registrará automáticamente los movimientos en el módulo de Contabilidad.</li>
              </ul>
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              4. Si deseas registrar un gasto sin asociarlo a un producto/almácen,
              puedes usar <strong>Proveedores &gt; Gastos</strong> (submenú de compras).
              El proceso es similar: selecciona proveedor, ingresa fecha y detalle del gasto,
              elige categoría y guarda.  
            </Typography>
            <Box
              component="img"
              src="/assets/img/compras_listado_revisar_2.png"
              alt="Listado de Gastos"
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
              ¡Felicidades! Con estos pasos podrás configurar tu sección de compras
              (proveedores, métodos y categorías), crear facturas de compra manualmente
              o a través de OCR, y confirmar tus recepciones y gastos en Balaxys ERP.
            </Typography>
          </section>
        </Box>
      </Box>
    </>
  );
};

export default ComprasGuiaInicio;
