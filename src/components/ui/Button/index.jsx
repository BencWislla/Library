import { ButtonContainer } from "./styles";

export function Button({ text, onClick, colorFundo, colorText }) {
  return (
    <ButtonContainer
      onClick={onClick}
      colorFundo={colorFundo}
      colorText={colorText}
    >
      {text}
    </ButtonContainer>
  );
}
