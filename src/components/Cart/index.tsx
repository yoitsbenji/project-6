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
import Checkout from '../../pages/Category/Checkout'
import { useState } from 'react'
import { Pay } from '../../pages/Category/Payment'

const Cart = () => {
  const { isOpen, cartItems } = useSelector((state: RootReducer) => state.cart)

  const [cart, setCart] = useState(true)
  const [deliveryAdress, setDeliveryAddress] = useState(false)
  const [payment, setPayment] = useState(false)

  const dispatch = useDispatch()

  console.log('verificando:', cartItems)

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const priceFormat = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getTotalPrice = () => {
    return cartItems.reduce((acumulator, currentValue) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (acumulator += currentValue.preco!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {cart ? (
          <>
            <ul>
              {cartItems.map((item) => (
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
              Valor total <span>{priceFormat(getTotalPrice())}</span>
            </Prices>
            <Click
              onClick={() => {
                setDeliveryAddress(true)
                setCart(false)
              }}
              title="Clique aqui para continuar"
              type="button"
            >
              Continuar para a entrega
            </Click>
          </>
        ) : (
          ''
        )}
        {deliveryAdress ? (
          <>
            <Checkout />
            <Click
              onClick={() => {
                setCart(true)
                setPayment(false)
                setDeliveryAddress(false)
              }}
            >
              Voltar para o carrinho
            </Click>
            <Click
              onClick={() => {
                setPayment(true)
                setDeliveryAddress(false)
              }}
            >
              Continuar com o pagamento
            </Click>
          </>
        ) : (
          ''
        )}
        {payment ? (
          <>
            <Pay />
            <Click
              onClick={() => {
                setDeliveryAddress(true)
                setPayment(false)
              }}
            >
              Voltar edição de endereço
            </Click>
            <Click>Finalizar pagamento</Click>
          </>
        ) : (
          ''
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
