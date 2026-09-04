import { useState, useEffect, useMemo } from 'react';
import { getMovieM, getGenres } from '../../services/getDate'; 
import { Container, Data, Movier } from '../Filmes/styles';
import Card from '../../components/Card';
import Mais from '../../components/Mais';

function Filmes() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [page, setPage] = useState(1); 

  // Carregamento inicial (Página 1 + Gêneros)
  useEffect(() => {
    async function fetchInitialData() {
      try {
        setLoading(true);
        setError(null);
        
        const [moviesData, genresData] = await Promise.all([
          getMovieM(1), 
          getGenres()
        ]);
         
        setMovies(moviesData || []);
        setGenres(genresData || []);
      } catch (err) {
        setError(err.message || "Ocorreu um erro ao carregar os dados.");
      } finally {
        setLoading(false);
      }
    }
    fetchInitialData(); 
  }, []);

  // Monitora o parâmetro 'page' para carregar e acumular mais filmes
  useEffect(() => {
    if (page === 1) return;

    async function loadMoreMovies() {
      try {
        setLoadingMore(true);
        const newMovies = await getMovieM(page);
        
        // Espalha os filmes anteriores e adiciona os novos no final da lista
        setMovies((prevMovies) => [...prevMovies, ...(newMovies || [])]);
      } catch (err) {
        console.error("Erro ao carregar mais filmes:", err.message);
      } finally {
        setLoadingMore(false);
      }
    }
    loadMoreMovies();
  }, [page]);

  const filteredMovies = useMemo(() => {
    if (!selectedGenre) return movies;
    const genreId = Number(selectedGenre);
    return movies.filter((movie) => movie.genre_ids?.includes(genreId));
  }, [movies, selectedGenre]);

  if (loading) {
    return <Container><p>Carregando...</p></Container>;
  }

  if (error) {
    return <Container><p>Erro: {error}</p></Container>;
  }

  const id = "movie";
  const pageParam = page;
  let arr = [id, pageParam]; // Seu array com os parâmetros atuais

  return (
    <Container>
      <Data>
        
        <select 
          name="genres" 
          id="genres"
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
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <Movier key={movie.id}> 
                <Card info={movie} /> 
              </Movier>
            ))
          ) : (
            <p>Nenhum filme encontrado para este gênero.</p>
          )}
        </div>

        {/* 
          Invocamos o componente Mais passando a função que incrementa a página.
          Se quiser passar o id e a página por prop para o botão, pode manter aqui também!
        */}
        <Mais 
          id={id}
          page={pageParam}
          onClick={() => setPage((prevPage) => prevPage + 1)} 
          loading={loadingMore} 
        />
      </Data>
    </Container>
  );
}

export default Filmes;
