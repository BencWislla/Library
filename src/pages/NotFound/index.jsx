import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { ContainerNotFound, Text } from "./styles";

function NotFound() {
  const navigate = useNavigate();
  return (
    <ContainerNotFound>
      <div>
        <Text>
          404 ERROR <br />
          Pagina nao encontrada
        </Text>
      </div>
      <div>
        <Button
          text={"Voltar a Biblioteca"}
          colorFundo={"#d0500077"}
          colorText={"black"}
          onClick={() => navigate("/")}
        />
      </div>
    </ContainerNotFound>
  );
}
export default NotFound;
