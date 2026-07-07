import { Container, Background, Coven } from "./styles";
import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom"; 
import { getMovieVideos, getSimilar, getDetails, getMovieById, getMovieCredits } from "../../services/getDate";
import { getImages } from "../../utils/getlmages";

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
        // Executa todas as chamadas em paralelo de forma segura
        const [videosRes, similarRes, detailsRes, movieByIdRes, creditsRes] = await Promise.allSettled([
          getMovieVideos(id),
          getSimilar(id),
          getDetails(id),
          getMovieById(id),
          getMovieCredits(id)
        ]);

        // Atualiza cada estado individualmente se a requisição deu certo
        if (videosRes.status === 'fulfilled') setMoviesVideos(videosRes.value);
        if (similarRes.status === 'fulfilled') setSimilar(similarRes.value);
        if (detailsRes.status === 'fulfilled') setDetails(detailsRes.value);
        if (movieByIdRes.status === 'fulfilled') setMovieById(movieByIdRes.value);
        
        // Tratamento especial para os créditos
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

  // Monitora os estados mudando no console
  useEffect(() => {
    if (details || moviesVideos) {
      console.log("Estados atualizados com sucesso:", { moviesVideos, similar, details, movieById, movieCredits });
    }
  }, [moviesVideos, similar, details, movieById, movieCredits]);

  return (
    <>
      <Background image={getImages(details?.backdrop_path || movieById?.backdrop_path)}></Background>
      <Container>
          <Coven>
            <img src={getImages(details?.poster_path || movieById?.poster_path)} alt={details?.title || movieById?.title} />
          </Coven>
      </Container>
    </>
  );
}

export default Detail;
