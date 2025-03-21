import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  border-bottom: 1px solid #6528d3;
  padding-block: 20px;
  margin-bottom: 80px;

  div > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav ul {
      display: flex;
      gap: 40px;
    }

    > div {
      display: flex;
      gap: 1rem;
      align-items: center;
    
    }

    > div a:first-child {
      background-color: #6528d3;
      padding: 1rem 2rem;
      border-radius: 4px;
    }
  }
`;
