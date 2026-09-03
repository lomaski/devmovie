import { getImages } from "../../utils/getImages";
import { Container, CardImage, CardInfo, CardTitle } from "./styles";


function Card({ info }) {
  console.log(info);
  return (
    <Container>
      <a href={!info.known_for_department
    ? `/detail/${info.id}` 
    : `/pessoas/${info.id}`} target="_self" rel="noopener noreferrer">
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
