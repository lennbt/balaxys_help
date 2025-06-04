import { Box, Typography, List, ListItem, ListItemText, Divider, Link } from "@mui/material";

const TiposContribuyentes = () => {
  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* Índice de navegación */}
      <Box sx={{ flex: 1, position: "sticky", top: 20, height: "100vh", paddingRight: "20px" }}>
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "16px", color: "#1976d2" }}>
   
        </Typography>
        <List>
          <ListItem>
            <Link href="#importancia" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Importancia de los Tipos de Contribuyente" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#acceso" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="¿Cómo acceder a la sección?" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#crear" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Crear nuevo tipo de contribuyente" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#tipos-existente" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="Tipos existentes y acciones" />
            </Link>
          </ListItem>
        </List>
      </Box>

      {/* Contenido principal */}
      <Box sx={{ flex: 3, overflowY: "auto" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Tipos de Contribuyentes en Balaxys
        </Typography>

        <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
        El formulario de "Tipos de Contribuyentes" en Balaxys permite definir y gestionar categorías específicas para clasificar a los contribuyentes según sus obligaciones fiscales o características tributarias. Esta herramienta facilita la organización y segmentación de clientes, proveedores o terceros según su régimen tributario, mejorando la precisión en la facturación y el cumplimiento fiscal.
        </Typography>

        <section id="importancia">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            ¿Por qué es importante esta configuración?
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            <strong>Cumplimiento fiscal:</strong> Cada tipo de contribuyente tiene diferentes obligaciones y tratamientos impositivos según la entidad reguladora fiscal de cada país.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            <strong>Facturación electrónica:</strong> Determina los campos obligatorios y la estructura de los comprobantes electrónicos.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            <strong>Cálculo automático de impuestos:</strong> El sistema aplicará correctamente IVA, percepciones y retenciones según el tipo seleccionado.
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="acceso">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            ¿Cómo acceder a la sección?
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            1. Dirígete al menú de <strong>Configuración</strong> en el menú principal<br/>
            2. Selecciona en el recuadro de Facturación  la opción <strong>"Tipos de contribuyentes"</strong> <br/>
            3. Haz clic en <strong>"Nuevo tipo de contribuyentes"</strong>
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="crear">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Crear nuevo tipo de contribuyente
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            Sigue estos pasos para agregar un nuevo tipo de contribuyente:
          </Typography>
          
          <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
            1. <strong>Código:</strong> Seleeciona un códido adecuado<br/>
            2. <strong>Nombre:</strong> Seleeciona un nombre del contribuyente<br/>
        
          </Typography>
          <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#666', textAlign: 'justify' }}>
            * Campos obligatorios. Los códigos deben ser únicos y no editables después de guardar.
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        <section id="tipos-existente">
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Gestionar tipos de contribuyente
          </Typography>
          
            <Typography variant="body1" sx={{ textAlign: "justify" }}>
            <strong>Acciones disponibles:</strong><br/>
            ✏️ Editar: Modificar nombre (el código no es editable)<br/>
            🗑️ Eliminar: Solo disponible si no está asociado a registros<br/>
            👁️ Visualizar: Ver detalles completos del contribuyente<br/>
          </Typography>
          <Divider sx={{ margin: "16px 0" }} />
        </section>

        {/* Artículos relacionados */}
        <section id="articulos-relacionados" >
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
            Artículos Relacionados
          </Typography>
          <List>
            <ListItem>
              <Link href="/impuestos/tipos-de-impuestos" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Tipos de impuestos IVA y Retenciones" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/perfil-empresa/tipos-de-contribuyentes" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Tipos de contribuyentes " />
              </Link>
            </ListItem>
          </List>
        </section>
      </Box>
    </Box>
  );
};

export default TiposContribuyentes;