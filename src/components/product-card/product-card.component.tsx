import React from 'react'
import { Product } from '../../models/product.model'
import { addItemToCart } from '../../store/cart/cart.slice'
import { useAppDispatch } from '../../store/hooks'
import Button from '../buttons/button/button.component'
import * as Styled from './product-card.styles'

type ProductCardProps = {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
  const { name, imageUrl, price } = product
  const dispatch = useAppDispatch()

  const addProductToCart = () => {
    dispatch(addItemToCart(product))
  }
  return (
    <Styled.ProductCardContainer>
      <Styled.ProductCardImage
        alt={name}
        src={imageUrl}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = '/image-failed.jpg'
        }}
      />
      <Styled.Footer>
        <Styled.Name>{name}</Styled.Name>
        <Styled.Price>{`$${price}`}</Styled.Price>
      </Styled.Footer>
      <Button onClick={addProductToCart} inverted={true}>
        Add to Cart
      </Button>
    </Styled.ProductCardContainer>
  )
}

export default ProductCard
