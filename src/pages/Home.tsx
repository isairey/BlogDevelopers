import { useEffect, useState } from "react";
import {
  Moon,
  Sun,
  Code2,
  Database,
  Cpu,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "light") {
      setDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = !dark;

    setDark(next);

    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const [email, setEmail] = useState("");

const handleSubscribe = async () => {
  if (!email.trim()) {
    alert("Escribe un correo válido");
    return;
  }

  try {
    const res = await fetch("http://localhost:3001/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      alert("Correo enviado 🚀");
      setEmail("");
    } else {
      alert("Error al suscribirse");
    }
  } catch (error) {
    alert("Error de conexión");
  }
};
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen transition-all duration-300">
      {/* NAVBAR */}

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-black/80 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Code2 size={30} />
            <h1 className="font-bold text-xl">DevBlog</h1>
          </div>

         <nav className="hidden md:flex gap-8 text-sm font-medium">
  <Link to="/">Inicio</Link>
  <Link to="/articulos">Artículos</Link>
  <Link to="/tutoriales">Tutoriales</Link>
  <Link to="/categorias">Categorías</Link>
</nav>

          <button
            onClick={toggleTheme}
            className="border border-zinc-300 dark:border-zinc-700 p-2 rounded-xl"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </header>

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-5xl">
          <span className="px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 text-sm">
            🚀 Blog para desarrolladores modernos
          </span>

          <h1 className="mt-8 text-6xl md:text-8xl font-bold tracking-tight">
            Aprende a crear
            <br />
            software profesional.
          </h1>

          <p className="mt-8 text-xl text-zinc-500 max-w-2xl">
            Tutoriales, inteligencia artificial, React, Spring Boot,
            Docker, DevOps y arquitectura de software.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
           <Link
  to="/articulos"
  className="bg-black dark:bg-white dark:text-black text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
>
  Explorar artículos
  <ArrowRight size={18} />
</Link>

            <Link
  to="/categorias"
  className="border border-zinc-300 dark:border-zinc-700 px-6 py-3 rounded-xl"
>
  Ver categorías
</Link>
          </div>
        </div>
      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["120+", "Artículos"],
            ["15K+", "Lectores"],
            ["50+", "Categorías"],
            ["200+", "Tutoriales"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8"
            >
              <h2 className="text-4xl font-bold">{value}</h2>
              <p className="text-zinc-500 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORÍAS */}

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-12">
          Categorías Populares
        </h2>

       <div className="grid md:grid-cols-4 gap-6">
  {[
    {
      icon: <Globe size={30} />,
      title: "Frontend",
      desc: "React, Vue, Angular",
      path: "/frontend",
    },
    {
      icon: <Database size={30} />,
      title: "Backend",
      desc: "Spring Boot, Node.js",
      path: "/backend",
    },
    {
      icon: <Cpu size={30} />,
      title: "IA",
      desc: "Machine Learning",
      path: "/ia",
    },
    {
      icon: <Code2 size={30} />,
      title: "DevOps",
      desc: "Docker y Kubernetes",
      path: "/devops",
    },
  ].map((item) => (
    <Link to={item.path} key={item.title}>
      <div className="border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 hover:-translate-y-1 transition-all cursor-pointer">
        <div className="mb-4">{item.icon}</div>

        <h3 className="font-bold text-xl">
          {item.title}
        </h3>

        <p className="text-zinc-500 mt-2">
          {item.desc}
        </p>
      </div>
    </Link>
  ))}
</div>
      </section>

      {/* ARTÍCULOS */}

    <section className="max-w-7xl mx-auto px-6 pb-24">
  <h2 className="text-4xl font-bold mb-12">
    Artículos Destacados
  </h2>

  <div className="grid lg:grid-cols-3 gap-8">
    {[
      {
        id: "react-20",
        title: "React 20 y las nuevas APIs",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      },
      {
        id: "spring-boot",
        title: "Spring Boot para APIs escalables",
        image:
          "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      },
      {
        id: "docker-cero",
        title: "Docker desde cero",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      },
    ].map((post) => (
      <Link to={`/articulos/${post.id}`} key={post.id}>
        <article className="border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all cursor-pointer">
          
          <img
            src={post.image}
            alt={post.title}
            className="h-60 w-full object-cover"
          />

          <div className="p-8">
            <span className="text-zinc-500 text-sm">
              Desarrollo
            </span>

            <h3 className="text-2xl font-bold mt-3">
              {post.title}
            </h3>

            <p className="mt-4 text-zinc-500">
              Aprende las mejores prácticas y tecnologías modernas para crear aplicaciones profesionales.
            </p>
          </div>
        </article>
      </Link>
    ))}
  </div>
</section>

      {/* NEWSLETTER */}

      <section className="max-w-4xl mx-auto px-6 pb-24">
  <div className="border border-zinc-200 dark:border-zinc-800 rounded-[32px] p-12 text-center">
    <h2 className="text-4xl font-bold">
      Únete a la comunidad
    </h2>

    <p className="text-zinc-500 mt-4">
      Recibe nuevos artículos y tutoriales cada semana.
    </p>

    <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">
      <input
        type="email"
        placeholder="correo@ejemplo.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-zinc-300 dark:border-zinc-700 bg-transparent rounded-xl px-5 py-3 md:w-96"
      />

      <button
        onClick={handleSubscribe}
        className="bg-black dark:bg-white dark:text-black text-white px-6 py-3 rounded-xl font-semibold"
      >
        Suscribirme
      </button>
    </div>
  </div>
</section>
      {/* FOOTER */}

      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-bold text-lg">
              DevBlog
            </h3>

            <p className="text-zinc-500 text-sm mt-1">
              © 2026 Todos los derechos reservados.
              IRP
            </p>
          </div>

          <div className="flex gap-6 text-zinc-500">
            <a href="https://github.com/isairey">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}