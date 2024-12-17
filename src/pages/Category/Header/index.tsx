import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import { RootReducer } from '../../../store'
import { open } from '../../../store/reducers/cart'
import { Title, Header, HList } from './styles'

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
          <Link title={`Ir para a página inicial`} to="/">
            Restaurantes
          </Link>
        </li>
        <li>
          <HashLink title={`eFood`} to="/">
            <Title>eFood</Title>
          </HashLink>
        </li>
        <a title={`Clique para abrir o carrinho`} onClick={openCart}>
          {cartItems.length} produto(s) no carrinho
        </a>
      </HList>
    </Header>
  )
}

export default Top
