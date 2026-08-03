import api from "../../services/api";
import { getImages } from "../../utils/getImages";
import { getMovieCredits } from "../../services/getDate";
import { Container, Title } from "./styles";

function Credits({ credits }) {
  if (!credits || credits.length === 0) {
    return <div>Sem créditos disponíveis.</div>;
  }
  
  return (
    <>
      <Title>Créditos</Title>
      {credits && (
        <Container>
          {credits.slice(0, 5).map((member) => (
            <div key={member.id || member.cast_id}>
              <img src={getImages(member.profile_path)} alt={member.name} />
              <p>{member.name}</p>
            </div>
          ))}
        </Container>
      )}
    </>
  );
}

export default Credits;
