import { getImages } from "../../utils/getlmages";
import { Container } from "./styles.js";

function Card({ info }) {
  return (
    <Container>
      <a href={info.homepage} target="_blank" rel="noopener noreferrer">
        <img src={getImages(info.poster_path || info.profile_path || '')} alt={info.title} />
        <h3>{info.original_name || info.title}</h3>
      </a>
    </Container>
  )
}

export default Card;