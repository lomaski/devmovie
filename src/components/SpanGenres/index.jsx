import { Container } from "./styles";

function SpanGenres({ genres }) {
  return (
    <Container>
      {/* O encadeamento opcional (?.) impede o crash se genres for undefined */}
      {genres?.map((genre) => (
        <span key={genre.id}>{genre.name}</span>
      ))}
    </Container>
  );
}

export default SpanGenres;
