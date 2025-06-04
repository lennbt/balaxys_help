// src/pages/Contabilidad/AyudaLibroDiario.tsx
import React from "react";
import { Box, Typography, List, ListItem, Link, ListItemText, Divider } from "@mui/material";

/**
 * Página de ayuda para el "Libro Diario" (Registro de asientos contables) en Balaxys ERP.
 * Describe cómo acceder al módulo, entender las columnas, crear y gestionar asientos.
 */
const AyudaLibroDiario: React.FC = () => {
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
            <Link href="#filtro-busqueda" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Filtro y búsqueda" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#abrir-modal" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Abrir modal de nuevo asiento" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#campos-formulario" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Campos del formulario" />
            </Link>
          </ListItem>
          <ListItem>
           
              <ListItemText primary="Acciones: Guardar, Confirmar, Eliminar" />
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
            Ayuda: Libro Diario
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            El <strong>Libro Diario</strong> en Balaxys ERP muestra todos los asientos contables registrados, 
            ordenados cronológicamente. Permite visualizar, editar, confirmar o anular cada asiento. 
            En esta guía encontrarás:
            <ul style={{ marginLeft: "20px" }}>
              <li>Cómo acceder al módulo de Libro Diario desde el menú.</li>
              <li>Descripción de las columnas y paneles disponibles en el listado.</li>
              <li>Uso de filtros y búsqueda rápida para localizar asientos.</li>
              <li>Cómo abrir el formulario para crear un nuevo asiento.</li>
              <li>Explicación de cada campo del formulario modal.</li>
              <li>Acciones disponibles: guardar, confirmar, editar y eliminar.</li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Vista de listado             */}
        {/* ----------------------------- */}
        <section id="vista-listado">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Vista de listado
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Para acceder, dirígete al menú principal y selecciona <em>Contabilidad → Libro diario</em>. 
            Aparecerá una tabla con todos los asientos registrados en orden cronológico inverso. 
            En la parte superior, verás:
            <ul style={{ marginLeft: "20px" }}>
              <li><strong>Botón “Nuevo asiento”</strong>: abre el modal de creación de un asiento manual.</li>
              <li><strong>Ícono “Recargar”</strong>: refresca el listado con los últimos datos.</li>
              <li><strong>Menú de tres puntos</strong>: opciones para exportar o imprimir el libro diario.</li>
              <li><strong>Campo de búsqueda rápida</strong>: filtra por número, cuenta o monto.</li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/libro_diario_listado.png"
            alt="Listado de Libro Diario"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Columnas del listado          */}
        {/* ----------------------------- */}
        <section id="columnas-listado">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Columnas del listado
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Cada fila del Libro Diario muestra los siguientes campos:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Estado:</strong> Muestra si el asiento está “Sin Confirmar” o “Confirmado”. Un asiento sin confirmar 
                no afecta balances ni reportes financieros.
              </li>
              <li>
                <strong>Número:</strong> Identificador único del asiento (p. ej., CP-3/5/2025). El desplegable ▼ permite 
                expandir para ver las cuentas afectadas y sus débitos/créditos.
              </li>
              <li>
                <strong>Fecha:</strong> Fecha en que se creó o confirmó el asiento (formato YYYY-MM-DD).
              </li>
              <li>
                <strong>Tipo asiento:</strong> Describe el origen del asiento (Cobros, Facturas, Recepciones, Ajustes, etc.).
              </li>
              <li>
                <strong>Cuenta:</strong> Muestra la primera línea de cuenta cuando está expandido; de forma resumida, indica 
                la cuenta principal o naturaleza del asiento.
              </li>
              <li>
                <strong>Débito:</strong> Total de débitos en el asiento.  
              </li>
              <li>
                <strong>Crédito:</strong> Total de créditos en el asiento.  
              </li>
              <li>
                <strong>Acciones:</strong> Íconos para:
                <ul style={{ marginLeft: "20px" }}>
                  <li><strong>Ver detalles (ojo):</strong> Muestra el asiento expandido en modo lectura.</li>
                  <li><strong>Editar (lápiz):</strong> Abre el modal para modificar el asiento antes de confirmar.</li>
                  <li><strong>Confirmar (check):</strong> Convierte el asiento a estado “Confirmado” y lo incorpora 
                    a balances y reportes.</li>
                  <li><strong>Anular (X):</strong> Elimina o anula el asiento si aún no está confirmado.</li>
                </ul>
              </li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Filtro y búsqueda             */}
        {/* ----------------------------- */}
        <section id="filtro-busqueda">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Filtro y búsqueda
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            El buscador rápido ubicado en la esquina superior derecha filtra en tiempo real por texto, 
            permitiendo encontrar asientos que contengan coincidencias en:
            <ul style={{ marginLeft: "20px" }}>
              <li>Número de asiento.</li>
              <li>Nombre de cuenta o subcuenta.</li>
              <li>Montos de débitos o créditos.</li>
              <li>Tipo de asiento.</li>
            </ul>
            También puedes expandir cada asiento mediante el desplegable ▼ para ver las líneas de débito y crédito, 
            lo cual ayuda a concretar tu búsqueda.
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Abrir modal                   */}
        {/* ----------------------------- */}
        <section id="abrir-modal">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Abrir modal de nuevo asiento
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Para registrar un asiento manual, haz clic en el botón azul <strong>“Nuevo asiento”</strong> 
            en la parte superior derecha del listado. Esto abrirá un formulario modal donde podrás ingresar 
            todos los datos del asiento antes de confirmarlo.
          </Typography>
          <Box
            component="img"
            src="/assets/img/libro_diario_modal_btn.png"
            alt="Botón Nuevo asiento en Libro Diario"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Campos del formulario         */}
        {/* ----------------------------- */}
        <section id="campos-formulario">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Campos del formulario “Nuevo asiento”
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            El modal que aparece al crear o editar un asiento incluye los siguientes campos:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Fecha *:</strong> Selector de fecha en formato YYYY-MM-DD. Indica el día contable del asiento.
              </li>
              <li>
                <strong>Tipo de asiento *:</strong> Desplegable que muestra las opciones:
                “Recepciones”, “Facturas”, “Cobros”, “Pagos”, “Ajustes”, etc. Seleccionar el origen de la transacción.
              </li>
              <li>
                <strong>Número de asiento:</strong> Campo de texto para asignar un identificador (ej.: “LD-10/05/2025”). 
                Si se deja vacío, el sistema genera uno automático al confirmar.
              </li>
              <li>
                <strong>Descripción:</strong> Campo multiline donde puedes añadir un resumen o comentario sobre el asiento.
              </li>
            </ul>
            A continuación, verás la tabla de líneas contables donde se registran los débitos y créditos:
            <ul style={{ marginLeft: "20px", marginBottom: "16px" }}>
              <li>
                <strong>Cuenta *:</strong> Desplegable para seleccionar la cuenta o subcuenta contable. Al elegirla, 
                se muestra el nombre completo (p. ej., “110101. Caja”).
              </li>
              <li>
                <strong>Subcuenta:</strong> Si la cuenta principal tiene subniveles, permite especificar el subnivel exacto.
              </li>
              <li>
                <strong>Débito:</strong> Campo numérico para indicar el monto a debitar en esa cuenta.
              </li>
              <li>
                <strong>Crédito:</strong> Campo numérico para indicar el monto a acreditar en esa cuenta.
              </li>
              <li>
                <strong>Centro de costo:</strong> (Opcional) Desplegable para asignar la línea a un centro de costo específico.
              </li>
              <li>
                <strong>Proyecto / Análisis:</strong> (Opcional) Campo para clasificar la línea en un proyecto o unidad de análisis.
              </li>
              <li>
                <strong>Acción (papelera):</strong> Icono que elimina la línea de la tabla si fue agregada incorrectamente.
              </li>
            </ul>
            Para añadir más filas, haz clic en <strong>“Agregar línea”</strong> abajo de la última fila.
          </Typography>
          <Box
            component="img"
            src="/assets/img/libro_diario_modal_formulario.png"
            alt="Formulario de Nuevo Asiento en Libro Diario"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Acciones del formulario        */}
        {/* ----------------------------- */}
        <section id="acciones-formulario">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Acciones: Guardar, Confirmar y Eliminar
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Al pie del modal encontrarás tres botones principales:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Guardar:</strong> Crea el asiento en estado “Sin Confirmar” y lo adiciona al listado. Puedes 
                revisarlo más tarde o editarlo antes de confirmar.
              </li>
              <li>
                <strong>Confirmar:</strong> Valida que débitos y créditos estén balanceados (igual valor total) y 
                cambia el estado a “Confirmado”. El asiento afectará inventarios y reportes financieros.
              </li>
              <li>
                <strong>Cancelar:</strong> Cierra el modal sin guardar ningún cambio.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/libro_diario_modal_acciones.png"
            alt="Botones Guardar, Confirmar y Cancelar en el formulario"
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
            ¿Qué sucede si los débitos no igualan a los créditos?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            El sistema no permitirá confirmar el asiento. Verifica que la suma de todos los débitos 
            coincida con la suma de todos los créditos antes de pulsar “Confirmar”.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Puedo editar un asiento ya confirmado?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            No. Una vez confirmado, el asiento se considera definitivo. Si necesitas cambiarlo, podrías anularlo 
            y crear uno nuevo con los datos corregidos.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Cómo anulo un asiento sin confirmar?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Haz clic en el icono “X” (Eliminar) en la columna de acciones junto al asiento. Esto borrará el registro 
            sin afectar nada, siempre que esté en estado “Sin Confirmar”.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Puedo filtrar por un rango de fechas específico?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Actualmente no hay un filtro de rango en Libro Diario. Utiliza la búsqueda rápida con textos parciales 
            de fecha (p. ej., “31/05/2025”) o número de asiento para localizar registros de una fecha concreta.
          </Typography>
        </section>
      </Box>
    </Box>
  );
};

export default AyudaLibroDiario;
