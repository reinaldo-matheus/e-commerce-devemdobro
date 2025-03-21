import styled from "styled-components"

export const Card = styled.div`
  > div {
    background-color: #130234;

    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p:nth-child(3) {
      align-self: flex-end;
      color: #6bb27c;
    }

    button {
      width: 100%;
      background-color: #6528d3;
      padding-block: 1rem;
      color: white;
    }
  }
`;