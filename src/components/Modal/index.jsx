import { useState, useEffect } from "react";
import api from "../../services/api"; 
import { getMovies } from "../../services/getDate";
// Import CloseButton here
import { Background, Container, CloseButton } from "./styles"; 

function Modal({ movieId, setShowModal }) { 
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovies() {
      setMovie(await getMovies(movieId)); // Reset movie state before fetching new data
    }
    getMovies();
  }, []); 

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container onClick={(e) => e.stopPropagation()}>
          {/* Swapped standard button for CloseButton */}
          <CloseButton onClick={() => setShowModal(false)}>X</CloseButton>
          <iframe
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/${movie.key}`}
            title={movie.name}
            frameBorder="0"
            allowFullScreen /* Allows full screen mode inside iframe */
          ></iframe>
        </Container>
      )}
    </Background>
  );
}

export default Modal;
