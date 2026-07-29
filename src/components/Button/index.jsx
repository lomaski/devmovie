import { ButtonRed, ButtonWhite } from "./styles.js";

function Button({ children, variant = "white", ...rest }) {
  return variant === "red"
    ? <ButtonRed {...rest}>{children}</ButtonRed>
    : <ButtonWhite {...rest}>{children}</ButtonWhite>;
}

export default Button;