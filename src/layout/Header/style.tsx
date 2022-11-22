import styled, { css } from 'styled-components';

export const ButtonFilter = styled.button`
  border: none;
  background-color: transparent;
  svg {
    width: 30px;
    height: 30px;  
    
    path {
      fill: grey;
    }
  }

  ${({ active }: { active?: boolean }) => {
    return (
      active &&
      css`
        svg {
          path {
            fill: #D75A4A;
          }
        }        
      `
    );
  }}
`;