import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeIn">Explora Publicaciones Increíbles</h1>
      <p className="text-lg md:text-xl mb-6 text-center px-4">
        Descubre y administra contenido de una vasta colección de publicaciones. Personaliza, filtra, y gestiona tus favoritos.
      </p>
      <Link href="/post/listado" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
        Ir al Listado de Publicaciones
      </Link>
    </div>
  );
}
