import styled from "styled-components";



export const CardContainer = styled.div`
 background-color: #fff;
 border-radius: 0.5rem;
 border: 1px solid #e5e7eb;
 padding: 1.5rem;
 transition: all 200ms ease-in;
 max-width: 600px;
 &:hover{
 box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)}

`;

export const CardContent = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content:space-between;
`;

export const TitleStyles = styled.h3`
 font-size: 1.125rem;
 color: #111827;
 font-weight: 600;
 line-height: 1.5;
`;

export const DeleteButton = styled.button`
padding: .5rem;
color: #dc2626;
background-color: transparent;
border: none;
cursor: pointer;
border-radius: 0.5rem;
transition: all 0.2s ease-in-out;
display: flex;
align-items: center;
justify-content: center;

&:hover{
  background-color: #fef2f2;
}
`;

export const BookDetails = styled.div`
color: #4b5563;
font-size:.875rem;
display: flex;
flex-direction: column;
gap: 0.25rem;
`;
export const BookDeatail = styled.p`
line-height:1.5;`

export const AboutTheBook = styled.span`
 font-weight: 600;
`


