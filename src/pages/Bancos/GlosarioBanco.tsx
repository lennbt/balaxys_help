// src/pages/Bancos/GlosarioBanco.tsx
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  Link,
  ListItemText,
  Divider,
} from "@mui/material";

const GlosarioBanco: React.FC = () => {
  // Lista de términos y definiciones relacionados con Bancos y Tesorería en Balaxys ERP
  const glosario = [
    {
      term: "Banco",
      definition:
        "Entidad financiera donde se registran cuentas corrientes, de ahorro y se gestionan transacciones bancarias dentro de Balaxys ERP.",
    },
    {
      term: "CBAN (Código Banco)",
      definition:
        "Código interno o abreviado que identifica a cada banco en Balaxys para diferenciar entidades en la configuración de cuentas.",
    },
    {
      term: "Chequera",
      definition:
        "Conjunto de cheques físicos o digitales asociado a una cuenta corriente. Permite emitir cheques para pagos a proveedores o transferencias.",
    },
    {
      term: "Cobro",
      definition:
        "Registro de ingresos de dinero en la cuenta bancaria: facturas cobradas, pagos de clientes y otras entradas de tesorería.",
    },
    {
      term: "Conciliación Bancaria",
      definition:
        "Proceso de emparejar los movimientos bancarios importados o conectados con los asientos contables para asegurar que los saldos coincidan.",
    },
    {
      term: "Cuenta Corriente",
      definition:
        "Tipo de cuenta bancaria habilitada para pagos y cobros frecuentes; en Balaxys se registra como “Cuenta Corriente” para conciliar transacciones.",
    },
    {
      term: "Cuenta de Ahorro",
      definition:
        "Cuenta bancaria destinada al depósito de fondos con menor movimientos; en Balaxys se utiliza principalmente para registrar intereses o rendimientos.",
    },
    {
      term: "Depósito",
      definition:
        "Ingreso de dinero a una cuenta bancaria, ya sea por efectivo, cheque o transferencia electrónica. Se registra como movimiento entrante.",
    },
    {
      term: "Divisa",
      definition:
        "Moneda en la que opera la cuenta bancaria (por ejemplo, UYU, USD, EUR). Balaxys permite gestionar cuentas en múltiples divisas.",
    },
    {
      term: "Extracto Bancario",
      definition:
        "Documento oficial emitido por el banco con el resumen de todas las transacciones realizadas en un período determinado.",
    },
    {
      term: "IBAN",
      definition:
        "International Bank Account Number. Código estándar internacional para identificar cuentas bancarias en transferencias electrónicas.",
    },
    {
      term: "Interés Bancario",
      definition:
        "Monto adicional que paga el banco sobre saldos positivos en cuentas de ahorro o de inversión. En Balaxys se registra como asiento contable.",
    },
    {
      term: "Movimientos Bancarios",
      definition:
        "Listado de transacciones (débitos y créditos) realizadas en una cuenta: pagos, cobros, transferencias, comisiones, intereses, etc.",
    },
    {
      term: "Pago",
      definition:
        "Salida de dinero desde la cuenta bancaria para cubrir obligaciones: factura a proveedor, nómina, impuestos, o cualquier anticipo.",
    },
    {
      term: "Saldo Bancario",
      definition:
        "Monto disponible en una cuenta en un momento dado. Se usa como referencia al iniciar la conciliación dentro de Balaxys ERP.",
    },
    {
      term: "SWIFT",
      definition:
        "Society for Worldwide Interbank Financial Telecommunication. Código utilizado para identificar bancos en transferencias internacionales.",
    },
    {
      term: "Tesorería",
      definition:
        "Módulo o función en Balaxys ERP encargado de gestionar el flujo de caja, movimientos bancarios y conciliaciones.",
    },
    {
      term: "Transferencia Electrónica",
      definition:
        "Movimiento de fondos entre cuentas bancarias, tanto internas como a otros bancos. Se puede registrar manualmente o a través de importación de archivos.",
    },
  ];

  // Agrupar términos por su letra inicial
  const groupedTerms = glosario.reduce<{
    [key: string]: { term: string; definition: string }[];
  }>((acc, item) => {
    const firstLetter = item.term.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(item);
    return acc;
  }, {});

  // Ordenar las letras del índice alfabéticamente
  const sortedKeys = Object.keys(groupedTerms).sort();

  return (
    <Box sx={{ display: "flex", padding: "20px" }}>
      {/* ============================= */}
      {/* 1. ÍNDICE DE NAVEGACIÓN      */}
      {/* ============================= */}
      <Box
        sx={{
          flex: 1,
          position: "sticky",
          top: 20,
          height: "100vh",
          paddingRight: "20px",
          overflowY: "auto",
          textAlign: "left",
          borderRight: "1px solid #e0e0e0",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, marginBottom: "16px", color: "#1976d2" }}
        >
          ÍNDICE ALFABÉTICO
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

      {/* ============================= */}
      {/* 2. CONTENIDO PRINCIPAL       */}
      {/* ============================= */}
      <Box sx={{ flex: 3, overflowY: "auto", paddingLeft: "20px" }}>
        {/* TÍTULO DE LA PÁGINA */}
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Glosario de Bancos y Tesorería
        </Typography>

        <Divider sx={{ margin: "16px 0" }} />

        {/* Listado de términos agrupados por letra inicial */}
        {sortedKeys.map((letter) => (
          <section key={letter} id={letter}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
            >
              {letter}
            </Typography>

            {groupedTerms[letter]
              .sort((a, b) => a.term.localeCompare(b.term))
              .map((item, index) => (
                <Box key={index}>
                  <Typography variant="h6" sx={{ marginBottom: "4px" }}>
                    {item.term}
                  </Typography>
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

export default GlosarioBanco;
