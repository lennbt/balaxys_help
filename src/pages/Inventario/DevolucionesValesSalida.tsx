// src/pages/Inventario/DevolucionesValesSalidaAyuda.tsx

import React from "react";
import { Box, Typography, List, ListItem, Link, Divider } from "@mui/material";
import { Helmet } from "react-helmet-async";

/**
 * Página de ayuda: Devoluciones de Vales de Salida
 * 
 * Explica al usuario cómo realizar una devolución de un vale de salida
 * en Balaxys ERP, describiendo los pasos y los campos principales del formulario
 * sin usar diseño en tablas, sino en listas de puntos. Incluye secciones de FAQ
 * y enlaces a contenido relacionado.
 */
const DevolucionesValesSalidaAyuda: React.FC = () => {
  return (
    <>
      {/* ============================================= */}
      {/* 0. META PARA SEO */}
      {/* ============================================= */}
      <Helmet>
        <title>Cómo Hacer Devoluciones de Vales de Salida | Balaxys ERP</title>
        <meta
          name="description"
          content="Aprende paso a paso a realizar devoluciones de vales de salida en Balaxys ERP. Actualiza inventario, regenera comprobantes contables y controla tus devoluciones de mercancías."
        />
      </Helmet>

      <Box sx={{ display: "flex", padding: "20px" }}>
        {/* ============================================= */}
        {/* 1. ÍNDICE DE CONTENIDO */}
        {/* ============================================= */}
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
              <Link href="#introduccion" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItem>Introducción</ListItem>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#pasos-devolucion" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItem>Pasos para realizar una devolución</ListItem>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#campos-formulario" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItem>Campos principales del formulario</ListItem>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#confirmar-anular" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItem>Confirmar / Anular devolución</ListItem>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#preguntas-frecuentes" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItem>Preguntas frecuentes</ListItem>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#contenido-relacionado" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItem>Contenido relacionado</ListItem>
              </Link>
            </ListItem>
          </List>
        </Box>

        {/* ============================================= */}
        {/* 2. CONTENIDO PRINCIPAL */}
        {/* ============================================= */}
        <Box sx={{ flex: 3, overflowY: "auto", paddingLeft: "20px" }}>
          {/* ---------- SECCIÓN: Introducción ---------- */}
          <section id="introduccion">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 700, marginBottom: "8px" }}
            >
              Devoluciones de Vales de Salida
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              En Balaxys ERP, la funcionalidad de “Devolución de Vales de Salida” permite
              revertir los movimientos de inventario generados por vales previamente confirmados.
              Al procesar una devolución, el sistema:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  Actualiza automáticamente las existencias de inventario en el almacén correspondiente.
                </li>
                <li>
                  Genera el asiento contable inverso, manteniendo el Submayor de Cuentas por Pagar y
                  el control de costos al día.
                </li>
                <li>
                  Verifica que la cantidad o el valor a devolver no supere lo original del documento
                  primario (factura, recepción o vale de salida).
                </li>
              </ul>
              Es fundamental entender que una vez confirmado el vale de devolución, no se puede modificar ni anular.
            </Typography>
          </section>
          <Divider sx={{ margin: "16px 0" }} />

          {/* ------ SECCIÓN: Pasos para realizar devolución ------ */}
          <section id="pasos-devolucion">
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
              Pasos para realizar una devolución
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Para devolver mercancía mediante un vale en Balaxys, sigue estos pasos:
            </Typography>
            <Typography component="div" variant="body1" sx={{ marginLeft: "20px" }}>
              1. En la <strong>barra lateral</strong>, selecciona la opción <em>“Inventario”</em> → <em>“Devolución de Vales de Salida”</em>.<br />
              2. Elige el <strong>almacén</strong> en el que deseas registrar la devolución.<br />
              3. Define el <strong>Tipo de Documento</strong> como “Vale de Salida”.<br />
              4. Selecciona si la devolución es por <strong>Cantidad</strong> o por <strong>Precio</strong>.<br />
              5. Ingresa el <strong>número de vale</strong> y el <strong>año</strong> correspondiente del documento original, y presiona Enter para buscarlo.<br />
              6. Cuando aparezca el detalle del vale, revisa:
              <ul style={{ marginLeft: "20px" }}>
                <li>El <strong>código y descripción</strong> de cada producto.</li>
                <li>La <strong>unidad de medida</strong> y la <strong>cantidad original</strong>.</li>
                <li>La <strong>cantidad a devolver</strong> (en caso de devolución por cantidad).</li>
                <li>El <strong>precio original</strong> y el <strong>nuevo valor</strong> (en caso de devolución por valor).</li>
              </ul>
              7. Revisa que el <strong>importe total</strong> de la devolución sea correcto.<br />
              8. Si todo es correcto, haz clic en el botón <em>“Guardar”</em> para registrar la devolución en estado “Pendiente”.<br />
            </Typography>
          </section>
          <Divider sx={{ margin: "16px 0" }} />

          {/* ---- SECCIÓN: Campos principales del formulario ---- */}
          <section id="campos-formulario">
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
              Campos principales del formulario
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              A continuación se describen los campos más importantes que encontrarás en el formulario de “Nueva devolución de vale”:
            </Typography>
            <Typography component="div" variant="body1" sx={{ marginLeft: "20px" }}>
              • <strong>Centro de costo:</strong> Desplegable donde eliges el centro de costo al que se imputará esta devolución.<br /><br />
              • <strong>Fecha emisión:</strong> Selector de fecha obligatorio. Debe coincidir con el período contable en curso; de lo contrario, mostrará un error.<br /><br />
              • <strong>Fecha confirmación:</strong> Fecha en la que efectivamente confirmas la devolución. Inicialmente se sugiere la misma que la fecha de emisión.<br /><br />
              • <strong>Tipo de devolución:</strong> Opción donde indicas si la devolución es <em>por Cantidad</em> o <em>por Precio</em>.<br /><br />
              • <strong>Almacén:</strong> Desplegable para escoger el almacén origen del vale que se devuelve.<br /><br />
              • <strong>Año:</strong> Desplegable para seleccionar el año de emisión del vale original.<br /><br />
              • <strong>Documento:</strong> Campo de texto donde escribes el número de vale (por ejemplo, “VS-5/2025”). Presiona Enter para realizar la búsqueda.<br /><br />
              • <strong>Botón de búsqueda (lupa):</strong> Una vez ingresado el almacén, año y número, haz clic en la lupa para cargar los datos del vale original.<br /><br />
              Una vez localizado el vale, se muestran columnas (solo lectura):
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>Código:</strong> Código interno del producto.</li>
                <li><strong>Descripción:</strong> Nombre o descripción del producto.</li>
                <li><strong>U.M:</strong> Unidad de medida (unidad, kg, litro).</li>
                <li><strong>Cantidad:</strong> Cantidad original registrada en el vale.</li>
                <li><strong>Precio:</strong> Precio unitario original.</li>
                <li><strong>Cant. devuelta:</strong> Campo editable donde especificas cuántas unidades devuelves.</li>
                <li><strong>Importe:</strong> Se calcula automáticamente como <em>cantidad devuelta × precio (para devoluciones por precio, se muestra el nuevo importe)</em>.</li>
              </ul>
              • <strong>Nota:</strong> Campo de texto libre para agregar comentarios sobre la devolución.<br /><br />
              • <strong>Importe total:</strong> Cuadro informativo que muestra el valor total de la devolución en tiempo real. 
            </Typography>
          </section>
          <Divider sx={{ margin: "16px 0" }} />

          {/* ---- SECCIÓN: Confirmar / Anular devolución ---- */}
          <section id="confirmar-anular">
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
              Confirmar o anular la devolución
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              • Una vez revisado y guardado el borrador de la devolución, haz clic en el botón <strong>“Confirmar”</strong> (ícono de ✔️ en la barra de herramientas).<br /><br />
              • Aparecerá una advertencia que indica que una vez confirmada, la devolución no se puede modificar ni anular. Si todo es correcto, selecciona <strong>“Aceptar”</strong> para completar el proceso.<br /><br />
              • Si el vale original fue cobrado o pagado, al confirmar la devolución Balaxys genera automáticamente la cancelación contable correspondiente.<br /><br />
              • Si deseas anular una devolución que aún no esté confirmada, haz clic en el botón <strong>“Anular”</strong> (ícono de 🗑️). El sistema mostrará una advertencia y, si confirmas de nuevo, el documento se marcará como “Anulado” y no se tendrá en cuenta para cálculos posteriores.<br /><br />
              • Una vez confirmado, el vale de devolución se registra en el inventario del almacén y se genera el asiento contable inverso de forma automática. Ya no se podrá anular.
            </Typography>
          </section>
          <Divider sx={{ margin: "16px 0" }} />

          {/* ---- SECCIÓN: Preguntas frecuentes ---- */}
          <section id="preguntas-frecuentes">
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
              Preguntas frecuentes
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px", marginTop: "12px" }}>
              ¿Puedo devolver parte del vale original y no todo?
            </Typography>
            <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
              Sí. Al buscar el vale en el formulario, la columna “Cant. devuelta” te permite especificar la cantidad parcial a devolver. El sistema calcula el importe proporcional.
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px", marginTop: "12px" }}>
              ¿Qué sucede si intento devolver más cantidad de la original?
            </Typography>
            <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
              El sistema validará que la cantidad a devolver no exceda la cantidad registrada en el vale original. Si ingresas un valor superior, aparecerá un mensaje de error y no podrás guardar hasta corregirlo.
            </Typography>

            <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px", marginTop: "12px" }}>
              ¿Puedo anular un vale de devolución confirmado?
            </Typography>
            <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
              No. Una vez confirmado, el vale de devolución queda protegido y ya no permite modificaciones ni anulaciones. Si requieres revertir esta acción, debes registrar un nuevo vale de salida o un ajuste manual.
            </Typography>
          </section>
          <Divider sx={{ margin: "16px 0" }} />

          {/* ---- SECCIÓN: Contenido relacionado ---- */}
          <section id="contenido-relacionado">
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
              Contenido relacionado
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              A continuación encontrarás enlaces a guías adicionales que te ayudarán a profundizar en la gestión de inventario en Balaxys:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  <Link href="/inventario/vales-salida" sx={{ textDecoration: "none", color: "#1976d2" }}>
                    Vales de Salida
                  </Link>
                </li>
                <li>
                  <Link href="/inventario/ajustes-inventario" sx={{ textDecoration: "none", color: "#1976d2" }}>
                    Ajustes de Inventario
                  </Link>
                </li>
                <li>
                  <Link href="/inventario/productos" sx={{ textDecoration: "none", color: "#1976d2" }}>
                    Productos y Servicios
                  </Link>
                </li>
                <li>
                  <Link href="/contabilidad/libro-diario" sx={{ textDecoration: "none", color: "#1976d2" }}>
                    Libro Diario (Asientos Contables)
                  </Link>
                </li>
              </ul>
            </Typography>
          </section>
        </Box>
      </Box>
    </>
  );
};

export default DevolucionesValesSalidaAyuda;
