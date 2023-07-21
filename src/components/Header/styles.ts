import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  & div > div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    padding: 0.5rem;
    background: ${(props) => props.theme['purple-light']};
    border-radius: 8px;
  }

  & div > div:first-child svg {
    color: ${(props) => props.theme.purple};
  }

  & div > div:first-child span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['purple-dark']};
    line-height: 1.3;
  }

  & div div:last-child {
    padding: 0.5rem;
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 8px;
  }

  & div div:last-child > svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
