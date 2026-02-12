import styled from "styled-components";

export const HeaderContent = styled.div`
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  `;

export const ContentHeader = styled.div`
  max-width:80rem;
  margin-left:auto;
  margin-right:auto;
  padding: 1.5rem;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
   `;

export const TitleContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 0.75rem;
`

export const IconBook = styled.div`
background-color: #2563eb;
border-radius:.5rem;
padding: .5rem;
border: none;
cursor: pointer;
display: flex;
align-items: center;
 transition: background-color 200ms, transform 200ms;

 &:hover{
  background-color: #1d4ed8;
 }
  &:hover svg{
    transform: scale(1.1);

  }
`;


export const TitleHeader = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.5;
`;

