import { Container, Background, Foxy, Coven, Info, ContainerMovie } from "./styles";
import { useEffect, useState } from "react"; 
import { useParams, useLocation } from "react-router-dom"; // Importado useLocation para ajudar na distinção
import { getMovieVideos, getSimilar, getDetails, getMovieById, getMovieCredits, getTVById } from "../../services/getDate";
import { getImages } from "../../utils/getImages";
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";
import Slider from "../../components/Slider";

function Detail() {
  const { id } = useParams();
  const location = useLocation();

  // Descobre se é filme ou série baseado na URL (ex: /filme/123 ou /tv/123)
  const isMovie = location.pathname.includes("movie") || !location.pathname.includes("tv");

  const [moviesVideos, setMoviesVideos] = useState(null);
  const [similar, setSimilar] = useState(null);
  const [details, setDetails] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);

  useEffect(() => {
    async function getAllData() {
      if (!id) return; 

      try {
        // Busca apenas os dados necessários dependendo do tipo de conteúdo
        if (isMovie) {
          const [videosRes, similarRes, detailsRes, creditsRes] = await Promise.allSettled([
            getMovieVideos(id),
            getSimilar(id),
            getDetails(id),
            getMovieCredits(id)
          ]);

          if (videosRes.status === 'fulfilled') setMoviesVideos(videosRes.value);
          if (similarRes.status === 'fulfilled') setSimilar(similarRes.value);
          if (detailsRes.status === 'fulfilled') setDetails(detailsRes.value);
          if (creditsRes.status === 'fulfilled') {
            setMovieCredits(creditsRes.value);
          } else {
            setMovieCredits({ cast: [], crew: [] }); 
          }
        } else {
          // Fluxo para Série (TV)
          const [tvRes] = await Promise.allSettled([getTVById(id)]);
          if (tvRes.status === 'fulfilled') setDetails(tvRes.value);
        }

      } catch (error) {
        console.error("Erro inesperado no fluxo de dados:", error);
      }
    }

    getAllData();
  }, [id, isMovie]);

  // Se ainda não carregou os detalhes essenciais, mostra o carregando
  if (!details) {
    return <Background>Carregando...</Background>;
  }

  // Normaliza as propriedades já que a API do TMDB usa nomes diferentes para Filmes e Séries
  const title = details.title || details.name;
  const backdrop = details.backdrop_path;
  const poster = details.poster_path;
  const genres = details.genres;
  const overview = details.overview;

  return (
    <>
      <Background image={getImages(backdrop)}></Background>
      
      <Container>
          <Coven>
            <img src={getImages(poster)} alt={title} />
          </Coven>

          <Info>
            <h2>{title}</h2>
            <SpanGenres genres={genres} />
            <p>{overview}</p>
            <div>
              <Credits credits={movieCredits || details.credits} />
            </div>
          </Info>
      </Container>

      {isMovie && (
        <ContainerMovie>
          {moviesVideos && moviesVideos.length > 0 ? (
            moviesVideos.map((video) => (
                  <div key={video.id}>
                    <h4>{video.name}</h4>
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title={video.name}
                  ></iframe>
                </div>
              ))
            ) : (
              <p>Nenhum vídeo disponível.</p>
            )}
        </ContainerMovie>
      )}        

      {isMovie && similar && (
        <Slider info={similar} title="Filmes Similares" />
      )}
    </>
  );
}

export default Detail;
