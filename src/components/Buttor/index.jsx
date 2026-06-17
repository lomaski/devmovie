import { ButtonRed, ButtonWhite } from "./styles";

function Button({ children, variant = "white" }) {
  return variant === "red" 
    ? <ButtonRed>{children}</ButtonRed>
    : <ButtonWhite>{children}</ButtonWhite>;
}

export default Button;
