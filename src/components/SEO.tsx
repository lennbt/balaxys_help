// src/components/SEO.tsx

import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
}

/**
 * Componente SEO que utiliza react-helmet-async para inyectar metadatos en el <head>.
 * - title: Texto que aparecerá en la pestaña y en los resultados de búsqueda.
 * - description: Meta descripción para buscadores.
 * - canonicalUrl: URL canónica opcional para evitar duplicados.
 */
const SEO: React.FC<SEOProps> = ({ title, description, canonicalUrl }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
};

export default SEO;
