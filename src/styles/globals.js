import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  body {
    background-color: black;
    color: white;
  }
`

export const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem;
`
