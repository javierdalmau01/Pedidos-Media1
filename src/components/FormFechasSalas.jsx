import React from "react";

export function MultiFechas({ fechas, setFechas, onValidChange }) {
  const agregarFecha = () => {
    if (fechas.some((f) => f === "")) return;
    setFechas([...fechas, ""]);
  };

  const eliminarFecha = (index) => setFechas(fechas.filter((_, i) => i !== index));
  const cambiarFecha = (index, valor) => {
    const nuevas = [...fechas];
    nuevas[index] = valor;
    setFechas(nuevas);
  };

  const fechasRepetidas = fechas.filter((f, i, arr) => f && arr.indexOf(f) !== i);
  const fechasVacias = fechas.some((f) => f === "");

  if (onValidChange) {
    onValidChange(!fechasVacias && fechasRepetidas.length === 0);
  }

  return (
    <div>
      <label className="block font-medium mb-1">Fechas del evento</label>
      <div className="space-y-2">
        {fechas.map((fecha, i) => (
          <div key={i} className="flex gap-2 items-center">
            <input
              type="date"
              value={fecha}
              onChange={(e) => cambiarFecha(i, e.target.value)}
              className="border p-2 rounded w-full"
            />
            <button
              type="button"
              onClick={() => eliminarFecha(i)}
              className="text-red-500 text-sm"
            >
              Eliminar
            </button>
          </div>
        ))}
        {fechasVacias && <p className="text-sm text-red-500">Por favor completa todas las fechas.</p>}
        {fechasRepetidas.length > 0 && <p className="text-sm text-orange-500">Hay fechas repetidas.</p>}
        <button
          type="button"
          onClick={agregarFecha}
          className="text-blue-500 mt-2 text-sm"
          disabled={fechasVacias}
        >
          + Añadir otra fecha
        </button>
        <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
          <strong>Resumen:</strong> {fechas.length === 0 ? "No hay fechas" : fechas.join(", ")}
        </div>
      </div>
    </div>
  );
}

export function MultiSalas({ salas, setSalas, onValidChange }) {
  const agregarSala = () => {
    if (salas.some((s) => s.trim() === "")) return;
    setSalas([...salas, ""]);
  };

  const eliminarSala = (index) => setSalas(salas.filter((_, i) => i !== index));
  const cambiarSala = (index, valor) => {
    const nuevas = [...salas];
    nuevas[index] = valor;
    setSalas(nuevas);
  };

  const salasRepetidas = salas.filter((s, i, arr) => s && arr.indexOf(s) !== i);
  const salasVacias = salas.some((s) => s.trim() === "");

  if (onValidChange) {
    onValidChange(!salasVacias && salasRepetidas.length === 0);
  }

  return (
    <div className="mt-4">
      <label className="block font-medium mb-1">Salas solicitadas</label>
      <div className="space-y-2">
        {salas.map((sala, i) => (
          <div key={i} className="flex gap-2 items-center">
            <input
              type="text"
              value={sala}
              onChange={(e) => cambiarSala(i, e.target.value)}
              placeholder={`Sala ${i + 1}`}
              className="border p-2 rounded w-full"
            />
            <button
              type="button"
              onClick={() => eliminarSala(i)}
              className="text-red-500 text-sm"
            >
              Eliminar
            </button>
          </div>
        ))}
        {salasVacias && <p className="text-sm text-red-500">Por favor completa todas las salas.</p>}
        {salasRepetidas.length > 0 && <p className="text-sm text-orange-500">Hay salas repetidas.</p>}
        <button
          type="button"
          onClick={agregarSala}
          className="text-blue-500 mt-2 text-sm"
          disabled={salasVacias}
        >
          + Añadir otra sala
        </button>
        <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
          <strong>Resumen:</strong> {salas.length === 0 ? "No hay salas" : salas.join(", ")}
        </div>
      </div>
    </div>
  );
}