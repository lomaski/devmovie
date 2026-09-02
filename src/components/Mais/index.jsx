import { Container } from "./styles";

function Mais({ onClick, loading }) {
  return (
    <Container>
      <button onClick={onClick} disabled={loading}>
        {loading ? "Carregando..." : "Carregar Mais"}
      </button>
    </Container>
  );
}

export default Mais;
