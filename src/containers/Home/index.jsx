import api from "../../services/api";
import Button from "../../components/Buttor"; 
import Slider from "../../components/Slider";
import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom";
import { Background, Info, Porter, Container, ContainerButtons } from "./styles";
import { getMovies, getTopRated, getTopRatedTv, getPopular, getTopPopular } from "../../services/getDate";
import { useState, useEffect } from "react";

function Home() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [movies, setMovies] = useState();
  const [topRated, setTopRated] = useState([]);
  const [topRatedTv, setTopRatedTv] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topPopular, setTopPopular] = useState([]);


  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopRated(),
        getTopRatedTv(),
        getPopular(),
        getTopPopular()
      ]).then(([movies, topRated, topRatedTv, popular, topPopular]) => {
        setMovies(movies);
        setTopRated(topRated);
        setTopRatedTv(topRatedTv);
        setPopular(popular);
        setTopPopular(topPopular);
      }).catch(error => {
        console.error("Erro ao buscar dados:", error);
      });
    }

    getAllData();
  }, []); // <-- Added '}' here to close the useEffect function body



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
                <Button variant="red" onClick={() => navigate(`/detail/${movies.id}`)}>
                  Assistir agora
                </Button>
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
