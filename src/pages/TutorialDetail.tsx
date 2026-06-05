import { useParams, Link } from "react-router-dom";

export default function TutorialDetail() {
  const { id } = useParams();

  const tutorials: Record<string, any> = {
    "react-ts": {
      title: "React + TypeScript",
      category: "Frontend",
      level: "Intermedio",
      duration: "45 min",
      image:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2",
      content:
        "Aprende a construir aplicaciones modernas utilizando React y TypeScript con una arquitectura escalable y mantenible.",
      technologies: ["React", "TypeScript", "Vite"],
      learn: [
        "Componentes reutilizables",
        "Hooks personalizados",
        "Tipado fuerte",
        "Arquitectura escalable",
      ],
      code: `interface User {
  id: number;
  name: string;
}

function App() {
  return <h1>Hola React + TS</h1>;
}`,
    },


    "spring-boot": {
  title: "Spring Boot APIs",
  category: "Backend",
  level: "Intermedio",
  duration: "1h",
  image:
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  content:
    "Aprende a crear APIs REST profesionales con Spring Boot, JPA, MySQL y seguridad JWT.",

  technologies: [
    "Java",
    "Spring Boot",
    "MySQL",
    "JWT"
  ],

  learn: [
    "Crear APIs REST",
    "Conectar MySQL",
    "Usar JPA",
    "Implementar JWT",
  ],

  code: `@RestController
@RequestMapping("/api/users")
public class UserController {

  @GetMapping
  public List<User> getUsers() {
    return userService.findAll();
  }
}`,
},
"docker-k8s": {
  title: "Docker + Kubernetes",
  category: "DevOps",
  level: "Avanzado",
  duration: "1h 30min",
  image:
    "https://images.unsplash.com/photo-1605745341112-85968b19335b",

  content:
    "Aprende a contenerizar aplicaciones con Docker y desplegarlas en Kubernetes para entornos productivos.",

  technologies: [
    "Docker",
    "Kubernetes",
    "Linux",
    "YAML"
  ],

  learn: [
    "Crear contenedores",
    "Docker Compose",
    "Pods y Deployments",
    "Escalabilidad",
  ],

  code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-deployment

spec:
  replicas: 3

  selector:
    matchLabels:
      app: my-app
}`,
},

    "machine-learning": {
      title: "Machine Learning",
      category: "IA",
      level: "Avanzado",
      duration: "1h 20 min",
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
      content:
        "Introducción a modelos predictivos usando Python y Scikit-Learn.",
      technologies: ["Python", "Pandas", "Scikit-Learn"],
      learn: [
        "Regresión",
        "Clasificación",
        "Entrenamiento de modelos",
        "Evaluación",
      ],
      code: `from sklearn.linear_model import LinearRegression

model = LinearRegression()
model.fit(X, y)`,
    },

    "deep-learning": {
      title: "Deep Learning",
      category: "IA",
      level: "Avanzado",
      duration: "2h",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      content:
        "Aprende redes neuronales profundas utilizando TensorFlow.",
      technologies: ["TensorFlow", "Keras", "Python"],
      learn: [
        "Neuronas",
        "Backpropagation",
        "CNN",
        "Entrenamiento",
      ],
      code: `model = keras.Sequential()
model.add(Dense(128))
model.add(Dense(10))`,
    },

    assembly: {
      title: "Programación en Ensamblador",
      category: "Low Level",
      level: "Experto",
      duration: "2h 30 min",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
      content:
        "Comprende cómo funciona una CPU a nivel de registros e instrucciones.",
      technologies: ["x86", "NASM", "Linux"],
      learn: [
        "Registros",
        "Memoria",
        "Syscalls",
        "CPU Internals",
      ],
      code: `section .text
global _start

_start:
  mov eax,1
  int 0x80`,
    },

    "operating-systems": {
      title: "Sistemas Operativos",
      category: "Systems",
      level: "Avanzado",
      duration: "1h 40 min",
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      content:
        "Procesos, hilos, memoria y planificación en sistemas modernos.",
      technologies: ["Linux", "Kernel", "C"],
      learn: [
        "Procesos",
        "Threads",
        "Scheduling",
        "Memoria virtual",
      ],
      code: `fork();
exec();
wait();`,
    },
  };

  const tutorial = tutorials[id || ""];

  if (!tutorial) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
        <h1 className="text-4xl font-bold">
          Tutorial no encontrado
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <Link
          to="/tutoriales"
          className="text-zinc-500 hover:text-black dark:hover:text-white"
        >
          ← Volver a tutoriales
        </Link>
      </div>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-10">

        <img
          src={tutorial.image}
          alt={tutorial.title}
          className="w-full h-[500px] object-cover rounded-3xl"
        />

        <div className="mt-8 flex gap-3 flex-wrap">
          <span className="px-4 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-sm">
            {tutorial.category}
          </span>

          <span className="px-4 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-sm">
            {tutorial.level}
          </span>

          <span className="px-4 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-sm">
            ⏱ {tutorial.duration}
          </span>
        </div>

        <h1 className="text-6xl font-black mt-6">
          {tutorial.title}
        </h1>

        <p className="text-zinc-500 text-xl mt-6 max-w-3xl">
          {tutorial.content}
        </p>

      </section>

      {/* CONTENIDO */}
      <section className="max-w-4xl mx-auto px-6 pb-20">

        <div className="border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            🚀 Lo que aprenderás
          </h2>

          <ul className="space-y-3">
            {tutorial.learn.map((item: string) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            🛠 Tecnologías
          </h2>

          <div className="flex gap-3 flex-wrap">
            {tutorial.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden">
          <div className="bg-zinc-100 dark:bg-zinc-900 px-6 py-4 font-bold">
            Ejemplo de Código
          </div>

          <pre className="p-6 overflow-x-auto">
            <code>{tutorial.code}</code>
          </pre>
        </div>

      </section>
    </div>
  );
}