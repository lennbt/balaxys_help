import { Box, Typography, List, ListItem, ListItemText, Divider, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

const TiposImpuestos = () => {
  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* Índice de navegación */}
      <Box sx={{ flex: 1, position: "sticky", top: 20, height: "100vh", paddingRight: "20px" }}>
        <List>
          <ListItem>
            <Link href="#importancia" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Importancia de la configuración de impuestos" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#acceso" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="¿Cómo acceder a la sección de impuestos?" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#crear" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Crear un nuevo impuesto" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#gestion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Gestión de impuestos existentes" />
            </Link>
          </ListItem>
        </List>
      </Box>

      {/* Contenido principal */}
      <Box sx={{ flex: 3, overflowY: "auto" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Gestión de Impuestos en Balaxys
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
          La funcionalidad de “Impuestos” en Balaxys te permite configurar y administrar los gravámenes que se aplican a tus ventas, compras y demás operaciones financieras. Al definir correctamente los impuestos, podrás reflejar con precisión las obligaciones fiscales en tus documentos contables y facturas, asegurando el cumplimiento de la normativa tributaria.
        </Typography>

        <section id="importancia">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            ¿Por qué es importante la configuración de impuestos?
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            <strong>Cumplimiento Fiscal: </strong> Determina las obligaciones legales y requisitos específicos para cada tipo de impuesto. Mantener los impuestos debidamente configurados evita errores en las obligaciones tributarias y facilita la elaboración de declaraciones de impuestos.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            <strong>Reportes financieros:</strong> Genera estados contables adaptados a la estructura de impuestos definida. Los reportes de ventas, compras y rentabilidad reflejan fielmente los valores antes y después de aplicar impuestos, brindando mayor transparencia en la gestión.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            <strong>Registro Contable Preciso: </strong> Al asociar cada impuesto a una cuenta contable, la plataforma registra con exactitud los montos a favor o en contra derivados de la aplicación de los impuestos. Permite adaptar flujos de trabajo y cálculos fiscales según las necesidades de tu organización.
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="acceso">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            ¿Cómo acceder a la sección de impuestos?
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            1. Dirígete al menú principal y selecciona la opción <strong>“Impuestos”</strong>.<br />
            2. Aparecerá la lista de impuestos configurados y podrás agregar nuevos impuestos si es necesario.
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="crear">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Crear un nuevo impuesto
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            Pasos para crear un nuevo impuesto:
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            1. <strong>Código:</strong> Ingresa un identificador único para el impuesto (ej: "IVA19" para un IVA del 19%).<br />
            2. <strong>Nombre:</strong> Especifica un nombre descriptivo para el impuesto (ej: "Impuesto al Valor Agregado").<br />
            3. <strong>Tipo:</strong> Selecciona el tipo de impuesto (ej: Fijo, Porcentaje, No aplica).<br />
            4. <strong>Importe:</strong> Indica el valor o porcentaje correspondiente (ej: 19, 5, 10, etc.).<br />
            5. <strong>Cuenta contable:</strong> Elige la cuenta en la que se registrará el impuesto en tu contabilidad (ej: "IVA por pagar").<br />
            6. <strong>Grupo:</strong> Asocia el impuesto a un grupo determinado (ej: "Impuestos de Venta").<br />
            7. <strong>Ámbito:</strong> Define el ámbito de aplicación del impuesto (ej: Ventas, Compras, Empleados).<br />
            8. <strong>País:</strong> Selecciona el país para el cual es válido este impuesto.
          </Typography>

          <Typography variant="body1" sx={{ fontStyle: "italic", color: "#666", textAlign: "justify" }}>
            * Asegúrate de que los valores de los impuestos sean correctos antes de guardarlos.
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="gestion">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Gestión de impuestos existentes
          </Typography>

          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            <strong>Acciones disponibles:</strong><br />
            ✏️ Editar: Modificar los detalles del impuesto.<br />
            🗑️ Eliminar: Disponible solo para impuestos no utilizados.<br />
            👁️ Visualizar: Consultar la información completa del impuesto.<br />
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        {/* Artículos relacionados */}
        <section id="articulos-relacionados">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Artículos Relacionados
          </Typography>
          <List>
            <ListItem>
              <Link href="/registro-impuestos" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Registro de impuestos en Balaxys" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/glosario-impuestos" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Gosario de Impuestos" />
              </Link>
            </ListItem>
          </List>
        </section>
      </Box>
    </Box>
  );
};

export default TiposImpuestos;
