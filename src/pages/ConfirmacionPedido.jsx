import React from "react";
import { Link } from "react-router-dom";

export default function ConfirmacionPedido() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-2xl font-bold mb-4">✅ Pedido enviado con éxito</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Hemos recibido tu solicitud y enviado una copia a nuestro equipo.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded">
          Volver al inicio
        </Link>
        <Link to="/cliente" className="bg-gray-700 text-white px-6 py-2 rounded">
          Hacer otro pedido
        </Link>
      </div>
    </div>
  );
}