import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { ButtonContent, FormContainer, FormRegisterContainer } from "./styles";

export function FormRegisterBooks() {
  const inputInfo = [
    { id: 1, text: "Título do Livro ", placeholder: "Ex: Dom Casmurro" },
    { id: 2, text: "Autor ", placeholder: "Ex: Machado de Assis" },
    { id: 3, text: "Categoria ", placeholder: "Ex: Romance, Ficção, Historía" },
    { id: 4, text: "Ano de Publicação", placeholder: "Ex: 1899" },
  ];
  return (
    <FormContainer>
      <FormRegisterContainer>
        {inputInfo.map((input) => (
          <Input
            key={input.id}
            text={input.text}
            placeholder={input.placeholder}
          />
        ))}
        <ButtonContent>
          <Button text={"Salvar Livro"} color={"#2563eb"} colorText={"white"} />
          <Button text={"Cancelar"} color={"#9ca3af"} colorText={"black"} />
        </ButtonContent>
      </FormRegisterContainer>
    </FormContainer>
  );
}
