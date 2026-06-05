import { Link } from "react-router-dom";

export default function Devops() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-10">
      <Link to="/categorias" className="text-blue-500">
        ← Volver
      </Link>

      <h1 className="text-5xl font-bold mt-6">
        DevOps
      </h1>

      <p className="mt-6 text-zinc-500">
        Docker, Kubernetes, CI/CD y despliegues.
      </p>
    </div>
  );
}