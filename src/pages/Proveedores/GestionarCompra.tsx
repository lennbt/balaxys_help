// src/pages/Compras/AyudaGestionarCompra.tsx
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

import React from "react";
import { Box, Typography, List, ListItem, Link, ListItemText, Divider } from "@mui/material";

/**
 * Página de ayuda para “Gestionar Compras” (Facturas de Compras) en Balaxys ERP.
 * Explica cómo acceder al módulo, interpretar el listado de facturas de compra,
 * usar filtros, crear nueva factura, ver detalles y acciones disponibles.
 */
const AyudaGestionarCompra: React.FC = () => {
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
            <Link href="#introduccion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Introducción" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#acceso-modulo" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Acceso al módulo" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#vista-listado" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Vista de listado de facturas" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#columnas-listado" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Columnas del listado" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#filtros-busqueda" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Filtro y búsqueda rápida" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#acciones-listado" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Acciones disponibles" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#crear-factura" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Cómo crear una nueva factura" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#preguntas" sx={{ textDecoration: "none", color: "#1976d2" }}>
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
            Ayuda: Gestionar Compras (Facturas de Compras)
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            El módulo de <strong>Gestionar Compras</strong> permite consultar,
            filtrar, crear y editar facturas de compra en Balaxys ERP. Aquí verás:
            <ul style={{ marginLeft: "20px" }}>
              <li>Cómo acceder al listado de facturas de compra.</li>
              <li>Interpretación de las columnas en la tabla.</li>
              <li>Uso de filtros y búsqueda rápida para localizar facturas.</li>
              <li>Acciones disponibles en cada factura (ver, editar, anular, recibir).</li>
              <li>Cómo registrar una nueva factura de compra.</li>
              <li>Preguntas frecuentes sobre el proceso de compras.</li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Acceso al módulo              */}
        {/* ----------------------------- */}
        <section id="acceso-modulo">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            1. Acceso al módulo
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Para ingresar a “Gestionar Compras”:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                En el menú lateral principal, selecciona{" "}
                <em>Compras → Facturas de compras</em>.
              </li>
              <li>
                Aparecerá el breadcrumb “Inicio &gt; Facturas de compras” en la parte
                superior de la pantalla.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_gestionar_menu.png"
            alt="Menú: Compras → Facturas de compras"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Vista de listado             */}
        {/* ----------------------------- */}
        <section id="vista-listado">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            2. Vista de listado de facturas
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Al ingresar, verás una tabla con todas las facturas de compra:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                En la parte superior derecha, el botón azul{" "}
                <strong>“Nueva factura”</strong> abre el formulario para registrar una
                nueva factura de compra.
              </li>
              <li>
                Al lado, el ícono de <strong>recargar</strong> actualiza el listado con
                datos recientes.
              </li>
              <li>
                El menú de tres puntos ofrece opciones para exportar o imprimir las
                facturas.
              </li>
              <li>
                A la derecha del buscador, se encuentra el campo de{" "}
                <strong>búsqueda rápida</strong> para filtrar facturas por texto.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_gestionar_listado.png"
            alt="Listado de Facturas de compras"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Columnas del listado          */}
        {/* ----------------------------- */}
        <section id="columnas-listado">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            3. Columnas del listado
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Cada fila de la tabla muestra los siguientes campos:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Estado compra:</strong> Indica si la factura está “Sin confirmar”
                o “Confirmado” (con ícono verde). Una factura confirmada fija los datos en
                contabilidad.
              </li>
              <li>
                <strong>Almacén:</strong> Nombre del almacén asociado a la compra (por
                ejemplo, “Principal”).
              </li>
              <li>
                <strong>Confirmación:</strong> Fecha en que la factura fue confirmada
                (formato DD/MM/YYYY).
              </li>
              <li>
                <strong>Número:</strong> Identificador de la factura (ej.: RE-1/01/2025).
              </li>
              <li>
                <strong>Proveedor:</strong> Nombre del proveedor que emitió la factura.
              </li>
              <li>
                <strong>Subtotal:</strong> Suma de líneas de productos antes de impuestos.
              </li>
              <li>
                <strong>IVA:</strong> Total del impuesto al valor agregado aplicado.
              </li>
              <li>
                <strong>Importe:</strong> Total general (Subtotal + IVA).
              </li>
              <li>
                <strong>Estado pago:</strong> Muestra si el pago está “Pendiente” o
                “Pagado” (p.ej., ícono de reloj para pendiente).
              </li>
              <li>
                <strong>Acciones:</strong> Íconos que permiten:
                <ul style={{ marginLeft: "20px" }}>
                  <li>
                    <strong>Ver detalles (ojo):</strong> Muestra toda la información de la
                    factura en modo lectura.
                  </li>
                  <li>
                    <strong>Editar (lápiz):</strong> Abre el formulario para modificar la
                    factura antes de confirmar.
                  </li>
                  <li>
                    <strong>Recibir mercancía (flecha ↺):</strong> Marca la recepción de
                    inventario si todavía no se registró.
                  </li>
                  <li>
                    <strong>Anular (X):</strong> Anula la factura si aún no está confirmada.
                  </li>
                </ul>
              </li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Filtro y búsqueda rápida       */}
        {/* ----------------------------- */}
        <section id="filtros-busqueda">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            4. Filtro y búsqueda rápida
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            El <strong>buscador rápido</strong> (campo de texto en la parte superior) filtra las
            facturas en tiempo real por:
            <ul style={{ marginLeft: "20px" }}>
              <li>Número de factura.</li>
              <li>Nombre del proveedor.</li>
              <li>Estado (Pendiente, Confirmado).</li>
              <li>Almacén o cualquier texto que coincida con la fila.</li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Acciones disponibles          */}
        {/* ----------------------------- */}
        <section id="acciones-listado">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            5. Acciones disponibles
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Para cada factura en la columna “Acciones” tienes:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Ver detalles (ícono de ojo):</strong> Abre una vista con todos los campos y
                líneas de la factura en modo lectura.
              </li>
              <li>
                <strong>Editar (ícono de lápiz):</strong> Permite modificar la factura antes de
                confirmar. Solo está activo si la factura no está confirmada.
              </li>
              <li>
                <strong>Recibir mercancía (ícono ↺):</strong> Registra la recepción física del
                inventario asociado a esta factura, si aplicable.  
              </li>
              <li>
                <strong>Anular (ícono X):</strong> Elimina la factura si aún no está confirmada,
                eliminando también los movimientos contables asociados.
              </li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Crear nueva factura            */}
        {/* ----------------------------- */}
        <section id="crear-factura">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            6. Cómo crear una nueva factura
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Para registrar una nueva factura de compra:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                Haz clic en el botón azul <strong>“Nueva factura”</strong> arriba a la derecha.
              </li>
              <li>
                Se abrirá un formulario modal con campos obligatorios y opcionales:
                <ul style={{ marginLeft: "20px" }}>
                  <li>
                    <strong>Proveedor *:</strong> Selecciona el proveedor de la lista desplegable.
                  </li>
                  <li>
                    <strong>Almacén *:</strong> Elige el almacén que recibirá la mercancía.
                  </li>
                  <li>
                    <strong>Fecha emisión *:</strong> Fecha en que se emite la factura.
                  </li>
                  <li>
                    <strong>Fecha confirmación *:</strong> Fecha en que confirmas la factura en el sistema.
                  </li>
                  <li>
                    <strong>Número de factura *:</strong> Código de la factura de compra (ej.: RE-1/01/2025).
                  </li>
                  <li>
                    <strong>Centro de costo:</strong> (Opcional) Asigna la factura a un centro de costo contra el cual se cargará.
                  </li>
                </ul>
              </li>
              <li>
                Agrega las líneas de productos o servicios en la parte central:
                <ul style={{ marginLeft: "20px" }}>
                  <li>
                    <strong>Código *:</strong> Selecciona el código de producto/servicio de la lista.
                  </li>
                  <li>
                    <strong>Descripción *:</strong> Texto descriptivo o autocompletado al elegir el código.
                  </li>
                  <li>
                    <strong>U.M:</strong> Unidad de medida (p.ej., “kg”, “unidad”). Se completa automáticamente.
                  </li>
                  <li>
                    <strong>Disponibilidad:</strong> Cantidad en stock actual. Solo lectura.
                  </li>
                  <li>
                    <strong>Cantidad *:</strong> Cantidad comprada.
                  </li>
                  <li>
                    <strong>Precio unitario *:</strong> Precio de compra por unidad.
                  </li>
                  <li>
                    <strong>IVA:</strong> Tasa de impuesto aplicada (ej.: 10%, 22%).  
                  </li>
                  <li>
                    <strong>Importe:</strong> Monto calculado automáticamente (Cantidad × Precio × IVA).
                  </li>
                </ul>
                Para agregar más filas, haz clic en <strong>“Agregar producto”</strong> debajo de la última fila.
              </li>
              <li>
                En la parte inferior:
                <ul style={{ marginLeft: "20px" }}>
                  <li>
                    <strong>Nota:</strong> Campo multiline para comentarios adicionales sobre la factura.
                  </li>
                  <li>
                    <strong>Forma de pago:</strong> Selecciona el método de pago (efectivo, transferencia, etc.).
                  </li>
                  <li>
                    <strong>¿Registrar pago?</strong> Casilla que, al marcar, habilita campos para ingresar 
                    el pago inmediato de esta factura.
                  </li>
                  <li>
                    En el lado derecho, verás el resumen:
                    <ul style={{ marginLeft: "20px" }}>
                      <li>
                        <strong>Subtotal:</strong> Suma de todas las líneas antes de IVA.
                      </li>
                      <li>
                        <strong>IVA:</strong> Total de impuestos calculados.
                      </li>
                      <li>
                        <strong>Importe total:</strong> Suma final (Subtotal + IVA).
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Finalmente, utiliza los botones superiores:
                <ul style={{ marginLeft: "20px" }}>
                  <li>
                    <strong>Cerrar:</strong> Descarta cambios y cierra el formulario.
                  </li>
                  <li>
                    <strong>Guardar:</strong> Guarda la factura como “Sin confirmar”. Permite revisarla más tarde.
                  </li>
                  <li>
                    <strong>Guardar y confirmar:</strong> Valida automáticamente montos (Subtotal + IVA) y cambia 
                    el estado a “Confirmado”. Esto registra movimientos contables y actualiza inventario.
                  </li>
                </ul>
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/compras_nueva_factura_formulario.png"
            alt="Formulario de Nueva Factura de compras"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Preguntas frecuentes          */}
        {/* ----------------------------- */}
        <section id="preguntas">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            7. Preguntas frecuentes
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Qué significa “Estado pago: Pendiente”?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Indica que la factura está confirmada, pero aún no se ha registrado el pago total. 
            Cuando se realice el pago (marcando “¿Registrar pago?” o desde el módulo de pagos), 
            el estado cambiará a “Pagado”.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Puedo editar una factura ya confirmada?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            No. Una vez que la factura está en estado “Confirmado”, los datos quedan fijos en
            contabilidad e inventario. Si necesitas cambiar algo, anula la factura y crea una nueva.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Cómo recibo la mercancía de una factura?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Haz clic en el ícono de “Recibir mercancía” (flecha ↺) en la columna de acciones. 
            Esto marcará la factura como “Recibida” y actualizará el nivel de inventario en el almacén 
            asociado.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Qué sucede si no completo todos los campos obligatorios?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            El sistema mostrará mensajes de error indicando qué campo hace falta. Asegúrate de completar 
            Proveedor, Almacén, Fecha emisión, Fecha confirmación, Número de factura, y cada línea de producto 
            con Cantidad y Precio unitario.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Cómo anulo una factura pendiente de confirmación?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Haz clic en el ícono “X” en la columna de acciones junto a la factura. Esto borrará la factura 
            y sus movimientos asociados, siempre que no esté confirmada.
          </Typography>
        </section>
      </Box>
    </Box>
  );
};

export default AyudaGestionarCompra;
