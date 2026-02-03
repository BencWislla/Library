import { Button } from "../ui/Button";

export function EmptyBooks() {
  return (
    <div>
      <div></div>
      <div>
        <h2>Nenhum Livro Cadastrado</h2>
        <p>
          Comece a gerenciar seu acervo cadastrando o primeiro livro da
          biblioteca
        </p>
      </div>
      <Button
        text={"Cadastrar Primeiro Livro"}
        color={"#2563eb"}
        colorText={"white"}
      />
    </div>
  );
}
