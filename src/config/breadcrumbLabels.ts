// src/config/breadcrumbLabels.ts

/**
 * Mapeo segmento → Texto para mostrar en las migas de pan.
 * Cada clave debe coincidir exactamente con el nombre de la sección en la URL
 * (por ejemplo, "impuestos", "glosario-impuestos", etc.).
 */
export const breadcrumbLabels: Record<string, string> = {
  // Rutas de primer nivel
  "primeros-pasos":        "Primeros pasos",
  "perfil-empresa":        "Perfil de Empresa",
  "ventas":                "Ventas",
  "compras":               "Compras",
  "inventario":            "Inventario",
  "catalogos":             "Catálogos",
  "banco-tesoreria":       "Bancos y Tesorería",
  "contabilidad":          "Contabilidad",
  "impuestos":             "Impuestos",
  "faq":                   "Preguntas frecuentes",
  "analitica-avanzada":    "Analítica avanzada",
  "video-tutoriales":      "Vídeo tutoriales",

  // Subrutas de Inventario
  "descripcion":           "Descripción Inventario",
  "productos":             "Productos",
  "glosario-inventario":   "Glosario Inventario",
  "productos-tipos":       "Tipos de Productos",
  "crear-producto":        "Crear Producto",

  // Subrutas de PrimerosPasos
  "que-es-balaxys":        "¿Qué es Balaxys?",

  // Subrutas de PerfilEmpresa
  "mi-perfil":             "Mi Perfil",
  "configuracion":         "Configuración",
  "usuarios":              "Usuarios",
  "roles":                 "Roles",
  "planes":                "Planes",
  "monedas":               "Monedas",
  "tipos-de-contribuyentes":"Tipos de Contribuyentes",
  "tipos-de-empresas":     "Tipos de Empresas",
  "formas-de-pago":        "Formas de Pago",
  "vencimientos":          "Vencimientos",
  "elementos-de-gastos":   "Elementos de Gastos",

  // Subrutas de Catálogos
  "atributos":             "Atributos",
  "almacenes":             "Almacenes",

  // Subrutas de Impuestos
  "tipos-de-impuestos":    "Tipos de Impuestos",
  "glosario-impuestos":    "Glosario Impuestos",
};
