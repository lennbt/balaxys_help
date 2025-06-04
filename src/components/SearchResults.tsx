// src/components/SearchResults.tsx
import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { SearchItem } from "../data/searchIndex";

interface SearchResultsProps {
  query: string;
  results: SearchItem[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ query, results }) => {
  const navigate = useNavigate();

  if (query.trim() === "") {
    return null; // o un mensaje tipo “Escribe algo para buscar…”
  }

  return (
    <Box sx={{ mt: 2, px: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Resultados para “{query}” ({results.length})
      </Typography>

      {results.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          No se encontró nada que coincida.
        </Typography>
      ) : (
        results.map((item) => (
          <Card
            key={item.id}
            sx={{
              mb: 2,
              backgroundColor: "#fafafa",
            }}
          >
            <CardActionArea onClick={() => navigate(item.path)}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.summary}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      )}
    </Box>
  );
};

export default SearchResults;
