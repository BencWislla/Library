import styled from "styled-components";

export const ModalContent = styled.div`
z-index: 1000;
position: fixed;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
backdrop-filter: blur(2px);
background-color: rgba(0,0,0,0.1);
`;
export const ModalContainer = styled.div`
background-color: #fff;
padding: 1.5rem;
box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
width: 100%;
max-width: 28rem;
border-radius: 0.75rem;
display: flex;
flex-direction: column;
gap: 1rem;
`;

export const HeaderModal = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

`;

export const TitleHeader = styled.h2`
color:#101828;
font-size: 1.25rem;
font-weight: 600;
`;

export const ClosedButton = styled.button`
padding: 0.25rem;
background-color: transparent;
border: none;
border-radius:0.5rem;
transition:all 200ms ease-in-out;
cursor: pointer;
display: inline-flex;
align-items: center;
justify-content: center;
&:hover{
  background-color: #f3f4f6;
}

`;

export const IconAlert = styled.div`
background-color: #f7c7c7;
color: #dc2626;
padding: 12px 12px;
border-radius: 50px;
font-size: 20px;
display: flex;
align-items: center;
`;

export const ExclusionContainer = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
`;

export const BookExclusionContent = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;
width: 100%;
`;

export const TextAsk = styled.p`
font-size:16px;
color:#374151;
`;
export const TitleBook = styled.p`
font-size:14px;
color:#111827;
font-weight: 600;
`
export const BookInfo = styled.p`
font-size: 14px;
color:#4B5563;
`
export const ConfirmText = styled.p`
font-size:14px;
color: #6B7280;
`

export const BookContent = styled.div`
border-radius:10px;
padding: 0.75rem;
display: flex;
flex-direction: column;
gap: 0.25rem;
background-color: #56555511;

`;

export const ButtonContent = styled.div`
width:100%;
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const ButtonSpace = styled.div`
display: flex;
width: 49%;
`;
