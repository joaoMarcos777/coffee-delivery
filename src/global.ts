import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
   background : ${(props) => props.theme.white};
   color: ${(props) => props.theme.color};
   -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}
:focus {
    outline: 0;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.purple};
}
`
