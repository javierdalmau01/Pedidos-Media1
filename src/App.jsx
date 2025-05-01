import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import Cliente from "./pages/Cliente";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PedidoDetalle from "./pages/PedidoDetalle";
import FormularioCliente from "./pages/FormularioCliente";
import ConfirmacionPedido from "./pages/ConfirmacionPedido";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [modoOscuro, setModoOscuro] = React.useState(() => localStorage.getItem("modoOscuro") === "true");

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", modoOscuro);
    localStorage.setItem("modoOscuro", modoOscuro);
  }, [modoOscuro]);

  return (
    <Router>
      <div className="p-4 min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
        <Navbar toggleDark={() => setModoOscuro(!modoOscuro)} modoOscuro={modoOscuro} />

        <Toaster
          position="top-right"
          toastOptions={{
            className: 'dark:bg-gray-800 dark:text-white text-sm font-medium',
            success: {
              duration: 3000,
              iconTheme: { primary: '#22c55e', secondary: '#f0fdf4' },
            },
            error: {
              duration: 4000,
              iconTheme: { primary: '#ef4444', secondary: '#fef2f2' },
            },
          }}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cliente" element={<FormularioCliente />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/pedido/:id" element={<PedidoDetalle />} />
          <Route path="/login" element={<Login />} />
          <Route path="/confirmacion" element={<ConfirmacionPedido />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

function Navbar({ toggleDark, modoOscuro }) {
  const location = useLocation();
  return (
    <nav className="flex flex-wrap gap-4 mb-6 justify-between items-center">
      <div className="flex gap-4">
        <Link to="/" className="text-blue-500">Inicio</Link>
        <Link to="/cliente" className="text-blue-500">Cliente</Link>
        <Link to="/login" className="text-blue-500">Admin</Link>
      </div>
      <button
        onClick={toggleDark}
        className="text-sm border px-2 py-1 rounded dark:border-gray-600"
      >
        {modoOscuro ? "☀️ Tema Claro" : "🌙 Tema Oscuro"}
      </button>
    </nav>
  );
}