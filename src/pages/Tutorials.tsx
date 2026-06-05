import { Link } from "react-router-dom";

export default function Tutorials() {
  const tutorials = [
    {
      id: "react-ts",
      title: "React + TypeScript",
      description: "Arquitectura moderna de frontend con React y TS.",
      image:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2",
      level: "Frontend",
    },
    {
      id: "spring-boot",
      title: "Spring Boot APIs",
      description: "Construcción de APIs REST profesionales con Java.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      level: "Backend",
    },
    {
      id: "docker-k8s",
      title: "Docker + Kubernetes",
      description: "Contenerización y despliegue en producción.",
      image:
        "https://images.unsplash.com/photo-1605745341112-85968b19335b",
      level: "DevOps",
    },
    {
      id: "machine-learning",
      title: "Machine Learning",
      description: "Modelos predictivos con Python y Scikit-Learn.",
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
      level: "AI",
    },
    {
      id: "deep-learning",
      title: "Deep Learning",
      description: "Redes neuronales avanzadas con TensorFlow.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      level: "AI",
    },
    {
      id: "assembly",
      title: "Programación en Ensamblador",
      description: "Aprende cómo funciona una CPU a bajo nivel.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
      level: "Low Level",
    },
    {
      id: "operating-systems",
      title: "Sistemas Operativos",
      description: "Procesos, memoria, hilos y planificación.",
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      level: "Systems",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <Link
          to="/"
          className="text-zinc-500 hover:text-black dark:hover:text-white transition"
        >
          ← Volver al inicio
        </Link>

        <h1 className="text-6xl md:text-7xl font-black mt-8">
          Tutoriales
        </h1>

        <p className="text-zinc-500 mt-4 text-xl max-w-2xl">
          Aprende tecnologías modernas desde cero hasta nivel profesional.
          Frontend, Backend, IA, DevOps y Sistemas.
        </p>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tut) => (
            <Link
              key={tut.id}
              to={`/tutoriales/${tut.id}`}
              className="group"
            >
              <article className="overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300">

                <div className="overflow-hidden h-56">
                  <img
                    src={tut.image}
                    alt={tut.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6">

                  <span className="inline-block px-3 py-1 rounded-full text-xs bg-zinc-100 dark:bg-zinc-900 text-zinc-500">
                    {tut.level}
                  </span>

                  <h2 className="text-2xl font-bold mt-4 group-hover:text-blue-500 transition">
                    {tut.title}
                  </h2>

                  <p className="text-zinc-500 mt-3">
                    {tut.description}
                  </p>

                  <div className="mt-6 text-blue-500 font-semibold">
                    Ver tutorial →
                  </div>

                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}