// src/pages/Bancos/QueBancos.tsx
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

const QueBancos: React.FC = () => {
  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* ============================= */}
      {/* 1. ÍNDICE DE NAVEGACIÓN      */}
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
          textAlign: "left",
          borderRight: "1px solid #e0e0e0",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, marginBottom: "16px", color: "#1976d2" }}
        >
          ÍNDICE DE CONTENIDO
        </Typography>
        <List>
          <ListItem>
            <Link href="#introduccion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="1. Introducción al Módulo Bancos" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#navegacion-modulo" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="2. Navegación del Módulo Bancos" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#crear-editar-bancos" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="3. Crear y Editar Bancos" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#gestion-cuentas" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="4. Gestión de Cuentas Bancarias" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#conciliaciones" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="5. Conciliaciones Bancarias" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#reportes" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="6. Reportes y Análisis" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#faq" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="7. Preguntas Frecuentes" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#enlaces-relacionados" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="8. Enlaces Relacionados" />
            </Link>
          </ListItem>
        </List>
      </Box>

      {/* ============================= */}
      {/* 2. CONTENIDO PRINCIPAL       */}
      {/* ============================= */}
      <Box sx={{ flex: 3, overflowY: "auto", paddingLeft: "20px" }}>
        {/* ----- TÍTULO PRINCIPAL ----- */}
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, textAlign: "justify" }}>
          ¿Qué es el Módulo de Bancos en Balaxys ERP?
        </Typography>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 1. Introducción ======== */}
        <section id="introduccion">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            1. Introducción al Módulo Bancos
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
            El módulo de <strong>Bancos</strong> en Balaxys ERP está diseñado para centralizar y
            gestionar todas las cuentas bancarias de tu empresa. A través de este módulo podrás:
          </Typography>
          <List sx={{ marginLeft: "20px", marginBottom: "16px" }}>
            <ListItem>
              <ListItemText primary="Registrar y mantener el catálogo de entidades bancarias y cuentas." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Configurar parámetros de conciliación, plantillas de importación y mapeos de columnas." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Realizar conciliaciones automáticas o manuales para asegurar que los saldos coincidan con los extractos de banco." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Generar reportes e indicadores financieros basados en transacciones bancarias." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Vincular movimientos bancarios importados con los asientos contables del módulo de Contabilidad." />
            </ListItem>
          </List>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
            Gracias a este módulo, tu equipo de tesorería tendrá una visión clara y actualizada de todas
            las operaciones financieras, facilitando la toma de decisiones y el control de flujo de caja.
          </Typography>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 2. Navegación del Módulo ======== */}
        <section id="navegacion-modulo">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            2. Navegación del Módulo Bancos
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "12px" }}>
            Para acceder al módulo de Bancos, sigue estos pasos:
          </Typography>
          <List sx={{ marginLeft: "20px", marginBottom: "16px" }}>
            <ListItem>
              <ListItemText primary="1. En el menú principal, selecciona “Finanzas”." />
            </ListItem>
            <ListItem>
              <ListItemText primary="2. Dentro de Finanzas, haz clic en “Bancos y Tesorería”." />
            </ListItem>
            <ListItem>
              <ListItemText primary="3. Verás un listado con todas las cuentas bancarias registradas. Desde aquí puedes crear, editar o visualizar detalles de cada cuenta." />
            </ListItem>
            <ListItem>
              <ListItemText primary="4. Utiliza el buscador y los filtros para encontrar rápidamente una cuenta específica." />
            </ListItem>
          </List>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
            En la barra superior de “Bancos y Tesorería” encontrarás botones para:
            <ul>
              <li>
                <strong>Añadir Banco:</strong> Registrar una nueva entidad bancaria con sus parámetros.
              </li>
              <li>
                <strong>Conciliar:</strong> Iniciar el proceso de conciliación de movimientos bancarios.
              </li>
              <li>
                <strong>Ver Detalles:</strong> Mostrar el historial de movimientos, saldo y configuración de la cuenta.
              </li>
            </ul>
          </Typography>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 3. Crear y Editar Bancos ======== */}
        <section id="crear-editar-bancos">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            3. Crear y Editar Bancos
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "12px" }}>
            Antes de poder conciliar movimientos o generar reportes, debes registrar cada entidad
            bancaria. Tanto al crear como al editar un banco, el formulario te pedirá:
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
            3.1. Campos del Formulario
          </Typography>
          <List sx={{ marginLeft: "20px", marginBottom: "16px" }}>
            <ListItem>
              <ListItemText primary="Nombre del Banco: Nombre oficial de la entidad (ej.: “Banco República”)." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Código de Entidad (CBAN): Código único que identifica a la institución dentro de Balaxys." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Tipo de Cuenta: Corriente o Ahorro; determina qué tipo de transacciones puede registrar." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Número de Cuenta: Número completo tal cual lo provee el banco." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Sucursal (Opcional): Nombre o código de sucursal para empresas con múltiples ubicaciones." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Moneda: Selecciona la divisa en que opera la cuenta (UYU, USD, EUR, etc.)." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Descripción (Opcional): Breve nota sobre el uso de esta cuenta (ej.: “Cuenta principal tesorería”)." />
            </ListItem>
          </List>

          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "12px" }}>
            Una vez completados los campos, haz clic en <strong>“Guardar”</strong>. La cuenta se listará
            inmediatamente y estará disponible para configuraciones posteriores (conciliaciones, reportes).
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
            3.2. Editar un Banco Existente
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", marginBottom: "16px", textAlign: "justify" }}>
            Para modificar datos bancarios:
            <ul>
              <li>
                Haz clic en el ícono de lápiz junto a la cuenta en la lista.
              </li>
              <li>
                Ajusta los campos necesarios y luego pulsa <strong>“Actualizar”</strong>.
              </li>
            </ul>
            Todos los movimientos y configuración de <MuiLink component={RouterLink} to="/Bancos/glosario" sx={{textDecoration: "underline",color: "#1976d2","&:hover": {textDecoration: "none",  }, }}>conciliación</MuiLink> previa se mantendrán vinculados,
            salvo que cambies la moneda o el código de entidad, en cuyo caso se recomienda revisar
            las plantillas de importación.
          </Typography>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 4. Gestión de Cuentas Bancarias ======== */}
        <section id="gestion-cuentas">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            4. Gestión de Cuentas Bancarias
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "12px" }}>
            Desde la vista principal de “Bancos y Tesorería” puedes:
          </Typography>
          <List sx={{ marginLeft: "20px", marginBottom: "16px" }}>
            <ListItem>
              <ListItemText primary="Buscar una cuenta por nombre, código o moneda utilizando la barra de búsqueda." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Filtrar cuentas activas o inactivas, o por moneda, para visualizar únicamente la información relevante." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Desactivar o eliminar una cuenta si ya no se va a utilizar (previa conciliación de todos los movimientos pendientes)." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Acceder al historial de movimientos haciendo clic en “Ver detalles”." />
            </ListItem>
          </List>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
            Mantén tus cuentas actualizadas y ordenadas para evitar errores de conciliación o discrepancias
            en informes financieros.
          </Typography>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 5. Conciliaciones Bancarias ======== */}
        <section id="conciliaciones">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            5. Conciliaciones Bancarias
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "12px" }}>
            La conciliación es el proceso de comparar los movimientos bancarios con los asientos
            contables para asegurar que los saldos coincidan. En Balaxys tienes tres métodos principales:
          </Typography>
          <List sx={{ marginLeft: "20px", marginBottom: "16px" }}>
            <ListItem>
              <ListItemText primary="5.1. Conciliación Automática (Bancos Conectados): Cuando tu banco está enlazado, los movimientos se importan en tiempo real y Balaxys sugiere automáticamente las coincidencias." />
            </ListItem>
            <ListItem>
              <ListItemText primary="5.2. Conciliación por Importación (Archivo.xlsx): Si no hay conexión directa, exporta tu extracto como Excel y súbelo al sistema para que el proceso se realice de forma semiautomática." />
            </ListItem>
            <ListItem>
              <ListItemText primary="5.3. Conciliación Manual (sin Conexión ni Importación): Selecciona manualmente cada transacción e ingresa el saldo de tu extracto para completar la conciliación." />
            </ListItem>
          </List>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
            Independientemente del método, la regla es que la diferencia entre el saldo bancario y la suma
            de los movimientos seleccionados debe ser <strong>$0.00</strong> antes de hacer clic en
            <strong> “Conciliar”</strong>. Si deseas pausar el proceso, utiliza la opción de <strong>“Posponer”</strong>.
          </Typography>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 6. Reportes y Análisis ======== */}
        <section id="reportes">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            6. Reportes y Análisis
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "12px" }}>
            El módulo de Bancos genera distintos reportes financieros que te ayudarán a:
          </Typography>
          <List sx={{ marginLeft: "20px", marginBottom: "16px" }}>
            <ListItem>
              <ListItemText primary="Estado de Cuenta: Muestra movimientos bancarios filtrados por rango de fechas." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Resumen de Conciliaciones: Indica qué transacciones ya fueron conciliadas y cuáles están pendientes." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Reporte de Diferencias: Señala las discrepancias entre el saldo contable y el bancario en periodos específicos." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Flujo de Caja Proyectado: Con los saldos y movimientos actuales, Balaxys estima el flujo de efectivo futuro." />
            </ListItem>
          </List>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
            Accede a estos reportes desde el submenú de “Reportes Bancarios” o directamente en la vista
            de detalles de cada cuenta, seleccionando el botón <strong>“Reportes”</strong>.
          </Typography>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 7. Preguntas Frecuentes ======== */}
        <section id="faq">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            7. Preguntas Frecuentes
          </Typography>
          <Box component="dl" sx={{ marginLeft: "20px", marginBottom: "16px" }}>
            <Typography
              component="dt"
              variant="body1"
              sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}
            >
              ¿Cuál es la diferencia entre una Cuenta Corriente y una Cuenta de Ahorro?
            </Typography>
            <Typography
              component="dd"
              variant="body1"
              sx={{ marginBottom: "12px", marginLeft: "20px", textAlign: "justify" }}
            >
              En Balaxys ERP, la Cuenta Corriente está pensada para operaciones diarias como pagos a
              proveedores y cobros de clientes. La Cuenta de Ahorro se utiliza para depósitos de
              excedentes o rendimientos de inversión, con menos transacciones frecuentes.
            </Typography>

            <Typography
              component="dt"
              variant="body1"
              sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}
            >
              ¿Puedo desactivar un banco si ya no lo utilizo?
            </Typography>
            <Typography
              component="dd"
              variant="body1"
              sx={{ marginBottom: "12px", marginLeft: "20px", textAlign: "justify" }}
            >
              Sí. En la lista de Bancos, haz clic en el ícono de “Desactivar” junto a la cuenta. Si la
              cuenta tiene movimientos pendientes de conciliación, Balaxys te mostrará un mensaje para
              resolverlo antes de desactivar.
            </Typography>

            <Typography
              component="dt"
              variant="body1"
              sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}
            >
              ¿Se registran automáticamente los intereses bancarios?
            </Typography>
            <Typography
              component="dd"
              variant="body1"
              sx={{ marginLeft: "20px", marginBottom: "16px", textAlign: "justify" }}
            >
              Si tu banco está conectado y envía información de intereses, Balaxys importará esa línea
              en el extracto y la sugerirá en la conciliación. De lo contrario, puedes ingresar un
              asiento manual en el módulo de Contabilidad para registrar los intereses.
            </Typography>
          </Box>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 8. Enlaces Relacionados ======== */}
        <section id="enlaces-relacionados">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            8. Enlaces Relacionados
          </Typography>
          <List sx={{ marginLeft: "20px", marginBottom: "32px" }}>
            <ListItem>
              <Link href="/bancos" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Lista de Bancos y Cajas" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/bancos/crear-conciliacion" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Crear Conciliación Bancaria" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/bancos/glosario-banco" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Glosario de Bancos y Tesorería" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/contabilidad" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Módulo de Contabilidad" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/faq" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Preguntas Frecuentes Generales" />
              </Link>
            </ListItem>
          </List>
        </section>

        <Divider sx={{ margin: "16px 0" }} />
      </Box>
    </Box>
  );
};

export default QueBancos;
