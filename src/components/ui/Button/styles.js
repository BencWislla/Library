import styled from 'styled-components'

//Cor botao vermelho #dc2626
//Cor botao cinza #9ca3af
//Cor botao azul #2563eb

export const ButtonContainer = styled.button`
background-Color: ${(props) => props.colorFundo};
color: ${(props => props.colorText)};
border-radius: .5rem;
padding: .75rem 1.5rem;
border: none;
font-weight: 500;
transition: all 200ms ease-in-out;
cursor: pointer;

&:disabled{
  opacity: 0.5;
  cursor: not-allowed;
}
&:hover:not(:disabled) {
      opacity:0.9;
    }
`;
