// src/App.tsx

import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Box } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";

// Componentes globales
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";

// ----------------------------------------
// 1. Bancos
// ----------------------------------------
import AnadirBanco from "./pages/Bancos/AnadirBanco";
import Bancos from "./pages/Bancos/Bancos";
import CrearConciliacion from "./pages/Bancos/CrearConciliacion";
import GlosarioBanco from "./pages/Bancos/GlosarioBanco";
import PagoCobroFactura from "./pages/Bancos/PagoCobroFactura";
import QueBancos from "./pages/Bancos/QueBancos";

// ----------------------------------------
// 2. Catálogos
// ----------------------------------------
import Almacenes from "./pages/Catalogos/Almacenes";
import AtributoProductos from "./pages/Catalogos/AtributoProductos";
import Atributos from "./pages/Catalogos/Atributos";
import CategoriaProductos from "./pages/Catalogos/CategoriaProductos";
import CentrosCostos from "./pages/Catalogos/CentrosCostos";
import Catalogos from "./pages/Catalogos/Catalogos";
import GlosarioCatalogos from "./pages/Catalogos/GlosarioCatalogos";
import UnidadesMedida from "./pages/Catalogos/UnidadesMedida";
import GestionarAtributos from "./pages/Catalogos/GestionarAtributos";
import QueEsSeccionCatalogos from "./pages/Catalogos/QueEsSeccionCatalogos";

// ----------------------------------------
// 3. Clientes
// ----------------------------------------
import Clientes from "./pages/Clientes/Clientes";
import CobrosVentas from "./pages/Clientes/CobrosVentas";
import CrearFacturaVenta from "./pages/Clientes/CrearFacturaVenta";
import GestionarFacturasVenta from "./pages/Clientes/GestionarFacturaVenta";
import CrearPresupuestos from "./pages/Clientes/CrearPresupuestos";
import GlosarioVentas from "./pages/Clientes/GlosariodeVentas";
import NotasdeCreditos from "./pages/Clientes/NotasdeCreditos";
import QueEsClientes from "./pages/Clientes/QueEsClientes";

// ----------------------------------------
// 4. Contabilidad
// ----------------------------------------
import GestionarAsientoAutomatico from "./pages/Contabilidad/GestionarAsientoAutomatico";
import Contabilidad from "./pages/Contabilidad/Contabilidad";
import CrearAsiento from "./pages/Contabilidad/CrearAsiento";
import CrearCuentaContable from "./pages/Contabilidad/CrearCuentaContable";
import EstadoSituación from "./pages/Contabilidad/EstadoSituación";
import GlosarioContabilidad from "./pages/Contabilidad/GlosarioContabilidad";
import LibroDiario from "./pages/Contabilidad/LibroDiario";
import PerdidasGanancias from "./pages/Contabilidad/PerdidasGanancias";
import PeriodoContable from "./pages/Contabilidad/PeriodoContable";
import QueEsLaSeccionContabilidad from "./pages/Contabilidad/QueEsLaSeccionContabilidad";
import SubmayorContable from "./pages/Contabilidad/SubmayorContable";

// ----------------------------------------
// 5. Impuestos
// ----------------------------------------
import GlosarioImpuestos from "./pages/Impuestos/GlosarioImpuestos";
import Impuestos from "./pages/Impuestos/Impuestos";
import TiposDelImpuestos from "./pages/Impuestos/TiposDeImpuestos";
import QueEsImpuestos from "./pages/Impuestos/QueEsImpuestos";

// ----------------------------------------
// 6. Inventario
// ----------------------------------------
import AjustesInventario from "./pages/Inventario/AjustesInventario";
import CrearProducto from "./pages/Inventario/CrearProducto";
import GlosarioInventario from "./pages/Inventario/GlosarioInventario";
import Inventario from "./pages/Inventario/Inventario";
import Productos from "./pages/Inventario/Productos";
import ProductosTipos from "./pages/Inventario/ProductosTipos";
import QueEsLaSeccionInventario from "./pages/Inventario/QueEsLaSeccionInventario";
import ValesDeSalida from "./pages/Inventario/ValesDeSalida";
import DevolucionesValesSalida from "./pages/Inventario/DevolucionesValesSalida";
import AjusteInventario from "./pages/Inventario/AjusteInventario";

