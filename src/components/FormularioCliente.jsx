import React, { useState } from "react";
import { MultiFechas, MultiSalas } from "./FormFechasSalas";
import toast from "react-hot-toast";

export default function FormularioCliente() {
  const [cliente, setCliente] = useState("");
  const [contacto, setContacto] = useState("");
  const [email, setEmail] = useState("");
  const [hotel, setHotel] = useState("");
  const [materiales, setMateriales] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFin, setHoraFin] = useState("");
  const [fechas, setFechas] = useState([""]);
  const [salas, setSalas] = useState([""]);

  const [validFechas, setValidFechas] = useState(false);
  const [validSalas, setValidSalas] = useState(false);

  const handleEnviar = async () => {
    if (!cliente || !hotel || !horaInicio || !horaFin || !validFechas || !validSalas) {
      toast.error("Por favor completa todos los campos obligatorios.");
      return;
    }

    const pedido = {
      cliente,
      contacto,
      email,
      hotel,
      salas,
      fechas,
      materiales: materiales.split(",").map((m) => m.trim()),
      horaInicio,
      horaFin,
    };

    try {
      toast.success("Pedido validado (simulación de envío)");
    } catch (error) {
      toast.error("Error al enviar el pedido");
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <div>
        <label className="block font-medium">Cliente *</label>
        <input value={cliente} onChange={(e) => setCliente(e.target.value)} className="border p-2 rounded w-full" />
      </div>
      <div>
        <label className="block font-medium">Contacto</label>
        <input value={contacto} onChange={(e) => setContacto(e.target.value)} className="border p-2 rounded w-full" />
      </div>
      <div>
        <label className="block font-medium">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded w-full" />
      </div>
      <div>
        <label className="block font-medium">Hotel *</label>
        <input value={hotel} onChange={(e) => setHotel(e.target.value)} className="border p-2 rounded w-full" />
      </div>
      <MultiSalas salas={salas} setSalas={setSalas} onValidChange={setValidSalas} />
      <MultiFechas fechas={fechas} setFechas={setFechas} onValidChange={setValidFechas} />
      <div>
        <label className="block font-medium">Hora de inicio *</label>
        <input type="time" value={horaInicio} onChange={(e) => setHoraInicio(e.target.value)} className="border p-2 rounded w-full" />
      </div>
      <div>
        <label className="block font-medium">Hora de fin *</label>
        <input type="time" value={horaFin} onChange={(e) => setHoraFin(e.target.value)} className="border p-2 rounded w-full" />
      </div>
      <div>
        <label className="block font-medium">Materiales (separados por coma)</label>
        <input value={materiales} onChange={(e) => setMateriales(e.target.value)} className="border p-2 rounded w-full" />
      </div>
      <button onClick={handleEnviar} className="bg-blue-600 text-white px-6 py-2 rounded">Enviar pedido</button>
    </div>
  );
}