import React from 'react'
import { ItemMenuWrapper } from './styles'

const ItemMenu = ({ icon:Icon, label, path }) => {
  return (
    <ItemMenuWrapper>
        <Icon />
        <p>{label}</p>
    </ItemMenuWrapper>
  )
}

export default ItemMenu