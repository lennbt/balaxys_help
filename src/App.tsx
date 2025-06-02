// src/App.tsx


import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";   // Ya existía
import Footer from "./components/Footer";   // Ya existía

// ↓––––– IMPORTACIÓN DEL COMPONENTE Breadcrumbs –––––↓
import Breadcrumbs from "./components/Breadcrumbs";

// ----------------------------------------
// 1. Bancos
// ----------------------------------------
// Cada archivo dentro de /src/pages/Bancos, ordenados alfabéticamente:
import AnadirBanco from "./pages/Bancos/AnadirBanco";
import Bancos from "./pages/Bancos/Bancos";
import CrearConciliacion from "./pages/Bancos/CrearConciliacion";
import GlosarioBanco from "./pages/Bancos/GlosarioBanco";
import PagoCobroFactura from "./pages/Bancos/PagoCobroFactura";
import QueBancos from "./pages/Bancos/QueBancos";

// ----------------------------------------
// 2. Catálogos
// ----------------------------------------
// Cada archivo dentro de /src/pages/Catalogos, ordenados alfabéticamente:
import Almacenes from "./pages/Catalogos/Almacenes";
import AtributoProductos from "./pages/Catalogos/AtributoProductos";
import Atributos from "./pages/Catalogos/Atributos";
import CategoriaProductos from "./pages/Catalogos/CategoriaProductos";
import CentrosCostos from "./pages/Catalogos/CentrosCostos";
import Catalogos from "./pages/Catalogos/Catalogos";
import GlosarioCatalogos from "./pages/Catalogos/GlosarioCatalogos";
import UnidadesMedida from "./pages/Catalogos/UnidadesMedida";
import GestionarAtributos from "./pages/Catalogos/GestionarAtributos.tsx"
import QueEsSeccionCatalogos from "./pages/Catalogos/QueEsSeccionCatalogos.tsx" 
// ----------------------------------------
// 3. Clientes
// ----------------------------------------
// Cada archivo dentro de /src/pages/Clientes, ordenados alfabéticamente:
import Clientes from "./pages/Clientes/Clientes.tsx";
import CobrosVentas from "./pages/Clientes/CobrosVentas.tsx";
import CrearFacturaVenta from "./pages/Clientes/CrearFacturaVenta.tsx";
import GestionarFacturasVenta from "./pages/Clientes/GestionarFacturaVenta.tsx";
import CrearPresupuestos from "./pages/Clientes/CrearPresupuestos.tsx";
import GlosarioVentas from "./pages/Clientes/GlosariodeVentas.tsx";
import NotasdeCreditos from "./pages/Clientes/NotasdeCreditos.tsx";
import QueEsClientes from "./pages/Clientes/QueEsClientes.tsx";



// ----------------------------------------
// 4. Contabilidad
// ----------------------------------------
// Cada archivo dentro de /src/pages/Contabilidad, ordenados alfabéticamente:
import GestionarAsientoAutomatico from "./pages/Contabilidad/GestionarAsientoAutomatico";
import Contabilidad from "./pages/Contabilidad/Contabilidad";
import CrearAsiento from "./pages/Contabilidad/CrearAsiento";
import CrearCuentaContable from "./pages/Contabilidad/CrearCuentaContable";
import EstadoSituación from "./pages/Contabilidad/EstadoSituación.tsx";
import GlosarioContabilidad from "./pages/Contabilidad/GlosarioContabilidad";
import LibroDiario from "./pages/Contabilidad/LibroDiario";
import PerdidasGanancias from "./pages/Contabilidad/PerdidasGanancias";
import PeriodoContable from "./pages/Contabilidad/PeriodoContable";
import QueEsLaSeccionContabilidad from "./pages/Contabilidad/QueEsLaSeccionContabilidad.tsx";
import SubmayorContable from "./pages/Contabilidad/SubmayorContable";

// ----------------------------------------
// 5. Impuestos
// ----------------------------------------
// Cada archivo dentro de /src/pages/Impuestos, ordenados alfabéticamente:
import GlosarioImpuestos from "./pages/Impuestos/GlosarioImpuestos";
import Impuestos from "./pages/Impuestos/Impuestos";
import TiposDelImpuestos from "./pages/Impuestos/TiposDeImpuestos";
import QueEsImpuestos from "./pages/Impuestos/QueEsImpuestos.tsx";


