// src/pages/PrimerosPasos/ComienzaConBalaxys.tsx

import React from "react";
import { Box, Typography, List, ListItem, Link, ListItemText, Divider } from "@mui/material";
import { Helmet } from "react-helmet-async";

/**
 * Página de ayuda “Comienza con Balaxys ERP”
 * Guía inicial para dar de alta tu empresa, configurar contabilidad, crear usuarios y
 * cargar tus datos via importación. Se basa en las capturas de pantalla de la interfaz real.
 */
const ComienzaConBalaxys: React.FC = () => {
  return (
    <>
      {/* ========================= */}
      {/*   HEAD / META (SEO)      */}
      {/* ========================= */}
      <Helmet>
        <title>Comienza con Balaxys ERP | Guía de Inicio</title>
        <meta
          name="description"
          content="Guía paso a paso para comenzar en Balaxys ERP: alta de empresa, configuración de periodos contables, parametrización, creación de usuarios e importación de datos."
        />
        <link
          rel="canonical"
          href="https://help.balaxys.com/primeros-pasos/comienza-con-balaxys"
        />
      </Helmet>

      {/* ========================= */}
      {/*   CONTENEDOR PRINCIPAL   */}
      {/* ========================= */}
      <Box sx={{ display: "flex", padding: "20px" }}>
        {/* -------------------------------- */}
        {/* 1. ÍNDICE DE SECCIONES           */}
        {/* -------------------------------- */}
        <Box
          component="nav"
          aria-label="Índice de Comienza con Balaxys"
          sx={{
            flex: 1,
            position: "sticky",
            top: 20,
            height: "100vh",
            paddingRight: "24px",
            paddingLeft: "16px",
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
              <Link href="#alta-empresa" underline="hover" color="#1976d2">
                <ListItemText primary="1. Alta de Empresa" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#periodos-contables" underline="hover" color="#1976d2">
                <ListItemText primary="2. Periodos Contables" />
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="#parametrizacion-contable"
                underline="hover"
                color="#1976d2"
              >
                <ListItemText primary="3. Parametrización Contable" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#usuarios" underline="hover" color="#1976d2">
                <ListItemText primary="4. Nuevos Usuarios / Empleados" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#importar-datos" underline="hover" color="#1976d2">
                <ListItemText primary="5. Importa tus Datos" />
              </Link>
            </ListItem>
          </List>
        </Box>

        {/* -------------------------------- */}
        {/* 2. CONTENIDO PRINCIPAL           */}
        {/* -------------------------------- */}
        <Box component="main" sx={{ flex: 3, overflowY: "auto", paddingLeft: "24px" }}>
          {/* ============================= */}
          {/* SECCIÓN 1: Alta de Empresa   */}
          {/* ============================= */}
          <section id="alta-empresa">
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              1. Alta de Empresa
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Para comenzar a utilizar Balaxys ERP, lo primero es registrar los datos básicos
              de tu empresa. Haz clic en el icono con el nombre de tu empresa (o tu logotipo) 
              que aparece en la esquina superior del menú principal. Se abrirá un modal similar a:
            </Typography>
            <Box
              component="img"
              src="/assets/img/empresa_modal.png"
              alt="Modal de alta / edición de Empresa"
              sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
            />
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Dentro del modal “Empresa”, completa estos campos obligatorios:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  <strong>Nombre *: </strong> Razón social o nombre de tu compañía.
                </li>
                <li>
                  <strong>RUT o NIF *: </strong> Identificador fiscal según tu país.
                </li>
                <li>
                  <strong>Teléfono: </strong> Número de contacto principal.
                </li>
              </ul>
              Además, en la sección “Información complementaria” puedes indicar:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  <strong>Página web:</strong> URL oficial de tu empresa.
                </li>
                <li>
                  <strong>Dirección:</strong> Calle y ciudad de tu oficina principal.
                </li>
                <li>
                  <strong>Moneda predeterminada:</strong> Por ejemplo, UYU (Peso Uruguayo).<br/>
                  <em>(Este dato se utiliza por defecto en facturas, pagos y demás módulos.)</em>
                </li>
                <li>
                  <strong>País:</strong> Para definir normativa fiscal local.
                </li>
              </ul>
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/* ===================================== */}
          {/* SECCIÓN 2: Periodos Contables         */}
          {/* ===================================== */}
          <section id="periodos-contables">
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              2. Periodos Contables
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Una vez registrada la empresa, el siguiente paso es abrir y cerrar los períodos
              contables para que el sistema acepte transacciones en el mes vigente. Para ello:
            </Typography>
            <Typography variant="body1" paragraph sx={{ marginLeft: "20px", textAlign: "justify" }}>
              1. En el menú lateral principal, ve a <strong>Contabilidad</strong>.  
            </Typography>
            <Box
              component="img"
              src="/assets/img/contabilidad_card.png"
              alt="Tarjeta de Contabilidad en el menú principal"
              sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
            />
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              2. Haz clic en <strong>Períodos contables</strong> dentro de la sección “Contabilidad”:
            </Typography>
            <Box
              component="img"
              src="/assets/img/periodos_contables_listado.png"
              alt="Listado de Periodos Contables"
              sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
            />
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              3. Para abrir el periodo actual (por ejemplo “Mayo”), presiona “Abrir periodo”.  
              Si necesitas cerrar el mes anterior primero, selecciona “Cerrar periodo”.  
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Mantener tus periodos contables correctamente abiertos o cerrados garantiza que 
              todas las transacciones (facturas, pagos, asientos) se registren en el mes adecuado.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/* ============================================ */}
          {/* SECCIÓN 3: Parametrización Contable          */}
          {/* ============================================ */}
          <section id="parametrizacion-contable">
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              3. Parametrización Contable
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Antes de generar asientos automáticos o registrar facturas / pagos, debes definir la 
              configuración contable básica. Desde el mismo menú de “Contabilidad”, ingresa a 
              “Parametrización contable”:
            </Typography>
            <Box
              component="img"
              src="/assets/img/contabilidad_menu.png"
              alt="Opciones de Contabilidad (Parametrización contable, Períodos, Asientos automáticos...)"
              sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
            />
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              En “Parametrización contable” podrás:
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  Definir cuentas contables predeterminadas para compras, ventas, inventarios e impuestos.
                </li>
                <li>
                  Configurar reglas de asiento automático por tipo de transacción (recepciones, facturas, pagos).
                </li>
                <li>
                  Asignar subcuentas, centros de costo y análisis según la estructura contable de tu empresa.
                </li>
              </ul>
              Completar esta sección correctamente asegura que Balaxys genere automáticamente 
              los asientos contables al facturar, pagar o conciliar bancos.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/* ============================================ */}
          {/* SECCIÓN 4: Nuevos Usuarios / Empleados       */}
          {/* ============================================ */}
          <section id="usuarios">
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              4. Crear Nuevos Usuarios / Empleados
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              En Balaxys ERP puedes dar de alta a tu equipo para asignarles roles y accesos. Para 
              ello, ve nuevamente al menú de <strong>Empresa</strong> (clic en el nombre o logotipo):
            </Typography>
            <Box
              component="img"
              src="/assets/img/empresa_desplegable.png"
              alt="Menú desplegable de Empresa (Configuración, Planes, Roles, Usuarios...)"
              sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
            />
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Luego, selecciona <strong>Usuarios</strong> para ver el listado actual de cuentas 
              y otorgar permisos. Para agregar un empleado o usuario nuevo, haz clic en “Nuevo empleado” 
              u “Nuevo usuario” según se muestre:
            </Typography>
            <Box
              component="img"
              src="/assets/img/usuario_modal.png"
              alt="Modal para crear nuevo Empleado / Usuario"
              sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
            />
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Completa los campos obligatorios:
              <ul style={{ marginLeft: "20px" }}>
                <li><strong>Nombre y Apellidos *:</strong> datos del colaborador.</li>
                <li><strong>Correo *:</strong> e-mail para login y notificaciones.</li>
                <li><strong>Teléfono:</strong> número de contacto.</li>
                <li><strong>Cuenta contable:</strong> si corresponde a nómina, selecciona la cuenta de sueldos.</li>
                <li><strong>País *:</strong> para definir normativa laboral local.</li>
                <li><strong>“Es usuario”:</strong> marca esta casilla si quieres que tenga login al ERP.</li>
              </ul>
              Al guardar, el nuevo usuario recibirá un correo para activar su acceso (si marca “Es usuario”).
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
          </section>

          {/* ================================= */}
          {/* SECCIÓN 5: Importa tus Datos      */}
          {/* ================================= */}
          <section id="importar-datos">
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              5. Importa tus Datos
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Una de las ventajas de Balaxys ERP es que puedes importar toda tu información histórica
              (productos, clientes, proveedores, asientos iniciales) a través de archivos de Excel 
              o CSV (.xlsx, .xls, .csv). De ese modo, comienzas a trabajar sin perder tiempo:
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              1. Prepara tus datos en una plantilla de Excel con columnas obligatorias. Puedes descargar 
              las plantillas desde la sección de importaciones (ubicadas en cada módulo: Inventario, 
              Contabilidad, Ventas, Compras, etc.).  
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              2. Ve al módulo correspondiente (por ejemplo, <em>Inventario → Productos</em>), y haz clic en 
              “Importar datos” o el icono de importación.  
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              3. Selecciona tu archivo (.csv, .xlsx), valida que los campos coincidan y completa la carga.  
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              4. Repite el proceso para cada entidad (Clientes, Proveedores, Artículos, Asientos contables, etc.).  
              El sistema mostrará un resumen de registros importados y posibles errores para corregir.
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
              Con esto, tu empresa ya está registrada, los periodos contables abiertos, tu contabilidad 
              parametrizada, tu equipo dado de alta y los datos iniciales importados. ¡Ya puedes comenzar a 
              emitir facturas, registros de compras, asientos y reportes en tiempo real!
            </Typography>
          </section>
        </Box>
      </Box>
    </>
  );
};

export default ComienzaConBalaxys;