// ----------------------------------------
// 7. PerfilEmpresa
// ----------------------------------------
import Configuracion from "./pages/PerfilEmpresa/Configuracion";
import ElementosDeGastos from "./pages/PerfilEmpresa/ElementosDeGastos";
import FormasDePago from "./pages/PerfilEmpresa/FormasDePago";
import MiPerfil from "./pages/PerfilEmpresa/MiPerfil";
import Monedas from "./pages/PerfilEmpresa/Monedas";
import PerfilEmpresa from "./pages/PerfilEmpresa/PerfilEmpresa";
import Planes from "./pages/PerfilEmpresa/Planes";
import Roles from "./pages/PerfilEmpresa/Roles";
import TiposDeConstribuyentes from "./pages/PerfilEmpresa/TiposDeConstribuyentes";
import TiposDeEmpesas from "./pages/PerfilEmpresa/TiposDeEmpesas";
import Usuarios from "./pages/PerfilEmpresa/Usuarios";
import Vencimientos from "./pages/PerfilEmpresa/Vencimientos";

// ----------------------------------------
// 9. PrimerosPasos
// ----------------------------------------
import GettingStartedDetail from "./pages/PrimerosPasos/GettingStartedDetail";
import QueEsBalaxys from "./pages/PrimerosPasos/QueEsBalaxys";
import ComienzaConBalaxys from "./pages/PrimerosPasos/ComienzaConBalaxys";
import ExploraBalaxys from "./pages/PrimerosPasos/ExploraBalaxys";
import VentasGuiaInicio from "./pages/PrimerosPasos/VentasGuiaInicio";
import ComprasGuiaInicio from "./pages/PrimerosPasos/ComprasGuiaInicio";
import InventarioGuiaInicio from "./pages/PrimerosPasos/InventarioGuiaInicio";
import ContabilidadGuiaInicio from "./pages/PrimerosPasos/ContabilidadGuiaInicio";

// ----------------------------------------
// 10. Proveedores
// ----------------------------------------
import PagosCompra from "./pages/Proveedores/PagosCompra";
import Compras from "./pages/Proveedores/Compras";
import CrearFacturaCompra from "./pages/Proveedores/CrearFacturaCompra";
import OrdenCompra from "./pages/Proveedores/OrdenCompra";
import GestionarCompra from "./pages/Proveedores/GestionarCompra";
import GlosarioCompras from "./pages/Proveedores/GlosarioCompras";
import NotasDebitos from "./pages/Proveedores/NotasDebitos";
import GestionarPagos from "./pages/Proveedores/GestionarPagos";
import QueEsLaSeccionProveedores from "./pages/Proveedores/QueEsLaSeccionProveedores";

// ----------------------------------------
// 11. Otros “sueltas”
// ----------------------------------------
import Analitica from "./pages/Analitica/Analitica";
import Videos from "./pages/Videos/Videos";

// Ahora Home recibe la prop "query" que viene desde App
import Home from "./pages/Home";

