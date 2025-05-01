import React from "react";
import { useParams, Link } from "react-router-dom";

export default function PedidoDetalle() {
  const { id } = useParams();

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Detalle del Pedido</h1>
      <p className="text-gray-500 mb-6">ID del pedido: <strong>{id}</strong></p>

      <div className="space-y-3 border p-4 rounded shadow dark:border-gray-700 dark:bg-gray-800">
        <p><strong>Cliente:</strong> Ejemplo</p>
        <p><strong>Hotel:</strong> Gran Hotel</p>
        <p><strong>Salas:</strong> Sala A, Sala B</p>
        <p><strong>Fechas:</strong> 2025-06-01, 2025-06-03</p>
        <p><strong>Horario:</strong> 10:00 - 18:00</p>
        <p><strong>Materiales:</strong> Pantalla, micrófono, proyector</p>
      </div>

      <div className="flex gap-3 mt-6">
        <button onClick={() => window.print()} className="bg-blue-600 text-white px-4 py-2 rounded">🖨️ Imprimir</button>
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded"
          onClick={() => window.location.href = `mailto:media@satmedia.es?subject=Detalle pedido ${id}&body=Pedido detalles...`}
        >
          ✉️ Reenviar
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={() => alert("Función duplicar aún no conectada")}
        >
          🧬 Duplicar
        </button>
      </div>

      <div className="mt-6">
        <Link to="/admin" className="text-blue-500 underline">← Volver a la agenda</Link>
      </div>
    </div>
  );
}