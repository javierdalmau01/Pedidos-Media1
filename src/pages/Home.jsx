import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold mb-4">Bienvenido al sistema de pedidos audiovisuales</h1>
      <p className="text-gray-600 mb-6">Elige una opción para continuar</p>
      <div className="flex justify-center gap-6">
        <Link to="/cliente" className="bg-blue-600 text-white px-6 py-2 rounded">Soy cliente</Link>
        <Link to="/login" className="bg-gray-800 text-white px-6 py-2 rounded">Soy administrador</Link>
      </div>
    </div>
  );
}