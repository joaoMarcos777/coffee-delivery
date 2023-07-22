import styled from 'styled-components'
import bannerBackground from '../../../../assets/banner-background.svg'

export const BannerBackgroundContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 2rem 10rem;
  margin-top: 3.875rem;

  background: url(${bannerBackground}) no-repeat center;
  box-shadow:
    0 16px 8px -8px ${({ theme }) => theme.background} inset,
    0 -16px 8px -8px ${({ theme }) => theme.background} inset;
`

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const BannerTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  max-width: 36rem;

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    margin-top: 1rem;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const BannerItems = styled.div`
  margin-top: 3.5rem;
  display: flex;
  gap: 2.5rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
`

const BaseItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  & > div {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 50%;
    color: ${({ theme }) => theme.white};
  }

  & > span {
    font-size: 1rem;
    color: ${({ theme }) => theme['base-text']};
    line-height: 1.3;
  }
`

export const CartItem = styled(BaseItem)`
  & > div {
    background: ${({ theme }) => theme['yellow-dark']};
  }
`

export const PackageItem = styled(BaseItem)`
  & > div {
    background: ${({ theme }) => theme['base-text']};
  }
`

export const TimerItem = styled(BaseItem)`
  & > div {
    background: ${({ theme }) => theme.yellow};
  }
`

export const CoffeeItem = styled(BaseItem)`
  & > div {
    background: ${({ theme }) => theme.purple};
  }
`
