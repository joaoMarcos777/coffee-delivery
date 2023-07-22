import { HeaderContainer } from './styles'
import coffeeLogo from '../../assets/coffee-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeLogo} alt="" />
      <nav>
        <div>
          <MapPin size={20} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>
        <NavLink to="/" title="Shopping Cart">
          <ShoppingCart size={20} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
