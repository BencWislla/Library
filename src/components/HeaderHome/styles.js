import styled from "styled-components";

export const HeaderContent = styled.div`
padding: 24px 24px;
background-color: #fff;
box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.18);
`;

export const TitleContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: .625rem;`

export const IconBook = styled.div`
background-color: #155DFC;
color: #fff;
border-radius:.625rem;
font-size: 16px;
padding: .5rem .5rem;
cursor: pointer;
svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.2);
  }
`;


export const TitleHeader = styled.h1`
color: black;
font-size: 1.875rem;
font-weight: bold;
`;

export const ContentHeader = styled.div`
border: 1px solid blue;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center; `
