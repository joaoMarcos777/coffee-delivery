import { HeaderContainer } from './styles'
import coffeeLogo from '../../assets/coffee-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeLogo} alt="" />
      <div>
        <div>
          <MapPin size={20} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>
        <div>
          <ShoppingCart size={20} weight="fill" />
        </div>
      </div>
    </HeaderContainer>
  )
}
