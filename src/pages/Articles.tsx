import { Link } from "react-router-dom";

export default function Articles() {
  const articles = [
    {
      id: "react20",
      title: "React 20 y las Nuevas APIs",
      description:
        "Descubre las nuevas características que llegan a React 20.",
      category: "Frontend",
      readTime: "8 min",
      date: "04 Jun 2026",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },

    {
      id: "springboot",
      title: "Spring Boot para APIs Escalables",
      description:
        "Construye APIs REST seguras y listas para producción.",
      category: "Backend",
      readTime: "12 min",
      date: "03 Jun 2026",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    },

    {
      id: "docker",
      title: "Docker desde Cero",
      description:
        "Aprende contenedores y despliegues modernos paso a paso.",
      category: "DevOps",
      readTime: "10 min",
      date: "01 Jun 2026",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },

    {
      id: "machine-learning",
      title: "Introducción a Machine Learning",
      description:
        "Modelos predictivos, clasificación y regresión con Python.",
      category: "IA",
      readTime: "15 min",
      date: "29 May 2026",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    },

    {
      id: "cybersecurity",
      title: "Fundamentos de Ciberseguridad",
      description:
        "Protege aplicaciones y sistemas contra amenazas modernas.",
      category: "Seguridad",
      readTime: "11 min",
      date: "26 May 2026",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    },

    {
      id: "microservices",
      title: "Arquitectura de Microservicios",
      description:
        "Diseña aplicaciones escalables con servicios independientes.",
      category: "Arquitectura",
      readTime: "18 min",
      date: "22 May 2026",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 py-12">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto">

        <Link
          to="/"
          className="text-zinc-500 hover:text-black dark:hover:text-white transition"
        >
          ← Volver al inicio
        </Link>

        <h1 className="text-6xl md:text-7xl font-black mt-6 tracking-tight">
          Artículos
        </h1>

        <p className="text-zinc-500 mt-4 text-lg max-w-2xl">
          Explora contenido avanzado sobre desarrollo web,
          inteligencia artificial, DevOps, arquitectura de software
          y tecnologías modernas.
        </p>

      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {articles.map((article) => (
          <Link
            to={`/articulos/${article.id}`}
            key={article.id}
          >
            <article className="group h-full rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">

              {/* IMAGE */}
              <div className="overflow-hidden h-56">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <div className="flex justify-between items-center mb-4">

                  <span className="text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900">
                    {article.category}
                  </span>

                  <span className="text-xs text-zinc-500">
                    {article.readTime}
                  </span>

                </div>

                <h2 className="text-2xl font-bold leading-tight group-hover:text-blue-500 transition">
                  {article.title}
                </h2>

                <p className="mt-3 text-zinc-500">
                  {article.description}
                </p>

                <div className="flex justify-between items-center mt-6">

                  <span className="text-sm text-zinc-500">
                    {article.date}
                  </span>

                  <span className="text-blue-500 font-semibold group-hover:underline">
                    Leer artículo →
                  </span>

                </div>

              </div>

            </article>
          </Link>
        ))}

      </div>
    </div>
  );
}