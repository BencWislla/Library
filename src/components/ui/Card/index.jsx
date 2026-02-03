import { PiTrash } from "react-icons/pi";
import {
  AboutTheBook,
  BookDetails,
  CardContainer,
  CardContent,
  DeleteButton,
  TitleStyles,
} from "./styles";

export function Card({ title, author, category, year }) {
  return (
    <CardContainer>
      <CardContent>
        <TitleStyles>{title}</TitleStyles>
        <DeleteButton>
          <PiTrash />
        </DeleteButton>
      </CardContent>
      <BookDetails>
        <p>
          <AboutTheBook>Autor: </AboutTheBook> {author}
        </p>
        <p>
          <AboutTheBook>Categoria: </AboutTheBook> {category}
        </p>
        <p>
          <AboutTheBook>Ano: </AboutTheBook> {year}
        </p>
      </BookDetails>
    </CardContainer>
  );
}
