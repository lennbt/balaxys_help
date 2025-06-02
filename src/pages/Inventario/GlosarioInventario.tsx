import { Box, Typography, List, ListItem, Link, ListItemText, Divider } from "@mui/material";

const GlosarioInventario = () => {
  const glosario = [
    { term: "Almacén", definition: "Un área o espacio destinado para almacenar productos y mercancías dentro de la empresa." },
    { term: "Costo", definition: "El precio al cual se adquiere un producto o servicio para su posterior comercialización o uso." },
    { term: "Existencia", definition: "La cantidad actual de un producto o mercancía disponible en inventario." },
    { term: "IVA", definition: "Impuesto sobre el valor añadido que se aplica a la venta de productos y servicios." },
    { term: "P. Reorden", definition: "El nivel de existencia de un producto a partir del cual se debe realizar un nuevo pedido para reponerlo." },
    { term: "Producto", definition: "Artículo o bien comercializado que está registrado en el inventario de la empresa." },
    { term: "SKU", definition: "Stock Keeping Unit, es un código único para identificar cada producto o mercancía." },
    { term: "Unidad de Medida", definition: "La unidad estándar utilizada para medir la cantidad de un producto (por ejemplo, unidad, litro, kilo)." },
    { term: "Valor de Inventario", definition: "El valor total de los productos almacenados en el inventario de una empresa." },
    { term: "Proveedor", definition: "Entidad o persona que suministra productos a la empresa." },
    { term: "Bodega", definition: "Espacio de almacenamiento utilizado para guardar los productos dentro de la empresa." },
    { term: "Rotación de inventario", definition: "La cantidad de veces que un inventario se vende y se repone durante un periodo." },
    { term: "Lote", definition: "Conjunto de productos que son procesados, fabricados o entregados al mismo tiempo." },
    { term: "Stock", definition: "La cantidad de productos disponibles en el inventario de la empresa en un momento determinado." },
    { term: "Caducidad", definition: "Fecha límite hasta la cual un producto puede ser utilizado o vendido." },
    { term: "Despacho", definition: "Proceso de entregar o enviar productos desde el inventario a los clientes." },
    { term: "Entrada de Inventario", definition: "Registro de productos que ingresan al inventario de la empresa." },
    { term: "Salida de Inventario", definition: "Registro de productos que salen del inventario debido a ventas, devoluciones, entre otros." },
    { term: "Valoración de Inventario", definition: "Proceso de determinar el valor actual de los productos en inventario para fines contables." },
    { term: "Ajuste de Inventario", definition: "Corrección en el registro de inventarios debido a errores, pérdida o daño de productos." }
  ];
  


  // Agrupar los términos por inicial
  const groupedTerms = glosario.reduce<{ [key: string]: { term: string, definition: string }[] }>((acc, item) => {
    const firstLetter = item.term.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(item);
    return acc;
  }, {});

  // Ordenar las claves del índice alfabéticamente
  const sortedKeys = Object.keys(groupedTerms).sort();

  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* Índice de navegación */}
      <Box
        sx={{
          flex: 1,
          position: "sticky", // Fija el índice a la pantalla
          top: 20, // Espacio desde la parte superior
          height: "100vh", // Que ocupe toda la altura de la ventana
          paddingRight: "20px",
          overflowY: "auto", // Permite scroll si es necesario
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "16px", color: "#1976d2" }}>
          
        </Typography>
        <List>
          {sortedKeys.map((letter) => (
            <ListItem key={letter}>
              <Link href={`#${letter}`} sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary={letter} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Contenido de la página */}
      <Box sx={{ flex: 3, overflowY: "auto" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Glosario de Inventario
        </Typography>

        <Divider sx={{ margin: "16px 0" }} />

        {sortedKeys.map((letter) => (
          <section key={letter} id={letter}>
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
              {letter}
            </Typography>
            {groupedTerms[letter]
              .sort((a, b) => a.term.localeCompare(b.term)) // Ordenar los términos dentro de cada letra
              .map((item, index) => (
                <Box key={index}>
                  <Typography variant="h6">{item.term}</Typography>
                  <Typography variant="body1" sx={{ marginBottom: "16px", textAlign: "justify" }}>
                    {item.definition}
                  </Typography>
                  <Divider sx={{ margin: "16px 0" }} />
                </Box>
              ))}
          </section>
        ))}

   
      </Box>
    </Box>
  );
};

export default GlosarioInventario;
