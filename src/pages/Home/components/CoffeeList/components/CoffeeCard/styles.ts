import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background: ${({ theme }) => theme['base-card']};
  max-width: 16rem;
  border-radius: 8px 50px;
  margin-bottom: 1rem;
`

export const ImageAndTag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 6.25rem;
    height: 6.25rem;
    margin-top: -1.25rem;
  }

  span {
    background: ${({ theme }) => theme['yellow-light']};
    color: ${({ theme }) => theme['yellow-dark']};
    padding: 0.25rem 0.5rem;
    border-radius: 8px;
    font-size: 0.625rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    line-height: 1.3;
    text-transform: uppercase;

    margin-top: 0.75rem;
  }
`

export const TitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong,
  span {
    margin: 0 1rem;
  }

  strong {
    font-family: 'Baloo2', sans-serif;
    font-size: 1.25rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-subtitle']};
    text-align: center;

    margin-top: 1rem;
  }

  span {
    text-align: center;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-label']};

    margin-top: 0.5rem;
  }
`

export const PriceAndActions = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  margin: 1.5rem 0;
  gap: 1.5rem;

  span,
  strong {
    color: ${({ theme }) => theme['base-text']};
    line-height: 1.3;
  }

  span {
    font-size: 0.875rem;
    margin-top: 0.15rem;
  }

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
  }
`

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.purple};
  }
`

export const ChangeQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme['base-button']};
  padding: 0.75rem 0.5rem;
  border-radius: 8px;
  gap: 0.25rem;
`

export const QuantityInput = styled.input`
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme['base-title']};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const ShoppingCartButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  text-align: center;
  border: 0;
  background: ${({ theme }) => theme['purple-dark']};
  border-radius: 8px;

  svg {
    color: ${({ theme }) => theme.white} !important;
  }
`
