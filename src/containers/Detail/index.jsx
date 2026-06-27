import { Container } from "./styles";
import { useEffect, useState } from "react"; 
import { data, useParams } from "react-router-dom";
import { getMovieVideos, getSimilar, getDetails, getMovieById, getMovieCredits } from "../../services/getDate";

function Detail() {
  const { id } = useParams();

  const [moviesVideos, setMoviesVideos] = useState(null);
  const [similar, setSimilar] = useState(null);
  const [details, setDetails] = useState(null);
  const [movieById, setMovieById] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);

  useEffect(() => {
  async function getAllData() {
    // 1. Change Promise.all to Promise.allSettled
    Promise.allSettled([
        getMovieVideos(id),
        getSimilar(id),
        getDetails(id),
        getMovieCredits(id)
    ])
    .then(([videosResult, similarResult, detailsResult, creditsResult]) => {
        console.log({moviesVideos, similar, details, movieById, movieCredits});
        if (videosResult.status === 'fulfilled') setMoviesVideos(videosResult.value);
        if (similarResult.status === 'fulfilled') setSimilar(similarResult.value);
        if (detailsResult.status === 'fulfilled') setDetails(detailsResult.value);
        
        // Handle credits smoothly if it fails
        if (creditsResult.status === 'fulfilled') {
            setCredits(creditsResult.value);
        } else {
            console.warn("Credits failed to load due to TMDB 502 error, using empty fallback.");
            setCredits({ cast: [], crew: [] }); // Fallback so map() doesn't break
        }
    })
    .catch(error => {
        console.error("Erro inesperado:", error);
    });
  } 

  getAllData();
}, [id]);


  console.log("moviesVideos:", moviesVideos);
    console.log("similar:", similar);
    console.log("details:", details);
    console.log("movieById:", movieById);
    console.log("movieCredits:", movieCredits);

  return (
    <Container>
        <h1>Detail {id}</h1>
    </Container>
  );
}

export default Detail;
