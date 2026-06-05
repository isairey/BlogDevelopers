import { Link } from "react-router-dom";

export default function Tutorials() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-10">
      <Link to="/" className="text-blue-500">
        ← Volver al inicio
      </Link>

      <h1 className="text-5xl font-bold mt-6 mb-10">
        Tutoriales
      </h1>

      <div className="space-y-6">
        <div className="border rounded-3xl p-6 border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-bold">
            React + TypeScript
          </h2>

          <p className="mt-3 text-zinc-500">
            Aprende a construir aplicaciones modernas.
          </p>
        </div>

        <div className="border rounded-3xl p-6 border-zinc-200 dark:border-zinc-800">
          <h2 className="text-2xl font-bold">
            Spring Boot
          </h2>

          <p className="mt-3 text-zinc-500">
            Crea APIs profesionales paso a paso.
          </p>
        </div>
      </div>
    </div>
  );
}