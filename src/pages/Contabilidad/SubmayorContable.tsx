// src/pages/Contabilidad/AyudaSubmayorContable.tsx
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
 * Página de ayuda para “Submayor contable” en Balaxys ERP.
 * Describe cómo navegar el árbol de cuentas, ver información de la cuenta seleccionada,
 * filtrar movimientos contables y crear un nuevo asiento.
 */
const AyudaSubmayorContable: React.FC = () => {
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
            <Link href="#arbol-cuentas" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Árbol de cuentas (panel izquierdo)" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#informacion-cuenta" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Información de la cuenta seleccionada" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#movimientos-contables" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Movimientos contables (panel derecho)" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#filtros-fecha" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Filtros de fecha" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#nuevo-asiento" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Cómo crear un nuevo asiento" />
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
            Ayuda: Submayor Contable
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            El módulo <strong>Submayor contable</strong> muestra el detalle de cada cuenta contable y sus
            movimientos durante un período determinado. Permite:
            <ul style={{ marginLeft: "20px" }}>
              <li>Navegar el árbol de cuentas para seleccionar la cuenta deseada.</li>
              <li>
                Visualizar información detallada (código, nombre, clasificación, subclasificación, saldo).
              </li>
              <li>Filtrar movimientos contables por rango de fechas.</li>
              <li>Registrar nuevos asientos directamente desde este módulo.</li>
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
            Para ingresar a Submayor contable:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                En el menú lateral principal, selecciona{" "}
                <em>Contabilidad → Submayor contable</em>.
              </li>
              <li>
                Verás el <strong>breadcrumb</strong> “Inicio &gt; Submayor contable” en la parte superior.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/submayor_contable_menu.png"
            alt="Menú: Contabilidad → Submayor contable"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Árbol de cuentas              */}
        {/* ----------------------------- */}
        <section id="arbol-cuentas">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            2. Árbol de cuentas (panel izquierdo)
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            A la izquierda aparece un buscador y un árbol jerárquico con todas las cuentas del Plan de cuentas:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                En el <strong>campo “Buscar cuenta...”</strong>, escribe el nombre o código parcial para localizar
                rápidamente una cuenta.
              </li>
              <li>
                El <strong>árbol</strong> muestra las cuentas principales (p. ej.,
                “1101 – Efectivo y Equivalentes”) con iconos de “+” para expandir subniveles.
              </li>
              <li>
                Haz clic en el <strong>nombre de una cuenta</strong> (p. ej., “110403 – Inventarios de Mercancías”)
                para seleccionarla. La fila se resalta en azul y carga la información de esa cuenta en el panel derecho.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/submayor_contable_arbol.png"
            alt="Árbol de cuentas en Submayor contable"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Información de la cuenta      */}
        {/* ----------------------------- */}
        <section id="informacion-cuenta">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            3. Información de la cuenta seleccionada
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Al seleccionar cualquier cuenta en el árbol, en el panel derecho aparece la sección “Información de la cuenta”:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Código:</strong> Código completo de la cuenta (ej.: 110403).
              </li>
              <li>
                <strong>Nombre:</strong> Nombre descriptivo de la cuenta (ej.: Inventarios de Mercancías).
              </li>
              <li>
                <strong>Descripción:</strong> Texto opcional que explica el uso o detalles de la cuenta (puede estar vacío).
              </li>
              <li>
                <strong>Clasificación:</strong> Categoría principal a la que pertenece la cuenta (ej.: Activos).
              </li>
              <li>
                <strong>Subclasificación:</strong> Subgrupo dentro de la clasificación (ej.: Activos Corrientes).
              </li>
              <li>
                <strong>Saldo:</strong> Saldo acumulado actual de la cuenta hasta la última fecha de movimiento.
              </li>
            </ul>
            Debajo de esta información, verás un botón azul <strong>“Cuenta de movimiento”</strong> que indica que esta
            cuenta puede recibir asientos manuales.
          </Typography>
          <Box
            component="img"
            src="/assets/img/submayor_contable_info_cuenta.png"
            alt="Información de la cuenta seleccionada"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Movimientos contables          */}
        {/* ----------------------------- */}
        <section id="movimientos-contables">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            4. Movimientos contables (panel derecho)
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Justo debajo de “Información de la cuenta” se muestra la tabla titulada “Movimientos contables”.
            Aquí se enlistan todos los asientos que afectan la cuenta seleccionada dentro del rango de fechas activo.
          </Typography>
          <Box
            component="img"
            src="/assets/img/submayor_contable_movimientos.png"
            alt="Tabla de Movimientos contables"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Cada fila de la tabla incluye:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Asiento:</strong> Número de asiento (ej.: CP-1/5/2025) que al hacer clic se expande para mostrar
                los débitos y créditos específicos.
              </li>
              <li>
                <strong>Tipo asiento:</strong> Indica el origen del asiento (Recepciones, Facturas, Cobros, etc.).
              </li>
              <li>
                <strong>Confirmación:</strong> Fecha en que se confirmó el asiento (ej.: 31/05/2025).
              </li>
              <li>
                <strong>Débito:</strong> Monto debitado a esta cuenta en dicho asiento (ej.: $200,00).
              </li>
              <li>
                <strong>Crédito:</strong> Monto acreditado contra esta cuenta (ej.: $10,00).
              </li>
              <li>
                <strong>Saldo:</strong> Saldo resultante de sumar débitos y restar créditos acumulados hasta esa línea.
              </li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Filtros de fecha               */}
        {/* ----------------------------- */}
        <section id="filtros-fecha">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            5. Filtros de fecha
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Sobre la tabla de movimientos encontrarás dos selectores:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Desde *:</strong> Fecha de inicio del rango. Por defecto aparece el primer día del mes en curso.
              </li>
              <li>
                <strong>Hasta *:</strong> Fecha final del rango. Por defecto aparece la fecha actual.
              </li>
            </ul>
            Para cambiar el intervalo:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                Haz clic en el ícono de calendario junto a “Desde” y selecciona la fecha deseada.
              </li>
              <li>
                Haz clic en el ícono de calendario junto a “Hasta” y elige la fecha de cierre.
              </li>
              <li>La tabla se recargará automáticamente mostrando solo los movimientos dentro de ese rango.</li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/submayor_contable_filtros_fecha.png"
            alt="Filtros de fecha en Submayor contable"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Cómo crear un nuevo asiento    */}
        {/* ----------------------------- */}
        <section id="nuevo-asiento">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            6. Cómo crear un nuevo asiento
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Si la cuenta seleccionada admite movimientos manuales, verás un botón azul{" "}
            <strong>“Nuevo asiento”</strong> en la parte superior derecha del panel de Movimientos contables.
            Para registrar un asiento:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                Haz clic en <strong>“Nuevo asiento”</strong>. Se abrirá un modal similar al del Libro Diario.
              </li>
              <li>
                Completa los campos obligatorios (Fecha, Tipo de asiento, Descripción) y agrega las líneas de
                débito/crédito. La cuenta seleccionada en Submayor se preselecciona automáticamente como una de las
                líneas.
              </li>
              <li>
                Haz clic en <strong>“Guardar”</strong> para crear el asiento en estado “Sin Confirmar”, o en{" "}
                <strong>“Confirmar”</strong> para validarlo inmediatamente.
              </li>
              <li>
                Al confirmar, el movimiento aparecerá en la tabla de Movimientos contables y actualizará el saldo.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/submayor_contable_nuevo_asiento.png"
            alt="Modal Nuevo asiento desde Submayor contable"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Preguntas frecuentes           */}
        {/* ----------------------------- */}
        <section id="preguntas">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            7. Preguntas frecuentes
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Por qué no veo movimientos en la tabla?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Asegúrate de haber seleccionado una cuenta en el árbol. Luego verifica que el rango de fechas abarque
            los movimientos que esperas ver. Si la cuenta no tiene movimientos en ese rango, la tabla quedará vacía.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Qué indica el botón “Cuenta de movimiento”?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Ese botón confirma que la cuenta es <strong>“de movimiento”</strong>, es decir, puede recibir débitos y
            créditos. Si una cuenta no lo muestra, no podrás crear asientos manuales para ella.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Cómo expandir un asiento para ver todas sus líneas?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Haz clic en la flecha ▼ al lado izquierdo del número de asiento (ej.: CP-2/5/2025). Esto desplegará cada
            línea contable (cuenta, débito, crédito) que componen ese asiento.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Cómo edito o anulo un movimiento existente?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Debes ir al módulo <em>Contabilidad → Libro diario</em> y buscar el asiento correspondiente. Desde ahí
            podrás editar, confirmar, o anular el asiento según su estado. El Submayor contable solo muestra datos de lectura
            y acceso rápido para nuevos asientos, pero la edición de movimientos se realiza en Libro Diario.
          </Typography>
        </section>
      </Box>
    </Box>
  );
};

export default AyudaSubmayorContable;
