import { useState, useEffect } from "react";
import { getMovies, getTopRated, getTopRatedTv, getPopular, getTopPopular } from "../services/getDate";

export function useMovieData() {
  const [data, setData] = useState({
    featuredMovie: null,
    topRated: [],
    topRatedTv: [],
    popular: [],
    topPopular: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAllData() {
      try {
        setLoading(true);
        setError(null);
        
        const [movies, topRated, topRatedTv, popular, topPopular] = await Promise.all([
          getMovies(),
          getTopRated(),
          getTopRatedTv(),
          getPopular(),
          getTopPopular()
        ]);

        setData({
          featuredMovie: movies,
          topRated,
          topRatedTv,
          popular,
          topPopular
        });
      } catch (err) {
        setError("Erro ao carregar dados. Tente novamente.");
        console.error("Erro ao buscar dados:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchAllData();
  }, []);

  return { ...data, loading, error };
}