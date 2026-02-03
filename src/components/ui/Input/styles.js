import styled from "styled-components";


export const InputContainerWrapper = styled.div`
width:100%;
display: flex;
flex-direction: column;
gap: .75rem;
`


export const LabelContainer = styled.label`
 color: #364153;
 font-size: .875rem;
 font-weight: 500;
`;
export const SpanText = styled.span`
  color: #FB2C36;
`;
export const InputContainer = styled.div`
  padding: .75rem 1rem;
  border: .0625rem solid #d1d5db;
  border-radius:.5rem;
  outline: none;

`
export const InputContent = styled.input`
  border: none;
  outline: none;
  font-size:1rem;
  width: 100%;
   &::placeholder{
     color: #9ca3af ;
   }

`
