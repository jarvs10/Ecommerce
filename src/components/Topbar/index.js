import { TopbarWrapper, CartWrapper } from './styles'
import { IoCart } from "react-icons/io5";
import { useCart } from '../../contexts/CartContext';


const Topbar = () => {

  const { cart } = useCart();

  return (
    <TopbarWrapper>
        <div>
          <img width='180px' src="/logoapp2.png" alt="logo"/>
        </div>
        <CartWrapper>
        <div>
          <IoCart/>
        </div>
          <div>{cart.quanty}</div>
        </CartWrapper>
    </TopbarWrapper>
  )
}

export default Topbar