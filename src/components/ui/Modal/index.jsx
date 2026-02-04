import { FiAlertTriangle } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import {
  BookContent,
  BookExclusionContent,
  ButtonContent,
  ButtonSpace,
  ClosedButton,
  ExclusionContainer,
  HeaderModal,
  IconAlert,
  ModalContainer,
  ModalContent,
  TitleHeader,
  TextAsk,
  TitleBook,
  BookInfo,
  ConfirmText,
} from "./styles";
import { Button } from "../Button";

export function Modal({ title, author }) {
  return (
    <ModalContent>
      <ModalContainer>
        <HeaderModal>
          <TitleHeader>Confirmar Exclusão</TitleHeader>
          <ClosedButton>
            <MdOutlineClose size={18} color="#6b7280" />
          </ClosedButton>
        </HeaderModal>
        <ExclusionContainer>
          <div>
            <IconAlert>
              <FiAlertTriangle />
            </IconAlert>
          </div>
          <BookExclusionContent>
            <TextAsk>Tem certeza que deseja excluir este livro?</TextAsk>
            <BookContent>
              <TitleBook>{title}</TitleBook>
              <BookInfo>
                <span>por </span> {author}
              </BookInfo>
            </BookContent>
            <ConfirmText>Esta ação não pode ser desfeita.</ConfirmText>
          </BookExclusionContent>
        </ExclusionContainer>
        <ButtonContent>
          <ButtonSpace>
            <Button
              colorFundo={"#dc2626"}
              text={"Confirmar Exclusão"}
              colorText={"#fff"}
            />
          </ButtonSpace>
          <ButtonSpace>
            <Button
              colorFundo={"#e5e7eb"}
              text={"Cancelar"}
              colorText={"#1f2937"}
            />
          </ButtonSpace>
        </ButtonContent>
      </ModalContainer>
    </ModalContent>
  );
}
