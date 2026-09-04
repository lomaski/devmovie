import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; 
import Logo from "../../assets/logo.png";
import { Menu, Li, Container } from "./styles";

function Header() {
  const [changeBackground, setChangeBackground] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (!changeBackground && window.scrollY > 50) { 
        setChangeBackground(true);
      } else if (changeBackground && window.scrollY <= 50) {
        setChangeBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); 
  }, [changeBackground]); // Adicionada a dependência para ler o estado atualizado corretamente

  return (
    /* Adicionado o '$' para alinhar com o arquivo de estilos */
    <Container $changeBackground={changeBackground}>
      <img src={Logo} alt="Logo DevMovie" />

      <Menu>
        {/* Adicionado o '$' nas validações de rota ativa */}
        <Li $isActive={pathname === "/"}>
          <Link to="/">Início</Link>
        </Li>
        {/* Se sua rota de detalhes for /detail/:id, você pode usar: pathname.includes("filmes") || pathname.includes("detail") */}
        <Li $isActive={pathname.includes("filmes") || pathname.includes("detail")}>
          <Link to="/filmes">Filmes</Link>
        </Li>
        {/* Se sua rota de séries for /tv/:id, você pode usar: pathname.includes("series") || pathname.includes("tv") */}
        <Li $isActive={pathname.includes("series") || pathname.includes("tv")}>
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </Container>
  );
}

export default Header;
