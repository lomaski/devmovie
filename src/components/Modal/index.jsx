import { useState, useEffect } from "react";
import api from "../../services/api"; 
import { getMovies } from "../../services/getDate";
import { Background, Container, CloseButton } from "./styles"; 

function Modal({ movieId, setShowModal }) { 
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovies() {
      setMovie(await getMovies(movieId)); // Reset movie state before fetching new data
    }
    getMovies();
  }, []);
  
  console.log(movie)

  if (!movie) {
    return <Background>Filme não encontrado.<CloseButton onClick={() => setShowModal(false)}>X</CloseButton></Background>;
  }

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={() => setShowModal(false)}>X</CloseButton>
          <iframe
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/${movie.key}`}
            title={movie.name}
          ></iframe>
        </Container>
      )}
    </Background>
  );
}

export default Modal;
