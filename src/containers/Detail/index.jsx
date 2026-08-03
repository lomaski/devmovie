import { Container, Background, Foxy, Coven, Info, ContainerMovie } from "./styles";
import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom"; 
import { getMovieVideos, getSimilar, getDetails, getMovieById, getMovieCredits } from "../../services/getDate";
import { getImages } from "../../utils/getImages";
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";
import Slider from "../../components/Slider";

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

  const movieData = details || movieById;

  if (!movieData) {
    return <Background>Carregando...</Background>;
  }

  return (
    <>
      <Background image={getImages(movieData.backdrop_path)}></Background>
      
      {movieData && (
        <>
        <Container>
            <Coven>
              <img src={getImages(movieData.poster_path)} alt={movieData.title} />
            </Coven>

            <Info>
              {/*image={getImages(movieData.backdrop_path)}*/}
              <h2>{movieData.title}</h2>
              <SpanGenres genres={movieData.genres} />
              <p>{movieData.overview}</p>
              <div>
                <Credits credits={movieCredits} />
              </div>
            </Info>
        </Container>
        <ContainerMovie>
          {console.log(moviesVideos)}
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
                <p>No videos available.</p>
              )}
        </ContainerMovie>
        {similar && (
          <Slider info={similar} title="Filmes Similar" />
        )}
      </>
      )}

    </>
  );
}

export default Detail;
