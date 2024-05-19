import { Routes, Route } from "react-router-dom"

import CarritoCompras from "./Componentes2/CarritoCompras";
import Login from "./Componentes8/Login"
import Registro from "./Componentes8/Registro"
import LoginError from "./Componentes8/LoginError"
import LandingPage from "./PaginasUsuario/LandingPage"
import CambiarContra from "./PaginasUsuario/CambiarContra";
import AdminDashBoard from "./PaginasAdmin/AdminDashBoard";
import RegistroDatos from "./PaginasUsuario/DatosRegistro";
import OrdenesRecientes from "./PaginasUsuario/OrdenesRecientes";
import PaginaProducto from "./PaginasUsuario/PáginaProducto";
import UsuariosRegistrados from "./PaginasAdmin/UsuariosRegistrados";
import Ordenes from "./PaginasAdmin/Ordenes";
import Productos from "./PaginasAdmin/Productos";
import Checkoutv from "./Componentes2/checkoutv";
import MenuUsuario from "./Componentes8/MenuUsuario";
import RecuperarContraseña from "./Componentes8/RecuperarContraseña";
import Findepedido from "./Componentes2/Findepedido";

import './App.css'

function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/loginerror" element={<LoginError />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/carritocompras" element={<CarritoCompras />} />
        <Route path="/CambiarContra" element={<CambiarContra/>} />
        <Route path="/AdminDashBoard" element={<AdminDashBoard/>} />
        <Route path="/RegistroDatos" element={<RegistroDatos/>} />        
        <Route path="/OrdenesRecientes" element={<OrdenesRecientes />}/>
        <Route path="/PaginaProducto" element={<PaginaProducto />}/>
        <Route path="/UsuariosRegistrados" element={<UsuariosRegistrados />}/>
        <Route path="/Productos" element={<Productos />}/>
        <Route path="/Ordenes" element={<Ordenes />}/>       
        <Route path="/Checkoutv" element={ <Checkoutv /> } />
        <Route path="/MenuUsuario" element={<MenuUsuario/>}/>
        <Route path="/recuperarcontraseña" element={<RecuperarContraseña/>}/>
        <Route path="/pedidocompleto" element={<Findepedido/>}/>
      </Routes>
    </div>
  )
}

export default App
