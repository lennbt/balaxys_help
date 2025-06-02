
import { Box, Typography, Card } from "@mui/material";

const Videos = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Card
        sx={{
          padding: "16px",
          textAlign: "center",
          boxShadow: 3,
          backgroundColor: "#f5f5f5",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700, color: "#1E88E5" }}>
          Under Construction
        </Typography>
        <Typography variant="body1" sx={{ marginTop: "10px" }}>
          Esta sección estará disponible próximamente. ¡Gracias por tu paciencia!
        </Typography>
      </Card>
    </Box>
  );
};

export default Videos;
