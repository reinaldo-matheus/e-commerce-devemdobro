import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  margin-top: 5rem;
  padding: 3rem;
  background-color: #130234;

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  nav {
    align-self: flex-start;
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-size: 20px;
    padding: 0.5rem;
  }

  li {
    font-size: 16px;
    color: #6528d3;
    padding: 16px;
  }

  p {
    font-size: 16px;
    padding: 10px;
    color: #6528d3;
  }
`;
