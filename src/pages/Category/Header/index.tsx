import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../../store/reducers/cart'
import { Title, Header, HList } from './styles'
import { RootReducer } from '../../../store'

const Top = () => {
  const dispath = useDispatch()
  const { cartItems } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispath(open())
  }

  return (
    <Header>
      <HList>
        <li>
          <Link to="/">Restaurantes</Link>
        </li>
        <li>
          <Title href="#">e-Shop</Title>
        </li>
        <a onClick={openCart}>{cartItems.length} produto(s) no carrinho</a>
      </HList>
    </Header>
  )
}

export default Top
