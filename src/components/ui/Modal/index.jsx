import { FiAlertTriangle } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import {
  BookContent,
  BookExclusionContent,
  ButtonContent,
  ClosedButton,
  ExclusionContainer,
  HeaderModal,
  IconAlert,
  ModalContainer,
  ModalContent,
  TitleHeader,
} from "./styles";
import { Button } from "../Button";

export function Modal({ title, author }) {
  return (
    <ModalContent>
      <ModalContainer>
        <HeaderModal>
          <TitleHeader>Confirmar Exclusão</TitleHeader>
          <ClosedButton>
            <MdOutlineClose />
          </ClosedButton>
        </HeaderModal>
        <ExclusionContainer>
          <div>
            <IconAlert>
              <FiAlertTriangle />
            </IconAlert>
          </div>
          <BookExclusionContent>
            <p>Tem certeza que deseja excluir este livro?</p>
            <BookContent>
              <p>{title}</p>
              <p>
                <span>por </span> {author}
              </p>
            </BookContent>
            <p>Esta ação não pode ser desfeita.</p>
          </BookExclusionContent>
        </ExclusionContainer>
        <ButtonContent>
          <Button
            colorFundo={"#dc2626"}
            text={"Confirmar Exclusão"}
            colorText={"#fff"}
          />
          <Button
            colorFundo={"#9ca3af"}
            text={"Cancelar"}
            colorText={"black"}
          />
        </ButtonContent>
      </ModalContainer>
    </ModalContent>
  );
}
