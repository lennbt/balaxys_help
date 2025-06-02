// src/pages/Catalogos/AtributoProductos.tsx
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
  Stack,
  TextField,
  Button,
} from "@mui/material";

const AtributoProductos: React.FC = () => {
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
          paddingLeft: "20px",
          overflowY: "auto",
          textAlign: "left",
          borderRight: "1px solid #e0e0e0",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, marginBottom: "16px", color: "#1976d2" }}
        >
          ÍNDICE DE CONTENIDO
        </Typography>
        <List>
          <ListItem>
            <Link href="#introduccion" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="1. Introducción" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#prerrequisitos" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="2. Prerrequisitos" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#campos-del-formulario" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="3. Campos del Formulario" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#agregar-opciones" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="4. Agregar Opciones" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#guardar-cancelar" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="5. Guardar / Cancelar" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#faq" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="6. Preguntas Frecuentes" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#enlaces-relacionados" sx={{ textDecoration: "none", color: "#1976d2" }}>
              <ListItemText primary="7. Enlaces Relacionados" />
            </Link>
          </ListItem>
        </List>
      </Box>

      {/* ============================= */}
      {/* 2. CONTENIDO PRINCIPAL       */}
      {/* ============================= */}
      <Box sx={{ flex: 3, overflowY: "auto", paddingLeft: "20px" }}>
        {/* ----- TÍTULO PRINCIPAL ----- */}
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, textAlign: "justify" }}>
          Cómo Crear un Atributo de Producto con Opciones en Balaxys ERP
        </Typography>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 1. Introducción ======== */}
        <section id="introduccion">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            1. Introducción
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
            En Balaxys ERP, los atributos de producto permiten clasificar y agregar características
            personalizadas a tus productos (por ejemplo, Color, Tamaño, Material). Cada atributo puede
            contener múltiples opciones (Azul, Rojo, Verde, etc.), facilitando la gestión de variantes
            y filtros en tu catálogo de inventario.
          </Typography>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 2. Prerrequisitos ======== */}
        <section id="prerrequisitos">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            2. Prerrequisitos
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "8px" }}>
            Antes de crear un atributo, asegúrate de:
          </Typography>
          <List sx={{ marginLeft: "20px", marginBottom: "16px" }}>
            <ListItem>
              <ListItemText primary="Tener permisos de administrador o de gestión de Catálogos en tu rol de usuario." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Contar con al menos un producto o categoría donde aplicar el nuevo atributo." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Definir el nombre del atributo y las posibles opciones que deseas incluir (por ejemplo: Color → Azul, Rojo, Verde)." />
            </ListItem>
          </List>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 3. Campos del Formulario ======== */}
        <section id="campos-del-formulario">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            3. Campos del Formulario
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "12px" }}>
            Al hacer clic en “Nuevo Atributo”, se desplegará un modal con los siguientes campos:
          </Typography>
          <Stack component="ul" sx={{ marginLeft: "20px", marginBottom: "16px" }}>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                <strong>Nombre del Atributo:</strong> Texto identificador del atributo (p. ej. “Color”, “Tamaño”). Máximo 50 caracteres.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                <strong>Opción 1, Opción 2, …:</strong> Campos para cada valor posible del atributo. Por ejemplo, “Azul”, “Rojo”, “Verde”.
              </Typography>
            </li>
          </Stack>

          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "16px" }}>
            Estos valores aparecerán luego como opciones desplegables en la ficha del producto, permitiendo
            elegir entre ellas al crear o editar un ítem.
          </Typography>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 4. Agregar Opciones ======== */}
        <section id="agregar-opciones">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            4. Agregar Opciones
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "12px" }}>
            Para incluir más opciones en el atributo:
          </Typography>
          <Stack component="ol" sx={{ marginLeft: "20px", marginBottom: "16px" }}>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                Haz clic en el botón <strong>“+ Nueva Opción”</strong> dentro del modal. 
                Aparecerá un nuevo campo en blanco para ingresar la siguiente opción.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                Completa el nombre de la opción (p. ej. “Amarillo”).
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                Repite este paso por cada opción adicional que necesites.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                Si deseas eliminar una opción, haz clic en el ícono de la papelera junto al campo correspondiente.
              </Typography>
            </li>
          </Stack>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 5. Guardar / Cancelar ======== */}
        <section id="guardar-cancelar">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            5. Guardar / Cancelar
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", marginBottom: "12px" }}>
            Una vez que hayas ingresado el nombre del atributo y todas sus opciones:
          </Typography>
          <List sx={{ marginLeft: "20px", marginBottom: "16px" }}>
            <ListItem>
              <ListItemText primary="Haz clic en <strong>“Guardar”</strong> para registrar el nuevo atributo y sus opciones. Se mostrará un mensaje de confirmación y el atributo se agregará a la lista en la pantalla de Catálogos." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Si decides no crear el atributo, presiona <strong>“Cancelar”</strong> o cierra el modal con el icono “X”. No se guardarán los cambios." />
            </ListItem>
          </List>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 6. Preguntas Frecuentes ======== */}
        <section id="faq">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            6. Preguntas Frecuentes
          </Typography>
          <Box component="dl" sx={{ marginLeft: "20px", marginBottom: "16px" }}>
            <Typography
              component="dt"
              variant="body1"
              sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}
            >
              ¿Puedo editar un atributo existente?
            </Typography>
            <Typography
              component="dd"
              variant="body1"
              sx={{ marginBottom: "12px", marginLeft: "20px", textAlign: "justify" }}
            >
              Sí. En la lista de atributos, haz clic en el icono de lápiz junto al atributo deseado. 
              Actualiza el nombre o las opciones y guarda los cambios.
            </Typography>

            <Typography
              component="dt"
              variant="body1"
              sx={{ fontWeight: "bold", marginBottom: "4px", textAlign: "justify" }}
            >
              ¿Cómo elimino una opción que ya no necesito?
            </Typography>
            <Typography
              component="dd"
              variant="body1"
              sx={{ marginLeft: "20px", marginBottom: "16px", textAlign: "justify" }}
            >
              Dentro del modal de creación/edición, haz clic en el ícono de la papelera al lado de la 
              opción que deseas eliminar. Luego guarda los cambios para actualizar el atributo.
            </Typography>
          </Box>
        </section>

        <Divider sx={{ margin: "16px 0" }} />

        {/* ======== 7. Enlaces Relacionados ======== */}
        <section id="enlaces-relacionados">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "8px", textAlign: "justify" }}
          >
            7. Enlaces Relacionados
          </Typography>
          <List sx={{ marginLeft: "20px", marginBottom: "32px" }}>
            <ListItem>
              <Link href="/catalogos" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Catálogos de Productos" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/catalogos/almacenes" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Almacenes" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/impuestos" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Módulo de Impuestos" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/faq" sx={{ textDecoration: "none", color: "#1976d2" }}>
                <ListItemText primary="Preguntas Frecuentes Generales" />
              </Link>
            </ListItem>
          </List>
        </section>

        <Divider sx={{ margin: "16px 0" }} />
      </Box>
    </Box>
  );
};

export default AtributoProductos;
