import { Container, Background, Foxy, Coven, Info, ContainerMovie } from "./styles";
import { useEffect, useState } from "react"; 
import { useParams, useLocation } from "react-router-dom"; 
// Certifique-se de importar todas as funções necessárias do seu arquivo de serviços
import { 
  getMovieVideos, getSimilar, getDetails, getMovieCredits, 
  getTVById, getTVVideos, getTVSimilar, getTVCredits 
} from "../../services/getDate";
import { getImages } from "../../utils/getImages";
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";
import Slider from "../../components/Slider";

function Detail() {
  const { id } = useParams();
  const location = useLocation();

  // Descobre se é filme ou série baseado na URL
  const isMovie = location.pathname.includes("movie") || !location.pathname.includes("tv");

  const [videos, setVideos] = useState(null);
  const [similar, setSimilar] = useState(null);
  const [details, setDetails] = useState(null);
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    async function getAllData() {
      if (!id) return; 

      try {
        // Define quais funções chamar dependendo do tipo (Filme ou Série)
        const fetchVideos = isMovie ? getMovieVideos : getTVVideos;
        const fetchSimilar = isMovie ? getSimilar : getTVSimilar;
        const fetchDetails = isMovie ? getDetails : getTVById; // ou getTVDetails se mudou o nome
        const fetchCredits = isMovie ? getMovieCredits : getTVCredits;

        const [videosRes, similarRes, detailsRes, creditsRes] = await Promise.allSettled([
          fetchVideos(id),
          fetchSimilar(id),
          fetchDetails(id),
          fetchCredits(id)
        ]);

        if (videosRes.status === 'fulfilled') setVideos(videosRes.value);
        if (similarRes.status === 'fulfilled') setSimilar(similarRes.value);
        if (detailsRes.status === 'fulfilled') setDetails(detailsRes.value);
        
        if (creditsRes.status === 'fulfilled') {
          setCredits(creditsRes.value);
        } else {
          setCredits({ cast: [], crew: [] }); 
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

  // Normaliza as propriedades (TMDB usa 'title' para filmes e 'name' para séries)
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
              <Credits credits={credits} />
            </div>
          </Info>
      </Container>

      <ContainerMovie>
        {videos && videos.length > 0 ? (
          videos.map((video) => (
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

      {similar && (
        <Slider info={similar} title={isMovie ? "Filmes Similares" : "Séries Similares"} />
      )}
    </>
  );
}

export default Detail;
