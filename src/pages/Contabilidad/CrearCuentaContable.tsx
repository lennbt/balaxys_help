// src/pages/Configuracion/AyudaCrearCuentaContable.tsx
import React from "react";
import { Box, Typography, List, ListItem, Link, ListItemText, Divider } from "@mui/material";

/**
 * Página de ayuda para “Crear Cuenta Contable” en Balaxys ERP.
 * Describe cómo acceder al plan de cuentas, navegar el árbol y usar el formulario
 * para agregar nuevas subcuentas contables.
 */
const AyudaCrearCuentaContable: React.FC = () => {
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
            <Link href="#vista-plan" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Vista del Plan de Cuentas" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#abrir-formulario" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Abrir formulario de nueva cuenta" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#campos-formulario" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Campos del formulario" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#acciones" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Acciones: Guardar y Cancelar" />
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
            Crear Cuenta Contable
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            El módulo <strong>Plan de cuentas</strong> de Balaxys ERP permite organizar todas las cuentas
            contables en un árbol jerárquico (Activos, Pasivos, Patrimonio, Ingresos, Gastos, etc.).  
            Aquí aprenderás a:
            <ul style={{ marginLeft: "20px" }}>
              <li>Acceder al plan de cuentas y navegar su estructura.</li>
              <li>Abrir el formulario para agregar una nueva subcuenta.</li>
              <li>Completar cada campo del formulario de “Nueva cuenta contable”.</li>
              <li>Guardar o cancelar la creación de la subcuenta.</li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Vista del Plan de Cuentas      */}
        {/* ----------------------------- */}
        <section id="vista-plan">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Vista del Plan de Cuentas
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Para gestionar el plan de cuentas, ve a <em>Configuración → Plan de cuentas</em>.  
            Aparecerá un árbol en la columna izquierda con las categorías principales (1. Activos, 2. Pasivos, etc.).  
            Al hacer clic en una carpeta, se despliegan sus subcategorías y subcuentas.  
            En la parte derecha se muestra la “Información de la cuenta” seleccionada.
          </Typography>
          <Box
            component="img"
            src="/assets/img/plan_de_cuentas_listado.png"
            alt="Listado Plan de Cuentas"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Observa que cada carpeta contiene:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                El nombre de la cuenta padre (ej.: “51. Costos de Ventas”), marcado en azul cuando está seleccionada.
              </li>
              <li>
                Los íconos de carpeta indican que hay subcuentas dentro (folder icon).  
                Los íconos de documento indican subcuentas de última línea (document icon).
              </li>
              <li>
                En la derecha, la sección “Información de la cuenta” muestra:
                <ul style={{ marginLeft: "20px" }}>
                  <li><strong>Código:</strong> Número de la cuenta padre (ej.: 51).</li>
                  <li><strong>Nombre:</strong> Nombre de la cuenta padre (ej.: Costos de Ventas).</li>
                  <li><strong>Descripción:</strong> Campo descriptivo vacío si no se ha completado.</li>
                  <li><strong>Clasificación:</strong> Grupo contable (ej.: Gastos).</li>
                  <li><strong>Naturaleza:</strong> Deudora o Acreedora.</li>
                </ul>
              </li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Abrir formulario             */}
        {/* ----------------------------- */}
        <section id="abrir-formulario">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Abrir formulario de nueva cuenta
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Para agregar una subcuenta bajo la cuenta actualmente seleccionada, haz clic en el ícono 
            <strong> “+”</strong> que aparece en la esquina superior derecha de la sección “Información de la cuenta”.  
            Esto abrirá el modal de “Nueva cuenta contable”.
          </Typography>
          <Box
            component="img"
            src="/assets/img/plan_de_cuentas_btn_nueva.png"
            alt="Botón Nueva cuenta contable"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Campos del formulario         */}
        {/* ----------------------------- */}
        <section id="campos-formulario">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Campos del formulario “Nueva cuenta contable”
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En el modal de “Nueva cuenta contable” verás los siguientes campos obligatorios y opcionales:
          </Typography>
          <ul style={{ marginLeft: "20px", marginBottom: "16px" }}>
            <li>
              <strong>Cuenta contable *:</strong> Desplegable que muestra la cuenta padre actualmente seleccionada
              (por ejemplo, “51. Costos de Ventas”). No puede modificarse, ya que define dónde se agregará la subcuenta.
            </li>
            <li>
              <strong>Nombre subcuenta *:</strong> Campo de texto libre donde ingresa el nombre exacto de la nueva subcuenta 
              (ej.: “5103. Costo de Bienes Vendidos”).
            </li>
            <li>
              <strong>Naturaleza *:</strong> Dropdown con las opciones <em>Deudora</em> o <em>Acreedora</em>.  
              Indica la naturaleza contable de la subcuenta.
            </li>
            <li>
              <strong>Cuenta reguladora:</strong> Checkbox opcional que, al activarlo, convierte esta subcuenta en “reguladora” 
              (útil para amortizaciones o provisiones).
            </li>
            <li>
              <strong>Cuenta de banco:</strong> Checkbox opcional. Si lo marcas, la subcuenta se usará exclusivamente para 
              cuentas bancarias en el módulo de bancos.
            </li>
            <li>
              <strong>Descripción:</strong> Campo multiline para ingresar detalles adicionales sobre la subcuenta 
              (ej.: “Cuenta para registrar costos de mercadería vendida”).
            </li>
          </ul>
          <Box
            component="img"
            src="/assets/img/plan_de_cuentas_modal.png"
            alt="Formulario Nueva cuenta contable"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Acciones                       */}
        {/* ----------------------------- */}
        <section id="acciones">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Acciones: Guardar y Cancelar
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Una vez completados los campos, en la parte inferior del modal encontrarás dos botones:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Guardar:</strong> Valida que los campos obligatorios estén completos y crea la nueva subcuenta contable. 
                Al guardarse, el árbol del plan de cuentas se actualiza mostrando la subcuenta recién creada.
              </li>
              <li>
                <strong>Cancelar:</strong> Cierra el modal sin guardar cambios. Ningún dato ingresado se conservará.
              </li>
            </ul>
          </Typography>
          <Box
            component="img"
            src="/assets/img/plan_de_cuentas_modal_acciones.png"
            alt="Formulario: Botones Guardar y Cancelar"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ----------------------------- */}
        {/* Preguntas Frecuentes          */}
        {/* ----------------------------- */}
        <section id="preguntas">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Preguntas frecuentes
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Puedo cambiar la cuenta padre desde el formulario?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            No. La “Cuenta contable” que aparece en el formulario se corresponde con la cuenta padre seleccionada en el  
            árbol. Si necesitas crear la subcuenta bajo otra cuenta, primero selecciona la cuenta padre correcta en el plan de cuentas.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Qué diferencia hay entre “Cuenta reguladora” y “Cuenta de banco”?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            - <strong>Cuenta reguladora:</strong> Se emplea para registrar ajustes automáticos (amortizaciones, provisiones).
            <br />
            - <strong>Cuenta de banco:</strong> Se marca cuando la subcuenta corresponderá a un número de cuenta bancaria,  
            y aparecerá en los listados del módulo de bancos.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Qué pasa si dejo “Descripción” en blanco?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            La descripción es opcional. Sirve para agregar notas internas o aclaraciones sobre la subcuenta.  
            Si queda vacía, solo se mostrará el código y nombre de la cuenta.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Cómo visualizo todas mis subcuentas creadas?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Navega por el árbol en la columna izquierda para expandir la carpeta padre y ver las subcuentas.  
            Cada subcuenta se muestra con el icono de “documento” y su código-nombre.
          </Typography>
        </section>
      </Box>
    </Box>
  );
};

export default AyudaCrearCuentaContable;
