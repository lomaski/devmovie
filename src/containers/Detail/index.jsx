import { Container, Background, Foxy, Coven, Info } from "./styles";
import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom"; 
import { getMovieVideos, getSimilar, getDetails, getMovieById, getMovieCredits } from "../../services/getDate";
import { getImages } from "../../utils/getlmages";
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";

function Detail() {
  const { id } = useParams();

  const [moviesVideos, setMoviesVideos] = useState(null);
  const [similar, setSimilar] = useState(null);
  const [details, setDetails] = useState(null);
  const [movieById, setMovieById] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);

  useEffect(() => {
    async function getAllData() {
      if (!id) return; 

      try {
        const [videosRes, similarRes, detailsRes, movieByIdRes, creditsRes] = await Promise.allSettled([
          getMovieVideos(id),
          getSimilar(id),
          getDetails(id),
          getMovieById(id),
          getMovieCredits(id)
        ]);

        if (videosRes.status === 'fulfilled') setMoviesVideos(videosRes.value);
        if (similarRes.status === 'fulfilled') setSimilar(similarRes.value);
        if (detailsRes.status === 'fulfilled') setDetails(detailsRes.value);
        if (movieByIdRes.status === 'fulfilled') setMovieById(movieByIdRes.value);
        
        if (creditsRes.status === 'fulfilled') {
          setMovieCredits(creditsRes.value);
        } else {
          console.warn("Créditos falharam ao carregar, aplicando fallback vazio.");
          setMovieCredits({ cast: [], crew: [] }); 
        }

      } catch (error) {
        console.error("Erro inesperado no fluxo de dados:", error);
      }
    }

    getAllData();
  }, [id]);

  // Escolhe o objeto de dados que estiver disponível primeiro
  const movieData = details || movieById;

  // Enquanto a API não responder, exibe uma mensagem de carregando
  if (!movieData) {
    return <p style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>Carregando dados do filme...</p>;
  }

  return (
    <>
      <Background image={getImages(movieData.backdrop_path)}></Background>
      <Container>
        <Foxy>
          {/* Componente Coven renderizando o pôster do filme */}
          <Coven>
            <img src={getImages(movieData.poster_path)} alt={movieData.title} />
          </Coven>

          {/* Componente Info renderizando os textos */}
          <Info>
            <h2>{movieData.title}</h2>
            <SpanGenres genres={movieData.genres} />
            <p>{movieData.overview}</p>
            <div>
              <Credits credits={movieCredits} />
            </div>
          </Info>
        </Foxy>
      </Container>
    </>
  );
}

export default Detail;

