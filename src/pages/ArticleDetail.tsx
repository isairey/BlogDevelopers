import { useParams, Link } from "react-router-dom";

export default function ArticleDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-10">
      <Link to="/articulos" className="text-blue-500">
        ← Volver a artículos
      </Link>

      <h1 className="text-4xl font-bold mt-6">
        Artículo: {id}
      </h1>

      <p className="mt-6 text-zinc-500">
        Aquí después puedes cargar el contenido real del artículo desde una base de datos o JSON.
      </p>
    </div>
  );
}