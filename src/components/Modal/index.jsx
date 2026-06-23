import { useState, useEffect } from "react";
import api from "../../services/api"; 
// Import CloseButton here
import { Background, Container, CloseButton } from "./styles"; 

function Modal({ movieId, setShowModal }) { 
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovies() {
      try {
        const { data: { results } } = await api.get(`/movie/${movieId}/videos`);
        setMovie(results[1] || results[0]); 
      } catch (error) {
        console.error("Erro ao buscar vídeos do filme:", error);
      }
    }

    if (movieId) {
      getMovies(); 
    }
  }, [movieId]); 

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
