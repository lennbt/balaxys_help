// src/pages/Inventario/ValesDeSalida.tsx

import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Box,
  Typography,
  List,
  ListItem,
  Link,
  ListItemText,
  Divider
} from "@mui/material";

/**
 * Página de ayuda para "Vales de Salida" en Balaxys ERP.
 * Explica en detalle cómo generar, confirmar, anular y devolver Vales de Salida,
 * así como los distintos destinos (Insumos, Transferencias, Activos Fijos, Útiles y Herramientas).
 */
const ValesDeSalida: React.FC = () => {
  return (
    <>
      {/* ======================================= */}
      {/* META SEO                                */}
      {/* ======================================= */}
      <Helmet>
        <title>Vales de Salida | Balaxys ERP - Ayuda</title>
        <meta
          name="description"
          content="Aprende a registrar Vales de Salida en Balaxys ERP: Insumos, Transferencias, Activos Fijos y Útiles. Guía paso a paso con ejemplos de interfaz."
        />
      </Helmet>

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
            overflowY: "auto"
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              marginBottom: "16px",
              color: "#1976d2"
            }}
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
                href="#insumos"
                sx={{ textDecoration: "none", color: "#1976d2" }}
              >
                <ListItemText primary="Destino: Insumos" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#transferencias"
                sx={{ textDecoration: "none", color: "#1976d2" }}
              >
                <ListItemText primary="Destino: Transferencias" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#activos-fijos"
                sx={{ textDecoration: "none", color: "#1976d2" }}
              >
                <ListItemText primary="Destino: Activos Fijos" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#utiles-herramientas"
                sx={{ textDecoration: "none", color: "#1976d2" }}
              >
                <ListItemText primary="Destino: Útiles y Herramientas" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#paso-a-paso"
                sx={{ textDecoration: "none", color: "#1976d2" }}
              >
                <ListItemText primary="Cómo crear un Vale de Salida" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#devolucion-vales"
                sx={{ textDecoration: "none", color: "#1976d2" }}
              >
                <ListItemText primary="Devolución de Vales" />
              </Link>
            </ListItem>
          </List>
        </Box>

        {/* ======================================= */}
        {/* 2. CONTENIDO PRINCIPAL                  */}
        {/* ======================================= */}
        <Box sx={{ flex: 3, overflowY: "auto", paddingLeft: "20px" }}>
          {/* -------------------------------- */}
          {/* SECCIÓN: Introducción            */}
          {/* -------------------------------- */}
          <section id="introduccion">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
           Vales de Salida en Balaxys ERP
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Los <strong>Vales de Salida</strong> son documentos que permiten registrar
              la extracción de mercancías del almacén a precio de costo, conectando directamente
              los procesos de Inventario, Compras, Ventas y Contabilidad dentro de Balaxys ERP.
              Una vez confirmado, el consecutivo del Vale de Salida se genera de forma anual para
              cada almacén y ya no puede modificarse. Además, un Vale confirmado no puede anularse
              ni eliminarse físicamente; solo se marca como “Anulado” para mantener trazabilidad.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Existen cuatro destinos posibles para los Vales de Salida:
            </Typography>
            <ul style={{ marginLeft: "20px", marginBottom: "16px" }}>
              <li><strong>Insumos:</strong> Extracción de materias primas o materiales para producción u otras actividades.</li>
              <li><strong>Transferencias:</strong> Movimiento de mercancías entre almacenes internos.</li>
              <li><strong>Activos Fijos:</strong> Registrar la entrada a uso de equipos o maquinarias como activos fijos.</li>
              <li><strong>Útiles y Herramientas:</strong> Salida de artículos para uso operativo o administrativo.</li>
            </ul>
          </section>
          <Divider sx={{ margin: "16px 0" }} />

          {/* -------------------------------- */}
          {/* SECCIÓN: Insumos                */}
          {/* -------------------------------- */}
          <section id="insumos">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              Insumos
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Los Vales de Salida clasificados como <strong>Insumos</strong> se utilizan
              para extraer mercancías del inventario que se convertirán en <em>materias primas </em>
              o <em> materiales de producción</em>. Al registrar un Vale como Insumo, podrás
              contabilizar estos costos por Centro de Costo, Elemento de Gasto y Sub-elemento,
              asegurando un control riguroso de los consumos internos.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Ejemplos de uso de Insumos:
            </Typography>
            <ul style={{ marginLeft: "20px", marginBottom: "16px" }}>
              <li>Materias primas para fabricación de productos terminados.</li>
              <li>Materiales de oficina consumibles en procesos internos.</li>
              <li>Componentes que se incorporan a kits o conjuntos que no se venden directamente.</li>
            </ul>
          </section>
          <Divider sx={{ margin: "16px 0" }} />

          {/* -------------------------------- */}
          {/* SECCIÓN: Transferencias         */}
          {/* -------------------------------- */}
          <section id="transferencias">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              Transferencias
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              La opción de <strong>Transferencias</strong> permite mover artículos de un
              almacén origen a otro almacén destino dentro de tu red de depósitos.
              Cada vez que confirmas un Vale de Salida con destino “Transferencia”,
              Balaxys actualiza automáticamente las existencias de ambos almacenes,
              reflejando la merma en el origen y el alta en el destino.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Casos de uso de Transferencias:
            </Typography>
            <ul style={{ marginLeft: "20px", marginBottom: "16px" }}>
              <li>Reposición de stock entre sucursales o depósitos.</li>
              <li>Centralización de mercancías para consolidación de pedidos.</li>
              <li>Movimiento interno de materiales entre áreas de producción.</li>
            </ul>
          </section>
          <Divider sx={{ margin: "16px 0" }} />

          {/* -------------------------------- */}
          {/* SECCIÓN: Activos Fijos          */}
          {/* -------------------------------- */}
          <section id="activos-fijos">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              Activos Fijos
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Cuando adquieres un equipo o maquinaria y lo recepcionas en el almacén,
              para ponerlo en uso debes emitir un Vale de Salida con destino <strong>Activos Fijos</strong>.
              Este proceso transfiere el costo del inventario al registro de activos fijos,
              facilitando la depreciación y el control contable de tus bienes duraderos.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Ejemplos de uso de Activos Fijos:
            </Typography>
            <ul style={{ marginLeft: "20px", marginBottom: "16px" }}>
              <li>Equipos de cómputo y mobiliario para oficinas.</li>
              <li>Maquinaria industrial y herramientas de alto valor.</li>
              <li>Vehículos o activos transportables que pasan a uso operativo.</li>
            </ul>
          </section>
          <Divider sx={{ margin: "16px 0" }} />

          {/* -------------------------------- */}
          {/* SECCIÓN: Útiles y Herramientas  */}
          {/* -------------------------------- */}
          <section id="utiles-herramientas">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              Útiles y Herramientas
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              El destino <strong>Útiles y Herramientas</strong> se utiliza para registrar
              la salida de artículos de bajo costo que se usarán en tareas operativas o administrativas,
              como herramientas manuales, insumos de mantenimiento o materiales de oficina.
              Aunque su costo no se capitaliza como activos fijos, es importante llevar un
              registro preciso para mantener el historial de consumo.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Ejemplos de uso de Útiles y Herramientas:
            </Typography>
            <ul style={{ marginLeft: "20px", marginBottom: "16px" }}>
              <li>Llaves, destornilladores y herramientas de taller.</li>
              <li>Material de papelería y suministros de oficina.</li>
              <li>Equipos de protección personal (EPIs) para empleados.</li>
            </ul>
          </section>
          <Divider sx={{ margin: "16px 0" }} />

          {/* -------------------------------- */}
          {/* SECCIÓN: Paso a paso            */}
          {/* -------------------------------- */}
          <section id="paso-a-paso">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              Cómo crear un Vale de Salida
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Sigue estos pasos para generar un Vale de Salida en Balaxys ERP:
            </Typography>
            <ol style={{ marginLeft: "20px", marginBottom: "16px" }}>
              <li>
                <strong>Acceder a Inventario → Vales de Salida:</strong> En la barra
                lateral, expande el menú <em>Inventario</em> y selecciona 
                “Vales de Salida”.
              </li>
              <li>
                <strong>Hacer clic en “Nuevo Vale de Salida”:</strong> El botón aparece
                en la esquina superior derecha.
              </li>
              <li>
                <strong>Completar datos de cabecera:</strong> Selecciona el 
                <em>Centro de Costo</em>, el <em>Área de Responsabilidad</em> (opcional),
                el <em>Almacén Emisor</em> y la <em>Fecha de Emisión</em>.
                La fecha de emisión debe corresponder al período contable abierto. 
              </li>
              <li>
                <strong>Elegir destino:</strong> Abre el desplegable “Destino” y selecciona 
                uno de los cuatro tipos: <em>Insumos</em>, <em>Transferencias</em>, 
                <em>Activos Fijos</em> o <em>Útiles y Herramientas</em>. 
                Dependiendo de tu elección, pueden aparecer campos adicionales:
                <ul style={{ marginLeft: "20px", marginTop: "8px" }}>
                  <li>
                    <strong>Insumos:</strong> Se habilita “Especificación de Insumo” para
                    indicar el tipo (p. ej. Materias Primas, Materiales de Producción).
                  </li>
                  <li>
                    <strong>Transferencias:</strong> Aparece “Almacén Destino” para elegir
                    el depósito receptor.
                  </li>
                  <li>
                    <strong>Activos Fijos:</strong> Puede solicitar datos del activo (p. ej. 
                    número de serie, categoría contable).
                  </li>
                  <li>
                    <strong>Útiles y Herramientas:</strong> Solo muestra el campo “Destino” 
                    para fines informativos, sin capitalización contable.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Agregar líneas de detalle:</strong> Haz clic en 
                <em>“Agregar producto”</em> para añadir filas de detalle. Para cada línea:
                <ul style={{ marginLeft: "20px", marginTop: "8px" }}>
                  <li><strong>Código / Descripción:</strong> Desplegable con productos existentes.</li>
                  <li><strong>U.M (Unidad de Medida):</strong> Solo lectura.</li>
                  <li><strong>Existencia:</strong> Cantidad disponible en el almacén emisor.</li>
                  <li><strong>Costo unitario:</strong> Precio de costo actual.</li>
                  <li><strong>Cantidad:</strong> Número de unidades a extraer.</li>
                  <li><strong>Importe:</strong> Cálculo automático (Costo unitario × Cantidad).</li>
                  <li><strong>Acciones:</strong> Ícono de papelera para eliminar la fila.</li>
                </ul>
              </li>
              <li>
                <strong>Guardar:</strong> Haz clic en <em>“Guardar”</em> para registrar el
                vale en estado <em>Pendiente</em>.
              </li>
              <li>
                <strong>Confirmar:</strong> Si los datos son correctos, presiona 
                <em>“Guardar y Confirmar”</em>. El vale cambia a estado <em>Confirmado</em>
                y ya no puede editarse. Al confirmar, el sistema actualiza el inventario 
                y genera el asiento contable correspondiente.
              </li>
              <li>
                <strong>Cancelar (antes de confirmar):</strong> Para abandonar sin guardar,
                haz clic en <em>“Cerrar”</em>.
              </li>
              <li>
                <strong>Anular (después de confirmar):</strong> Si necesitas anular un vale
                confirmado, ubícalo en el listado y haz clic en el ícono <em>Anular</em>. 
                El Vale pasa a estado <em>Anulado</em> pero permanece en el historial para 
                auditoría. No se elimina físicamente.
              </li>
            </ol>
          </section>
          <Divider sx={{ margin: "16px 0" }} />

          {/* -------------------------------- */}
          {/* SECCIÓN: Devolución de vales      */}
          {/* -------------------------------- */}
          <section id="devolucion-vales">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px" }}
            >
              Devolución de Vales de Salida
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ textAlign: "justify" }}
            >
              Balaxys permite registrar devoluciones de Vales de Salida que ya han 
              sido confirmados. Para hacerlo:
            </Typography>
            <ol style={{ marginLeft: "20px", marginBottom: "16px" }}>
              <li>
                <strong>Seleccionar “Devolución de Vale”:</strong> En el menú 
                <em>Inventario → Devolución de vales de Salida</em>.
              </li>
              <li>
                <strong>Buscar el Vale original:</strong> Selecciona el 
                <em>Almacén</em>, el <em>Año</em> y escribe el número de documento 
                (p. ej. VS-5/2025) en el campo “Documento”. Luego haz clic en el ícono <em>Lupa</em>
                para que se cargue el detalle de las líneas originales.
              </li>
              <li>
                <strong>Marcar cantidades devueltas:</strong> En la tabla de detalle, 
                ingresa la “Cantidad devuelta” por cada línea. El “Importe” se recalcula 
                automáticamente (Cantidad devuelta × Costo unitario × (1 + IVA/100)).
              </li>
              <li>
                <strong>Guardar / Confirmar Devolución:</strong> Haz clic en 
                <em>“Guardar”</em> para registrar en estado <em>Pendiente</em> o en
                <em>“Guardar y Confirmar”</em> para procesar la devolución y actualizar 
                los inventarios y asientos contables.
              </li>
              <li>
                <strong>Anular Devolución:</strong> Si aún no has confirmado la devolución, 
                puedes presionar <em>“Cerrar”</em> para descartarla. Una vez confirmada, 
                la devolución solo se puede anular desde el listado de devoluciones.
              </li>
            </ol>
          </section>
          <Divider sx={{ margin: "16px 0" }} />
        </Box>
      </Box>
    </>
  );
};

export default ValesDeSalida;
