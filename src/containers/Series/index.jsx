import { useState, useEffect } from 'react'; 
import { getTvM } from '../../services/getDate'; 
import { Container, Data, Movier } from '../Series/styles'; 
import Card from '../../components/Card'; 

function Series() { 
  const [tv, setTv] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => { 
    async function fetchTv() { 
      try { 
        setLoading(true); 
        setError(null); 
        const movies = await getTvM(); 
        setTv(movies); 
      } catch (err) { 
        setError(err.message); 
      } finally { 
        setLoading(false); 
      } 
    } 

    fetchTv(); 
  }, []); 

  return ( 
    <Container> 
      {console.log(tv)}
      {loading && <p>Carregando...</p>} 
      {error && <p>Erro: {error}</p>} 
      
      {/* 1. Mudança aqui: Mostra o container se não estiver carregando e não houver erro */}
      {!loading && !error && tv.length > 0 && ( 
        <Data> 
          <h3>Séries</h3> 
          <div className="movies-list"> 
            {tv.map((item) => ( 
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
