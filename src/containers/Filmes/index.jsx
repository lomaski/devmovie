import api from '../../services/api';
import { useState, useEffect } from 'react';
import { getMovieM } from '../../services/getDate'; // Função importada
import { Container, Data, Movier } from '../Filmes/styles';
import Card from '../../components/Card';
import getImages from '../../utils/getImages';

function Filmes() {
  const [movie, setMovieM] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Mudei o nome da função interna para evitar conflito com a importada
    async function fetchMovies() {
      try {
        setLoading(true);
        setError(null);
        
        // Chama a função que veio do serviço de dados
        const movies = await getMovieM(); 
        setMovieM(movies);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    // Executa a função interna assim que o componente monta
    fetchMovies(); 
  }, []); // Array vazio garante que roda apenas uma vez

  // Removida a chamada solta que quebrava o app

  //console.log(movie);

  return (
    <Container>
      {loading && <p>Carregando...</p>}
      {error && <p>Erro: {error}</p>}
      
      {movie.length > 0 && (
        <Data>
          <h3>Filmes</h3>
          <div className="movies-list">
            {movie.map((movie) => (
              <Movier key={movie.id}> 
                <Card info={movie} /> 
              </Movier>
            ))}
          </div>
        </Data>
      )}
    </Container>
  );

}

export default Filmes;
