import styled, { keyframes, css } from 'styled-components';

const textIn = keyframes`
  from{
    transform: translateY(-100px);
    opacity: 0;
  }

  to{
    transform: translateY(0);
    opacity: 1;
  }
`;

const textOut = keyframes`
  from{
    transform: translateY(0px);
    opacity: 1;
  }

  to{
    transform: translateY(-100px);
    opacity: 0;
  }
`;

export const Container = styled.section`
  width: 100%;

  * {
    font-size: 1rem;
  }

  h2{
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkPurple};
  }

  h2:hover{
    color: ${({ theme }) => theme.colors.grayishPurple};
  }

  p{
    color: ${({ theme }) => theme.colors.grayishPurple};
    font-weight: 400;
  }

  button{
    border: none;
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & + &{
    margin-top: 16px;
    border-top: 1px solid #E8E8E8;
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 16px;

  h2{
    margin-right: 16px;
  }
`;

export const AccordionContent = styled.p`
   animation: ${textIn} 0.4s forwards;
   ${({ isLeaving }) => isLeaving && css`
      animation: ${textOut} 0.4s forwards;
   `}
`;
