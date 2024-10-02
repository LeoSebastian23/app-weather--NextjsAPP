"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoaderSearching from "@/components/loaders/LoaderSearching";
import { searchCity } from "@/services/weather"; // Asegúrate de importar la función correcta

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        // Puedes definir una ciudad predeterminada aquí
        const defaultCity = "Mar del Plata";
        // Busca la ciudad en la API de WeatherAPI
        const results = await searchCity(defaultCity);

        // Verifica si hay resultados y redirige a la primera ciudad encontrada
        if (results && results.length > 0) {
          router.push(`/${results[0].value}`);
        } else {
          console.error("No se encontraron resultados para la ciudad predeterminada.");
        }
      } catch (error) {
        console.error("Error al buscar la ciudad:", error);
      }
    })();
  }, [router]);

  return (
    <div className="max-w-7xl box-border min-h-dvh">
      <LoaderSearching />
    </div>
  );
};

export default Home;
