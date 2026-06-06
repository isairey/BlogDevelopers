import { useParams, Link } from "react-router-dom";

export default function CategoryDetail() {
  const { id } = useParams();

  const categories: Record<string, any> = {
    frontend: {
      title: "Frontend",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      description:
        "Desarrollo de interfaces modernas con React, Vue, Angular y TypeScript.",
      articles: [
        "React 20 y las Nuevas APIs",
        "TypeScript para Escalar Proyectos",
        "Tailwind CSS Profesional",
      ],
      technologies: [
        "React",
        "Vue",
        "Angular",
        "TypeScript",
        "Tailwind",
      ],
    },

    backend: {
      title: "Backend",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      description:
        "Construcción de APIs, microservicios y aplicaciones empresariales.",
      articles: [
        "Spring Boot para APIs",
        "Node.js Escalable",
        "Microservicios con Java",
      ],
      technologies: [
        "Spring Boot",
        "Node.js",
        "Java",
        "Express",
        "NestJS",
      ],
    },

    devops: {
      title: "DevOps",
      image:
        "https://images.unsplash.com/photo-1605745341112-85968b19335b",
      description:
        "Automatización, despliegues y administración de infraestructura.",
      articles: [
        "Docker desde Cero",
        "Kubernetes para Producción",
        "CI/CD Profesional",
      ],
      technologies: [
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "Linux",
      ],
    },

    "inteligencia-artificial": {
      title: "Inteligencia Artificial",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      description:
        "Machine Learning, Deep Learning y Large Language Models.",
      articles: [
        "Machine Learning Básico",
        "Deep Learning",
        "IA Generativa",
      ],
      technologies: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "OpenAI",
      ],
    },

    "bases-de-datos": {
      title: "Bases de Datos",
      image:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
      description:
        "Diseño, optimización y administración de bases de datos.",
      articles: [
        "MySQL Avanzado",
        "MongoDB",
        "Optimización SQL",
      ],
      technologies: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Redis",
      ],
    },

    ciberseguridad: {
      title: "Ciberseguridad",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      description:
        "Pentesting, análisis de vulnerabilidades y seguridad ofensiva.",
      articles: [
        "OWASP Top 10",
        "Kali Linux",
        "Ethical Hacking",
      ],
      technologies: [
        "Kali Linux",
        "Metasploit",
        "Wireshark",
        "Burp Suite",
      ],
    },

    "sistemas-operativos": {
      title: "Sistemas Operativos",
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      description:
        "Procesos, memoria, kernels y funcionamiento interno del sistema.",
      articles: [
        "Linux Internals",
        "Gestión de Procesos",
        "Kernel Básico",
      ],
      technologies: [
        "Linux",
        "Windows",
        "Kernel",
        "Bash",
      ],
    },

    arquitectura: {
      title: "Arquitectura",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      description:
        "Diseño de software escalable y mantenible.",
      articles: [
        "Clean Architecture",
        "DDD",
        "Microservicios",
      ],
      technologies: [
        "DDD",
        "SOLID",
        "Clean Architecture",
      ],
    },
  };

  const category = categories[id || ""];

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
        <h1 className="text-4xl font-bold">
          Categoría no encontrada
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">

      <div className="max-w-6xl mx-auto px-6 pt-10">
        <Link
          to="/categorias"
          className="text-zinc-500 hover:text-black dark:hover:text-white"
        >
          ← Volver a categorías
        </Link>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-10">

        <img
          src={category.image}
          alt={category.title}
          className="w-full h-[500px] rounded-3xl object-cover"
        />

        <h1 className="text-6xl font-black mt-8">
          {category.title}
        </h1>

        <p className="text-xl text-zinc-500 mt-6 max-w-4xl">
          {category.description}
        </p>

      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-2 gap-8">

          <div className="border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">
              📚 Artículos Relacionados
            </h2>

            <ul className="space-y-4">
              {category.articles.map((article: string) => (
                <li
                  key={article}
                  className="border-b border-zinc-200 dark:border-zinc-800 pb-3"
                >
                  {article}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">
              ⚙ Tecnologías
            </h2>

            <div className="flex flex-wrap gap-3">
              {category.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </section>
    </div>
  );
}