// ----------------------------------------
// 6. Inventario
// ----------------------------------------
// Cada archivo dentro de /src/pages/Inventario, ordenados alfabéticamente:
import AjustesInventario from "./pages/Inventario/AjustesInventario";
import CrearProducto from "./pages/Inventario/CrearProducto";
import GlosarioInventario from "./pages/Inventario/GlosarioInventario";
import Inventario from "./pages/Inventario/Inventario";
import Productos from "./pages/Inventario/Productos";
import ProductosTipos from "./pages/Inventario/ProductosTipos";
import QueEsLaSeccionInventario from "./pages/Inventario/QueEsLaSeccionInventario";

// ----------------------------------------
// 7. PerfilEmpresa
// ----------------------------------------
// Cada archivo dentro de /src/pages/PerfilEmpresa, ordenados alfabéticamente:

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
// 8. Preguntas (FAQ)
// ----------------------------------------


// ----------------------------------------
// 9. PrimerosPasos
// ----------------------------------------
// Cada archivo dentro de /src/pages/PrimerosPasos, ordenados alfabéticamente:
import GettingStartedDetail from "./pages/PrimerosPasos/GettingStartedDetail.tsx";
import QueEsBalaxys from "./pages/PrimerosPasos/QueEsBalaxys.tsx";
import ComienzaConBalaxys from "./pages/PrimerosPasos/ComienzaConBalaxys.tsx";
import ExploraBalaxys from "./pages/PrimerosPasos/ExploraBalaxys.tsx";
import VentasGuiaInicio from "./pages/PrimerosPasos/VentasGuiaInicio.tsx";
import ComprasGuiaInicio from "./pages/PrimerosPasos/ComprasGuiaInicio.tsx";
import InventarioGuiaInicio from "./pages/PrimerosPasos/InventarioGuiaInicio.tsx";
import ContabilidadGuiaInicio from "./pages/PrimerosPasos/ContabilidadGuiaInicio.tsx";


// ----------------------------------------
// 10. Proveedores
// ----------------------------------------
// Cada archivo dentro de /src/pages/Proveedores, ordenados alfabéticamente:
import PagosCompra from "./pages/Proveedores/PagosCompra.tsx";
import Compras from "./pages/Proveedores/Compras.tsx";
import CrearFacturaCompra from "./pages/Proveedores/CrearFacturaCompra.tsx";
import OrdenCompra from "./pages/Proveedores/OrdenCompra.tsx";
import GestionarCompra from "./pages/Proveedores/GestionarCompra.tsx";
import GlosarioCompras from "./pages/Proveedores/GlosarioCompras.tsx";
import NotasDebitos from "./pages/Proveedores/NotasDebitos.tsx";
import GestionarPagos from "./pages/Proveedores/GestionarPagos.tsx";
import QueEsLaSeccionProveedores from "./pages/Proveedores/QueEsLaSeccionProveedores.tsx";
 


// ----------------------------------------
// 11. Resto de páginas “sueltas”
// ----------------------------------------
import Analitica from "./pages/Analitica/Analitica";
import Videos from "./pages/Videos/Videos";
import Home from "./pages/Home";
import { Box } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";


