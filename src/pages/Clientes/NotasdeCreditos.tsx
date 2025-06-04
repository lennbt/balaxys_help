// src/pages/Clientes/GlosarioNotasCredito.tsx
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

/**
 * Componente de ayuda para “Notas de Crédito”
 * En el lado izquierdo muestra un índice de secciones, y a la derecha
 * el contenido explicativo con pasos, capturas de ejemplo y consejos.
 */
const NotasdeCreditos: React.FC = () => {
  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* ========================================= */}
      {/* 1. ÍNDICE DE SECCIONES (columna izquierda) */}
      {/* ========================================= */}
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
            <Link href="#cuando-utilizar" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="¿Cuándo utilizar una nota de crédito?" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#flujos-de-creacion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Flujos de creación" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#paso-a-paso" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Paso a paso: Crear NC" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#detalles-de-campos" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Detalles de cada campo" />
            </Link>
          </ListItem>
          <ListItem>
            
              <ListItemText primary="Ejemplo práctico (capturas)" />
            </ListItem>
    

          <ListItem>
            <Link href="#preguntas-frecuentes" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Preguntas frecuentes" />
            </Link>
          </ListItem>
        </List>
      </Box>

      {/* ========================================= */}
      {/* 2. CONTENIDO PRINCIPAL (columna derecha)   */}
      {/* ========================================= */}
      <Box sx={{ flex: 3, overflowY: "auto", paddingLeft: "20px" }}>
        {/* ---------------------------------------------------- */}
        {/* SECCIÓN: Introducción                               */}
        {/* ---------------------------------------------------- */}
        <section id="introduccion">
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            Notas de Crédito
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Las Notas de Crédito permiten ajustar o anular total o parcialmente
            el importe de facturas ya emitidas a un cliente. Se utilizan cuando
            es necesario corregir errores de precio, cantidad o cuando se
            devuelve mercancía. En Balaxys ERP, las Notas de Crédito se crean
            directamente desde la pantalla de “Notas de crédito” o bien desde
            el listado de “Facturas de ventas” haciendo clic en el ícono de
            devolución (papelera/lupa).
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ---------------------------------------------------- */}
        {/* SECCIÓN: ¿Cuándo utilizar una nota de crédito?        */}
        {/* ---------------------------------------------------- */}
        <section id="cuando-utilizar">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            ¿Cuándo utilizar una nota de crédito?
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Las Notas de Crédito se emplean en los siguientes casos:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Devolución de productos:</strong> Cuando el cliente
                devuelve mercancía por defecto o exceso de entrega.
              </li>
              <li>
                <strong>Corrección de precios:</strong> Si en la factura se
                aplicó un precio incorrecto y debe ajustarse (rebajar el
                importe).
              </li>
              <li>
                <strong>Errores en cantidades:</strong> Si se facturó más
                unidades de las realmente vendidas o se facturó un producto
                equivocado.
              </li>
            </ul>
            En todos estos casos, se genera una Nota de Crédito para descontar
            el importe de la factura original o anularla por completo.
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ---------------------------------------------------- */}
        {/* SECCIÓN: Flujos de creación                         */}
        {/* ---------------------------------------------------- */}
        <section id="flujos-de-creacion">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Flujos de creación de Nota de Crédito
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Existen dos maneras principales de generar una Nota de Crédito:
            <ol style={{ marginLeft: "20px" }}>
              <li>
                <strong>Desde “Notas de crédito”:</strong> Ingresar al
                módulo “Notas de crédito” y hacer clic en “Nueva nota de crédito”.
                A continuación, buscar la factura a través del buscador interno
                (seleccionando almacén y número de factura) y luego devolver
                línea(s) por <em>cantidad</em> o por <em>precio</em>.
              </li>
              <li>
                <strong>Desde el listado de “Facturas de ventas”:</strong> En la
                columna de acciones de cada factura aparece un ícono de “Devolución”.
                Al hacer clic en ese ícono, se abre directamente el formulario de
                NC precargado con los datos de la factura seleccionada. El flujo
                subsiguiente (selección de líneas, cantidades/precios, etc.) es
                idéntico.
              </li>
            </ol>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ---------------------------------------------------- */}
        {/* SECCIÓN: Paso a paso: Crear NC                       */}
        {/* ---------------------------------------------------- */}
        <section id="paso-a-paso">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Paso a paso: Crear una Nota de Crédito
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            1. Acceder a “Notas de crédito”
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Desde el menú principal, selecciona 
            <strong> “Clientes” &gt; “Notas de crédito”</strong>. Verás el
            listado de todas las NC ya generadas, con sus estados, números,
            cliente y montos. Allí podrás:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                Hacer clic en <em>“Nueva nota de crédito”</em> (botón azul en
                la esquina superior derecha).  
              </li>
              <li>
                Refrescar el listado con el ícono de recarga si se crearon NC
                desde otro flujo.
              </li>
              <li>
                Ver detalles o confirmar NC pendientes desde la lista directamente.
              </li>
            </ul>
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            2. Seleccionar “Almacén” y “Número de factura” (Paso 1)
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            En el formulario de “Nueva nota de crédito” 
            encontrarás en la parte superior:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Centro de costo:</strong> (opcional) Elegir departamento o
                centro asociado a la NC.
              </li>
              <li>
                <strong>Fecha emisión:</strong> Se propone la fecha actual, pero
                puedes modificarla.
              </li>
              <li>
                <strong>Fecha confirmación:</strong> También sugiere la fecha de
                hoy, modificable manualmente.
              </li>
              <li>
                <strong>Devolución de:</strong> Elige si la nota se basa en 
                <em>“Cantidad”</em> (devuelves unidades) o <em>“Precio”</em> 
                (devuelves un monto diferente al precio original).  
              </li>
            </ul>
            Debajo, en un recuadro naranja de advertencia, verás:
            <em>“Para buscar un documento seleccione al menos un almacén e ingrese el número.”</em>
            Luego:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                En <strong>“Cliente”</strong> selecciona el cliente al que pertenece
                la factura (se cargan solo facturas de ese cliente).
              </li>
              <li>
                En <strong>“Almacén”</strong> elige de qué sede se emitió la factura.
              </li>
              <li>
                En <strong>“Año”</strong> especifica el año de la factura (normalmente
                “2025” o el año actual).
              </li>
              <li>
                En <strong>“Documento”</strong> ingresa el número (o prefijo) de la factura,
                por ejemplo <em>“FA-1”</em> para buscar “FA-1/01/2025”.
              </li>
              <li>
            
                (lupa). Si la factura existe, se cargan sus líneas automáticamente
                y pasas al Paso 3.
              </li>
            </ul>
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            3. Devolver línea(s) de factura (Paso 2)
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: "20px", textAlign: "justify" }}>
            En este paso verás una tabla con todas las líneas de la factura original:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Código:</strong> Código interno del producto o servicio.
              </li>
              <li>
                <strong>Descripción:</strong> Nombre del producto/servicio.
              </li>
              <li>
                <strong>U.M:</strong> Unidad de medida usada en la factura.
              </li>
              <li>
                <strong>Cantidad facturada:</strong> Unidades originales vendidas.
              </li>
              <li>
                <strong>Precio:</strong> Precio unitario aplicado en la factura.
              </li>
              <li>
                <strong>IVA:</strong> Porcentaje de impuesto aplicado.
              </li>
              <li>
                <strong>“Cant. Devuelta”</strong> (si devoluciones por cantidad): 
                Ingrese cuántas unidades desea devolver (no puede exceder la cantidad facturada).  
              </li>
              <li>
                <strong>“Precio Devuelto”</strong> (si devoluciones por precio): 
                Ingrese el monto total a devolver, independiente de la cantidad.  
              </li>
              <li>
                <strong>Importe:</strong> Calculado automáticamente como 
                <em>Cantidad Devuelta × Precio </em> 
                o directamente el “Precio Devuelto”.  
              </li>
            </ul>
            Solo las columnas de “Cantidad Devuelta” o “Precio Devuelto” son editables:
            el resto están en modo lectura.  
            Puedes devolver líneas completas o parciales, según corresponda:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                Si seleccionaste <em>Devolución por Cantidad</em>, la columna 
                “Cantidad Devuelta” se habilita con 0 por defecto.  
                Debes indicar cuántas unidades restar de la factura original.  
              </li>
              <li>
                Si elegiste <em>Devolución por Precio</em>, la columna 
                “Precio Devuelto” aparecerá y podrás poner un monto –por ejemplo,
                parte del valor total de esa línea– para devolver solo un porcentaje.  
              </li>
            </ul>
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            4. Agregar una nota y revisar totales
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            Debajo de la tabla, encontrarás:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Nota:</strong> Espacio libre para agregar comentarios, causas
                de devolución o instrucciones contables.  
              </li>
            </ul>
            A la derecha, se mostrará en tiempo real el resumen de:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Subtotal:</strong> Suma de todos los montos base (<em>cantidad × precio</em> 
                ó <em>precio devuelto</em>).  
              </li>
              <li>
                <strong>IVA:</strong> Total de impuesto correspondiente (subtotal × IVA%).  
              </li>
              <li>
                <strong>Importe total:</strong> Subtotal + IVA.  
              </li>
            </ul>
            Verifica que los valores coincidan con el monto real a acreditar al cliente.
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            5. Guardar o Guardar y Confirmar
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            En la esquina superior derecha del modal hay tres botones:
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <strong>Cerrar:</strong> Descarta todos los cambios y cierra el modal
                sin generar NC.
              </li>
              <li>
                <strong>Guardar:</strong> Registra la Nota de Crédito en estado “Pendiente” 
                sin marcarla como definitiva. Puedes volver más tarde a “Notas de crédito” 
                para confirmarla.  
              </li>
              <li>
                <strong>Guardar y Confirmar:</strong> Registra la NC y la marca de inmediato 
                como “Confirmada”. Esto emite el documento en el sistema, genera el número 
                de NC definitivo y la incluye en reportes de contabilidad.  
              </li>
            </ul>
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ---------------------------------------------------- */}
        {/* SECCIÓN: Detalles de cada campo                     */}
        {/* ---------------------------------------------------- */}
        <section id="detalles-de-campos">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Detalles de cada campo
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Centro de costo
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            (Opcional) Permite asignar la Nota de Crédito a un centro de costo específico
            dentro de tu empresa (por ejemplo, “Administración”, “Ventas” o “Producción”),
            para que los reportes contables reflejen correctamente la devolución en
            el departamento adecuado.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Fecha emisión
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Fecha en que se emite la Nota de Crédito. Por defecto es la fecha actual, pero puedes
            modificarla si necesitas retrocederla a una fecha anterior (por ejemplo, si tu
            contabilidad requiere registrar devoluciones con fecha del mes anterior).
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Fecha confirmación
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Fecha en que confirmas oficialmente la emisión de la NC. Suele coincidir con la
            “Fecha emisión”, salvo si generas la NC y la confirmas en días distintos.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Devolución de:
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            - <strong>Cantidad:</strong> Si seleccionas esta opción, debes indicar cuántas
            unidades del producto devuelto (entre 1 y la cantidad originalmente facturada).
            El sistema calculará automáticamente el importe (Cantidad × Precio unitario).  
            <br />
            - <strong>Precio:</strong> Si marcas “Precio”, podrás ingresar un monto libre
            (no mayor que el importe total de la línea original). Esto es útil cuando se desea
            devolver solo un porcentaje del valor (por ejemplo, 50 % del total).
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Cliente
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Selecciona el cliente al que pertenece la factura original. Solo se mostrarán facturas
            activas de ese cliente en el año y almacén seleccionado.  
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Almacén
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Indica de qué almacén o sede se emitió la factura original (por ejemplo, “Principal”,
            “Secundario”). El buscador sólo devolverá facturas de ese almacén.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Año
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Año en que se generó la factura original. Normalmente “2025” (o el año actual).
            Sirve para acotar la búsqueda.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Documento
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Número o prefijo de la factura que deseas devolver (por ejemplo, “FA-1”, “FA-015”,
            “FA-102/2025”). Al hacer clic en la lupa (<i className="material-icons">search</i>),
            el sistema cargará automáticamente las líneas asociadas a esa factura.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Código / Descripción / U.M / Cantidad facturada / Precio / IVA
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Estos campos son de solo lectura y reflejan la información original de cada línea
            de la factura. No puedes modificarlos, ya que deben coincidir con los datos de
            la factura que se devuelve.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Cantidad Devuelta / Precio Devuelto
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            - <strong>Cantidad Devuelta:</strong> Ingrese cuántas unidades del producto desea devolver.
            No puede exceder la cantidad original facturada.  
            - <strong>Precio Devuelto:</strong> Ingrese un monto total a devolver para esa línea.
            Puede ser menor o igual al importe original (por ejemplo, si devuelves solo la mitad
            del valor).  
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Importe
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Monto calculado automáticamente en función de la “Cantidad Devuelta” × 
            “Precio unitario” o del “Precio Devuelto” ingresado.  
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Nota
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Campo libre donde puedes describir el motivo de la devolución, notas contables,
            o instrucciones adicionales (por ejemplo, “Devolución por defecto de fábrica”,
            “Cliente aceptó crédito parcial”, etc.).
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Subtotal / IVA / Importe total
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            - <strong>Subtotal:</strong> Suma de todos los importes base de las líneas devueltas
            (Cantidad Devuelta × Precio Unitario o Precio Devuelto).  
            - <strong>IVA:</strong> Impuesto calculado sobre cada línea devuelta
            (Subtotal línea × IVA%).  
            - <strong>Importe total:</strong> Subtotal + IVA total.  
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            Botones “Cerrar”, “Guardar” y “Guardar y Confirmar”
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            - <strong>Cerrar:</strong> Descarta todos los cambios y cierra el modal sin generar NC.  
            - <strong>Guardar:</strong> Crea la nota de crédito en estado “Pendiente”, de modo que
            pueda revisarse o confirmarse más tarde desde el listado de “Notas de crédito”.  
            - <strong>Guardar y Confirmar:</strong> Crea y confirma la nota de crédito al mismo tiempo,
            asignándole un número definitivo (“NC-2/01/2025”, etc.) y cambiando su estado a “Confirmado”.
            Esta acción emite la NC en el sistema y la incluye inmediatamente en los reportes contables.
          </Typography>
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ---------------------------------------------------- */}
        {/* SECCIÓN: Ejemplo práctico (capturas)                */}
        {/* ---------------------------------------------------- */}
        <section id="ejemplo-practico">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Ejemplo práctico: capturas paso a paso
          </Typography>

          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            1. Inicia desde el listado de “Notas de crédito” y haz clic en “Nueva nota de crédito”:
          </Typography>
          <Box
            component="img"
            src="/assets/img/NC_paso1.png"
            alt="Listado Notas de crédito - botón Nueva nota"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />

          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            2. Selecciona “Centro de costo”, fechas y tipo de devolución:
          </Typography>
          <Box
            component="img"
            src="/assets/img/NC_paso2.png"
            alt="Seleccionar centro de costo y tipo de devolución"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />

          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            3. Busca la factura indicando Cliente, Almacén, Año y Número, luego haz clic en la lupa:
          </Typography>
          <Box
            component="img"
            src="/assets/img/NC_paso3_buscar.png"
            alt="Buscar factura para cargar líneas"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />

          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            4. Se carga la factura y se habilita la tabla de devolución; en este caso devolvemos
            “1” bicicleta por precio completo (200 UYU):
          </Typography>
          <Box
            component="img"
            src="/assets/img/NC_paso4_lineas.png"
            alt="Líneas de factura cargadas para devolución"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />

          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            5. Revisa el resumen de totales a la derecha y, finalmente, haz clic en 
            “Guardar y Confirmar”:
          </Typography>
          <Box
            component="img"
            src="/assets/img/NC_paso5_totales.png"
            alt="Resumen de totales y botón Guardar y Confirmar"
            sx={{ width: "100%", borderRadius: "4px", marginBottom: "16px" }}
          />
        </section>
        <Divider sx={{ margin: "16px 0" }} />

        {/* ---------------------------------------------------- */}
        {/* SECCIÓN: Preguntas frecuentes                        */}
        {/* ---------------------------------------------------- */}
        <section id="preguntas-frecuentes">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Preguntas frecuentes
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Puedo anular una Nota de Crédito después de confirmarla?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Sí. Accede al listado de “Notas de crédito”, busca la NC confirmada y haz clic en el ícono
            de “Anular” (papelera). Esto marcará la NC como “Anulada” y revertirá los asientos contables
            asociados (dependiendo de tu configuración contable).
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Qué ocurre si devuelvo una cantidad mayor a la facturada?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            El campo “Cantidad Devuelta” está limitado para no exceder la “Cantidad facturada”. Si intentas
            ingresar un valor superior, el sistema mostrará una alerta y no permitirá guardar la NC.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Puedo crear una Nota de Crédito sin haber confirmado la factura?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            No. Solo se pueden generar Notas de Crédito sobre facturas ya confirmadas (estado “Confirmado”).
            Si la factura está en estado “Pendiente” o “Anulada”, el buscador no la mostrará.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 600, marginBottom: "4px" }}>
            ¿Cómo se reflejan las NC en los reportes contables?
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: "justify" }}>
            Una vez confirmada, cada NC genera los asientos de crédito correspondientes en tu módulo de
            contabilidad. Esto reduce los ingresos tributarios reportados y ajusta el libro diario,
            reflejando la disminución de la venta original.
          </Typography>
        </section>
      </Box>
    </Box>
  );
};

export default NotasdeCreditos;
