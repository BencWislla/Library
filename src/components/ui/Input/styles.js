import styled from "styled-components";


export const InputContainerWrapper = styled.div`
width:100%;
display: flex;
flex-direction: column;
gap: .5rem;
`


export const LabelContainer = styled.label`
 color: #374151;
 font-size: .875rem;
 font-weight: 500;
 line-height: 1.5;
`;
export const SpanText = styled.span`
  color: #FB2C36;
  margin-left: 0.25rem;
`;
export const InputContainer = styled.div`
  padding: .75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius:.5rem;
  outline: none;
  &:focus-within{
  border-color:  #2563eb;
  box-shadow: 0 0 0 2px #bfdbfe;
  }
  `
export const InputContent = styled.input`
  border: none;
  outline: none;
  width: 100%;
  line-height: 1.5;
  font-weight: 400;
  &::placeholder{
    color: #9ca3af ;
  }

`
