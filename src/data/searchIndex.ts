// src/data/searchIndex.ts

export interface SearchItem {
  id: string;
  title: string;
  summary: string;
  path: string;
  tags?: string[];
}

const searchIndex: SearchItem[] = [
  // ---------------------------
  //  Ruta HOME + “sueltas”
  // ---------------------------
  {
    id: "home",
    title: "Inicio / Home",
    summary: "Página principal de Balaxys ERP y buscador de la academia.",
    path: "/",
    tags: ["principal", "dashboard", "inicio", "buscador"],
  },
  {
    id: "analitica-avanzada",
    title: "Analítica Avanzada",
    summary: "Módulo de analítica avanzada: gráficas, métricas y reportes.",
    path: "/analitica-avanzada",
    tags: ["analítica", "reportes", "métricas"],
  },
  {
    id: "video-tutoriales",
    title: "Vídeo Tutoriales",
    summary: "Listado de vídeo tutoriales para aprender a usar Balaxys ERP.",
    path: "/video-tutoriales",
    tags: ["videos", "tutoriales", "aprendizaje"],
  },
  {
    id: "preguntas-frecuentes",
    title: "Preguntas Frecuentes",
    summary: "Sección de preguntas frecuentes (FAQs) sobre el ERP.",
    path: "/preguntas",
    tags: ["faq", "ayuda", "preguntas"],
  },

  // ---------------------------
  // 1. Bancos
  // ---------------------------
  {
    id: "bancos-listado",
    title: "Bancos",
    summary: "Pantalla principal de Bancos: ver listado, filtros y estadísticas.",
    path: "/bancos",
    tags: ["bancos", "tesorería", "cuentas" ],
  },
  {
    id: "bancos-anadir-banco",
    title: "Añadir Banco",
    summary: "Formulario para dar de alta un nuevo banco en el sistema.",
    path: "/bancos/anadir-banco",
    tags: ["bancos", "nuevo", "formulario", "como crear"],
  },
  {
    id: "bancos-crear-conciliacion",
    title: "Crear Conciliación",
    summary: "Funcionalidad para conciliar movimientos bancarios manualmente.",
    path: "/bancos/crear-conciliacion",
    tags: ["bancos", "conciliación", "tesorería", "como crear"],
  },
  {
    id: "bancos-glosario-tesoreria",
    title: "Glosario Tesorería",
    summary: "Definiciones y términos frecuentes del módulo de Bancos.",
    path: "/bancos/glosario-tesoreria",
    tags: ["bancos", "glosario", "tesorería", "términos"],
  },
  {
    id: "bancos-pago-cobro-factura",
    title: "Pago/Cobro Factura",
    summary: "Pantalla para registrar pagos y cobros vinculados a facturas.",
    path: "/bancos/pago-cobro-factura",
    tags: ["bancos", "pagos", "cobros", "facturas"],
  },
  {
    id: "bancos-seccion-bancos",
    title: "¿Qué es la Sección Bancos?",
    summary: "Explicación de cómo funciona el módulo de Bancos en el ERP.",
    path: "/bancos/seccion-bancos",
    tags: ["bancos", "ayuda", "explicación"],
  },

  // ---------------------------
  // 2. Catálogos
  // ---------------------------
  {
    id: "catalogos-listado",
    title: "Catálogos",
    summary: "Pantalla principal de Catálogos: gestión de elementos comunes.",
    path: "/catalogos",
    tags: ["catálogos", "configuración", "maestros"],
  },
  {
    id: "catalogos-almacenes",
    title: "Almacenes",
    summary: "Configuración y listado de almacenes disponibles en el ERP.",
    path: "/catalogos/almacenes",
    tags: ["almacenes", "inventario", "cetálogos"],
  },
  {
    id: "catalogos-atributo-productos",
    title: "Atributo Productos",
    summary: "Pantalla para definir atributos personalizados de productos.",
    path: "/catalogos/atributo-productos",
    tags: ["catálogos", "atributos", "productos"],
  },
  {
    id: "catalogos-atributos",
    title: "Atributos",
    summary: "Listado y gestión general de atributos de catálogo.",
    path: "/catalogos/atributos",
    tags: ["atributos", "catálogos", "configuración"],
  },
  {
    id: "catalogos-categoria-productos",
    title: "Categoría Productos",
    summary: "Definición y edición de categorías para productos.",
    path: "/catalogos/categoria-productos",
    tags: ["categorías", "productos", "catálogos"],
  },
  {
    id: "catalogos-centros-costos",
    title: "Centros de Costos",
    summary: "Pantalla para gestionar centros de costos de la empresa.",
    path: "/catalogos/centros-costos",
    tags: ["centros", "costos", "contabilidad"],
  },
  {
    id: "catalogos-glosario-catalogos",
    title: "Glosario Catálogos",
    summary: "Definiciones de términos usados en el módulo Catálogos.",
    path: "/catalogos/glosario-catalogos",
    tags: ["catálogos", "glosario", "términos"],
  },
  {
    id: "catalogos-unidades-medida",
    title: "Unidades de Medida",
    summary: "Configuración de unidades de medida para inventarios y costos.",
    path: "/catalogos/unidades-medida",
    tags: ["unidades", "medida", "inventario"],
  },
  {
    id: "catalogos-gestionar-atributos",
    title: "Gestionar Atributos",
    summary: "Pantalla avanzada para editar o eliminar atributos actuales.",
    path: "/catalogos/gestionar-atributos",
    tags: ["atributos", "editar", "eliminar"],
  },
  {
    id: "catalogos-seccion",
    title: "¿Qué es la Sección Catálogos?",
    summary: "Explicación del funcionamiento general del módulo de Catálogos.",
    path: "/catalogos/seccion-catalogos",
    tags: ["catálogos", "ayuda", "explicación"],
  },

  // ---------------------------
  // 3. Clientes
  // ---------------------------
  {
    id: "clientes-listado",
    title: "Clientes",
    summary: "Listado general de clientes: ver, filtrar y gestionar información.",
    path: "/clientes",
    tags: ["clientes", "terceros", "ventas"],
  },
  {
    id: "clientes-crear-factura-venta",
    title: "Crear Factura Venta",
    summary: "Generar una nueva factura de venta para uno de tus clientes.",
    path: "/clientes/crear-factura-venta",
    tags: ["clientes", "ventas", "factura","como crear"],
  },
  {
    id: "clientes-crear-presupuestos",
    title: "Crear Presupuestos",
    summary: "Pantalla para elaborar presupuestos de venta a clientes.",
    path: "/clientes/crear-presupuestos",
    tags: ["clientes", "presupuestos", "ventas", "como crear"],
  },
  {
    id: "clientes-gestionar-facturas-venta",
    title: "Gestionar Facturas Venta",
    summary: "Consulta, edición y anulación de facturas de venta existentes.",
    path: "/clientes/gestionar-facturas-venta",
    tags: ["facturas", "ventas", "clientes"],
  },
  {
    id: "clientes-glosario-ventas",
    title: "Glosario de Ventas",
    summary: "Definiciones de términos y conceptos del módulo de ventas.",
    path: "/clientes/glosario-ventas",
    tags: ["ventas", "glosario", "términos"],
  },
  {
    id: "clientes-notas-de-creditos",
    title: "Notas de Créditos",
    summary: "Generar y gestionar notas de crédito para clientes.",
    path: "/clientes/notas-de-creditos",
    tags: ["ventas", "notas", "créditos"],
  },
  {
    id: "clientes-cobros-ventas",
    title: "Cobros de Ventas",
    summary: "Pantalla para registrar cobros realizados a clientes.",
    path: "/clientes/cobros-ventas",
    tags: ["ventas", "cobros", "clientes", "como crear"],
  },
  {
    id: "clientes-seccion",
    title: "¿Qué es la Sección Clientes?",
    summary: "Explicación de cómo funciona el módulo de Clientes en el ERP.",
    path: "/clientes/que-es-clientes",
    tags: ["clientes", "ayuda", "explicación"],
  },

  // ---------------------------
  // 4. Contabilidad
  // ---------------------------
  {
    id: "contabilidad-listado",
    title: "Contabilidad",
    summary: "Pantalla principal de Contabilidad: asientos, cuentas y reportes.",
    path: "/contabilidad",
    tags: ["contabilidad", "finanzas", "asientos"],
  },
  {
    id: "contabilidad-crear-asiento",
    title: "Crear Asiento",
    summary: "Formulario para registrar un nuevo asiento contable.",
    path: "/contabilidad/crear-asiento",
    tags: ["contabilidad", "asientos", "nuevo", "como crear"],
  },
  {
    id: "contabilidad-crear-cuenta-contable",
    title: "Crear Cuenta Contable",
    summary: "Pantalla para dar de alta una nueva cuenta contable.",
    path: "/contabilidad/crear-cuenta-contable",
    tags: ["contabilidad", "cuentas", "nuevo", "como crear"],
  },
  {
    id: "contabilidad-estado-situacion",
    title: "Estado de Situación",
    summary: "Reporte de estado de situación financiera (balance general).",
    path: "/contabilidad/estado-situacion",
    tags: ["contabilidad", "reportes", "balance"],
  },
  {
    id: "contabilidad-automizar-asiento",
    title: "Automatizar Asiento",
    summary: "Módulo para generar asientos automáticos según reglas predefinidas.",
    path: "/contabilidad/automizar-asiento",
    tags: ["contabilidad", "automático", "reglas"],
  },
  {
    id: "contabilidad-glosario-contabilidad",
    title: "Glosario Contabilidad",
    summary: "Definiciones de términos usados en el módulo de contabilidad.",
    path: "/contabilidad/glosario-contabilidad",
    tags: ["contabilidad", "glosario", "términos"],
  },
  {
    id: "contabilidad-libro-diario",
    title: "Libro Diario",
    summary: "Pantalla para visualizar el libro diario de movimientos contables.",
    path: "/contabilidad/libro-diario",
    tags: ["contabilidad", "reportes", "diario"],
  },
  {
    id: "contabilidad-perdidas-ganancias",
    title: "Pérdidas y Ganancias",
    summary: "Reporte de pérdidas y ganancias para un período contable.",
    path: "/contabilidad/perdidas-ganancias",
    tags: ["reportes", "contabilidad", "PYG"],
  },
  {
    id: "contabilidad-periodo-contable",
    title: "Periodo Contable",
    summary: "Configuración y selección de períodos contables activos.",
    path: "/contabilidad/periodo-contable",
    tags: ["contabilidad", "períodos", "configuración"],
  },
  {
    id: "contabilidad-submayor-contable",
    title: "Submayor Contable",
    summary: "Pantalla para consultar el submayor y sus movimientos.",
    path: "/contabilidad/submayor-contable",
    tags: ["contabilidad", "submayor", "reportes"],
  },
  {
    id: "contabilidad-seccion",
    title: "¿Qué es la Sección Contabilidad?",
    summary: "Explicación del módulo de contabilidad y sus funcionalidades.",
    path: "/contabilidad/seccion-contabilidad",
    tags: ["contabilidad", "ayuda", "explicación"],
  },

  // ---------------------------
  // 5. Impuestos
  // ---------------------------
  {
    id: "impuestos-listado",
    title: "Impuestos",
    summary: "Pantalla principal de Impuestos: configuración y cálculos.",
    path: "/impuestos",
    tags: ["impuestos", "tributos", "configuración"],
  },
  {
    id: "impuestos-glosario-impuestos",
    title: "Glosario Impuestos",
    summary: "Definiciones de términos y conceptos en el módulo de impuestos.",
    path: "/impuestos/glosario-impuestos",
    tags: ["impuestos", "glosario", "términos"],
  },
  {
    id: "impuestos-tipos",
    title: "Tipos de Impuestos",
    summary: "Listado y configuración de diferentes tipos de impuestos.",
    path: "/impuestos/tipos-de-impuestos",
    tags: ["impuestos", "tipos", "configuración"],
  },
  {
    id: "impuestos-seccion",
    title: "¿Qué es la Sección Impuestos?",
    summary: "Explicación de cómo funciona el módulo de Impuestos en el ERP.",
    path: "/impuestos/seccion-impuestos",
    tags: ["impuestos", "ayuda", "explicación"],
  },

  // ---------------------------
  // 6. Inventario
  // ---------------------------
  {
    id: "inventario-listado",
    title: "Inventario",
    summary: "Pantalla principal de Inventario: stock, movimientos y ajustes.",
    path: "/inventario",
    tags: ["inventario", "stock", "almacén"],
  },
  {
    id: "inventario-ajustes",
    title: "Ajustes de Inventario",
    summary: "Pantalla para registrar y visualizar ajustes de inventario.",
    path: "/inventario/ajustes-inventario",
    tags: ["inventario", "ajustes", "stock", "como crear"],
  },
  {
    id: "inventario-crear-producto",
    title: "Crear Producto",
    summary: "Formulario para dar de alta un nuevo producto en el inventario.",
    path: "/inventario/crear-producto",
    tags: ["inventario", "productos", "nuevo", "como crear"],
  },
  {
    id: "inventario-glosario",
    title: "Glosario Inventario",
    summary: "Definiciones de términos usados en el módulo de inventario.",
    path: "/inventario/glosario-inventario",
    tags: ["inventario", "glosario", "términos"],
  },
  {
    id: "inventario-productos",
    title: "Productos",
    summary: "Listado y búsqueda de productos disponibles en el inventario.",
    path: "/inventario/productos",
    tags: ["productos", "inventario", "listado",  "como crear"],
  },
  {
    id: "inventario-productos-tipos",
    title: "Productos Tipos",
    summary: "Gestión de tipos o categorías de productos en el inventario.",
    path: "/inventario/productos-tipos",
    tags: ["productos", "tipos", "categorías"],
  },
  {
    id: "inventario-seccion",
    title: "¿Qué es la Sección Inventario?",
    summary: "Explicación de la funcionalidad principal del módulo de inventario.",
    path: "/inventario/descripcion",
    tags: ["inventario", "ayuda", "explicación"],
  },
  {
    id: "inventario-vales-salida",
    title: "Vales de Salida",
    summary: "Pantalla para emitir vales de salida de inventario.",
    path: "/inventario/vales-salida",
    tags: ["inventario", "vales", "salida", "como crear"],
  },
  {
    id: "inventario-devoluciones-vales",
    title: "Devoluciones de Vales",
    summary: "Gestión de devoluciones de vales de salida.",
    path: "/inventario/devolucion-vale-salida",
    tags: ["inventario", "devoluciones", "vales", "como crear"],
  },
  {
    id: "inventario-ajuste-inventario",
    title: "Ajuste Inventario",
    summary: "Pantalla para realizar ajustes manuales de inventario.",
    path: "/inventario/ajuste-inventario",
    tags: ["inventario", "ajustes", "manual", "como crear"],
  },

  // ---------------------------
  // 7. Perfil Empresa
  // ---------------------------
  {
    id: "perfil-empresa-listado",
    title: "Perfil Empresa",
    summary: "Pantalla principal de Perfil de Empresa: datos generales y configuración.",
    path: "/perfil-empresa",
    tags: ["perfil", "empresa", "configuración"],
  },
  {
    id: "perfil-empresa-configuracion",
    title: "Configuración",
    summary: "Opciones de configuración general de la empresa en el ERP.",
    path: "/perfil-empresa/configuracion",
    tags: ["perfil", "empresa", "configuración"],
  },
  {
    id: "perfil-empresa-elementos-de-gastos",
    title: "Elementos de Gastos",
    summary: "Gestión de elementos y categorías de gastos de la empresa.",
    path: "/perfil-empresa/elementos-de-gastos",
    tags: ["gastos", "perfiles", "configuración"],
  },
  {
    id: "perfil-empresa-formas-de-pago",
    title: "Formas de Pago",
    summary: "Definición de formas de pago aceptadas por la empresa.",
    path: "/perfil-empresa/formas-de-pago",
    tags: ["formas", "pago", "configuración"],
  },
  {
    id: "perfil-empresa-mi-perfil",
    title: "Mi Perfil",
    summary: "Pantalla para ver y editar datos de mi cuenta de usuario.",
    path: "/perfil-empresa/mi-perfil",
    tags: ["perfil", "usuario", "cuenta"],
  },
  {
    id: "perfil-empresa-monedas",
    title: "Monedas",
    summary: "Gestión de monedas disponibles y tipos de cambio.",
    path: "/perfil-empresa/monedas",
    tags: ["monedas", "divisas", "finanzas"],
  },
  {
    id: "perfil-empresa-planes",
    title: "Planes",
    summary: "Listado y selección de planes de suscripción de Balaxys ERP.",
    path: "/perfil-empresa/planes",
    tags: ["planes", "suscripción", "ERP"],
  },
  {
    id: "perfil-empresa-roles",
    title: "Roles",
    summary: "Gestión de roles y permisos de usuarios en la plataforma.",
    path: "/perfil-empresa/roles",
    tags: ["permisos", "roles", "seguridad"],
  },
  {
    id: "perfil-empresa-tipos-contribuyentes",
    title: "Tipos de Contribuyentes",
    summary: "Configuración de tipos de contribuyentes fiscales.",
    path: "/perfil-empresa/tipos-de-contribuyentes",
    tags: ["fiscal", "contribuyentes", "configuración"],
  },
  {
    id: "perfil-empresa-tipos-empresas",
    title: "Tipos de Empresas",
    summary: "Definición de categorías o tipos de empresas clientes.",
    path: "/perfil-empresa/tipos-de-empresas",
    tags: ["empresa", "categorías", "configuración"],
  },
  {
    id: "primeros-pasos",
    title: "Primeros Pasos",
    summary: "Guía inicial para comenzar a usar Balaxys ERP.",
    path: "/primeros-pasos",
    tags: ["inicio", "tutorial", "guía"],
  },
  {
    id: "primeros-pasos-getting-started",
    title: "Getting Started",
    summary: "Detalle paso a paso de la guía “Primeros Pasos”.",
    path: "/primeros-pasos/getting-started-details",
    tags: ["guía", "tutorial", "inicio"],
  },
  {
    id: "primeros-pasos-que-es-balaxys",
    title: "¿Qué es Balaxys?",
    summary: "Explicación general de qué es y para qué sirve Balaxys ERP.",
    path: "/primeros-pasos/que-es-balaxys",
    tags: ["balaxys", "información", "presentación"],
  },
  {
    id: "primeros-pasos-comienza-con-balaxys",
    title: "Comienza con Balaxys",
    summary: "Primeros pasos para registrarse y usar Balaxys por primera vez.",
    path: "/primeros-pasos/comienza-con-balaxys",
    tags: ["registro", "configuración", "inicio"],
  },
  {
    id: "primeros-pasos-explora-balaxys",
    title: "Explora Balaxys",
    summary: "Tour por las funcionalidades básicas del ERP para nuevos usuarios.",
    path: "/primeros-pasos/explora-balaxys",
    tags: ["tour", "funcionalidades", "inicio"],
  },
  {
    id: "primeros-pasos-ventas-guia-inicio",
    title: "Ventas – Guía de Inicio",
    summary: "Introducción al módulo de ventas: crear factura, presupuestos y más.",
    path: "/primeros-pasos/ventas-guia-inicio",
    tags: ["ventas", "tutorial", "inicio"],
  },
  {
    id: "primeros-pasos-compras-guia-inicio",
    title: "Compras – Guía de Inicio",
    summary: "Introducción al módulo de compras: proveedores, órdenes, pagos.",
    path: "/primeros-pasos/compras-guia-inicio",
    tags: ["compras", "tutorial", "inicio"],
  },
  {
    id: "primeros-pasos-inventario-guia-inicio",
    title: "Inventario – Guía de Inicio",
    summary: "Introducción al módulo de inventario: stock, ajustes, productos.",
    path: "/primeros-pasos/inventario-guia-inicio",
    tags: ["inventario", "tutorial", "inicio"],
  },
  {
    id: "primeros-pasos-contabilidad-guia-inicio",
    title: "Contabilidad – Guía de Inicio",
    summary: "Introducción al módulo de contabilidad: asientos, cuentas, reportes.",
    path: "/primeros-pasos/contabilidad-guia-inicio",
    tags: ["contabilidad", "tutorial", "inicio"],
  },
  

];

export default searchIndex;
