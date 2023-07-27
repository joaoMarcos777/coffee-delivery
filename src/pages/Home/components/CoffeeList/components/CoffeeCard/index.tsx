import {
  Actions,
  ChangeQuantityWrapper,
  CoffeeCardContainer,
  ImageAndTag,
  Price,
  PriceAndActions,
  QuantityInput,
  ShoppingCartButton,
  TitleAndDescription,
} from './styles'
import traditionalEspresso from '../../../../../../assets/coffees/traditional-espresso.svg'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

export function CoffeeCard() {
  const [text, setText] = useState('1')

  return (
    <CoffeeCardContainer>
      <ImageAndTag>
        <img src={traditionalEspresso} alt="" />
        <span>Traditional</span>
      </ImageAndTag>

      <TitleAndDescription>
        <strong>Traditional Espresso</strong>
        <span>The traditional coffee made with hot water and ground beans</span>
      </TitleAndDescription>

      <PriceAndActions>
        <Price>
          <span>R$</span>
          <strong>9,90</strong>
        </Price>

        <Actions>
          <ChangeQuantityWrapper>
            <Minus size={15} weight="bold" />
            <QuantityInput
              type="number"
              placeholder="1"
              min={1}
              max={60}
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ width: `${text.length}ch` }}
            />
            <Plus size={15} weight="bold" />
          </ChangeQuantityWrapper>

          <ShoppingCartButton>
            <ShoppingCart size={20} weight="fill" />
          </ShoppingCartButton>
        </Actions>
      </PriceAndActions>
    </CoffeeCardContainer>
  )
}
