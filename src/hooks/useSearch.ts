// src/hooks/useSearch.ts
import { useState, useEffect, useMemo } from "react";
import Fuse from "fuse.js";
import searchIndex, { SearchItem } from "../data/searchIndex";

interface UseSearchProps {
  query: string;
}

export function useSearch({ query }: UseSearchProps) {
  const [results, setResults] = useState<SearchItem[]>([]);

  // Memorizar la instancia de Fuse para no recrearla en cada render
  const fuse = useMemo(() => {
    return new Fuse(searchIndex, {
      keys: ["title", "summary", "tags"],
      threshold: 0.3, // Ajusta este número (0 = coincidencia exacta; 1 = coincidencia muy laxa)
    });
  }, []);

  useEffect(() => {
    const q = query.trim();
    if (q === "") {
      setResults([]);
    } else {
      const fuseResults = fuse.search(q);
      setResults(fuseResults.map((r) => r.item));
    }
  }, [query, fuse]);

  return results;
}
