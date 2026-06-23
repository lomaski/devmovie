import api from "../../services/api";
import Button from "../../components/Buttor"; 
import Slider from "../../components/Slider";
import Modal from "../../components/Modal";
import { Background, Info, Porter, Container, ContainerButtons } from "./styles";

import { useState, useEffect } from "react";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movies, setMovies] = useState();
  const [topRated, setTopRated] = useState([]);
  const [topRatedTv, setTopRatedTv] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topPopular, setTopPopular] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const { data: { results } } = await api.get('/movie/popular');
      setMovies(results[1]); 
    }

    async function getTopRated() {
      const { data: { results } } = await api.get('/movie/top_rated');
      setTopRated(results);
    }
    
    async function getTopRatedTv() {
      const { data: { results } } = await api.get('/tv/top_rated');
      setTopRatedTv(results); 
    }

    async function getPopular() {
      const { data: { results } } = await api.get('/movie/popular');
      setPopular(results);
    }

    async function getTopPopular() {
      const { data: { results } } = await api.get('/person/popular');
      setTopPopular(results);
    }

    getMovies();
    getTopRated();
    getTopRatedTv();
    getPopular();
    getTopPopular();
  }, []);

  return (
    <>
      {movies && (
        <Background image={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}>
          {showModal && 
          <Modal movieId={movies.id} setShowModal={setShowModal} 
          />}
          <Container>
            <Info>
              <h1>{movies.title}</h1>
              <p>{movies.overview}</p>

              <ContainerButtons>
                <Button variant="red">Assistir agora</Button>
                <Button variant="white" onClick={() => setShowModal(true)}>
                  Assistir o Trailer
                </Button>
              </ContainerButtons>
            </Info>
            
            <Porter>
              <img alt="capa-de-filme" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} />
            </Porter>
          </Container>
        </Background>
      )}
      {topRated && <Slider info={topRated} title={"Top Rated"} />}
      {topRatedTv && <Slider info={topRatedTv} title={"Top Rated TV"} />}
      {popular && <Slider info={popular} title={"Popular"} />}
      {topPopular && <Slider info={topPopular} title={"Top Popular"} />}
    </>
  );
}

export default Home;
