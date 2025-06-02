import { Box, Typography, List, ListItem, Link, ListItemText, Divider } from "@mui/material";

const GlosarioImpuestos = () => {
  const glosario = [
    { term: "Aplazamiento de impuestos", definition: "Es la posibilidad de posponer el pago de impuestos, generalmente por un periodo determinado." },
    { term: "Base Imponible", definition: "Es el monto sobre el cual se calcula el impuesto." },
    { term: "IVA", definition: "Impuesto sobre el valor añadido que se aplica a la venta de productos y servicios." },
    { term: "Impuesto sobre la Renta", definition: "Impuesto directo sobre los ingresos de las personas físicas o jurídicas." },
    { term: "Tasa impositiva", definition: "Es el porcentaje que se aplica sobre la base imponible para calcular el monto del impuesto." },
    { term: "Base Imponible", definition: "Es el monto sobre el cual se calcula el impuesto." },
    { term: "Retenciones fiscales", definition: "Son cantidades descontadas de los pagos a proveedores o empleados que se envían a la autoridad fiscal." },
    { term: "Exenciones fiscales", definition: "Son situaciones en las que ciertos bienes o personas están exentos de pagar impuestos." },
    { term: "Impuesto directo", definition: "Es un impuesto que se aplica directamente sobre los ingresos o el capital de una persona o empresa." },
    { term: "Impuesto indirecto", definition: "Es un impuesto sobre el consumo de bienes y servicios, como el IVA." },
    { term: "Obligación tributaria", definition: "Es el deber legal de pagar impuestos al estado." },
    { term: "Declaración de impuestos", definition: "Es el proceso en el que un contribuyente informa al gobierno sobre los ingresos y gastos para determinar el monto de impuestos a pagar." },
    { term: "Retención de impuestos", definition: "Es el descuento que hace el empleador o entidad en los pagos a un tercero, destinado a la autoridad fiscal." },
    { term: "Impuesto sobre la renta de las personas físicas (IRPF)", definition: "Es un impuesto que grava los ingresos de las personas físicas." },
    { term: "Créditos fiscales", definition: "Son cantidades que se pueden restar de la cantidad de impuestos que un contribuyente debe pagar." },
    { term: "Agencia tributaria", definition: "Es el organismo encargado de la recaudación de impuestos y la fiscalización del cumplimiento tributario." },
    { term: "Certificado fiscal", definition: "Es un documento que acredita que una persona o empresa está al día con sus obligaciones fiscales." },
    { term: "Impuestos locales", definition: "Son impuestos recaudados por las autoridades locales, como gobiernos municipales o regionales." },
    { term: "Impuestos nacionales", definition: "Son impuestos recaudados por el gobierno central o nacional." },
    { term: "Recaudación de impuestos", definition: "Es el proceso mediante el cual el estado recoge los impuestos de los contribuyentes." },
    { term: "Aplazamiento de impuestos", definition: "Es la posibilidad de posponer el pago de impuestos, generalmente por un periodo determinado." },
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
          Índice
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
          Glosario de Impuestos
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

export default GlosarioImpuestos;
