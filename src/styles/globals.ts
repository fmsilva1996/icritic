import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Jost', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  main {
    height: 100vh;
    background-color: #f7f8fd;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  a, a:hover, a:focus, a:active  {
    text-decoration: none;
    color: inherit;
  }
`
