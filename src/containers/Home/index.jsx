import api from "../../services/api";
import Button from "../../components/Button/index";
import Slider from "../../components/Slider";
import Modal from "../../components/Modal";
import { getImages } from "../../utils/getImages";
import { useNavigate } from "react-router-dom";
import { Background, Info, Porter, Container, ContainerButtons } from "./styles";
import { getMovies, getTopRated, getTopRatedTv, getPopular, getTopPopular } from "../../services/getDate";
import { useState, useEffect } from "react";

function Home() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [topRated, setTopRated] = useState([]);
  const [topRatedTv, setTopRatedTv] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topPopular, setTopPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getAllData() {
      try {
        setLoading(true);
        setError(null);
        
        const [moviesData, topRatedData, topRatedTvData, popularData, topPopularData] = await Promise.all([
          getMovies(),
          getTopRated(),
          getTopRatedTv(),
          getPopular(),
          getTopPopular()
        ]);

        setFeaturedMovie(moviesData);
        setTopRated(topRatedData);
        setTopRatedTv(topRatedTvData);
        setPopular(popularData);
        setTopPopular(topPopularData);
      } catch (error) {
        setError("Erro ao carregar dados. Tente novamente.");
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    }

    getAllData();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {featuredMovie && (
        <Background $image={getImages(featuredMovie.backdrop_path)}>
          <Container>
            <Info>
              <h1>{featuredMovie.title}</h1>
              <p>{featuredMovie.overview}</p>

              <ContainerButtons>
                <Button variant="red" onClick={() => navigate(`/detail/${featuredMovie.id}`)}>
                  Assistir agora
                </Button>
                <Button variant="white" onClick={() => setShowModal(true)}>
                  Assistir o Trailer
                </Button>
              </ContainerButtons>*/
            </Info>
            <Porter>
              <img src={getImages(featuredMovie.poster_path)} alt={featuredMovie.title} />
            </Porter>
          </Container>
        </Background>
      )}
      
      {topRated.length > 0 && <Slider info={topRated} title="Top Rated" />}
      {topRatedTv.length > 0 && <Slider info={topRatedTv} title="Top Rated TV" />}
      {popular.length > 0 && <Slider info={popular} title="Popular" />}
      {topPopular.length > 0 && <Slider info={topPopular} title="Top Popular" />}
      
      {showModal && (
          <Modal 
            movieId={featuredMovie?.id} 
            setShowModal={setShowModal}  // ← Mudar de setIsOpen para setShowModal
          />
        )}

    </>
  );
}

export default Home;