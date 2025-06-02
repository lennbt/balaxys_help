// src/pages/Compras/AyudaNotaDebito.tsx
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

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
 * Página de ayuda para “Nueva nota de débito” en Balaxys ERP.
 * Explica cómo acceder, buscar la factura original, completar el formulario,
 * entender la tabla de líneas y usar las acciones (Cerrar, Guardar, Guardar y Confirmar).
 */
const AyudaNotaDebito: React.FC = () => {
  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* ======================================= */}
      {/* 1. ÍNDICE DE SECCIONES                  */}
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
            <Link
              href="#introduccion"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Introducción" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#acceso-formulario"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Acceso al formulario" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#campos-encabezado"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Campos del encabezado" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#buscar-factura"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Cómo buscar la factura original" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#tabla-lineas"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Tabla de líneas (devolución)" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#campo-nota"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Campo Nota" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#resumen-totales"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Resumen de totales" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#acciones-formulario"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Acciones del formulario" />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="#preguntas"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
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
            Nueva nota de débito
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            La <strong>nota de débito</strong> se utiliza para registrar devoluciones parciales
            o ajustes en una factura de compra ya confirmada. Permite disminuir cantidades o
            aumentar montos cuando el proveedor emite un ajuste a tu favor. En esta guía
            aprenderás a:
            <ul style={{ marginLeft: "20px" }}>
              <li>Acceder al formulario de nueva nota de débito.</li>
              <li>Buscar la factura original que deseas devolver usando el ícono de lupa.</li>
              <li>Completar los campos del encabezado (centro de costo, fechas, tipo de devolución, etc.).</li>
              <li>Entender la tabla de líneas: cómo indicar la cantidad devuelta y calcular el importe.</li>
              <li>Agregar una nota explicativa.</li>
              <li>Interpretar el resumen de totales (subtotal, IVA, importe total).</li>
              <li>Usar los botones “Cerrar”, “Guardar” y “Guardar y Confirmar”.</li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Acceso al formulario          */}
        {/* ----------------------------- */}
        <section id="acceso-formulario">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            1. Acceso al formulario
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Para abrir la pantalla de “Nueva nota de débito”:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                Ingresa al módulo <em>Compras → Notas de débito</em> desde el menú lateral.
              </li>
              <li>
                Haz clic en el botón azul <strong>“Nueva nota de débito”</strong> en la parte superior derecha.
              </li>
            </ul>
            Se desplegará un modal con el formulario para registrar la nota de débito.
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_nota_debito_btn.png"
            alt="Botón Nueva nota de débito en listado de Compras"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Campos del encabezado         */}
        {/* ----------------------------- */}
        <section id="campos-encabezado">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            2. Campos del encabezado
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En la parte superior del formulario encontrarás los campos principales:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Centro de costo:</strong> Selecciona el centro de costo al que se asignará esta nota de débito (opcional, pero recomendado para control presupuestario).
              </li>
              <li>
                <strong>Fecha emisión *:</strong> Fecha en que se emite la nota de débito (DD/MM/YYYY). Obligatorio.
              </li>
              <li>
                <strong>Fecha confirmación *:</strong> Fecha en que confirmas la nota de débito en el sistema. Obligatorio.
              </li>
              <li>
                <strong>Devolución de:</strong> Selecciona si la devolución se hace por <strong>Cantidad</strong> o por <strong>Precio</strong>.  
                - <em>Cantidad:</em> se devuelve cierto número de unidades de un producto específico.  
                - <em>Precio:</em> se ajusta el precio de compra de la línea original sin cambiar la cantidad.  
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_nota_debito_encabezado.png"
            alt="Campos de encabezado en Nueva nota de débito"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Cómo buscar la factura original */}
        {/* ----------------------------- */}
        <section id="buscar-factura">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            3. Cómo buscar la factura original
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Para aplicar la nota de débito, debes vincularla a una factura de compra ya confirmada.  
            Sigue estos pasos:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                En la sección de <strong>Proveedor</strong>, elige el proveedor que emitió la factura original (este campo aparece abajo del encabezado).
              </li>
              <li>
                En el campo <strong>Almacén</strong>, selecciona el almacén correspondiente.
              </li>
              <li>
                A la derecha verás los campos <strong>Año</strong> y <strong>Documento</strong> (con formato “FA-1” o similar).  
                El campo <strong>Documento</strong> está vacío inicialmente.
              </li>
              <li>
                Haz clic en el ícono de <strong>lupa</strong> al lado del campo <strong>Documento</strong>.  
                Se abrirá un modal o lista donde podrás buscar la factura confirmada que deseas devolver.
              </li>
              <li>
                Usa filtros en el modal de búsqueda (por número de factura, fecha, estado, etc.) para encontrar la factura correcta.
              </li>
              <li>
                Al seleccionar la factura, el sistema completará automáticamente las líneas de la misma en la tabla de abajo (U.M., cantidad original, precio original, IVA).  
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_nota_debito_buscar_factura.png"
            alt="Campo Documento y lupa para buscar factura en Nota de débito"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Tabla de líneas (devolución)   */}
        {/* ----------------------------- */}
        <section id="tabla-lineas">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            4. Tabla de líneas (devolución)
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Una vez vinculada la factura, en el centro del formulario se mostrará la <strong>tabla de líneas</strong> con los siguientes campos:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Código:</strong> Código del producto de la factura original. Solo lectura.
              </li>
              <li>
                <strong>Descripción:</strong> Texto descriptivo del producto. Solo lectura.
              </li>
              <li>
                <strong>U.M:</strong> Unidad de medida asignada al producto (p. ej.: unidad, kg). Solo lectura.
              </li>
              <li>
                <strong>Cantidad:</strong> Cantidad que fue facturada originalmente. Solo lectura.
              </li>
              <li>
                <strong>Precio:</strong> Precio unitario que figuró en la factura original. Solo lectura.
              </li>
              <li>
                <strong>IVA:</strong> Tasa de impuesto aplicada en la factura original (ej.: 5%). Solo lectura.
              </li>
              <li>
                <strong>Cant. devuelta *:</strong> Indica cuántas unidades deseas devolver. Obligatorio si elegiste “Cantidad” en el encabezado.  
                El sistema calculará automáticamente el <strong>Importe</strong> (Cantidad devuelta × Precio × (1 + IVA)).
              </li>
              <li>
                <strong>Importe:</strong> Monto calculado para la línea de devolución. Solo lectura.
              </li>
            </ul>
            Si en el encabezado seleccionaste “Devolución de Precio”, en lugar de “Cant. devuelta” el campo editable será el <strong>Precio</strong>, 
            y la “Cant. devuelta” permanecerá igual que la factura original.
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_nota_debito_tabla.png"
            alt="Tabla de líneas en Nueva nota de débito"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Campo Nota                     */}
        {/* ----------------------------- */}
        <section id="campo-nota">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            5. Campo Nota
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Debajo de la tabla de líneas hay un cuadro de texto llamado <strong>“Nota”</strong>.  
            Úsalo para agregar comentarios o explicaciones adicionales sobre la devolución, por ejemplo:
            <ul style={{ marginLeft: "20px" }}>
              <li>Motivo de la devolución (producto dañado, error de cantidad, etc.).</li>
              <li>Observaciones para el proveedor (solicitar reembolso, reingreso de inventario, etc.).</li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_nota_debito_nota.png"
            alt="Campo Nota en Nueva nota de débito"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Resumen de totales             */}
        {/* ----------------------------- */}
        <section id="resumen-totales">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            6. Resumen de totales
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En la esquina inferior derecha del formulario se muestra el resumen con:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Subtotal:</strong> Suma de todos los importes calculados para las cantidades devueltas (sin IVA).
              </li>
              <li>
                <strong>IVA:</strong> Total del impuesto incorporado en las líneas de devolución.
              </li>
              <li>
                <strong>Importe total:</strong> Suma final (Subtotal + IVA).  
              </li>
            </ul>
            Estos valores se actualizan en tiempo real conforme ajustas la <strong>Cant. devuelta</strong> o el <strong>Precio</strong>.
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_nota_debito_resumen.png"
            alt="Resumen de totales en Nueva nota de débito"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Acciones del formulario        */}
        {/* ----------------------------- */}
        <section id="acciones-formulario">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            7. Acciones del formulario
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En la parte superior derecha del modal encontrarás tres botones:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Cerrar:</strong> Descarta los cambios y cierra el formulario sin guardar nada.
              </li>
              <li>
                <strong>Guardar:</strong> Guarda la nota de débito en estado “Sin confirmar”. Podrás
                revisarla o editarla más tarde antes de confirmar.
              </li>
              <li>
                <strong>Guardar y Confirmar:</strong> Valida que los importes coincidan y cambia el
                estado a “Confirmado”, registrando automáticamente los ajustes contables correspondientes.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_nota_debito_acciones.png"
            alt="Botones Cerrar, Guardar, Guardar y Confirmar en Nota de débito"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Preguntas frecuentes           */}
        {/* ----------------------------- */}
        <section id="preguntas">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            8. Preguntas frecuentes
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Qué diferencia hay entre “Devolución de Cantidad” y “Devolución de Precio”?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            - <strong>Devolución de Cantidad:</strong> Devuelves cierta cantidad de unidades del producto.
            El precio permanece igual al original.  
            - <strong>Devolución de Precio:</strong> Ajustas el precio facturado sin cambiar la cantidad.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Puedo devolver una factura parcial o solo en su totalidad?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Puedes devolver parcial o totalmente. Si eliges “Cantidad”, ingresa solo el número de unidades
            a devolver en el campo <strong>Cant. devuelta</strong>. Si quieres anular toda la factura,
            ingresa la misma cantidad que estaba en la factura original.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Qué sucede si no selecciono ninguna factura en la lupa?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            El sistema no podrá cargar las líneas originales y no podrás calcular correctamente los importes
            de devolución. Asegúrate de buscar y seleccionar la factura correcta antes de llenar las líneas.
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: "4px" }}
          >
            ¿Cómo edito una nota de débito después de guardarla?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Si la nota está en estado “Sin confirmar”, puedes editarla desde el listado de Notas de débito seleccionando
            el ícono de lápiz. Una vez confirmada, no se puede modificar; en su lugar, crea una nueva nota de débito.
          </Typography>
        </section>
      </Box>
    </Box>
  );
};

export default AyudaNotaDebito;
