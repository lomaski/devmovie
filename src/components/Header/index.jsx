import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; 
import Logo from "../../assets/logo.png";
import { Menu, Li, Container } from "./styles";

function Header() {
  const [changeBackground, setChangeBackground] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (!changeBackground && window.scrollY > 50) { // Note: pageYOffset is deprecated, use scrollY
        setChangeBackground(true);
      } else if (changeBackground && window.scrollY <= 50) {
        setChangeBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <Container changeBackground={changeBackground}>
      <img src={Logo} alt="Logo DevMovie" />

      <Menu>
        <Li isActive={pathname === "/"}>
          <Link to="/">Início</Link>
        </Li>
        <Li isActive={pathname.includes("filmes")}>
          <Link to="/filmes">Filmes</Link>
        </Li>
        <Li isActive={pathname.includes("series")}>
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </Container>
  );
}

export default Header;
