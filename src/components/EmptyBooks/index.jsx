import { Button } from "../ui/Button";
import { IoBookOutline } from "react-icons/io5";
import {
  DescriptionOfRegistration,
  IconBook,
  RegistrationContainer,
  TitleAnyBook,
} from "./styles";
import { useNavigate } from "react-router-dom";

export function EmptyBooks() {
  const navigate = useNavigate();
  return (
    <RegistrationContainer>
      <IconBook>
        <IoBookOutline size={64} color="#9ca3af" />
      </IconBook>
      <TitleAnyBook>Nenhum Livro Cadastrado</TitleAnyBook>
      <DescriptionOfRegistration>
        Comece a gerenciar seu acervo cadastrando o primeiro livro da biblioteca
      </DescriptionOfRegistration>
      <div>
        <Button
          text={"Cadastrar Primeiro Livro"}
          colorFundo={"#2563eb"}
          colorText={"white"}
          onClick={() => navigate("/RegisterBooks")}
        />
      </div>
    </RegistrationContainer>
  );
}
