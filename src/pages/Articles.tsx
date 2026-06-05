import { Link } from "react-router-dom";

export default function Articles() {
  const articles = [
    {
      id: 1,
      title: "Introducción a React",
      description: "Aprende los fundamentos de React desde cero.",
    },
    {
      id: 2,
      title: "Spring Boot para APIs",
      description: "Crea APIs REST profesionales con Java.",
    },
    {
      id: 3,
      title: "Docker para Desarrolladores",
      description: "Conteneriza tus aplicaciones fácilmente.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-10">
      <Link to="/" className="text-blue-500">
        ← Volver al inicio
      </Link>

      <h1 className="text-5xl font-bold mt-6 mb-10">
        Artículos
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6"
          >
            <h2 className="text-2xl font-bold">
              {article.title}
            </h2>

            <p className="text-zinc-500 mt-3">
              {article.description}
            </p>

            <button className="mt-5 px-4 py-2 bg-black dark:bg-white dark:text-black text-white rounded-xl">
              Leer más
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}