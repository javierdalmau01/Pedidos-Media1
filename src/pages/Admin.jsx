import React from "react";

export default function Admin() {
  const cerrarSesion = () => {
    localStorage.removeItem("admin");
    window.location.href = "/";
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Panel de Administración</h2>
        <button onClick={cerrarSesion} className="bg-red-500 text-white px-4 py-2 rounded">
          Cerrar sesión
        </button>
      </div>
      <p className="text-gray-600 dark:text-gray-300">Aquí aparecerán los pedidos recibidos en tiempo real.</p>
    </div>
  );
}