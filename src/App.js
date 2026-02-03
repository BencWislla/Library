import { HeaderHome } from "./components/HeaderHome";
import { Card } from "./components/ui/Card";
import { Modal } from "./components/ui/Modal";

function App() {
  return (
    <div >
      <HeaderHome />
    </div>
    <div style={{ width: "50%", margin: "100px" }}>
      <Modal title={"Perdida"} author={"Carina Rissi"} />
      <Card title={"1984"} author={"Alguem"} category={"Fantasia"} year={"2000"} />
    </div >
  );
}

export default App;
