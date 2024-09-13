import { useDispatch, useSelector } from 'react-redux'
import { Click } from '../../pages/Home/Products/styles'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  ProductImage,
  Product
} from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

export type Props = {
  capa: string
}

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulator, currentValue) => {
      return (acumulator = currentValue.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <Product key={item.id}>
              <ProductImage key={item.id}>
                <img src={item.foto} />
              </ProductImage>
              <div>
                <h3>{item.nome}</h3>
                <span>R$ {item.preco}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </Product>
          ))}
        </ul>

        <Prices>
          Valor total <span>{getTotalPrice()}</span>
        </Prices>
        <Click title="Clique aqui para continuar" type="button">
          Continuar para a entrega
        </Click>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
