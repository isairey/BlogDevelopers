import { Link } from "react-router-dom";

export default function Categories() {
  const categories = [
    "Frontend",
    "Backend",
    "DevOps",
    "Inteligencia Artificial",
    "Bases de Datos",
    "Ciberseguridad",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-10">
      <Link to="/" className="text-blue-500">
        ← Volver al inicio
      </Link>

      <h1 className="text-5xl font-bold mt-6 mb-10">
        Categorías
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category}
            className="border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold">
              {category}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}