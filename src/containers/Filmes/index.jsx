import { useState, useEffect, useMemo } from 'react';
import { getMovieM, getGenres } from '../../services/getDate'; 
import { Container, Data, Movier } from '../Filmes/styles';
import Card from '../../components/Card';

function Filmes() {
  const [movie, setMovieM] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        setError(null);
        
        const movies = await getMovieM();
        const genresData = await getGenres(); 
         
        setMovieM(movies || []);
        setGenres(genresData || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies(); 
  }, []);

  // Otimização com useMemo: só recalcula o filtro se 'movie' ou 'selectedGenre' mudarem
  const filteredMovies = useMemo(() => {
    if (!selectedGenre) return movie;
    return movie.filter((m) => m.genre_ids?.includes(Number(selectedGenre)));
  }, [movie, selectedGenre]);

  return (
    <Container>
      {loading && <p>Carregando...</p>}
      {error && <p>Erro: {error}</p>}
      
      {!loading && !error && movie.length > 0 && (
        <Data>
          <h3>Filmes</h3>
          
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
        </Data>
      )}
    </Container>
  );
}

export default Filmes;
