// src/pages/Bancos/AñadirBanco.tsx
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

import React from "react";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  Link,
  ListItemText,
  Stack,
} from "@mui/material";

const AñadirBanco: React.FC = () => {
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
              <ListItemText primary="Introducción" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#prerrequisitos" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Prerrequisitos" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#datos-bancarios" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Datos Bancarios" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#configuracion-conciliacion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Configuración de Conciliación" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#validacion-y-pruebas" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Validación y Pruebas" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#consejos-mejores-practicas" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Consejos y Mejores Prácticas" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#faq" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Preguntas Frecuentes" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#enlaces-relacionados" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Enlaces Relacionados" />
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
          Guía Paso a Paso: Cómo Añadir un Nuevo Banco en Balaxys
        </Typography>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 1. Introducción ======== */}
        <section id="introduccion">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            1. Introducción
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
            En Balaxys ERP, la gestión de bancos y tesorería es fundamental para llevar un control
            preciso de todas las transacciones financieras de la empresa. Antes de generar o
            importar extractos bancarios, es necesario añadir cada entidad bancaria en el sistema.
            Esta página te muestra de forma detallada los pasos a seguir para dar de alta un nuevo
            banco, configurar sus parámetros de conciliación y asegurar que todas las operaciones
            se procesen correctamente.
          </Typography>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 2. Prerrequisitos ======== */}
        <section id="prerrequisitos">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            2. Prerrequisitos
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "8px" }}>
            Antes de proceder con la creación de un banco en Balaxys, asegúrate de contar con lo
            siguiente:
          </Typography>
          <List sx={{ marginLeft: "20px", marginBottom: "16px" }}>
            <ListItem>
              <ListItemText
                primary="Permisos de Administrador: Debes tener un rol que te permita crear o editar entidades bancarias dentro del módulo de Finanzas."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Datos de la Entidad Bancaria: Nombre del banco, código de entidad, número de cuenta, tipo de cuenta (corriente, ahorro), sucursal, entre otros."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Información de Conciliación: Frecuencia de conciliación (diaria, semanal, mensual), método de importación de extractos (CSV, OFX, PDF) y plantillas de mapeo de campos."
              />
            </ListItem>
          </List>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 3. Datos Bancarios ======== */}
        <section id="datos-bancarios">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            3. Datos Bancarios
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
            3.1. Ubicar el Módulo “Bancos y Tesorería”
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", marginBottom: "12px", textAlign: "justify" }}>
            En el menú principal de Balaxys, dirígete a <strong>“Finanzas”</strong> y selecciona{" "}
            <strong>“Bancos y Tesorería”</strong>. Ahí encontrarás la lista de entidades bancarias
            actualmente registradas.
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
            3.2. Botón “Añadir Banco”
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", marginBottom: "12px", textAlign: "justify" }}>
            Haz clic en el botón <strong>“Añadir Banco”</strong> ubicado en la parte superior derecha
            de la pantalla. Se abrirá un formulario modal donde deberás completar los datos básicos
            de la nueva entidad.
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
            3.3. Campos del Formulario
          </Typography>
          <Stack component="ul" sx={{ marginLeft: "20px", marginBottom: "16px" }}>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                <strong>Nombre del Banco:</strong> Nombre oficial de la entidad (por ejemplo,
                “Banco Nacional de Uruguay”). Máximo 100 caracteres.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                <strong>Código de Entidad:</strong> Código interno o CBAN del banco, si aplica.
                Normalmente es un número corto de 3 a 5 dígitos.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                <strong>Tipo de Cuenta:</strong> Selecciona si la cuenta es <em>Corriente</em> o{" "}
                <em>Ahorro</em>. Esto facilitará reportes y filtros posteriores.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                <strong>Número de Cuenta:</strong> Número completo de la cuenta bancaria. Debe
                coincidir con el formato exigido por la entidad.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                <strong>Sucursal:</strong> Nombre o código de la sucursal. Opcional, pero útil para
                organizaciones con múltiples puntos de atención.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                <strong>Moneda:</strong> Selecciona la moneda en la que se harán las transacciones (
                <em>UYU</em>, <em>USD</em>, etc.).
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                <strong>Descripción (Opcional):</strong> Comentario breve sobre el uso de la cuenta
                (por ejemplo, “Cuenta principal de tesorería”).
              </Typography>
            </li>
          </Stack>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
            Completa cada campo con cuidado y verifica que la información sea correcta antes de
            continuar.
          </Typography>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 4. Configuración de Conciliación ======== */}
        <section id="configuracion-conciliacion">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            4. Configuración de Conciliación
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "8px" }}>
            Una vez que hayas guardado los datos bancarios, es momento de definir cómo Balaxys procesará
            los extractos y realizará la conciliación automática.
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
            4.1. Frecuencia de Conciliación
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", marginBottom: "12px", textAlign: "justify" }}>
            Selecciona la periodicidad con la que deseas conciliar movimientos:
            <ul>
              <li><strong>Diaria:</strong> Balaxys intentará conciliar cada vez que importes un extracto diario.</li>
              <li><strong>Semanal:</strong> Conciliación agrupada por semana; útil para empresas con pocos movimientos diarios.</li>
              <li><strong>Mensual:</strong> Conciliación al cierre de mes; recomendado para reportes financieros mensuales.</li>
            </ul>
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
            4.2. Método de Importación de Extractos
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", marginBottom: "12px", textAlign: "justify" }}>
            Balaxys soporta varios formatos de archivo para importar extractos:
            <ul>
              <li><strong>CSV:</strong> Archivo delimitado por comas. Asegúrate de que tenga columnas mínimas: fecha, descripción, monto, saldo final.</li>
              <li><strong>OFX:</strong> Formato estándar de intercambio financiero. Al importar un .ofx, Balaxys leerá automáticamente los campos de transacción.</li>
              <li><strong>PDF:</strong> Solo si tu banco ofrece extractos en PDF estandarizados. Tendrás que mapear manualmente columnas para que Balaxys las interprete.</li>
            </ul>
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
            4.3. Plantilla de Mapeo de Campos
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", marginBottom: "12px", textAlign: "justify" }}>
            Para cada banco, puedes crear o asociar una plantilla de mapeo que indique:
            <ul>
              <li><strong>Nombre de columna “Fecha”: </strong> Nombre exacto (o posición) donde se ubica la fecha de la transacción.</li>
              <li><strong>Nombre de columna “Descripción”: </strong> Campo que contiene la descripción del movimiento.</li>
              <li><strong>Nombre de columna “Monto Débito”: </strong> Campo que indica salidas de efectivo.</li>
              <li><strong>Nombre de columna “Monto Crédito”: </strong> Campo para entradas de efectivo.</li>
              <li><strong>Nombre de columna “Saldo Final”: </strong> Saldo al cierre de la transacción.</li>
            </ul>
            Esto le permite a Balaxys conciliar automáticamente cada línea del extracto con los asientos contables existentes.
          </Typography>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 5. Validación y Pruebas ======== */}
        <section id="validacion-y-pruebas">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            5. Validación y Pruebas
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "8px" }}>
            Antes de usar el banco en producción, realiza las siguientes pruebas:
          </Typography>
          <Stack component="ul" sx={{ marginLeft: "20px", marginBottom: "16px" }}>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                <strong>Importación de un Extracto de Prueba:</strong> Carga un archivo de prueba (por ejemplo, un CSV con 5–10 movimientos) para verificar que Balaxys mapea correctamente las columnas.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                <strong>Conciliación Automática:</strong> Comprueba que las transacciones de prueba se concilien con los asientos contables existentes (por monto, fecha y descripción).
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                <strong>Corrección de Errores:</strong> Si encuentras discrepancias (montos no conciliados, fechas fuera de rango), ajusta la plantilla de mapeo o revisa el formato del archivo de origen.
              </Typography>
            </li>
          </Stack>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 6. Consejos y Mejores Prácticas ======== */}
        <section id="consejos-mejores-practicas">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            6. Consejos y Mejores Prácticas
          </Typography>
          <Stack component="ul" sx={{ marginLeft: "20px", marginBottom: "16px" }}>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                <strong>Usa Nombres Claros y Consistentes:</strong> Evita abreviaturas ambiguas. Por ejemplo, “BANCO NACIONAL - CUENTA CORRIENTE” es preferible a “BNYK-CC01”.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                <strong>Verifica la Moneda:</strong> Asegúrate de seleccionar la moneda correcta para cada banco. Mezclar monedas puede provocar errores en los reportes financieros.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                <strong>Actualiza Plantillas Regularmente:</strong> Si tu banco cambia el layout de sus extractos, revisa y actualiza la plantilla de mapeo para evitar discrepancias.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                <strong>Haz Conciliaciones Periódicas:</strong> Aunque Balaxys automatice gran parte del proceso, realiza conciliaciones manuales al menos una vez al mes para garantizar la integridad de los datos.
              </Typography>
            </li>
          </Stack>
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
              ¿Puedo editar los datos bancarios una vez creado el banco?
            </Typography>
            <Typography component="dd" variant="body1" sx={{ marginBottom: "12px", marginLeft: "20px", textAlign: "justify" }}>
              Sí. Dirígete nuevamente a “Bancos y Tesorería”, busca el banco en la lista y haz clic en el ícono de lápiz para editar sus datos. Cambia los campos que desees y guarda los cambios.
            </Typography>

            <Typography
              component="dt"
              variant="body1"
              sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}
            >
              ¿Qué pasa si el archivo de extracto no coincide con la plantilla?
            </Typography>
            <Typography component="dd" variant="body1" sx={{ marginBottom: "12px", marginLeft: "20px", textAlign: "justify" }}>
              Balaxys mostrará un error de mapeo indicando las columnas que no pudo encontrar. Revisa el nombre exacto de las columnas del archivo o ajusta la plantilla de mapeo en la configuración del banco.
            </Typography>

            <Typography
              component="dt"
              variant="body1"
              sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}
            >
              ¿Cómo configuro un banco en moneda extranjera?
            </Typography>
            <Typography component="dd" variant="body1" sx={{ marginLeft: "20px", marginBottom: "16px", textAlign: "justify" }}>
              Simplemente, al crear el banco, en el campo “Moneda” elige la divisa correspondiente (por ejemplo, USD). Balaxys mostrará y registrará todas las transacciones en esa moneda.
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
                <ListItemText primary="Lista de Bancos" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/bancos/glosario-tesoreria" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Glosario de Tesorería" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/contabilidad" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Módulo de Contabilidad" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/faq" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Preguntas frecuentes generales" />
              </Link>
            </ListItem>
          </List>
        </section>

        <Divider sx={{ margin: "16px 0" }} />
      </Box>
    </Box>
  );
};

export default AñadirBanco;
