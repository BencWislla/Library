// Preciso criar um fluxo de listagem de livros, ou seja a cada salvamento do cadastro de livros precisa ser criando um card na pagina home (crio uma mooks)
// Preciso criar um fluxo de exclusao de livros sendo que precisara aparecer o modal
// Alem disso preciso criar um fluxo de exclusao de livros sendo que quando excluir todos os livros gerar do componets na pagina home o EMPTYbooks
// 1 passo - criar a listagem de livros atraves de uma mook e depois tambem atravez do cadastro
// 2 passo - criar o fluxo de exclusao que surgirar o modal para confirmaçao de exclusao e exclusao do cards
// 3 passo - criar o fluxo de exclusao completa que surgira na mesma pagina o component ja criado "EmptyBooks"

import { useEffect, useState } from "react";
import { Card } from "../ui/Card";
import { BookListContainer, BookListTitle, CardsBooks } from "./styles";
import { Modal } from "../ui/Modal";
import { EmptyBooks } from "../EmptyBooks";

const Mock_Books = [
  {
    id: 1,
    title: "Dom Casmurro",
    author: "Machado de Asis",
    category: "Romance",
    year: 1899,
  },
  {
    id: 2,
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    category: "Infantil",
    year: 1943,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    category: "Ficção Distópica",
    year: 1949,
  },
];
// 1 passo - Devo criar um useState para ter o controle dos meus livros, inicialmente tenho o meu array de objeto fixo, e se surgir alteraçoes nao sera possivel, entao crio um useState que esta resposnsavel em gerenciar os meus livros
// 2 passo - Preciso trazer dados do localstorge, se estiver dados no localstorge eu trago eles, se nao trago oque tem na mook e salvo a mook no localstorge

// 1 passo - Preciso criar o fluxo do Modal, sendo que o modal vai ter o botao de cancelar(para nao excluir o livro), o botao(confirmar o cancelamento e exclusao do livro), e o botao X(apenas sai do modal)
// 1.1 passo - com isso trago do meu modal as props do onClick assim eu determino o estado de cada um deles
// 2 passo - crio um estado para saber qual livro estamos selecionando para ele toda vez que clicamos no botao excluir sera redirecionado ao modal, assim sendo que no evento do onclick chamaos o estado atual que vai ter o livro e quando abrimos o modal, saberemos a qual livro que esta direcionando com uma redezricao unica
// 3 passo - com a rederizacao unica se o modal tiver aberto entao aparecera o modal com as informacoes do livro e adicionamos ao estado do onclose o estado do livro como null para nao acontecer problemas futuros de fechar o modal e ainda fica salvo o livro antigo
// 4 passo - Para a confirmacao do livro que devemos guardar no localsotge criamos uma funciton que ira fazer ese fluxo

// 1 passo - para a confirmacao de exclusao do modal
// 2 passo - primeiro de tudo demos utilizar a hof filter, para uma verificacao de no caso se o livro doe stado atual for diferente ao livro do estado selectbooks entao ele sera excluido
// 3 passo - entao atualizamos o localsotrge criando um novo
// 4 passo - e passamos o estado do selectBooK no final para dizer ao react que nao estamos mais trabalahdno com nenhum livro
// 1 passo - preciso criar o fluxo de confirmacao de exclusao de algum cards
// 2 passo - para isso o metodo de exclusao mais eficas para uma rederizacao de pagina sem carregamentos sera o useEffect, ele e resposavel pela inicializacao da aplicacao
// 3 passo - verificamos se existe algo dentro do localstorge, se tem dados ele retorna os cards, se nao retorna a moock e que salva no localstorge
// 1 passo - se todos os livros forem apagos deve surgir a pagina de nenhum livro cadastardo para isso utilizamos a redenrizacao dupla, se os books.length for igual a zero redereze a pagina, se nao rederize os cards

export function ListBooks() {
  const [books, setBooks] = useState(Mock_Books);
  const [selectBook, setSelectBook] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  function handleConfirmBook() {
    const upDatedBooks = books.filter((book) => book.id !== selectBook.id);

    setBooks(upDatedBooks);

    localStorage.setItem("Books", JSON.stringify(upDatedBooks));

    setSelectBook(null);
    setOpenModal(false);
  }

  useEffect(() => {
    const getBooks = localStorage.getItem("Books");
    if (getBooks) {
      const parsed = JSON.parse(getBooks);
      setBooks([...Mock_Books, ...parsed]);
    } else {
      localStorage.setItem("Books", JSON.stringify(Mock_Books));
      setBooks(Mock_Books);
    }
  }, []);

  return (
    <div>
      {books.length === 0 ? (
        <EmptyBooks />
      ) : (
        <>
          <BookListContainer>
            <BookListTitle>
              Acervo ({books.length} {books.length === 1 ? " livro" : " livros"}
              )
            </BookListTitle>
          </BookListContainer>
          <CardsBooks>
            {books.map((book) => (
              <Card
                key={book.id}
                title={book.title}
                author={book.author}
                category={book.category}
                year={book.year}
                onClick={() => {
                  setSelectBook(book);
                  setOpenModal(true);
                }}
              />
            ))}
          </CardsBooks>
          {openModal && selectBook && (
            <Modal
              title={selectBook.title}
              author={selectBook.author}
              onClose={() => {
                setOpenModal(false);
                setSelectBook(null);
              }}
              onConfirm={handleConfirmBook}
            />
          )}
        </>
      )}
    </div>
  );
}
