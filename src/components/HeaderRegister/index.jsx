import { IoMdArrowRoundBack } from "react-icons/io";
import { HeaderContent, TitleHeader } from "../HeaderHome/styles";
import { ButtonHeader, RegisterHeader } from "./styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export function HeaderRegister() {
  return (
    <HeaderContent>
      <RegisterHeader>
        <StyledLink to="/">
          <ButtonHeader>
            <IoMdArrowRoundBack size={20} />
            <span>Voltar</span>
          </ButtonHeader>
        </StyledLink>
        <TitleHeader>Cadastrar Livro</TitleHeader>
      </RegisterHeader>
    </HeaderContent>
  );
}
