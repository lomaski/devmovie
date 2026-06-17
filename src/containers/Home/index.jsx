import api from "../../services/api";
import Button from "../../components/Buttor";
import Slider from "../../components/Slider";
import { Background, Info, Porter, Container, ContainerButtons } from "./styles";

import { useState, useEffect } from "react";

function Home() {
  const [movies, setMovies] = useState();
  const [topRated, setTopRated] = useState([]);
  const [topRatedTv, setTopRatedTv] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const { data: { results } } = await api.get('/movie/popular');
      setMovies(results[1]); // Pega o segundo filme
    }

    async function getTopRated() {
      const { data: { results } } = await api.get('/movie/top_rated');
      setTopRated(results);
      
    }
    
    async function getTopRatedTv() {
      const { data: { results } } = await api.get('/tv/top_rated');
      setTopRatedTv(results); 
    }

    getMovies();
    getTopRated();
    getTopRatedTv();
  }, []);


  return (
    <>
    {movies && (
      <Background image={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}>
        <Container>
          <Info>
            <h1>{movies.title}</h1>
            <p>{movies.overview}</p>

            <ContainerButtons>
              <Button variant="red">Assistir agora</Button>
              <Button variant="white">Assistir o Trailer</Button>
            </ContainerButtons>
          </Info>
          
          <Porter>
            <img alt="capa-de-filme" src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} />
          </Porter>
        </Container>
      </Background>
    )}
    {topRated && <Slider info={topRated} title={"Top Rated"} />}
    {topRatedTv && <Slider info={topRatedTv} title={"Top Rated TV"} />}
  </>
  );
}

export default Home;