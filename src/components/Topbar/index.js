import React from 'react'
import { TopbarWrapper, CartWrapper } from './styles'
import { IoCart } from "react-icons/io5";

const Topbar = () => {
  return (
    <TopbarWrapper>
        <div>
          <img width='50px' src="logoApp.png" alt="logo"/>
        </div>
        <CartWrapper>
          <IoCart/>
        </CartWrapper>
    </TopbarWrapper>
  )
}

export default Topbar