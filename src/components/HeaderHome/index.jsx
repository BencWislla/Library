import { IoBookOutline } from "react-icons/io5";
import { Button } from "../ui/Button";
import {
  ContentHeader,
  HeaderContent,
  IconBook,
  TitleContainer,
  TitleHeader,
} from "./styles";

export function HeaderHome() {
  return (
    <HeaderContent>
      <ContentHeader>
        <TitleContainer>
          <IconBook>
            <IoBookOutline />
          </IconBook>
          <TitleHeader>Biblioteca Digital</TitleHeader>
        </TitleContainer>
        <Button
          text={"Cadastrar Livro"}
          color={"#2563eb"}
          colorText={"#ffff"}
        />
      </ContentHeader>
    </HeaderContent>
  );
}
