import React from "react";
import FormularioCliente from "./FormularioCliente";

export default function Cliente() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Realizar un nuevo pedido</h1>
      <FormularioCliente />
    </div>
  );
}