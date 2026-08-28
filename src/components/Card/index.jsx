import { getImages } from "../../utils/getImages";
import { Container, CardImage, CardInfo, CardTitle } from "./styles";

function Card({ info }) {
  return (
    <Container>
      <a href={`/detail/${info.id}` || `/people/${info.id}`} target="_self" rel="noopener noreferrer">
        <CardImage 
          src={info.poster_path ? getImages(info.poster_path) : getImages(info.profile_path)} 
          alt={info.original_name || info.title}
          loading="lazy"
        />
        <CardInfo>
          <CardTitle>{info.original_name || info.title}</CardTitle>
        </CardInfo>
      </a>
    </Container>
  );
}

export default Card;
