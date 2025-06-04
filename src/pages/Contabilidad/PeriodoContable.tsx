// src/pages/Contabilidad/AyudaPeriodoContable.tsx
import React from "react";
import { Box, Typography, List, ListItem, Link, ListItemText, Divider } from "@mui/material";

/**
 * Página de ayuda para “Períodos contables” en Balaxys ERP.
 * Describe cómo acceder al módulo, interpretar el listado de períodos,
 * y usar las acciones disponibles (Cerrar año, Cerrar período, Abrir período).
 */
const AyudaPeriodoContable: React.FC = () => {
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
            <Link href="#acceso-modulo" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Acceso al módulo" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#vista-listado" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Vista de listado" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#columnas-listado" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Columnas del listado" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#acciones-principales" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Acciones principales" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#cerrar-ano" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Cómo cerrar el año" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#cerrar-periodo" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Cómo cerrar un período" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#abrir-periodo" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Cómo abrir un nuevo período" />
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
           Períodos Contables
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            El módulo <strong>Períodos contables</strong> en Balaxys ERP gestiona la apertura y cierre de períodos
            (meses) y años fiscales. Mantener los períodos correctamente cerrados garantiza la integridad de los
            registros contables y evita modificaciones posteriores a las transacciones históricas.
            En esta guía aprenderás a:
            <ul style={{ marginLeft: "20px" }}>
              <li>Acceder al módulo desde Configuración → Contabilidad.</li>
              <li>Interpretar el listado de períodos contables.</li>
              <li>Utilizar las acciones de “Cerrar año”, “Cerrar período” y “Abrir período”.</li>
              <li>Resolver dudas comunes sobre el flujo de cierre contable.</li>
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
            Para navegar a Períodos contables:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                Haz clic en el menú lateral principal y selecciona <em>Configuración → Contabilidad → Períodos contables</em>.
              </li>
              <li>
                La pantalla mostrará el <strong>breadcrumb</strong> “Inicio &gt; Configuración &gt; Períodos contables” en la parta superior.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/períodos_contables_menu.png"
            alt="Menú: Configuración → Contabilidad → Períodos contables"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Vista de listado             */}
        {/* ----------------------------- */}
        <section id="vista-listado">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            2. Vista de listado
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Al ingresar, verás una tabla con todos los períodos contables existentes. Por defecto se muestra el año en curso.
            Encima del listado hay botones azules de acciones globales:
          </Typography>
          <Box
            component="img"
            src="/assets/img/períodos_contables_listado.png"
            alt="Listado de Períodos contables"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Cada fila representa un mes del año. En la parte superior derecha también encontrarás:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Botón “Cerrar año”</strong>: Cierra todos los períodos abiertos del año seleccionado.</li>
              <li>
                <strong>Botón “Cerrar período”</strong>: Cierra el mes seleccionado para prevenir ajustes posteriores.</li>
              <li>
                <strong>Botón “Abrir período”</strong>: Abre el mes siguiente una vez que el período actual esté cerrado.</li>
            </ul>
          </Typography>
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
                <strong>Número:</strong> Número de mes (1 = Enero, 2 = Febrero, … 12 = Diciembre).</li>
              <li>
                <strong>Mes:</strong> Nombre del mes correspondiente (Enero, Febrero, etc.).</li>
              <li>
                <strong>Última apertura:</strong> Fecha y hora en que este período se abrió por última vez.</li>
              <li>
                <strong>Último cierre:</strong> Fecha y hora en que este período se cerró por última vez. Si está vacío, significa que nunca se cerró.</li>
              <li>
                <strong>Estado:</strong> Indica si el período está <em>“Abierto”</em> (en verde) o <em>“Cerrado”</em> (en gris).</li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Acciones principales           */}
        {/* ----------------------------- */}
        <section id="acciones-principales">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            4. Acciones principales
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En la esquina superior derecha del módulo verás tres botones clave:
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            4.1. Cerrar año
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            - Al hacer clic en <strong>“Cerrar año”</strong>, se cerrarán automáticamente todos los períodos abiertos
            del año en curso. Esto impide registrar o modificar asientos contables en esos meses. Asegúrate de haber
            terminado todos los asientos antes de ejecutar esta acción.
          </Typography>
          <Box
            component="img"
            src="/assets/img/períodos_contables_btn_cerrar_año.png"
            alt="Botón Cerrar año"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            4.2. Cerrar período
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            - Selecciona la fila del mes que deseas cerrar, luego haz clic en <strong>“Cerrar período”</strong>. 
            El sistema pedirá confirmación antes de cerrar el mes seleccionado. Una vez cerrado,
            no podrás agregar, editar ni eliminar asientos para ese mes.
          </Typography>
          <Box
            component="img"
            src="/assets/img/períodos_contables_btn_cerrar_periodo.png"
            alt="Botón Cerrar período"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            4.3. Abrir período
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            - Una vez que un mes está cerrado, su fila mostrará “Cerrado”. Para volver a habilitar registros contables
            en ese mes, selecciónalo y haz clic en <strong>“Abrir período”</strong>. El campo “Estado” cambiará a “Abierto”
            y podrás volver a ingresar asientos para ese mes.
          </Typography>
          <Box
            component="img"
            src="/assets/img/períodos_contables_btn_abrir_periodo.png"
            alt="Botón Abrir período"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Cómo cerrar el año            */}
        {/* ----------------------------- */}
        <section id="cerrar-ano">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            5. Cómo cerrar el año
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Para cerrar todo el ejercicio fiscal:
            <ul style={{ marginLeft: "20px" }}>
              <li>Haz clic en <strong>“Cerrar año”</strong> en la parte superior.</li>
              <li>El sistema mostrará un mensaje de advertencia indicando que se cerrarán todos los meses abiertos del año.</li>
              <li>Confirma la acción. Automáticamente, todos los meses pendientes cambiarán a estado “Cerrado”.</li>
              <li>Verifica que los campos “Último cierre” se hayan actualizado con la fecha y hora actual.</li>
            </ul>
            Nota: Esta acción no se puede revertir masivamente; si necesitas reabrir un mes, hazlo individualmente con “Abrir período”.
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Cómo cerrar un período        */}
        {/* ----------------------------- */}
        <section id="cerrar-periodo">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            6. Cómo cerrar un período
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Para cerrar un único mes:
            <ul style={{ marginLeft: "20px" }}>
              <li>Haz clic en la fila del mes que deseas cerrar (por ejemplo, Mayo = Número 5).</li>
              <li>Presiona <strong>“Cerrar período”</strong> en la esquina superior derecha.</li>
              <li>Confirma la ventana emergente que advierte sobre la acción de cierre.</li>
              <li>Al cierre exitoso, el campo “Estado” de ese mes mostrará “Cerrado” en color gris y 
                la columna “Último cierre” se actualizará.</li>
            </ul>
            Asegúrate de haber ingresado todos los asientos e información de ese mes antes de cerrarlo,
            ya que no podrás modificarlos hasta reabrir el período.
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Cómo abrir un nuevo período    */}
        {/* ----------------------------- */}
        <section id="abrir-periodo">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            7. Cómo abrir un nuevo período
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Cuando un mes está en estado “Cerrado” y deseas volver a registrar asientos:
            <ul style={{ marginLeft: "20px" }}>
              <li>Selecciona la fila del mes cerrado (ej.: Abril si ya fue cerrado).</li>
              <li>Haz clic en <strong>“Abrir período”</strong>.</li>
              <li>Confirma la acción en la ventana emergente.</li>
              <li>El campo “Estado” cambiará a “Abierto” en color verde, y la columna “Última apertura” registrará 
                la nueva fecha y hora.</li>
            </ul>
            Ten en cuenta que abrir un período puede afectar reportes financieros que ya hayan sido generados con 
            anterioridad.
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Preguntas frecuentes          */}
        {/* ----------------------------- */}
        <section id="preguntas">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            8. Preguntas frecuentes
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Cuál es la diferencia entre “Cerrar período” y “Cerrar año”?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            - <strong>Cerrar período</strong> solo aplica al mes seleccionado.  
            - <strong>Cerrar año</strong> cierra todos los meses abiertos del año en curso de forma simultánea.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Puedo reabrir un período ya cerrado?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Sí. Selecciona el mes cerrado y haz clic en <strong>“Abrir período”</strong>. Esto devolverá el estado a “Abierto”
            y actualizará “Última apertura”. Luego podrás registrar o modificar asientos.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Qué sucede si cierro un año antes de terminar un mes?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Si ejecutas <strong>“Cerrar año”</strong> y alguno de los meses no tiene asientos pendientes, 
            el sistema los marcará como cerrados todos. Asegúrate de haber finalizado registros en cada mes antes de cerrar el año.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Cómo veo la fecha y hora exacta en que se abrió o cerró un período?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Las columnas <strong>“Última apertura”</strong> y <strong>“Último cierre”</strong> muestran un sello de fecha y hora 
            (formato “DD/MM/YYYY HH:mm:ss”). Consulta estas columnas para verificar al detalle cuándo se realizó cada acción.
          </Typography>
        </section>
      </Box>
    </Box>
  );
};

export default AyudaPeriodoContable;
