import { CoffeeCard } from './components/CoffeeCard'
import { CoffeeListContainer, List } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <strong>Our coffees</strong>
      <List>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </List>
    </CoffeeListContainer>
  )
}