function App() {
  const [search, setSearch] = useState(""); // Estado de búsqueda

  return (
    
 <HelmetProvider>
    <Router>

      {/* 1. Renderizamos siempre el Navbar (header) */}
      <Navbar setSearch={setSearch} />

      {/* 2. Justo debajo del header, insertamos las migas de pan */}
      <Box
    sx={{
      display: "flex",
      justifyContent: "center",   // centra horizontalmente
      py: 2,                       // padding vertical (opcional)
      backgroundColor: "#fafafa",  // si quieres un fondo ligeramente distinto
    }}
  >
    <Breadcrumbs />
  </Box>

      <main>
        {/* 3. Aquí van las <Routes>, agrupadas y comentadas */}

        <Routes>
          {/* --------------------------- */}
          {/* RUTA HOME + “sueltas”      */}
          {/* --------------------------- */}
          <Route path="/" element={<Home search={search} />} />
          <Route path="/analitica-avanzada" element={<Analitica />} />
          <Route path="/video-tutoriales" element={<Videos />} />
          <Route path="/preguntas" element={<Videos />} />

          {/* --------------------------- */}
          {/* 1. Bancos                  */}
          {/* --------------------------- */}
          <Route path="/bancos" element={<Bancos />} />
          <Route path="/bancos/anadir-banco" element={<AnadirBanco />} />
          <Route path="/bancos/crear-conciliacion" element={<CrearConciliacion />} />
          <Route path="/bancos/glosario-tesoreria" element={<GlosarioBanco />} />
          <Route path="/bancos/pago-cobro-factura" element={<PagoCobroFactura />} />
          <Route path="/bancos/seccion-bancos" element={<QueBancos />} />

          {/* --------------------------- */}
          {/* 2. Catálogos               */}
          {/* --------------------------- */} 
          <Route path="/catalogos" element={<Catalogos />} />
          <Route path="/catalogos/almacenes" element={<Almacenes />} />
          <Route path="/catalogos/atributo-productos" element={<AtributoProductos />} />
          <Route path="/catalogos/atributos" element={<Atributos />} />
          <Route path="/catalogos/categoria-productos" element={<CategoriaProductos />} />
          <Route path="/catalogos/centros-costos" element={<CentrosCostos />} />
          <Route path="/catalogos/glosario-catalogos" element={<GlosarioCatalogos />} />
          <Route path="/catalogos/unidades-medida" element={<UnidadesMedida />} />
          <Route path="/catalogos/gestionar-atributos" element={<GestionarAtributos />} />
          <Route path="/catalogos/seccion-catalogos" element={<QueEsSeccionCatalogos />} />
          

          {/* --------------------------- */}
          {/* 3. Clientes                */}
          {/* --------------------------- */}
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/clientes/crear-factura-venta" element={<CrearFacturaVenta />} />
          <Route path="/clientes/crear-presupuestos" element={<CrearPresupuestos />} />
          <Route path="/clientes/gestionar-facturas-venta" element={<GestionarFacturasVenta />}/>
          <Route path="/clientes/glosario-ventas" element={<GlosarioVentas />} />
          <Route path="/clientes/notas-de-creditos" element={<NotasdeCreditos />} />
          <Route path="/clientes/cobros-ventas" element={<CobrosVentas />} />
          <Route path="/clientes/que-es-clientes" element={<QueEsClientes />} />
          

        

      
       

          {/* --------------------------- */}
          {/* 4. Contabilidad            */}
          {/* --------------------------- */}
          <Route path="/contabilidad" element={<Contabilidad />} />          
          <Route path="/contabilidad/crear-asiento" element={<CrearAsiento />} />
          <Route path="/contabilidad/crear-cuenta-contable" element={<CrearCuentaContable />} />
          <Route path="/contabilidad/estado-situacion" element={<EstadoSituación />} />
          <Route path="/contabilidad/automizar-asiento" element={<GestionarAsientoAutomatico />} />
          <Route path="/contabilidad/glosario-contabilidad"  element={<GlosarioContabilidad />} />
          <Route path="/contabilidad/libro-diario" element={<LibroDiario />} />
          <Route path="/contabilidad/perdidas-ganancias" element={<PerdidasGanancias />}/>      
          <Route path="/contabilidad/periodo-contable" element={<PeriodoContable />} />
          <Route path="/contabilidad/submayor-contable" element={<SubmayorContable />} />
          <Route path="/contabilidad/seccion-contabilidad" element={<QueEsLaSeccionContabilidad />} />


          {/* --------------------------- */}
          {/* 5. Impuestos               */}
          {/* --------------------------- */}
          <Route path="/impuestos" element={<Impuestos />} />
          <Route path="/impuestos/glosario-impuestos" element={<GlosarioImpuestos />}/>
          <Route path="/impuestos/tipos-de-impuestos" element={<TiposDelImpuestos />} />
           <Route path="/impuestos/seccion-impuestos" element={< QueEsImpuestos />} />
          QueEsImpuestos

          {/* --------------------------- */}
          {/* 6. Inventario              */}
          {/* --------------------------- */}
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/inventario/ajustes-inventario" element={<AjustesInventario />}  />
          <Route path="/inventario/crear-producto"  element={<CrearProducto />}/>
          <Route path="/inventario/glosario-inventario"element={<GlosarioInventario />} />
          <Route path="/inventario/productos" element={<Productos />} />
          <Route path="/inventario/productos-tipos" element={<ProductosTipos />}/>         
          <Route path="/inventario/descripcion" element={<QueEsLaSeccionInventario />}/>

          {/* --------------------------- */}
          {/* 7. PerfilEmpresa           */}
          {/* --------------------------- */}
          <Route path="/perfil-empresa" element={<PerfilEmpresa />} />
          <Route path="/perfil-empresa/configuracion" element={<Configuracion />} />
          <Route path="/perfil-empresa/elementos-de-gastos" element={<ElementosDeGastos />}/>
          <Route path="/perfil-empresa/formas-de-pago" element={<FormasDePago />}/>
          <Route path="/perfil-empresa/mi-perfil" element={<MiPerfil />} />
          <Route path="/perfil-empresa/monedas" element={<Monedas />} />
          <Route path="/perfil-empresa/planes" element={<Planes />} />
          <Route path="/perfil-empresa/roles" element={<Roles />} />
          <Route path="/perfil-empresa/tipos-de-contribuyentes" element={<TiposDeConstribuyentes />}/>
          <Route path="/perfil-empresa/tipos-de-empresas" element={<TiposDeEmpesas />} />
          <Route path="/perfil-empresa/usuarios" element={<Usuarios />}/>
          <Route path="/perfil-empresa/vencimientos" element={<Vencimientos />}/> 

          {/* --------------------------- */}
          {/* 8. Preguntas (FAQ)         */}
          {/* --------------------------- */}
         

          {/* --------------------------- */}
          {/* 9. PrimerosPasos           */}
          {/* --------------------------- */}
          <Route path="/primeros-pasos" element={<GettingStartedDetail />} />
         
          <Route path="/primeros-pasos/getting-started-details" element={<GettingStartedDetail />}/>
          <Route path="/primeros-pasos/que-es-balaxys" element={<QueEsBalaxys />} />
          <Route path="/primeros-pasos/comienza-con-balaxys" element={<ComienzaConBalaxys />} />
          <Route path="/primeros-pasos/explora-balaxys" element={<ExploraBalaxys />} /> 
          <Route path="/primeros-pasos/ventas-guia-inicio" element={<VentasGuiaInicio />} />  ComprasGuiaInicio
          <Route path="/primeros-pasos/compras-guia-inicio" element={<ComprasGuiaInicio />} /> 
          <Route path="/primeros-pasos/inventario-guia-inicio" element={<InventarioGuiaInicio />} /> 
          <Route path="/primeros-pasos/contabilidad-guia-inicio" element={<ContabilidadGuiaInicio />} /> 

          

          InventarioGuiaInicio
          

          {/* --------------------------- */}
          {/* 10. Proveedores             */}
          {/* --------------------------- */}
           <Route path="/proveedores" element={<Compras />} />
           <Route path="/proveedores/anadir-pagos-compra" element={<PagosCompra />}/>
          <Route path="/proveedores/crear-factura-compra" element={<CrearFacturaCompra />} />
          <Route path="/proveedores/orden-de-compra" element={<OrdenCompra />}/>
          <Route path="/proveedores/gestionar-compra"  element={<GestionarCompra />} />
          <Route path="/proveedores/glosario-compras" element={<GlosarioCompras />} />
          <Route path="/proveedores/notas-de-debitos" element={<NotasDebitos />} />
          <Route path="/proveedores/gestionar-pagos" element={<GestionarPagos />} />
          <Route path="/proveedores/seccion-proveedores" element={<QueEsLaSeccionProveedores />} />

         
        </Routes>
      </main>

      {/* 4. Footer que también ya existía */}
      <Footer />
    </Router>
    </HelmetProvider>
  );
}

export default App;
