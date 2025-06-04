// src/pages/Clientes/AyudaPresupuestos.tsx
import React from "react";
import { Box, Typography, List, ListItem, Link, ListItemText, Divider } from "@mui/material";

/**
 * Página de ayuda para la sección "Presupuestos" en Balaxys ERP.
 * Sigue las pautas de interfaz establecidas para la web de ayuda.
 */
const CrearPresupuestos: React.FC = () => {
  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* ============================= */}
      {/* 1. ÍNDICE DE SECCIONES        */}
      {/* ============================= */}
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
              <ListItemText primary="¿Cuándo usar un presupuesto?" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#flujo-principal" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Flujo principal" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#paso-a-paso" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Paso a paso: Crear presupuesto" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#detalle-campos" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Detalles de los campos" />
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

      {/* ============================= */}
      {/* 2. CONTENIDO PRINCIPAL       */}
      {/* ============================= */}
      <Box sx={{ flex: 3, overflowY: "auto", paddingLeft: "20px" }}>
        {/* ----------------------------- */}
        {/* Introducción                 */}
        {/* ----------------------------- */}
        <section id="introduccion">
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            Presupuestos
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            La sección de <strong>Presupuestos</strong> en Balaxys ERP permite generar propuestas de venta antes de emitir una factura definitiva.
            Aquí podrás configurar productos, precios e impuestos, revisar totales y gestionar el ciclo de vida del presupuesto.
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            A continuación encontrarás instrucciones paso a paso para crear, editar, confirmar y convertir presupuestos en facturas,
            utilizando la interfaz de usuario de tu sistema.
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* ¿Cuándo usar un presupuesto? */}
        {/* ----------------------------- */}
        <section id="cuando-usar">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            ¿Cuándo usar un presupuesto?
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Los presupuestos son recomendables cuando:
            <ul style={{ marginLeft: "20px" }}>
              <li>Necesitas presentar una oferta inicial al cliente sin comprometer stock.</li>
              <li>Requieres autorización interna antes de facturar.</li>
              <li>Quisieras comparar diferentes listados de precios o descuentos para el cliente.</li>
              <li>Buscas controlar disponibilidad de productos antes de la venta final.</li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Flujo principal               */}
        {/* ----------------------------- */}
        <section id="flujo-principal">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Flujo principal: Listado y acciones
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            1. Accede desde el menú: <strong>Clientes → Presupuestos</strong>.
          </Typography>
          <Box
            component="img"
            src="/assets/img/presupuestos_listado.png"
            alt="Listado de presupuestos"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            2. La tabla muestra columnas:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Estado:</strong> <em>Pendiente</em>, <em>Confirmado</em> o <em>Anulado</em>.</li>
              <li><strong>Almacén:</strong> Ubicación de origen del presupuesto.</li>
              <li><strong>Fecha confirmación:</strong> Día en que se confirmó.</li>
              <li><strong>Vencimiento:</strong> Fecha límite de validez.</li>
              <li><strong>Número:</strong> ID automático, p.ej. <em>PF-1/2025</em>.</li>
              <li><strong>Cliente:</strong> Nombre del cliente.</li>
              <li><strong>Subtotal</strong>, <strong>IVA</strong> e <strong>Importe total</strong>.</li>
              <li><strong>Acciones:</strong> Íconos para <em>Ver</em>, <em>Confirmar</em>, <em>Anular</em> o <em>Facturar</em>.
              </li>
            </ul>
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            3. Para crear un presupuesto, haz clic en el botón azul <strong>“Nuevo presupuesto”</strong>.
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Paso a paso                   */}
        {/* ----------------------------- */}
        <section id="paso-a-paso">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Paso a paso: Crear un nuevo presupuesto
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            1. Completar la sección de cabecera
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En el modal verás los siguientes campos:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Moneda *:</strong> Selecciona la divisa (UYU, USD, EUR).</li>
              <li><strong>Cliente *:</strong> Elige el cliente de la lista.</li>
              <li><strong>Almacén *:</strong> Escoge la sede de origen.</li>
              <li><strong>Centro de costo:</strong> (opcional) Área contable asociada.</li>
              <li><strong>Número:</strong> ID del presupuesto (autogenera si queda vacío).
              </li>
              <li><strong>Opciones:</strong> Botón para ajustes avanzados (descuentos, retenciones).
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/presupuestos_modal_cabecera.png"
            alt="Formulario Presupuestos: cabecera"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />

          <Typography variant="subtitle1" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            2. Ingresar fechas obligatorias
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            - <strong>Fecha emisión *:</strong> Fecha en formato YYYY-MM-DD.
            <br />
            - <strong>Fecha confirmación *:</strong> Fecha oficial de validación.
            <br />
            - <strong>Fecha vencimiento *:</strong> Fecha límite para aceptación por el cliente.
          </Typography>
          <Box
            component="img"
            src="/assets/img/presupuestos_modal_fechas.png"
            alt="Formulario Presupuestos: fechas"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />

          <Typography variant="subtitle1" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            3. Agregar detalle de productos
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En la tabla de detalle, cada fila incluye:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Código *:</strong> Selecciona el producto (autopuebla descripción, unidad, stock y precio).
              </li>
              <li><strong>Descripción *:</strong> Autocompletada al elegir producto.</li>
              <li><strong>U.M:</strong> Unidad de medida, solo lectura.</li>
              <li><strong>Disponibilidad:</strong> Stock en el almacén.
              </li>
              <li><strong>Cantidad *:</strong> Ingresa la cantidad deseada.
              </li>
              <li><strong>Precio unitario *:</strong> Precio por unidad (editable).</li>
              <li><strong>IVA:</strong> Porcentaje aplicable (0 %, 10 %, 22 %).
              </li>
              <li><strong>Importe:</strong> Calculado automáticamente como cantidad × precio × (1 + IVA/100).
              </li>
              <li><strong>Acciones:</strong> Ícono papelera para eliminar fila.
              </li>
            </ul>
            Haz clic en <strong>“Agregar producto”</strong> para insertar más filas.
          </Typography>
          <Box
            component="img"
            src="/assets/img/presupuestos_modal_detalle.png"
            alt="Formulario Presupuestos: detalle productos"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />

          <Typography variant="subtitle1" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            4. Escribir términos y nota opcional
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            - <strong>Términos y condiciones:</strong> Campo multiline para cláusulas generales del presupuesto.
            <br />
            - <strong>Nota:</strong> Comentarios adicionales específicos.
          </Typography>
          <Box
            component="img"
            src="/assets/img/presupuestos_modal_notas.png"
            alt="Formulario Presupuestos: términos y nota"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />

          <Typography variant="subtitle1" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            5. Revisar resumen de montos
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En la parte derecha del modal, verás:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Subtotal:</strong> Suma de (cantidad × precio unitario) por línea.
              </li>
              <li><strong>IVA total:</strong> Suma de (subtotal línea × IVA/100).
              </li>
              <li><strong>Importe total:</strong> Total final (Subtotal + IVA total).
              </li>
            </ul>
            Asegúrate de que los valores coincidan con lo acordado con el cliente.
          </Typography>
          <Box
            component="img"
            src="/assets/img/presupuestos_modal_totales.png"
            alt="Resumen de montos Presupuestos"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />

          <Typography variant="subtitle1" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            6. Guardar o Guardar y Confirmar
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            - <strong>Cerrar:</strong> Descarta cambios sin guardar.
            <br />
            - <strong>Guardar:</strong> Guarda el presupuesto en estado <em>Pendiente</em>.
            <br />
            - <strong>Guardar y Confirmar:</strong> Cambia el estado a <em>Confirmado</em> y asigna número definitivo.
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Detalles de los campos        */}
        {/* ----------------------------- */}
        <section id="detalle-campos">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Detalles de los campos
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Moneda
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Divisa del presupuesto: <em>UYU</em> (Peso Uruguayo), <em>USD</em> (Dólar) o <em>EUR</em> (Euro).
            Afecta el símbolo y conversión de montos.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Cliente
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Selecciona de la lista el cliente al que se enviará el presupuesto. Se refleja en el historial del cliente.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Almacén
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Define la sede física de emisión. Afecta la disponibilidad mostrada en el detalle.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Centro de costo
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            (Opcional) Área contable para asignar costos internos. Ej: <em>Ventas</em>, <em>Producción</em>.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Número
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Identificador único del presupuesto. Si se deja vacío, el sistema asigna uno correlativo.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Fecha emisión / confirmación / vencimiento
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            - <strong>Fecha emisión:</strong> Fecha en que se crea el presupuesto.
            <br />
            - <strong>Fecha confirmación:</strong> Fecha oficial de validación.
            <br />
            - <strong>Vencimiento:</strong> Fecha límite de validez para el cliente.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Detalle de productos
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Cada fila incluye:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Código:</strong> Identificador interno del producto.</li>
              <li><strong>Descripción:</strong> Nombre del producto.</li>
              <li><strong>U.M:</strong> Unidad de medida (unidad, kg, litro).
              </li>
              <li><strong>Disponibilidad:</strong> Stock actual en el almacén.
              </li>
              <li><strong>Cantidad:</strong> Número de unidades a presupuestar.
              </li>
              <li><strong>Precio unitario:</strong> Valor por unidad (editable si se aplica precio especial).
              </li>
              <li><strong>IVA:</strong> Porcentaje de impuesto aplicable (0 %, 10 %, 22 %).
              </li>
              <li><strong>Importe:</strong> Calculado: cantidad × precio unitario × (1 + IVA/100).
              </li>
            </ul>
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Términos y condiciones / Nota
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            - <strong>Términos y condiciones:</strong> Cláusulas generales aplicables al presupuesto.
            <br />
            - <strong>Nota:</strong> Comentarios específicos (ej.: descuentos especiales, instrucciones).
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Subtotal / IVA total / Importe total
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            - <strong>Subtotal:</strong> Suma de importes base (cantidad × precio unitario).
            <br />
            - <strong>IVA total:</strong> Suma de impuestos por línea (subtotal × IVA/100).
            <br />
            - <strong>Importe total:</strong> Total general (Subtotal + IVA total).
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Ejemplos y capturas            */}
        {/* ----------------------------- */}
        <section id="ejemplos">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Ejemplos y capturas de pantalla
          </Typography>

          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            <strong>Listado de Presupuestos:</strong>
            <br />
            Esta es la vista principal donde aparecen todos los presupuestos registrados:
          </Typography>
          <Box
            component="img"
            src="/assets/img/presupuestos_listado_ejemplo.png"
            alt="Ejemplo listado presupuestos"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />

          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            <strong>Formulario: Cabecera de nuevo presupuesto:</strong>
            <br />
            Completa los campos obligatorios y opcionales para definir la cabecera:
          </Typography>
          <Box
            component="img"
            src="/assets/img/presupuestos_modal_cabecera_ejemplo.png"
            alt="Ejemplo modal cabecera presupuestos"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />

          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            <strong>Formulario: Detalle de productos:</strong>
            <br />
            Agrega líneas de productos con cantidad, precio e IVA:
          </Typography>
          <Box
            component="img"
            src="/assets/img/presupuestos_modal_detalle_ejemplo.png"
            alt="Ejemplo modal detalle presupuestos"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Preguntas frecuentes          */}
        {/* ----------------------------- */}
        <section id="preguntas">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Preguntas frecuentes
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Puedo editar un presupuesto después de confirmarlo?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            No. Una vez confirmado, el presupuesto pasa a estado <em>Confirmado</em> y ya no admite modificaciones.
            Para cambiar algo, anula el presupuesto y crea uno nuevo.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Qué sucede si anulo un presupuesto?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Al anularlo, cambia su estado a <em>Anulado</em> y no puede convertirse en factura. No afecta stock.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Cómo convierto un presupuesto en factura?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            En el listado de presupuestos, al lado del ícono de Ver detalles, haz clic en el ícono de facturar
            (file_copy). El sistema creará una factura nueva con todos los datos del presupuesto.
          </Typography>
        </section>
      </Box>
    </Box>
  );
};

export default CrearPresupuestos;
