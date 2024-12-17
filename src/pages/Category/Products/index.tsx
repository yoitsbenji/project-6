import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, open } from '../../../store/reducers/cart'
import Tag from '../../../components/Tags'
import exit from '../../../assets/images/x.png'
import * as S from './styles'

export type Props = {
  item: Cardapio
  titulo?: string
  capa?: string
  tipo: string
  foto: string
  descricao: string
  preco?: number
  porcao?: string
}

const Product = ({
  descricao,
  titulo,
  tipo,
  foto,
  preco,
  porcao,
  item
}: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(item))
    dispatch(open())
  }

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const getDescricao = (descricao: string) => {
    if (descricao.length > 160) {
      return descricao.slice(0, 160) + '...'
    }
    return descricao
  }

  return (
    <>
      <S.Card>
        <S.Image src={foto} alt={titulo} />
        <S.TagPosition>
          <Tag key={tipo}>{tipo}</Tag>
        </S.TagPosition>
        <S.Title>{titulo}</S.Title>
        <S.Description>{getDescricao(descricao)}</S.Description>
        <S.Click
          title={`Clique aqui para ver mais sobre o prato ${titulo}`}
          type="button"
          onClick={() => setModalIsOpen(true)}
        >
          Ver mais
        </S.Click>
      </S.Card>
      <S.Modal className={modalIsOpen ? 'visible' : ''}>
        <S.ModalContent>
          <S.Box>
            <img src={foto} alt={titulo} />
          </S.Box>
          <S.Text>
            <h4>{titulo}</h4>
            <p>{descricao}</p>
            <p>Serve de {porcao}</p>
            <S.Click
              title={`Clique para adicionar ao carrinho`}
              onClick={addToCart}
            >
              Adicionar ao carrinho - R$ {preco + '0'}
            </S.Click>
          </S.Text>
          <S.Exit>
            <img
              src={exit}
              alt="Click to exit"
              onClick={() => setModalIsOpen(false)}
            />
          </S.Exit>
        </S.ModalContent>
        <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
      </S.Modal>
    </>
  )
}

export default Product
