import { ButtonRed, ButtonWhite } from "./styles";

function Button({ children, variant = "white", ...rest }) {
  return variant === "red" 
    ? <ButtonRed {...rest}>{children}</ButtonRed>
    : <ButtonWhite {...rest}>{children}</ButtonWhite>;
}

export default Button;