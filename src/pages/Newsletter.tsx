import { useState } from "react";
import { Link } from "react-router-dom";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const subscribe = () => {
    if (!email.trim()) {
      alert("Ingresa un correo válido");
      return;
    }

    alert(`Gracias por suscribirte: ${email}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center p-10">
      <div className="max-w-xl w-full border border-zinc-200 dark:border-zinc-800 rounded-3xl p-10">
        <Link to="/" className="text-blue-500">
          ← Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold mt-6">
          Newsletter
        </h1>

        <p className="text-zinc-500 mt-4">
          Recibe artículos y tutoriales cada semana.
        </p>

        <input
          type="email"
          placeholder="correo@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-6 border border-zinc-300 dark:border-zinc-700 rounded-xl p-3 bg-transparent"
        />

        <button
          onClick={subscribe}
          className="w-full mt-4 bg-black dark:bg-white dark:text-black text-white py-3 rounded-xl"
        >
          Suscribirme
        </button>
      </div>
    </div>
  );
}