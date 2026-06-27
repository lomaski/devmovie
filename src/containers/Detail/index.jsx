import { Container } from "./styles";
import { useEffect, useState } from "react"; // Added useState
import { useParams } from "react-router-dom";
// Included getMovieById in the import line below
import { getMovies, getSimilar, getDetails, getMovieById } from "../../services/getDate";

function Detail(props) {
  const { id } = useParams();

  // Added state hooks to store the API results
  const [movies, setMovies] = useState(null);
  const [similar, setSimilar] = useState(null);
  const [details, setDetails] = useState(null);
  const [movieById, setMovieById] = useState(null);

  useEffect(() => {
    async function getAllData() {
        Promise.all([
            getMovies(),
            getSimilar(id),
            getDetails(id),
            getMovieById(id)
        ])
        .then(([movies, similar, details, movieById]) => {
            setMovies(movies);
            setSimilar(similar);
            setDetails(details);
            setMovieById(movieById);
        })
        .catch(error => {
            console.error("Erro ao buscar dados:", error);
        });
    } // <-- Fixed: Added this missing closing brace

    getAllData();
  }, [id]);

  console.log("Movies:", movies);
  console.log("Similar:", similar);
  console.log("Details:", details);
  console.log("Movie By ID:", movieById);

  return (
    <Container>
        <h1>Detail {id}</h1>

    </Container>
  );
}

export default Detail;
