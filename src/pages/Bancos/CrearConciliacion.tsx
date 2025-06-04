// src/pages/Bancos/CrearConciliacion.tsx
import React from "react";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  Link,
  ListItemText,
} from "@mui/material";

const CrearConciliacion: React.FC = () => {
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
            <Link href="#metodo-con-bancos-conectados" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="3.1. Método con Bancos Conectados" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#metodo-importar-movimientos" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="3.2. Importar Movimientos Bancarios" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#metodo-manual-sin-bancos-conectados" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="3.3. Método Manual (sin Conexión)" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#contenido-relacionado" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Contenido Relacionado" />
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
          ¿Cómo Realizar tus Conciliaciones en Balaxys ERP?
        </Typography>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 3.1. Método con Bancos Conectados ======== */}
        <section id="metodo-con-bancos-conectados">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            3.1. Cuando Tienes tus Bancos Conectados
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "12px" }}>
            Si ya conectaste tu cuenta bancaria a Balaxys ERP, la conciliación de movimientos se realiza de forma muy ágil y automática. A continuación, te mostramos el paso a paso:
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
            1. Accede a Bancos y Tesorería
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", marginBottom: "12px", textAlign: "justify" }}>
            Ve al menú de <strong>“Finanzas”</strong> y selecciona <strong>“Bancos y Tesorería”</strong>. Allí verás la lista de cuentas bancarias que ya estén conectadas.
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
            2. Iniciar Conciliación
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", marginBottom: "12px", textAlign: "justify" }}>
            Junto a la cuenta que deseas conciliar, haz clic en el botón <strong>“Conciliar”</strong>. Balaxys mostrará automáticamente los movimientos importados desde el banco.
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
            3. Selección de Movimientos
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", marginBottom: "12px", textAlign: "justify" }}>
            Marca cada operación que coincida con las transacciones en tu extracto bancario. Balaxys irá calculando la diferencia entre el <em>Saldo en extracto bancario</em> y los movimientos seleccionados.
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
            4. Finalizar Conciliación
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", marginBottom: "12px", textAlign: "justify" }}>
            Cuando la diferencia sea <strong>$0.00</strong>, el sistema habilitará el botón <strong>“Conciliar”</strong>. Haz clic y verás cómo Balaxys empareja cada registro con los asientos contables correspondientes.
          </Typography>

          <Typography variant="body1" sx={{ fontStyle: "italic", marginBottom: "16px", textAlign: "justify" }}>
            📍 Nota: Si no dispones de tiempo para terminar la conciliación, puedes hacer clic en <strong>“Posponer”</strong> para guardar el progreso y retomarlo más tarde.
          </Typography>

          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
            <strong>Ejemplo visual:</strong>  
            <br />  
            Al clicar en “Conciliar”, Balaxys cargará un listado con los movimientos pendientes. A medida que los selecciones, el sistema mostrará en pantalla la comparación entre tus extractos y los asientos ya registrados.
          </Typography>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 3.2. Importar Movimientos Bancarios ======== */}
        <section id="metodo-importar-movimientos">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            3.2. Importando Tus Movimientos Bancarios
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "12px" }}>
            Si prefieres no mantener la conexión directa o tu banco no está habilitado para integración en tiempo real, puedes importar manualmente los movimientos mediante un archivo de Excel (.xlsx). Sigue estos pasos:
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
            1. Accede a Bancos y Tesorería
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", marginBottom: "12px", textAlign: "justify" }}>
            En el menú de <strong>“Finanzas”</strong>, selecciona <strong>“Bancos y Tesorería”</strong> y elige la cuenta que deseas conciliar. Haz clic en <strong>“Ver”</strong> para entrar al detalle de esa cuenta.
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
            2. Iniciar Importación
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", marginBottom: "12px", textAlign: "justify" }}>
            Dentro del detalle de la cuenta, haz clic en <strong>“Conciliar”</strong> y selecciona <strong>“Importar desde archivo .xlsx”</strong>.
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
            3. Descargar Plantilla
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", marginBottom: "12px", textAlign: "justify" }}>
            Balaxys te ofrecerá descargar una plantilla de Excel con las columnas mínimas requeridas (Fecha, Descripción, Monto Débito, Monto Crédito, Saldo Final). Descarga esta plantilla y compílala con tus movimientos bancarios.
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
            4. Subir el Archivo
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", marginBottom: "12px", textAlign: "justify" }}>
            Una vez completada la plantilla, súbela usando el botón <strong>“Examinar”</strong> y verifica que Balaxys reconozca correctamente las columnas.
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
            5. Continuar Conciliación
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", marginBottom: "12px", textAlign: "justify" }}>
            Haz clic en <strong>“Continuar”</strong> y Balaxys importará todos los movimientos al grid de conciliación. Marca cada transacción que coincida con tus asientos contables y, cuando la diferencia llegue a <strong>$0.00</strong>, pulsa <strong>“Conciliar”</strong>.
          </Typography>

          <Typography variant="body1" sx={{ fontStyle: "italic", marginBottom: "16px", textAlign: "justify" }}>
            📍 Nota: Antes de subir grandes volúmenes de movimientos, revisa que el archivo no contenga filas en blanco o datos duplicados para evitar errores de importación.
          </Typography>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 3.3. Método Manual (sin Conexión) ======== */}
        <section id="metodo-manual-sin-bancos-conectados">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            3.3. Cuando No Tienes los Bancos Conectados
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "12px" }}>
            Si decidiste no conectar tu cuenta bancaria o no dispones de un archivo para importar, puedes conciliar manualmente cada movimiento. Este método requiere más atención, pero te permite un control total:
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
            1. Accede a Bancos y Tesorería
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", marginBottom: "12px", textAlign: "justify" }}>
            En el menú de <strong>“Finanzas”</strong>, selecciona <strong>“Bancos y Tesorería”</strong> y haz clic en <strong>“Conciliar”</strong> junto a la cuenta deseada.  
            <em>📍 También puedes crear una conciliación desde el submódulo “Conciliaciones Bancarias”.</em>
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
            2. Ajustar Período y Saldo
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", marginBottom: "12px", textAlign: "justify" }}>
            Ingresa la fecha de inicio y fin del período a conciliar. Luego, coloca el <strong>Saldo en extracto bancario</strong> tal como aparece en tu estado de cuenta físico o PDF.  
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
            3. Seleccionar Transacciones
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", marginBottom: "12px", textAlign: "justify" }}>
            Marca cada asiento contable que corresponda a las operaciones realizadas durante ese período. Balaxys irá mostrando la diferencia entre tu saldo en extracto y el total de montos seleccionados.
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}>
            4. Completar Conciliación
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", marginBottom: "12px", textAlign: "justify" }}>
            Cuando la diferencia sea <strong>$0.00</strong>, el botón <strong>“Conciliar”</strong> se activará. Haz clic para finalizar la conciliación.  
          </Typography>

          <Typography variant="body1" sx={{ fontStyle: "italic", marginBottom: "16px", textAlign: "justify" }}>
            📍 Nota: Si necesitas interrumpir el proceso, pulsa <strong>“Posponer”</strong> para guardar tu avance y retomar luego.
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: 500, marginBottom: "16px", textAlign: "justify" }}>
            ✨ Realizar la conciliación de forma manual te da mayor control y te permite verificar cada transacción individualmente, aunque lleve más tiempo. Así podrás garantizar la exactitud de tus registros antes de cerrar el período.
          </Typography>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 4. Contenido Relacionado ======== */}
        <section id="contenido-relacionado">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            4. Contenido Relacionado
          </Typography>
          <List sx={{ marginLeft: "20px", marginBottom: "32px" }}>
            <ListItem>
              <Link href="/bancos" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Lista de Bancos y Cajas" />
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

export default CrearConciliacion;
