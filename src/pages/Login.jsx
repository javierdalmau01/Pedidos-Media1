import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const navigate = useNavigate();

  const acceder = () => {
    if (usuario === "Media" && clave === "Lanormaleta01!") {
      localStorage.setItem("admin", "true");
      navigate("/admin");
    } else {
      toast.error("Credenciales incorrectas");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 border rounded shadow dark:border-gray-700 dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4">Acceso administrador</h2>
      <input
        type="text"
        placeholder="Usuario"
        className="border w-full mb-3 p-2 rounded"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="border w-full mb-3 p-2 rounded"
        value={clave}
        onChange={(e) => setClave(e.target.value)}
      />
      <button onClick={acceder} className="w-full bg-blue-600 text-white py-2 rounded">
        Entrar
      </button>
    </div>
  );
}