// src/pages/Inventario/AjusteInventario.tsx
import {  ListItemText } from "@mui/material";




import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Box,
  Typography,
  List,
  ListItem,
  Link as MuiLink,
  Divider,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

/**
 * Página de ayuda para Ajustes de Inventario en Balaxys ERP.
 * Incluye meta SEO para optimizar su indexación.
 */
const AjusteInventario: React.FC = () => {
  return (
    <>
      {/* ======================================= */}
      {/* META SEO */}
      {/* ======================================= */}
      <Helmet>
        <title>Ajustes de Inventario | Balaxys ERP</title>
        <meta
          name="description"
          content="Aprende a crear, modificar y gestionar Ajustes de Inventario en Balaxys ERP. Actualiza existencias por mermas, roturas, faltantes o sobrantes en conteos físicos."
        />
        <link rel="canonical" href="https://help.balaxys.com/inventario/ajustes-inventario" />
      </Helmet>

      {/* ======================================= */}
      {/* 1. CONTENEDOR PRINCIPAL */}
      {/* ======================================= */}
      <Box sx={{ display: "flex", padding: "20px" }}>
        {/* ======================================= */}
        {/* 1. ÍNDICE DE NAVEGACIÓN LATERAL */}
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
              <Link href="#operaciones" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="¿Qué son los Ajustes?" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#pasos" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Pasos para realizar un Ajuste" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#campos" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Campos principales del formulario" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#confirmar" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Confirmar o Anular Ajuste" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#preguntas" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Preguntas Frecuentes" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#relacionados" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Contenido Relacionado" />
              </Link>
            </ListItem>
          </List>
        </Box>

        {/* ======================================= */}
        {/* 2. CONTENIDO PRINCIPAL */}
        {/* ======================================= */}
        <Box sx={{ flex: 3, overflowY: "auto", paddingLeft: "20px" }}>
          {/* ----------------------------- */}
          {/* SECCIÓN: Introducción        */}
          {/* ----------------------------- */}
          <section id="introduccion">
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Ajustes de Inventario en Balaxys ERP
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Los ajustes de inventario son operaciones que se realizan para actualizar las
              existencias en Balaxys ERP ante mermas, roturas, faltantes o sobrantes
              detectados en conteos físicos u otras causas. A través de este módulo de
              Inventario, podrás:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  Crear un nuevo ajuste para corregir cantidades o valores de productos.
                </li>
                <li>Editar ajustes previamente registrados, si aún no están confirmados.</li>
                <li>Buscar ajustes existentes y visualizar sus datos detallados.</li>
                <li>
                  Imprimir o exportar el documento de ajuste para control físico o auditoría.
                </li>
              </ul>
            </Typography>
          </section>
          <Divider sx={{ margin: "16px 0" }} />

          {/* -------------------------------- */}
          {/* SECCIÓN: ¿Qué son los Ajustes?  */}
          {/* -------------------------------- */}
          <section id="operaciones">
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
              ¿Qué son los Ajustes de Inventario?
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Un ajuste de inventario es un documento que refleja las variaciones
              físicas o monetarias en las existencias de un almacén. Estas variaciones
              pueden originarse por:
            </Typography>
            <Typography variant="body1" component="div" sx={{ marginLeft: "20px" }}>
              <ul>
                <li>
                  <strong>Mermas o roturas:</strong> Productos dañados, caducados o
                  inutilizables.
                </li>
                <li>
                  <strong>Faltantes o sobrantes:</strong> Discrepancias entre conteos
                  físicos y el registro teórico.
                </li>
                <li>
                  <strong>Diferencias de valoración:</strong> Cambios en el costo unitario
                  que requieren actualizar el importe total en inventario.
                </li>
                <li>
                  <strong>Entradas no registradas:</strong> Productos que ingresaron
                  físicamente pero no fueron documentados correctamente.
                </li>
              </ul>
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Al confirmar un ajuste, Balaxys actualiza automáticamente:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  El saldo de existencias en el almacén seleccionado.
                </li>
                <li>
                  La cuenta contable correspondiente (genera asiento automático).
                </li>
              </ul>
              Una vez confirmado, el ajuste no puede modificarse ni anularse.
            </Typography>
          </section>
          <Divider sx={{ margin: "16px 0" }} />

          {/* ------------------------------- */}
          {/* SECCIÓN: Pasos para realizar un Ajuste */}
          {/* ------------------------------- */}
          <section id="pasos">
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
              Pasos para realizar un Ajuste de Inventario
            </Typography>
            <Typography variant="body1" component="div" sx={{ marginLeft: "20px", textAlign: "justify" }}>
              1. En el menú principal de Balaxys, navega a <strong>Inventario → Ajustes</strong>.<br />
              2. Haz clic en el botón <strong>“Nuevo ajuste de inventario”</strong> (esquina superior derecha).<br />
              3. Selecciona el <strong>Almacén</strong> donde se realizará el ajuste.<br />
              4. Completa la <strong>Fecha de emisión</strong> y la <strong>Fecha de confirmación</strong>. Ambas deben corresponder a un período contable abierto.<br />
              5. (Opcional) Elige un <strong>Centro de costo</strong> si deseas asignar este ajuste a un área específica.<br />
              6. Indica el <strong>Tipo de ajuste</strong>: 
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>Cantidad:</strong> Cuando solo varían las unidades físicas.</li>
                <li><strong>Precio:</strong> Cuando la variación corresponde a actualizaciones de costo unitario.</li>
              </ul>
              7. Agrega cada línea de producto haciendo clic en <strong>“Agregar producto”</strong> y selecciona:
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>Código:</strong> Elige el producto registrado.</li>
                <li><strong>Descripción:</strong> Se autocompleta al elegir el código.</li>
                <li><strong>U.M.:</strong> Unidad de medida (solo lectura).</li>
                <li><strong>Existencia:</strong> Cantidad actual en el almacén (solo lectura).</li>
                <li><strong>Costo:</strong> Precio unitario actual (solo lectura).</li>
                <li><strong>Nueva Cantidad:</strong> Ingresa la cantidad física que realmente tienes.</li>
                <li><strong>Nuevo Importe:</strong> Ingresa el nuevo costo total (solo si el tipo de ajuste es Precio).</li>
                <li><strong>Ajuste:</strong> Diferencia calculada automáticamente entre “Existencia” y “Nueva Cantidad” (o entre “Costo” y “Nuevo Importe”).</li>
              </ul>
              8. Revisa en tiempo real los totales en la esquina inferior derecha:
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>Nuevo importe total:</strong> Suma de todos los nuevos importes (solo si es ajuste por precio).</li>
                <li><strong>Ajuste total:</strong> Suma de todas las diferencias (cantidad × costo). </li>
              </ul>
            </Typography>
          </section>
          <Divider sx={{ margin: "16px 0" }} />

          {/* ------------------------------------- */}
          {/* SECCIÓN: Campos principales del formulario */}
          {/* ------------------------------------- */}
          <section id="campos">
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
              Campos principales del formulario
            </Typography>
            <Typography variant="body1" component="div" sx={{ marginLeft: "20px", textAlign: "justify" }}>
              • <strong>Almacén *:</strong> Desplegable con la lista de almacenes disponibles. Obligatorio.<br />
              • <strong>Fecha emisión *:</strong> Selector de fecha que identifica cuándo se emite el ajuste. Debe corresponder a un período contable abierto. Obligatorio.<br />
              • <strong>Fecha confirmación *:</strong> Selector de fecha en que se confirma el ajuste. Inicialmente coincide con la fecha de emisión. Obligatorio.<br />
              • <strong>Centro de costo:</strong> Desplegable opcional para asignar el ajuste a un área o proyecto específico.<br />
              • <strong>Tipo de ajuste:</strong> Radio buttons que definen si la variación es por <em>Cantidad</em> o por <em>Precio</em>. Obligatorio.<br />
              • <strong>Código:</strong> Desplegable en cada fila de producto. Selecciona el producto registrado en Balaxys.<br />
              • <strong>Descripción:</strong> Se completa automáticamente al elegir el código de producto.<br />
              • <strong>U.M:</strong> Unidad de medida (unidad, kg, litro). Solo lectura.<br />
              • <strong>Existencia:</strong> Cantidad actual en stock. Solo lectura.<br />
              • <strong>Costo:</strong> Precio unitario actual. Solo lectura.<br />
              • <strong>Nueva Cantidad:</strong> Cantidad física corregida (solo para ajuste por cantidad).<br />
              • <strong>Nuevo Importe:</strong> Valor corregido total (solo para ajuste por precio).<br />
              • <strong>Ajuste:</strong> Diferencia calculada automáticamente (solo lectura).<br />
              • <strong>Acción (papelera):</strong> Elimina la fila de detalle si se agrega por error.<br />
              • <strong>Nota:</strong> Campo de texto libre para observaciones vinculadas al ajuste.<br />
            </Typography>
          </section>
          <Divider sx={{ margin: "16px 0" }} />

          {/* -------------------------------- */}
          {/* SECCIÓN: Confirmar o Anular Ajuste */}
          {/* -------------------------------- */}
          <section id="confirmar">
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
              Confirmar o Anular Ajuste
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              • <strong>Guardar:</strong> Si todos los datos son correctos, haz clic en “Guardar” para registrar el ajuste en estado <em>Pendiente</em>. Puedes regresar y modificarlo hasta que esté confirmado.<br />
              • <strong>Guardar y Confirmar:</strong> Una vez que estés seguro de que la información es correcta, presiona “Guardar y Confirmar”. En ese momento:
              <ul style={{ marginLeft: "20px" }}>
                <li>Se actualiza el inventario en el almacén seleccionado.</li>
                <li>Se genera automáticamente el asiento contable correspondiente.</li>
                <li>No podrás modificar ni anular este ajuste.</li>
              </ul>
              • <strong>Anular (solo si está pendiente):</strong> Si deseas cancelar un ajuste antes de confirmarlo, haz clic en “Anular”. Aparecerá una advertencia; confirma para eliminar el ajuste de forma lógica (no elimina el registro físicamente, pero deja de considerarse).<br />
              • <strong>Documentos confirmados:</strong> Los ajustes que ya han sido confirmados no pueden anularse.
            </Typography>
          </section>
          <Divider sx={{ margin: "16px 0" }} />

          {/* ------------------------------- */}
          {/* SECCIÓN: Preguntas Frecuentes   */}
          {/* ------------------------------- */}
          <section id="preguntas">
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
              Preguntas Frecuentes
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 600, marginTop: 2 }}>
              ¿Puedo editar un ajuste de inventario después de confirmarlo?
            </Typography>
            <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
              No. Una vez que hayas clicado “Guardar y Confirmar”, Balaxys registra el ajuste y genera el asiento contable, impidiendo modificaciones posteriores. Si necesitas corregir, debes crear un nuevo ajuste que revierta la diferencia.
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 600, marginTop: 2 }}>
              ¿Cómo busco un ajuste anterior?
            </Typography>
            <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
              En la pantalla de “Ajustes” (Inventario → Ajustes), utiliza la barra de búsqueda rápida o los filtros de fecha y almacén para localizar ajustes específicos. También puedes expandir cada fila para ver detalles y asientos contables asociados.
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 600, marginTop: 2 }}>
              ¿Qué pasa si el ajuste afecta negativamente el inventario?
            </Typography>
            <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
              Si el ajuste resulta en una disminución de stock, Balaxys registrará una nota contable de gastos (o contabilidad) y reducirá la existencia en el almacén. Verifica la bitácora para entender el impacto en tus cuentas.
            </Typography>
          </section>
          <Divider sx={{ margin: "16px 0" }} />

          {/* -------------------------------- */}
          {/* SECCIÓN: Contenido Relacionado  */}
          {/* -------------------------------- */}
          <section id="relacionados">
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
              Contenido Relacionado
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Aquí encontrarás enlaces a otras guías y secciones del sistema relacionadas con ajustes de inventario:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  <MuiLink
                    component={RouterLink}
                    to="/inventario/productos"
                    sx={{
                      textDecoration: "none",
                      color: "#1976d2",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Productos y Servicios
                  </MuiLink>
                </li>
                <li>
                  <MuiLink
                    component={RouterLink}
                    to="/inventario/vales-salida"
                    sx={{
                      textDecoration: "none",
                      color: "#1976d2",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Vales de Salida
                  </MuiLink>
                </li>
                <li>
                  <MuiLink
                    component={RouterLink}
                    to="/inventario/devolucion-vale-salida"
                    sx={{
                      textDecoration: "none",
                      color: "#1976d2",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Devoluciones de Vales de Salida
                  </MuiLink>
                </li>
                <li>
                  <MuiLink
                    component={RouterLink}
                    to="/clientes/gestionar-facturas-venta"
                    sx={{
                      textDecoration: "none",
                      color: "#1976d2",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Gestionar Facturas de Venta
                  </MuiLink>
                </li>
                <li>
                  <MuiLink
                    component={RouterLink}
                    to="/clientes/gestionar-facturas-compra"
                    sx={{
                      textDecoration: "none",
                      color: "#1976d2",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Gestionar Facturas de Compra
                  </MuiLink>
                </li>
              </ul>
            </Typography>
          </section>
        </Box>
      </Box>
    </>
  );
};

export default AjusteInventario;
