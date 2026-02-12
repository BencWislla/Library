import { IoBookOutline } from "react-icons/io5";
import { Button } from "../ui/Button";
import {
  ContentHeader,
  HeaderContent,
  IconBook,
  TitleContainer,
  TitleHeader,
} from "./styles";
import { useNavigate } from "react-router-dom";

export function HeaderHome() {
  const navigate = useNavigate();
  return (
    <HeaderContent>
      <ContentHeader>
        <TitleContainer>
          <IconBook>
            <IoBookOutline size={32} color="#ffff" />
          </IconBook>
          <TitleHeader>Biblioteca Digital</TitleHeader>
        </TitleContainer>
        <div>
          <Button
            text={"Cadastrar Livro"}
            colorFundo={"#2563eb"}
            colorText={"#ffff"}
            onClick={() => navigate("/RegisterBooks")}
          />
        </div>
      </ContentHeader>
    </HeaderContent>
  );
}
