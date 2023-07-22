import {
  BannerBackgroundContainer,
  BannerContainer,
  BannerItems,
  BannerTitle,
  CartItem,
  CoffeeItem,
  PackageItem,
  TimerItem,
} from './styles'

import bannerImage from '../../../../assets/banner-image.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Banner() {
  return (
    <BannerBackgroundContainer>
      <BannerContainer>
        <BannerTitle>
          <strong>Find the perfect coffee to any hour of the day</strong>
          <span>
            With the Coffee Delivery you get your coffee wherever you are, any
            time
          </span>
        </BannerTitle>
        <BannerItems>
          <div>
            <CartItem>
              <div>
                <ShoppingCart size={20} weight="fill" />
              </div>
              <span>Simple and safe purchase</span>
            </CartItem>
            <TimerItem>
              <div>
                <Timer size={20} weight="fill" />
              </div>
              <span>Fast and tracked delivery</span>
            </TimerItem>
          </div>
          <div>
            <PackageItem>
              <div>
                <Package size={20} weight="fill" />
              </div>
              <span>Packaging keeps the coffee intact</span>
            </PackageItem>

            <CoffeeItem>
              <div>
                <Coffee size={20} weight="fill" />
              </div>
              <span>The coffee arrives fresh to you</span>
            </CoffeeItem>
          </div>
        </BannerItems>
      </BannerContainer>
      <img src={bannerImage} alt="" />
    </BannerBackgroundContainer>
  )
}
