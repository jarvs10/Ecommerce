import React from 'react'
import { currencyFormat } from '../../utils/CurrencyFormat'
import { ProductWrapper } from './styles'

export const Product = ({ id, name, precio, img }) => {

  return (
    <ProductWrapper>
      <img src={img} alt={name} width='50px' />
      <h2>{name}</h2>
      <h3>{ currencyFormat(precio) } </h3>
      <button type="button">Agregar</button>
    </ProductWrapper>
  )
}
