import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { ButtonContent, FormContainer, FormRegisterContainer } from "./styles";

export function FormRegisterBooks() {
  return (
    <FormContainer>
      <FormRegisterContainer>
        <Input text={"Título do Livro "} />
        <Input text={"Autor "} />
        <Input text={"Categoria "} />
        <Input text={"Ano de Publicação "} />
        <ButtonContent>
          <Button text={"Salvar Livro"} color={"#2563eb"} colorText={"white"} />
          <Button text={"Cancelar"} color={"#9ca3af"} colorText={"black"} />
        </ButtonContent>
      </FormRegisterContainer>
    </FormContainer>
  );
}
