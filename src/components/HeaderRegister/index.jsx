import { IoMdArrowRoundBack } from "react-icons/io";
import { HeaderContent, TitleHeader } from "../HeaderHome/styles";
import { ButtonHeader, RegisterHeader } from "./styles";

export function HeaderRegister() {
  return (
    <HeaderContent>
      <RegisterHeader>
        <ButtonHeader>
          <IoMdArrowRoundBack />
          <span>Voltar</span>
        </ButtonHeader>
        <TitleHeader>Cadastrar Livro</TitleHeader>
      </RegisterHeader>
    </HeaderContent>
  );
}
