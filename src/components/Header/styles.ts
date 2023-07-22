import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 10rem;

  & nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  & nav > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    padding: 0.5rem;
    background: ${(props) => props.theme['purple-light']};
    border-radius: 8px;
  }

  & nav > div svg {
    color: ${(props) => props.theme.purple};
  }

  & nav > div span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['purple-dark']};
    line-height: 1.3;
  }

  & nav a {
    padding: 0.5rem;
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 8px;
  }

  & nav a > svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
