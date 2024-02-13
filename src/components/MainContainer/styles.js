import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 500px;
  padding: 24px 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  margin: 5rem auto 3rem auto;
  transition: height 2s ease-in;

  @media (max-width: 375px){
    margin: 4rem 12px 2rem 12px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 24px;
  width: 100%;

  img{
    margin-right: 8px;
  }

  h1{
    font-size: 3rem;
    font-weight: 700;
  }
`;
