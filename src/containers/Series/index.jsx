import { useState, useEffect } from 'react'; 
import { getTvM, getTvGenres} from '../../services/getDate'; 
import { Container, Data, Movier } from '../Series/styles'; 
import Card from '../../components/Card'; 

function Series() { 
  const [tv, setTv] = useState([]); 
  const [genres, setGenres] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  // 1. Criar o estado para armazenar o ID do gênero selecionado
  const [selectedGenre, setSelectedGenre] = useState(""); 

  useEffect(() => { 
    async function fetchTv() { 
      try { 
        setLoading(true); 
        setError(null); 
        const movies = await getTvM(); 
        const genresData = await getTvGenres(); 
        setTv(movies); 
        setGenres(genresData); 
      } catch (err) { 
        setError(err.message); 
      } finally { 
        setLoading(false); 
      } 
    } 

    fetchTv(); 
  }, []); 

  // 2. Filtrar as séries localmente com base no gênero selecionado
  const filteredTv = selectedGenre
    ? tv.filter((item) => item.genre_ids?.includes(Number(selectedGenre)))
    : tv;

  return ( 
    <Container> 
      {loading && <p>Carregando...</p>} 
      {error && <p>Erro: {error}</p>} 
      
      {!loading && !error && tv.length > 0 && ( 
        <Data> 
          <h3>Séries</h3>

          {/* 3. Adicionar o valor controlado e o onChange no select */}
          <select 
            name="genres" 
            id="genres"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">Todos os gêneros</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>

          <div className="movies-list"> 
            {/* 4. Mapear a lista filtrada (filteredTv) em vez do estado original */}
            {filteredTv.map((item) => ( 
              <Movier key={item.id}> 
                <Card info={item} /> 
              </Movier> 
            ))} 
          </div> 
        </Data> 
      )} 
    </Container> 
  ); 
} 

export default Series;
