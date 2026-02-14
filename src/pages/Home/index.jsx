import { HeaderHome } from "../../components/HeaderHome";
import { ListBooks } from "../../components/ListBooks";
import { Container, ContainerList } from "./styles";

function Home() {
  return (
    <Container>
      <div>
        <HeaderHome />
      </div>
      <ContainerList>
        <ListBooks />
      </ContainerList>
    </Container>
  );
}
export default Home;
