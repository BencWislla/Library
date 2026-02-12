import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem 1.5rem;
`;
export const FormRegisterContainer = styled.div`
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  padding: 2rem;
`

export const FormContent = styled.form`
display: flex;
flex-direction: column;
gap: 1.5rem;
`;

export const ButtonContent = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 1rem;
padding-top: 1rem;
`
export const ErrorText = styled.p`
color: red;
font-size: 14px;
background-color: rgba(248, 215, 217, 0.42);
padding: 10px;
border-radius: 10px;
text-align: center;
`
