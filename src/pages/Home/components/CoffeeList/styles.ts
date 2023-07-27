import styled from 'styled-components'

export const CoffeeListContainer = styled.main`
  margin-top: 2rem;
  max-width: 70rem;
  margin: 0 auto;
  margin-top: 6rem;

  strong {
    font-family: 'Baloo2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const List = styled.div`
  margin-top: 3.375rem;

  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`
