import { Button } from "../ui/Button";
import { FiBookOpen } from "react-icons/fi";
import {
  DescriptionOfRegistration,
  IconBook,
  InfoEmptyBooks,
  RegistrationContainer,
  TitleAnyBook,
} from "./styles";

export function EmptyBooks() {
  return (
    <RegistrationContainer>
      <IconBook>
        <FiBookOpen />
      </IconBook>
      <InfoEmptyBooks>
        <TitleAnyBook>Nenhum Livro Cadastrado</TitleAnyBook>
        <DescriptionOfRegistration>
          Comece a gerenciar seu acervo cadastrando o primeiro livro da
          biblioteca
        </DescriptionOfRegistration>
      </InfoEmptyBooks>
      <Button
        text={"Cadastrar Primeiro Livro"}
        color={"#2563eb"}
        colorText={"white"}
      />
    </RegistrationContainer>
  );
}
