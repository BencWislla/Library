import { ButtonContainer } from "./styles";

export function Button({ text, onClick, color, colorText }) {
  return (
    <ButtonContainer onClick={onClick} color={color} colorText={colorText}>
      {text}
    </ButtonContainer>
  );
}
