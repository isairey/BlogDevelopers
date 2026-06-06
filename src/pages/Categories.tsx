import { Link } from "react-router-dom";
import {
  Globe,
  Database,
  Shield,
  Cpu,
  Server,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

export default function Categories() {
  const categories = [
    {
      id: "frontend",
      title: "Frontend",
      description:
        "React, Vue, Angular, TypeScript y diseño moderno.",
      icon: <Globe size={35} />,
      posts: 42,
      color: "from-blue-500/20 to-cyan-500/20",
    },

    {
      id: "backend",
      title: "Backend",
      description:
        "Spring Boot, Node.js, APIs REST y Microservicios.",
      icon: <Database size={35} />,
      posts: 38,
      color: "from-emerald-500/20 to-green-500/20",
    },

    {
      id: "devops",
      title: "DevOps",
      description:
        "Docker, Kubernetes, CI/CD y despliegues.",
      icon: <Server size={35} />,
      posts: 25,
      color: "from-orange-500/20 to-yellow-500/20",
    },

    {
      id: "inteligencia-artificial",
      title: "Inteligencia Artificial",
      description:
        "Machine Learning, Deep Learning y LLMs.",
      icon: <BrainCircuit size={35} />,
      posts: 30,
      color: "from-violet-500/20 to-fuchsia-500/20",
    },

    {
      id: "bases-de-datos",
      title: "Bases de Datos",
      description:
        "MySQL, PostgreSQL, MongoDB y optimización.",
      icon: <Database size={35} />,
      posts: 22,
      color: "from-pink-500/20 to-red-500/20",
    },

    {
      id: "ciberseguridad",
      title: "Ciberseguridad",
      description:
        "Pentesting, Kali Linux, OWASP y redes.",
      icon: <Shield size={35} />,
      posts: 19,
      color: "from-red-500/20 to-orange-500/20",
    },

    {
      id: "sistemas-operativos",
      title: "Sistemas Operativos",
      description:
        "Linux, Windows, procesos, memoria y kernels.",
      icon: <Cpu size={35} />,
      posts: 15,
      color: "from-zinc-500/20 to-zinc-700/20",
    },

    {
      id: "arquitectura",
      title: "Arquitectura",
      description:
        "Clean Architecture, DDD y Microservicios.",
      icon: <Server size={35} />,
      posts: 12,
      color: "from-cyan-500/20 to-blue-500/20",
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
          Categorías
        </h1>

        <p className="text-zinc-500 text-lg mt-4 max-w-2xl">
          Explora contenido especializado organizado por áreas
          de desarrollo de software, inteligencia artificial,
          DevOps y tecnología.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/categorias/${category.id}`}
          >
            <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl cursor-pointer">

              {/* GRADIENT */}
              <div
                className={`absolute inset-0 opacity-50 bg-gradient-to-br ${category.color}`}
              />

              <div className="relative p-8">

                {/* ICON */}
                <div className="mb-6">
                  {category.icon}
                </div>

                {/* POSTS */}
                <span className="text-sm text-zinc-500">
                  {category.posts} artículos
                </span>

                {/* TITLE */}
                <h2 className="text-2xl font-bold mt-2 group-hover:text-blue-500 transition">
                  {category.title}
                </h2>

                {/* DESC */}
                <p className="text-zinc-500 mt-4 leading-relaxed">
                  {category.description}
                </p>

                {/* CTA */}
                <div className="mt-6 flex items-center gap-2 text-blue-500 font-semibold">
                  Explorar

                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition"
                  />
                </div>

              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto mt-20">
        <div className="grid md:grid-cols-4 gap-6">

          <div className="border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8">
            <h3 className="text-4xl font-black">200+</h3>
            <p className="text-zinc-500 mt-2">
              Artículos Publicados
            </p>
          </div>

          <div className="border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8">
            <h3 className="text-4xl font-black">50K+</h3>
            <p className="text-zinc-500 mt-2">
              Lectores Mensuales
            </p>
          </div>

          <div className="border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8">
            <h3 className="text-4xl font-black">8</h3>
            <p className="text-zinc-500 mt-2">
              Categorías
            </p>
          </div>

          <div className="border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8">
            <h3 className="text-4xl font-black">100%</h3>
            <p className="text-zinc-500 mt-2">
              Contenido Gratuito
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}