// src/pages/Proveedores/QueEsLaSeccionProveedores.tsx

import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Divider, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

/**
 * SEO Meta: 
 * <title>¿Qué es la Sección Proveedores | Balaxys ERP</title>
 * <meta name="description" content="Descubre cómo gestionar proveedores, órdenes de compra, facturas de proveedor, pagos y notas de débito en Balaxys ERP. Guía paso a paso con ejemplos de la interfaz real." />
 */

const QueEsLaSeccionProveedores: React.FC = () => {
  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* ======================================= */}
      {/* 1. ÍNDICE DE NAVEGACIÓN                */}
      {/* ======================================= */}
      <Box
        sx={{
          flex: 1,
          position: "sticky",
          top: 20,
          height: "100vh",
          paddingRight: "20px",
          overflowY: "auto",
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
            <MuiLink
              href="#listado-proveedores"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Listado de Proveedores" />
            </MuiLink>
          </ListItem>
          <ListItem>
            <MuiLink
              href="#ordenes-compra"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Órdenes de Compra" />
            </MuiLink>
          </ListItem>
          <ListItem>
            <MuiLink
              href="#facturas-proveedor"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Facturas de Proveedor" />
            </MuiLink>
          </ListItem>
          <ListItem>
            <MuiLink
              href="#pagos"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Pagos a Proveedores" />
            </MuiLink>
          </ListItem>
          <ListItem>
            <MuiLink
              href="#notas-debito"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Notas de Débito" />
            </MuiLink>
          </ListItem>
          <ListItem>
            <MuiLink
              href="#articulos-relacionados"
              sx={{ textDecoration: "none", color: "#1976d2" }}
            >
              <ListItemText primary="Artículos Relacionados" />
            </MuiLink>
          </ListItem>
        </List>
      </Box>

      {/* ======================================= */}
      {/* 2. CONTENIDO PRINCIPAL                  */}
      {/* ======================================= */}
      <Box sx={{ flex: 3, overflowY: "auto" }}>
        {/* -------------------------------- */}
        {/* SECCIÓN PRINCIPAL: Introducción  */}
        {/* -------------------------------- */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 700, marginBottom: "16px" }}
        >
          ¿Qué es la Sección de Proveedores en Balaxys?
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "justify", marginBottom: "16px" }}
        >
          La sección de <strong>Proveedores</strong> en Balaxys ERP centraliza todo el ciclo de administración de compras:
          desde el registro de proveedores y creación de órdenes de compra, hasta la gestión de facturas, pagos y notas de débito.
          Aquí encontrarás las herramientas necesarias para coordinar tu cadena de suministro, optimizar la recepción de mercancías
          y mantener un control financiero preciso. Cada módulo está interconectado, de modo que, al confirmar una factura de proveedor,
          se genera automáticamente el asiento contable correspondiente.
        </Typography>
        <Divider sx={{ margin: "16px 0" }} />

        {/* -------------------------------------- */}
        {/* SECCIÓN: Listado de Proveedores       */}
        {/* -------------------------------------- */}
        <section id="listado-proveedores">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px" }}
          >
            Listado de Proveedores
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", marginBottom: "16px" }}
          >
            Al ingresar a <em>Proveedores → Listado de proveedores</em>, verás una tabla que muestra todos los
            proveedores registrados en el sistema. Esta vista incluye:
            <ul style={{ marginLeft: "20px", marginTop: "8px" }}>
              <li>
                <strong>Nombre del Proveedor:</strong> Razón social o nombre comercial.
              </li>
              <li>
                <strong>RUT/CUI:</strong> Identificador fiscal.
              </li>
              <li>
                <strong>Teléfono / Email:</strong> Datos de contacto principales.
              </li>
              <li>
                <strong>Estado:</strong> Activo/Inactivo para controlar la visibilidad en documentos.
              </li>
              <li>
                <strong>Acciones:</strong> Íconos para ver, editar o eliminar proveedores.
              </li>
            </ul>
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", marginBottom: "16px" }}
          >
            Para agregar un nuevo proveedor, haz clic en el botón{" "}
            <strong>“Nuevo proveedor”</strong> en la esquina superior derecha. Se abrirá un modal de registro con los datos básicos
            y adicionales del proveedor. Una vez guardado, el proveedor aparecerá en esta lista y podrá usarse en futuras compras.
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        {/* -------------------------------------- */}
        {/* SECCIÓN: Órdenes de Compra            */}
        {/* -------------------------------------- */}
        <section id="ordenes-compra">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px" }}
          >
            Órdenes de Compra
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", marginBottom: "16px" }}
          >
            El módulo <em>Órdenes de compra</em> te permite generar solicitudes formales de materiales o servicios a tus proveedores.
            Cada orden especifica:
            <ul style={{ marginLeft: "20px", marginTop: "8px" }}>
              <li>
                <strong>Datos de Cabecera:</strong> Moneda, Proveedor, Almacén, Centro de costo, Fecha de emisión y entrega, Número.
              </li>
              <li>
                <strong>Detalle de Productos/Servicios:</strong> Código, Descripción, Unidad de medida, Existencia actual, Cantidad solicitada,
                Costo unitario, %IVA e Importe calculado.
              </li>
              <li>
                <strong>Términos y Condiciones:</strong> Notas específicas sobre plazos, condiciones de entrega o comentarios.
              </li>
            </ul>
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", marginBottom: "16px" }}
          >
            Para crear una orden de compra:
            <ol style={{ marginLeft: "20px", marginTop: "8px" }}>
              <li>
                Navega a <strong>Proveedores → Órdenes de Compra</strong> y haz clic en{" "}
                <strong>“Nueva orden de compra”</strong>.
              </li>
              <li>
                Completa los campos de cabecera (Moneda, Proveedor, Almacén, Fecha emisión y entrega).
              </li>
              <li>
                Agrega los productos o servicios requeridos mediante el botón{" "}
                <strong>“Agregar producto”</strong> y ajusta cantidades y costos.
              </li>
              <li>
                Revisa el resumen de montos (Subtotal, IVA, Importe total) y haz clic en{" "}
                <strong>“Guardar y Confirmar”</strong> para cerrar la orden y generar el asiento contable de recepción futura.
              </li>
            </ol>
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        {/* -------------------------------------- */}
        {/* SECCIÓN: Facturas de Proveedor         */}
        {/* -------------------------------------- */}
        <section id="facturas-proveedor">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px" }}
          >
            Facturas de Proveedor
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", marginBottom: "16px" }}
          >
            En <em>Proveedores → Facturas de proveedor</em> encontrarás el listado de todas las facturas que has emitido y confirmado.
            Cada línea de la tabla incluye:
            <ul style={{ marginLeft: "20px", marginTop: "8px" }}>
              <li>
                <strong>Estado compra:</strong> “Pendiente”, “Confirmado” o “Anulado”.
              </li>
              <li>
                <strong>Almacén:</strong> Punto de recepción de mercancías.
              </li>
              <li>
                <strong>Confirmación:</strong> Fecha en que se confirmó la factura.
              </li>
              <li>
                <strong>Número:</strong> Identificador único (ej. RE-1/2025).
              </li>
              <li>
                <strong>Proveedor:</strong> Nombre del proveedor emisor.
              </li>
              <li>
                <strong>Subtotal, IVA, Importe:</strong> Valores calculados en la factura.
              </li>
              <li>
                <strong>Estado pago:</strong> “Pendiente”, “Parcial” o “Pagado”.
              </li>
              <li>
                <strong>Acciones:</strong> Íconos para <em>Ver</em> (ojo),{" "}
                <em>Confirmar/Anular</em>, <em>Descargar PDF</em> o <em>Duplicar</em>.
              </li>
            </ul>
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", marginBottom: "16px" }}
          >
            Para registrar una nueva factura de compra:
            <ol style={{ marginLeft: "20px", marginTop: "8px" }}>
              <li>
                Haz clic en <strong>“Nueva factura”</strong> y completa los campos de cabecera:
                Moneda, Proveedor, Almacén, Centro de costo (opcional), Número (si no lo
                completas, se generará automáticamente) y Fechas de emisión/confirmación.
              </li>
              <li>
                Agrega productos o servicios usando{" "}
                <strong>“Agregar producto”</strong>. Al seleccionar el código se ajustar&aacute;
                la descripción, unidad de medida, existencia y costo unitario.
              </li>
              <li>
                Revisa el bloque de resumen (Subtotal, IVA, Importe total) en la
                esquina inferior derecha.
              </li>
              <li>
                Para guardar: selecciona{" "}
                <strong>“Guardar”</strong> (deja estado “Pendiente”) o{" "}
                <strong>“Guardar y Confirmar”</strong> (cambia a “Confirmado” y genera el asiento
                contable de recepción de inventario).
              </li>
            </ol>
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        {/* -------------------------------------- */}
        {/* SECCIÓN: Pagos a Proveedores          */}
        {/* -------------------------------------- */}
        <section id="pagos">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px" }}
          >
            Pagos a Proveedores
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", marginBottom: "16px" }}
          >
            El módulo <em>Pagos</em> te permite registrar las salidas de efectivo o transferencias relacionadas
            a facturas de compra. Cada registro de pago vincula una o varias facturas y actualiza su estado
            de “Pendiente” a “Parcial” o “Pagado”.
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", marginBottom: "16px" }}
          >
            Pasos para crear un pago:
            <ol style={{ marginLeft: "20px", marginTop: "8px" }}>
              <li>
                Accede a <strong>Proveedores → Pagos</strong> y haz clic en{" "}
                <strong>“Nuevo pago”</strong>.
              </li>
              <li>
                Selecciona el Proveedor y la(s) factura(s) a abonar (usa la lupa para buscar
                facturas pendientes dentro de un rango de fechas).
              </li>
              <li>
                Define detalles de pago: <strong>Forma de pago</strong> (Efectivo, Cheque, Transferencia,
                Tarjeta, PayPal), <strong>Número de referencia</strong> (opcional), <strong>Cuenta bancaria</strong> (si aplica)
                y <strong>Moneda</strong>.
              </li>
              <li>
                En la tabla verás el <strong>Importe total</strong> de la(s) factura(s), el <strong>Importe pagado</strong> y el
                <strong>Importe por pagar</strong>. Ingresa el monto a abonar en la columna{" "}
                <strong>Importe a pagar</strong>.
              </li>
              <li>
                Haz clic en <strong>“Guardar”</strong> (deja estado “Pendiente”) o{" "}
                <strong>“Guardar y Confirmar”</strong> (cambia a “Confirmado” y genera el
                asiento contable de pago).
              </li>
            </ol>
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        {/* -------------------------------------- */}
        {/* SECCIÓN: Notas de Débito             */}
        {/* -------------------------------------- */}
        <section id="notas-debito">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px" }}
          >
            Notas de Débito
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", marginBottom: "16px" }}
          >
            Las <em>Notas de Débito</em> en Balaxys se usan para registrar cargos adicionales o correcciones
            a facturas de proveedor confirmadas. Pueden aplicarse por cobro de intereses, penalidades o costos
            extra no considerados inicialmente.
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", marginBottom: "16px" }}
          >
            Para crear una nota de débito:
            <ol style={{ marginLeft: "20px", marginTop: "8px" }}>
              <li>
                Navega a <strong>Proveedores → Notas de Débito</strong> y haz clic en{" "}
                <strong>“Nueva nota de débito”</strong>.
              </li>
              <li>
                Selecciona el Proveedor, almacén y, luego, ingresa el año y número de
                factura original (usa la lupa para buscar facturas confirmadas).
              </li>
              <li>
                La tabla mostrará el detalle de la factura seleccionada: Código, Descripción,
                Unidad de medida, Cantidad y Precio. En la columna{" "}
                <strong>Cant. Devuelta</strong> ingresa la cantidad de unidades a cargar como débito. El
                sistema calculará automáticamente el <strong>Importe</strong> extra.
              </li>
              <li>
                Agrega una nota descriptiva (por ejemplo, “Cobro por demora de pago”).
              </li>
              <li>
                Haz clic en <strong>“Guardar”</strong> (deja estado “Pendiente”) o{" "}
                <strong>“Guardar y Confirmar”</strong> (cambia a “Confirmado” y genera el asiento
                contable correspondiente).
              </li>
            </ol>
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        {/* -------------------------------------- */}
        {/* SECCIÓN: Artículos Relacionados       */}
        {/* -------------------------------------- */}
        <section id="articulos-relacionados">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px" }}
          >
            Artículos Relacionados
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            Aquí algunos artículos y guías relacionadas con la sección de Proveedores:
            <ul style={{ marginLeft: "20px", marginTop: "8px" }}>
              <li>
                <MuiLink href="/proveedores/listado-proveedores" sx={{ textDecoration: "none", color: "#1976d2" }}>
                  Listado de Proveedores
                </MuiLink>
              </li>
              <li>
                <MuiLink href="/proveedores/orden-de-compra" sx={{ textDecoration: "none", color: "#1976d2" }}>
                  Órdenes de Compra
                </MuiLink>
              </li>
              <li>
                <MuiLink href="/proveedores/crear-factura-compra" sx={{ textDecoration: "none", color: "#1976d2" }}>
                  Crear Factura de Compra
                </MuiLink>
              </li>
              <li>
                <MuiLink href="/proveedores/gestionar-pagos" sx={{ textDecoration: "none", color: "#1976d2" }}>
                  Pagos a Proveedores
                </MuiLink>
              </li>
              <li>
                <MuiLink href="/proveedores/notas-de-debitos" sx={{ textDecoration: "none", color: "#1976d2" }}>
                  Notas de Débito
                </MuiLink>
              </li>
            </ul>
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>
      </Box>
    </Box>
  );
};

export default QueEsLaSeccionProveedores;
