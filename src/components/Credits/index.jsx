import { Title, Contoiner} from "./styles";

function Credits({ credits }) {
    console.log(credits);
  return (
    <>
    <Title>Créditos</Title>
    <Container>
        {credits.cast && credits.cast.length > 0 ? ( 
          <ul>
            {credits.cast.map((actor) => (
              <li key={actor.id}>{actor.name}</li>
            ))}
          </ul>
        ) : (
          <p>Créditos não disponíveis.</p>
        )}
    </Container>
    </>
  );
}