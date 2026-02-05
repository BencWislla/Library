import styled from "styled-components";

export const HeaderContent = styled.div`
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
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
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.5;
`;

export const ContentHeader = styled.div`
border: 1px solid blue;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center; `
