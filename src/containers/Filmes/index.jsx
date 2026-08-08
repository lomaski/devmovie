import api from '../../services/api';
import { useState, useEffect } from 'react';
import { getMovieChanges } from '../../services/getDate';
import { Container } from '../Home/styles';
import getImages from '../../utils/getImages';

function Filmes() {
  const [movieChanges, setMovieChanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieChanges = async () => {
      try {
        setLoading(true);
        const changes = await getMovieChanges();
        const images = await Promise.all(changes.map((change) => getImages(change.id)));
        setMovieChanges(changes);
      } catch (err) {
        setError('Erro ao carregar as mudanças dos filmes.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieChanges();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log('Movie Changes:', movieChanges);

  return (
    <>
      <Container>
        <h1>Filmes</h1>
        <div>
          {movieChanges.map((change) => (
            <div key={change.id}>
              {change.id}
              
              <h2>{change.title}</h2>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Filmes;