function App() {
  // 1) Levantar el estado de búsqueda: lo usaremos en Navbar y en Home
  const [query, setQuery] = useState("");

  return (
    <HelmetProvider>
      <Router>
        {/*
          2) Renderizamos siempre el Navbar en la parte superior:
             - Le pasamos setQuery para que, cada vez que el usuario escriba,
               al llamar `setQuery(valor)`, actualice el estado global de búsqueda.
             - Además, navegaremos a "/" en cuanto el usuario empiece a escribir,
               para que la Home se muestre con resultados (ver más abajo cómo configurar Navbar).
        */}
        <Navbar setSearch={setQuery} />

        {/*
          3) Debajo del Navbar, las migas de pan (breadcrumbs),
             visibles en todas las rutas.
        */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            py: 2,
            backgroundColor: "#fafafa",
            width: "100%",
          }}
        >
          <Breadcrumbs />
        </Box>

        <main>
          <Routes>
            {/* --------------------------- */}
            {/* RUTA HOME + “sueltas”      */}
            {/* --------------------------- */}
            {/* La Home recibe prop "query" para filtrar resultados */}
            <Route path="/" element={<Home query={query} />} />

            <Route path="/analitica-avanzada" element={<Analitica />} />
            <Route path="/video-tutoriales" element={<Videos />} />
            <Route path="/preguntas" element={<Videos />} />

            {/* --------------------------- */}
            {/* 1. Bancos                  */}
            {/* --------------------------- */}
            <Route path="/bancos" element={<Bancos />} />
            <Route path="/bancos/anadir-banco" element={<AnadirBanco />} />
            <Route
              path="/bancos/crear-conciliacion"
              element={<CrearConciliacion />}
            />
            <Route
              path="/bancos/glosario-tesoreria"
              element={<GlosarioBanco />}
            />
            <Route
              path="/bancos/pago-cobro-factura"
              element={<PagoCobroFactura />}
            />
            <Route path="/bancos/seccion-bancos" element={<QueBancos />} />

            {/* --------------------------- */}
            {/* 2. Catálogos               */}
            {/* --------------------------- */}
            <Route path="/catalogos" element={<Catalogos />} />
            <Route path="/catalogos/almacenes" element={<Almacenes />} />
            <Route
              path="/catalogos/atributo-productos"
              element={<AtributoProductos />}
            />
            <Route path="/catalogos/atributos" element={<Atributos />} />
            <Route
              path="/catalogos/categoria-productos"
              element={<CategoriaProductos />}
            />
            <Route
              path="/catalogos/centros-costos"
              element={<CentrosCostos />}
            />
            <Route
              path="/catalogos/glosario-catalogos"
              element={<GlosarioCatalogos />}
            />
            <Route
              path="/catalogos/unidades-medida"
              element={<UnidadesMedida />}
            />
            <Route
              path="/catalogos/gestionar-atributos"
              element={<GestionarAtributos />}
            />
            <Route
              path="/catalogos/seccion-catalogos"
              element={<QueEsSeccionCatalogos />}
            />

            {/* --------------------------- */}
            {/* 3. Clientes                */}
            {/* --------------------------- */}
            <Route path="/clientes" element={<Clientes />} />
            <Route
              path="/clientes/crear-factura-venta"
              element={<CrearFacturaVenta />}
            />
            <Route
              path="/clientes/crear-presupuestos"
              element={<CrearPresupuestos />}
            />
            <Route
              path="/clientes/gestionar-facturas-venta"
              element={<GestionarFacturasVenta />}
            />
            <Route
              path="/clientes/glosario-ventas"
              element={<GlosarioVentas />}
            />
            <Route
              path="/clientes/notas-de-creditos"
              element={<NotasdeCreditos />}
            />
            <Route
              path="/clientes/cobros-ventas"
              element={<CobrosVentas />}
            />
            <Route
              path="/clientes/que-es-clientes"
              element={<QueEsClientes />}
            />

            {/* --------------------------- */}
            {/* 4. Contabilidad            */}
            {/* --------------------------- */}
            <Route path="/contabilidad" element={<Contabilidad />} />
            <Route
              path="/contabilidad/crear-asiento"
              element={<CrearAsiento />}
            />
            <Route
              path="/contabilidad/crear-cuenta-contable"
              element={<CrearCuentaContable />}
            />
            <Route
              path="/contabilidad/estado-situacion"
              element={<EstadoSituación />}
            />
            <Route
              path="/contabilidad/automizar-asiento"
              element={<GestionarAsientoAutomatico />}
            />
            <Route
              path="/contabilidad/glosario-contabilidad"
              element={<GlosarioContabilidad />}
            />
            <Route
              path="/contabilidad/libro-diario"
              element={<LibroDiario />}
            />
            <Route
              path="/contabilidad/perdidas-ganancias"
              element={<PerdidasGanancias />}
            />
            <Route
              path="/contabilidad/periodo-contable"
              element={<PeriodoContable />}
            />
            <Route
              path="/contabilidad/submayor-contable"
              element={<SubmayorContable />}
            />
            <Route
              path="/contabilidad/seccion-contabilidad"
              element={<QueEsLaSeccionContabilidad />}
            />

            {/* --------------------------- */}
            {/* 5. Impuestos               */}
            {/* --------------------------- */}
            <Route path="/impuestos" element={<Impuestos />} />
            <Route
              path="/impuestos/glosario-impuestos"
              element={<GlosarioImpuestos />}
            />
            <Route
              path="/impuestos/tipos-de-impuestos"
              element={<TiposDelImpuestos />}
            />
            <Route
              path="/impuestos/seccion-impuestos"
              element={<QueEsImpuestos />}
            />

            {/* --------------------------- */}
            {/* 6. Inventario              */}
            {/* --------------------------- */}
            <Route path="/inventario" element={<Inventario />} />
            <Route
              path="/inventario/ajustes-inventario"
              element={<AjustesInventario />}
            />
            <Route
              path="/inventario/crear-producto"
              element={<CrearProducto />}
            />
            <Route
              path="/inventario/glosario-inventario"
              element={<GlosarioInventario />}
            />
            <Route
              path="/inventario/productos"
              element={<Productos />}
            />
            <Route
              path="/inventario/productos-tipos"
              element={<ProductosTipos />}
            />
            <Route
              path="/inventario/descripcion"
              element={<QueEsLaSeccionInventario />}
            />
            <Route
              path="/inventario/vales-salida"
              element={<ValesDeSalida />}
            />
            <Route
              path="/inventario/devolucion-vale-salida"
              element={<DevolucionesValesSalida />}
            />
            <Route
              path="/inventario/ajuste-inventario"
              element={<AjusteInventario />}
            />

            {/* --------------------------- */}
            {/* 7. PerfilEmpresa           */}
            {/* --------------------------- */}
            <Route path="/perfil-empresa" element={<PerfilEmpresa />} />
            <Route
              path="/perfil-empresa/configuracion"
              element={<Configuracion />}
            />
            <Route
              path="/perfil-empresa/elementos-de-gastos"
              element={<ElementosDeGastos />}
            />
            <Route
              path="/perfil-empresa/formas-de-pago"
              element={<FormasDePago />}
            />
            <Route
              path="/perfil-empresa/mi-perfil"
              element={<MiPerfil />}
            />
            <Route
              path="/perfil-empresa/monedas"
              element={<Monedas />}
            />
            <Route
              path="/perfil-empresa/planes"
              element={<Planes />}
            />
            <Route
              path="/perfil-empresa/roles"
              element={<Roles />}
            />
            <Route
              path="/perfil-empresa/tipos-de-contribuyentes"
              element={<TiposDeConstribuyentes />}
            />
            <Route
              path="/perfil-empresa/tipos-de-empresas"
              element={<TiposDeEmpesas />}
            />
            <Route
              path="/perfil-empresa/usuarios"
              element={<Usuarios />}
            />
            <Route
              path="/perfil-empresa/vencimientos"
              element={<Vencimientos />}
            />

            {/* --------------------------- */}
            {/* 9. PrimerosPasos           */}
            {/* --------------------------- */}
            <Route
              path="/primeros-pasos"
              element={<GettingStartedDetail />}
            />
            <Route
              path="/primeros-pasos/getting-started-details"
              element={<GettingStartedDetail />}
            />
            <Route
              path="/primeros-pasos/que-es-balaxys"
              element={<QueEsBalaxys />}
            />
            <Route
              path="/primeros-pasos/comienza-con-balaxys"
              element={<ComienzaConBalaxys />}
            />
            <Route
              path="/primeros-pasos/explora-balaxys"
              element={<ExploraBalaxys />}
            />
            <Route
              path="/primeros-pasos/ventas-guia-inicio"
              element={<VentasGuiaInicio />}
            />
            <Route
              path="/primeros-pasos/compras-guia-inicio"
              element={<ComprasGuiaInicio />}
            />
            <Route
              path="/primeros-pasos/inventario-guia-inicio"
              element={<InventarioGuiaInicio />}
            />
            <Route
              path="/primeros-pasos/contabilidad-guia-inicio"
              element={<ContabilidadGuiaInicio />}
            />

            {/* --------------------------- */}
            {/* 10. Proveedores             */}
            {/* --------------------------- */}
            <Route path="/proveedores" element={<Compras />} />
            <Route
              path="/proveedores/anadir-pagos-compra"
              element={<PagosCompra />}
            />
            <Route
              path="/proveedores/crear-factura-compra"
              element={<CrearFacturaCompra />}
            />
            <Route
              path="/proveedores/orden-de-compra"
              element={<OrdenCompra />}
            />
            <Route
              path="/proveedores/gestionar-compra"
              element={<GestionarCompra />}
            />
            <Route
              path="/proveedores/glosario-compras"
              element={<GlosarioCompras />}
            />
            <Route
              path="/proveedores/notas-de-debitos"
              element={<NotasDebitos />}
            />
            <Route
              path="/proveedores/gestionar-pagos"
              element={<GestionarPagos />}
            />
            <Route
              path="/proveedores/seccion-proveedores"
              element={<QueEsLaSeccionProveedores />}
            />

            {/* Ruta comodín: redirigir a "/" */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
