import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { RootReducer } from '../../store'
import { parseToBrl } from '../../utils'
import { close, remove } from '../../store/reducers/cart'
import Checkout from '../../pages/Checkout'

import { Click } from '../../pages/Home/Products/styles'

import * as S from './styles'

const Cart = () => {
  const { isOpen, cartItems } = useSelector((state: RootReducer) => state.cart)

  const [finishPurchase, setFinishPurchase] = useState(true)

  const dispatch = useDispatch()

  console.log('verificando:', cartItems)

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return cartItems.reduce((acumulator, currentValue) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (acumulator += currentValue.preco!)
    }, 0)
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {finishPurchase ? (
          <>
            <ul>
              {cartItems.map((item) => (
                <S.Product key={item.id}>
                  <S.ProductImage key={item.id}>
                    <img src={item.foto} />
                  </S.ProductImage>
                  <div>
                    <h3>{item.nome}</h3>
                    <span>R$ {item.preco}</span>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id)} />
                </S.Product>
              ))}
            </ul>

            <S.Prices>
              Valor total <span>{parseToBrl(getTotalPrice())}</span>
            </S.Prices>
            <Click
              onClick={() => setFinishPurchase(false)}
              title="Clique aqui para continuar"
              type="button"
            >
              Continuar para a entrega
            </Click>
          </>
        ) : (
          <>
            <Checkout />
            <Click onClick={() => setFinishPurchase(true)}>
              Voltar para o carrinho
            </Click>
          </>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
