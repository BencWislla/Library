import styled from "styled-components";



export const CardContainer = styled.div`
 background-color: #fff;
 border-radius: .625rem;
 border: 1px solid #e5e7eb;
 padding: 1.5rem 1.5rem ;
 width: 100%;
 height: 100%;
 &:hover{
 box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)}

`;

export const CardContent = styled.div`
display: flex;
flex-direction: row;
justify-content:space-between;
`;

export const TitleStyles = styled.h3`
 font-size: 1.125rem;
 color: #111827;
 font-weight: 600;
`;

export const DeleteButton = styled.button`
padding: 0.5rem 0.5rem;
color: #dc2626;
border: none;
cursor: pointer;
font-size: 1.125rem;
border-radius: 0.5rem;
background-color: transparent;
transition: all 0.2s ease-in-out;
display: flex;
align-items: center;
justify-content: center;

&:hover{
  background-color: #fef2f2;
}
`;

export const BookDetails = styled.div`
color: #4A5565;
font-size:14px;
`;

export const AboutTheBook = styled.span`
 font-weight: 500;
`


