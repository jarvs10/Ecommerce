import React from 'react'
import { IoHome, IoCart, IoPerson } from 'react-icons/io5';
import ItemMenu from './ItemMenu';
import { MenuWrapper } from './styles';

const MenuOptions = [
  {
    icon: IoHome,
    label: 'Inicio',
    path: '/'
  },
  {
    icon: IoCart,
    label: 'Carrito',
    path: '/'
  },
  {
    icon: IoPerson,
    label: 'Usuario',
    path: '/'
  }
];

const Menu = () => {
  return (
    <MenuWrapper>
    {
      MenuOptions.map((item, i) =>
        <ItemMenu 
          key={i}
          label={item.label}
          icon={item.icon}
          path={item.path}
        />
      )  
    }
    </MenuWrapper>
  )
}

export default Menu