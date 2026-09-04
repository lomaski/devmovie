import { getImages } from "../../utils/getImages";
import { Container, CardImage, CardInfo, CardTitle } from "./styles";
// Importe o Link do react-router-dom
import { Link } from "react-router-dom";

function Card({ info }) {
  // Define o link correto dinamicamente com base nas propriedades do objeto
  let destinationLink = `/detail/${info.id}`; // Padrão para filmes

  if (info.profile_path) {
    destinationLink = `/pessoas/${info.id}`; // Se tiver foto de perfil, é uma pessoa
  } else if (info.first_air_date || info.name) {
    // API do TMDB usa 'first_air_date' ou 'name' (em vez de title) para séries
    destinationLink = `/tv/${info.id}`; 
  }

  // Título dinâmico (Filmes usam title, Séries/Pessoas usam name ou original_name)
  const displayTitle = info.title || info.name || info.original_name;

  return (
    <Container>
      {/* Trocado <a> por <Link> para navegação SPA correta */}
      <Link to={destinationLink}>
        <CardImage 
          src={info.poster_path ? getImages(info.poster_path) : getImages(info.profile_path)} 
          alt={displayTitle}
          loading="lazy"
        />
        <CardInfo>
          <CardTitle>{displayTitle}</CardTitle>
        </CardInfo>
      </Link>
    </Container>
  );
}

export default Card;
