import { PiTrash } from "react-icons/pi";
import {
  AboutTheBook,
  BookDeatail,
  BookDetails,
  CardContainer,
  CardContent,
  DeleteButton,
  TitleStyles,
} from "./styles";

export function Card({ title, author, category, year, onClick }) {
  return (
    <CardContainer>
      <CardContent>
        <TitleStyles>{title}</TitleStyles>
        <DeleteButton onClick={onClick}>
          <PiTrash size={20} />
        </DeleteButton>
      </CardContent>
      <BookDetails>
        <BookDeatail>
          <AboutTheBook>Autor: </AboutTheBook> {author}
        </BookDeatail>
        <BookDeatail>
          <AboutTheBook>Categoria: </AboutTheBook> {category}
        </BookDeatail>
        <BookDeatail>
          <AboutTheBook>Ano: </AboutTheBook> {year}
        </BookDeatail>
      </BookDetails>
    </CardContainer>
  );
}
