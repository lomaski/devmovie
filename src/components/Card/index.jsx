import { getImages } from "../../utils/getImages";
import { Container, CardImage, CardInfo, CardTitle } from "./styles";

function Card({ info }) {
  return (
    <Container>
      {console.log(info)}
      <a href={`/detail/${info.id}`} target="_self" rel="noopener noreferrer">
        <CardImage 
          src={info.poster_path ? getImages(info.poster_path) : getImages(info.profile_path)} 
          alt={info.original_name || info.title}
          loading="lazy"
        />
        <CardInfo>
          <CardTitle>{info.original_name || info.title}</CardTitle>
          {/*<p>{info.profile_path ? getImages(info.profile_path) : 'Sem imagem de perfil ou filme'}</p>*/}
        </CardInfo>
      </a>
    </Container>
  );
}

export default Card;
