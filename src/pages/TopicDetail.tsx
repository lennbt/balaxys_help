
import { useParams } from "react-router-dom";
import { Box, Typography, Card, CardContent } from "@mui/material";

const topicDetails = {
  inventario: [
    {
      title: "Qué es la sección de Inventario",
      description: "Gestiona el ciclo completo de tus productos y servicios, crea pedidos de compra y venta, y controla tu stock.",
    },
    {
      title: "Glosario de Inventario",
      description: "La sección de Inventario de la A a la Z.",
    },
  ],
  // Agrega más temas si es necesario
};

const TopicDetail = () => {
  const { id } = useParams(); // Captura el ID de la URL
  const details = topicDetails[id as keyof typeof topicDetails];

  if (!details) {
    return (
      <Typography variant="h6" color="error">
        Tema no encontrado.
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Detalles del Tema
      </Typography>
      {details.map((item, index) => (
        <Card key={index} sx={{ marginBottom: "16px", boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {item.title}
            </Typography>
            <Typography variant="body1">{item.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default TopicDetail;




