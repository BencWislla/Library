import { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { ButtonSpace } from "../ui/Modal/styles";
import {
  ButtonContent,
  ErrorText,
  FormContainer,
  FormContent,
  FormRegisterContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";

const inputInfo = [
  {
    id: 1,
    name: "title",
    text: "Título do Livro ",
    placeholder: "Ex: Dom Casmurro",
  },
  {
    id: 2,
    name: "author",
    text: "Autor ",
    placeholder: "Ex: Machado de Assis",
  },
  {
    id: 3,
    name: "category",
    text: "Categoria ",
    placeholder: "Ex: Romance, Ficção, Historía",
  },
  { id: 4, name: "year", text: "Ano de Publicação", placeholder: "Ex: 1899" },
];

export function FormRegisterBooks() {
  const [formValue, setFormValues] = useState({
    title: "",
    author: "",
    category: "",
    year: "",
  });
  // 1 passo - criar o fluxo do estado do erro:
  // 1.1 passo - O botao salvar livros me tras a validaçao do fomulario
  // 1.2 passo - para a validaçao do formulario a function ira tratar cada erro:
  // 1 erro: recebo uma string vazia que vem do meu estado FormValue e assim tenho que retornar a frase de erro "O autor e obrigatorio"
  // 2 erro: recebo um numero incompleto do meu formValue.year  e que ira causar um erro "O numero precisa ter 4 digitos"
  // 2 passo - Se tiver o erro
  // 2.1 passo -
  // PASSO A PASSO ALTERNATIVO
  // 1 passo - O meu estado de erro ira receber uma string
  // 2 passo - o botao sera resposavel em confirmar se o meu form esta preenchido ou nao, se nao tiver preeenchido ele mostra a frase de erro se nao guardo no localstorge

  const [error, setError] = useState("");

  function handleInputChange(e) {
    const value = e.target.value;
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
  }

  function validateFormAndSave(e) {
    e.preventDefault();
    const arrayValues = Object.values(formValue);

    if (arrayValues.some((value) => value === "")) {
      setError("Formulario incompleto! Preencha correctamente os dados.");
    } else {
      localStorage.setItem("Form", JSON.stringify(formValue));
      setError("");
    }
  }

  const navigate = useNavigate();

  function cancelForm(e) {
    e.preventDefault();
    setFormValues({
      title: "",
      author: "",
      category: "",
      year: "",
    });
    navigate("/");
  }

  return (
    <FormContainer>
      <FormRegisterContainer>
        <FormContent>
          {inputInfo.map((input) => (
            <Input
              name={input.name}
              key={input.id}
              text={input.text}
              placeholder={input.placeholder}
              value={formValue[input.name]}
              onChange={(e) => handleInputChange(e)}
            />
          ))}
          {error && <ErrorText>{error}</ErrorText>}
          <ButtonContent>
            <ButtonSpace>
              <Button
                onClick={validateFormAndSave}
                text={"Salvar Livro"}
                colorFundo={"#2563eb"}
                colorText={"#ffff"}
              />
            </ButtonSpace>
            <ButtonSpace>
              <Button
                onClick={cancelForm}
                text={"Cancelar"}
                colorFundo={"#e5e7eb"}
                colorText={"#1f2937"}
              />
            </ButtonSpace>
          </ButtonContent>
        </FormContent>
      </FormRegisterContainer>
    </FormContainer>
  );
}
