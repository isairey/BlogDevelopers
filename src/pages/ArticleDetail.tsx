import { useParams, Link } from "react-router-dom";

export default function ArticleDetail() {
  const { id } = useParams();

  const articles: Record<string, any> = {
    react20: {
      title: "React 20 y las Nuevas APIs",
      category: "Frontend",
      readTime: "8 min",
      date: "04 Junio 2026",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      content:
        "React sigue evolucionando con nuevas APIs que mejoran el rendimiento, la experiencia de desarrollo y la escalabilidad de aplicaciones modernas.",

      tags: ["React", "JavaScript", "Frontend"],

      code: `function App() {
  return (
    <h1>Hola React 20 🚀</h1>
  );
}`,
    },

    springboot: {
      title: "Spring Boot para APIs Escalables",
      category: "Backend",
      readTime: "12 min",
      date: "03 Junio 2026",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c",

      content:
        "Spring Boot facilita la creación de APIs REST robustas, seguras y listas para producción.",

      tags: ["Java", "Spring Boot", "API"],

      code: `@RestController
@RequestMapping("/users")
public class UserController {

  @GetMapping
  public List<User> getUsers() {
    return service.findAll();
  }
}`,
    },

    docker: {
      title: "Docker desde Cero",
      category: "DevOps",
      readTime: "10 min",
      date: "01 Junio 2026",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

      content:
        "Aprende a crear imágenes, contenedores y desplegar aplicaciones usando Docker.",

      tags: ["Docker", "Linux", "DevOps"],

      code: `docker build -t mi-app .
docker run -p 8080:8080 mi-app`,
    },

    "machine-learning": {
  title: "Introducción a Machine Learning",
  category: "IA",
  readTime: "15 min",
  date: "29 Mayo 2026",

  image:
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",

  content:
    "Aprende los fundamentos del Machine Learning, incluyendo clasificación, regresión, entrenamiento de modelos y evaluación de resultados.",

  tags: [
    "Python",
    "Machine Learning",
    "Scikit-Learn",
    "IA"
  ],

  code: `from sklearn.linear_model import LinearRegression

model = LinearRegression()

model.fit(X_train, y_train)

prediction = model.predict(X_test)`,

},

cybersecurity: {
  title: "Fundamentos de Ciberseguridad",
  category: "Seguridad",
  readTime: "11 min",
  date: "26 Mayo 2026",

  image:
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",

  content:
    "Conoce los principios básicos de seguridad informática, protección de sistemas, redes y aplicaciones frente a amenazas modernas.",

  tags: [
    "Kali Linux",
    "Seguridad",
    "Pentesting",
    "Redes"
  ],

  code: `nmap -sV 192.168.1.1

Starting Nmap Scan...

PORT     STATE SERVICE
80/tcp   open  http
443/tcp  open  https`,

},

microservices: {
  title: "Arquitectura de Microservicios",
  category: "Arquitectura",
  readTime: "18 min",
  date: "22 Mayo 2026",

  image:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa",

  content:
    "Aprende a diseñar aplicaciones distribuidas mediante microservicios independientes, escalables y desacoplados.",

  tags: [
    "Spring Cloud",
    "Docker",
    "Kubernetes",
    "Microservicios"
  ],

  code: `@FeignClient(name = "user-service")

public interface UserClient {

  @GetMapping("/users/{id}")
  User findById(@PathVariable Long id);

}`,

},
  };

  const article = articles[id || ""];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
        <h1 className="text-4xl font-bold">
          Artículo no encontrado
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">

      {/* Back */}
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <Link
          to="/articulos"
          className="text-zinc-500 hover:text-black dark:hover:text-white"
        >
          ← Volver a artículos
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-10">

        <img
          src={article.image}
          alt={article.title}
          className="w-full h-[500px] object-cover rounded-3xl"
        />

        <div className="flex gap-3 mt-8 flex-wrap">

          <span className="px-4 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-sm">
            {article.category}
          </span>

          <span className="px-4 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-sm">
            📖 {article.readTime}
          </span>

          <span className="px-4 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-sm">
            📅 {article.date}
          </span>

        </div>

        <h1 className="text-6xl font-black mt-6">
          {article.title}
        </h1>

        <p className="text-zinc-500 text-xl mt-6 max-w-4xl">
          {article.content}
        </p>

      </section>

      {/* Contenido */}
      <section className="max-w-4xl mx-auto px-6 pb-20">

        <div className="border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            📚 Resumen
          </h2>

          <p className="text-zinc-500 leading-relaxed">
            En este artículo aprenderás los conceptos más importantes,
            buenas prácticas y ejemplos utilizados en proyectos reales.
          </p>
        </div>

        {/* Tags */}
        <div className="mt-8 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            🏷 Tecnologías
          </h2>

          <div className="flex flex-wrap gap-3">
            {article.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Código */}
        <div className="mt-8 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden">

          <div className="bg-zinc-100 dark:bg-zinc-900 px-6 py-4 font-bold">
            Ejemplo de Código
          </div>

          <pre className="p-6 overflow-x-auto">
            <code>{article.code}</code>
          </pre>

        </div>

      </section>

    </div>
  );
}