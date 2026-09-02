import { useState, useEffect, useMemo } from 'react';
import { getTvM, getTvGenres } from '../../services/getDate';
import { Container, Data, Movier } from '../Series/styles'; // Estilos da sua página de séries
import Card from '../../components/Card';
import Mais from '../../components/Mais'; // 👈 O mesmo botão reutilizado!

function Series() {
  const [series, setSeries] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [page, setPage] = useState(1); // Controla a página de séries

  // Carregamento inicial (Página 1 + Gêneros das Séries)
  useEffect(() => {
    async function fetchInitialData() {
      try {
        setLoading(true);
        setError(null);
        
        const [seriesData, genresData] = await Promise.all([
          getTvM(1), 
          getTvGenres()
        ]);
         
        setSeries(seriesData || []);
        setGenres(genresData || []);
      } catch (err) {
        setError(err.message || "Ocorreu um erro ao carregar as séries.");
      } finally {
        setLoading(false);
      }
    }
    fetchInitialData(); 
  }, []);

  // Monitora o estado 'page' para buscar mais séries e acumular no array
  useEffect(() => {
    if (page === 1) return;

    async function loadMoreSeries() {
      try {
        setLoadingMore(true);
        const newSeries = await getTvM(page);
        
        // Junta as antigas com as novas
        setSeries((prevSeries) => [...prevSeries, ...(newSeries || [])]);
      } catch (err) {
        console.error("Erro ao carregar mais séries:", err.message);
      } finally {
        setLoadingMore(false);
      }
    }
    loadMoreSeries();
  }, [page]);

  // Filtro inteligente de gêneros para séries
  const filteredSeries = useMemo(() => {
    if (!selectedGenre) return series;
    const genreId = Number(selectedGenre);
    return series.filter((item) => item.genre_ids?.includes(genreId));
  }, [series, selectedGenre]);

  if (loading) return <Container><p>Carregando séries...</p></Container>;
  if (error) return <Container><p>Erro: {error}</p></Container>;

  return (
    <Container>
      <Data>
        <h3>Séries de TV</h3>
        
        <select 
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="">Todos os gêneros</option>
          {Array.isArray(genres) && genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>

        <div className="movies-list">
          {filteredSeries.length > 0 ? (
            filteredSeries.map((item) => (
              <Movier key={item.id}> 
                <Card info={item} /> 
              </Movier>
            ))
          ) : (
            <p>Nenhuma série encontrada para este gênero.</p>
          )}
        </div>

        {/* 
          Reutilizando o mesmo componente <Mais> sem mudar nada nele!
          Ele só vai disparar o setPage da página de Séries.
        */}
        <Mais 
          onClick={() => setPage((prevPage) => prevPage + 1)} 
          loading={loadingMore} 
        />
      </Data>
    </Container>
  );
}

export default Series;
