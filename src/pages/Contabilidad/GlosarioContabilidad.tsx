// src/pages/Reportes/GlosarioContabilidad.tsx
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

import React from "react";
import { Box, Typography, List, ListItem, Link, ListItemText, Divider } from "@mui/material";

/**
 * Página de ayuda: Glosario de Contabilidad
 * Muestra términos contables clave con sus definiciones, agrupados alfabéticamente.
 */
const GlosarioContabilidad: React.FC = () => {
  // Definición del glosario contable
  const glosario = [
    { term: "Activos", definition: "Recursos controlados por la empresa que generarán beneficios económicos futuros." },
    { term: "Acreedor", definition: "Parte a la que la empresa debe dinero u obligaciones pendientes de pago." },
    { term: "Amortización", definition: "Distribución sistemática del costo de un activo intangible a lo largo de su vida útil." },
    { term: "Asiento contable", definition: "Registro de una transacción en el libro diario, con débitos y créditos equilibrados." },
    { term: "Balance general", definition: "Informe financiero que muestra activos, pasivos y patrimonio en una fecha específica." },
    { term: "Cartera de pagos", definition: "Conjunto de obligaciones a corto plazo que la empresa debe pagar a sus proveedores." },
    { term: "Cartera de cobros", definition: "Conjunto de derechos de cobro a corto plazo que la empresa tiene pendiente de recibir." },
    { term: "Costo histórico", definition: "Valor original de adquisición de un activo, sin ajustar por inflación." },
    { term: "Débito", definition: "En un asiento contable, el lado que incrementa activos o disminuye pasivos y patrimonio." },
    { term: "Depreciación", definition: "Distribución periódica del costo de un activo fijo a lo largo de su vida útil." },
    { term: "Efectivo y equivalentes", definition: "Dinero disponible en caja y en cuentas bancarias, así como inversiones de alta liquidez." },
    { term: "Estado de resultados", definition: "Informe que muestra ingresos, costos, gastos y utilidad o pérdida en un período." },
    { term: "Estado de flujo de efectivo", definition: "Reporte que detalla las entradas y salidas de efectivo en tres actividades: operativas, de inversión y financiamiento." },
    { term: "Gastos operativos", definition: "Costos incurridos en el proceso cotidiano de venta y administración de la empresa." },
    { term: "Ingresos operacionales", definition: "Ingresos derivados de las actividades principales del negocio, como ventas de productos o servicios." },
    { term: "Inventarios", definition: "Bienes o productos que la empresa mantiene para la venta o para su uso en el proceso de producción." },
    { term: "Pasivos", definition: "Obligaciones presentes de la empresa surgidas de eventos pasados, cuyo pago se espera que reduzca recursos." },
    { term: "Patrimonio", definition: "Diferencia entre activos y pasivos; representa el valor neto de la empresa para sus accionistas." },
    { term: "Periodo contable", definition: "Duración temporal (mes, trimestre, año) durante la cual se registran y agrupan transacciones." },
    { term: "Plan de cuentas", definition: "Listado estructurado de todas las cuentas contables utilizadas para registrar transacciones." },
    { term: "Política contable", definition: "Conjunto de principios, bases y reglas específicas que la empresa elige para preparar sus estados financieros." },
    { term: "Pérdida", definition: "Situación en la que los gastos totales superan los ingresos totales en un período contable." },
    { term: "Provisión", definition: "Estimación de un pasivo de monto o fecha inciertos, reconocido antes de que ocurra el desembolso." },
    { term: "Saldo deudor", definition: "Monto positivo que refleja que el total de débitos de una cuenta excede a los créditos." },
    { term: "Saldo acreedor", definition: "Monto positivo que indica que el total de créditos de una cuenta excede a los débitos." },
    { term: "Subcuenta", definition: "Cuenta de detalle que depende de una cuenta principal para registrar transacciones más específicas." },
    { term: "Transacción contable", definition: "Evento económico que modifica la posición financiera de la empresa y se registra en libros." },
    { term: "Valor razonable", definition: "Precio estimado al que un activo podría venderse o un pasivo liquidarse en una transacción ordenada." }
  ];

  // Agrupar términos por inicial
  const groupedTerms = glosario.reduce<{ [letter: string]: { term: string; definition: string }[] }>(
    (acc, item) => {
      const firstLetter = item.term.charAt(0).toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(item);
      return acc;
    },
    {}
  );

  // Ordenar claves alfabéticamente
  const sortedKeys = Object.keys(groupedTerms).sort();

  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/** Índice de navegación **/}
      <Box
        sx={{
          flex: 1,
          position: "sticky",
          top: 20,
          height: "100vh",
          paddingRight: "20px",
          paddingLeft: "20px",
          overflowY: "auto",
          borderRight: "1px solid #e0e0e0",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "16px", color: "#1976d2" }}>
          ÍNDICE
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

      {/** Contenido del glosario **/}
      <Box sx={{ flex: 3, overflowY: "auto", paddingLeft: "20px" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Glosario de Contabilidad
        </Typography>
        <Divider sx={{ margin: "16px 0" }} />

        {sortedKeys.map((letter) => (
          <section key={letter} id={letter}>
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "8px" }}>
              {letter}
            </Typography>
            {groupedTerms[letter]
              .sort((a, b) => a.term.localeCompare(b.term))
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

export default GlosarioContabilidad;
