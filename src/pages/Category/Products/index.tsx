import { useState } from 'react'
import exit from '../../../assets/images/x.png'
import Tag from '../../../components/Tags'
import {
  Box,
  Card,
  Click,
  Description,
  Exit,
  Image,
  Modal,
  ModalContent,
  TagPosition,
  Text,
  Title
} from './styles'
import { Cardapio } from '../../Home'
import { useDispatch } from 'react-redux'
import { add, open } from '../../../store/reducers/cart'

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
      <Card>
        <Image src={foto} alt={titulo} />
        <TagPosition>
          <Tag key={tipo}>{tipo}</Tag>
        </TagPosition>
        <Title>{titulo}</Title>
        <Description>{getDescricao(descricao)}</Description>
        <Click type="button" onClick={() => setModalIsOpen(true)}>
          Ver mais
        </Click>
      </Card>
      <Modal className={modalIsOpen ? 'visible' : ''}>
        <ModalContent>
          <Box>
            <img src={foto} alt={titulo} />
          </Box>
          <Text>
            <h4>{titulo}</h4>
            <p>{descricao}</p>
            <p>Serve de {porcao}</p>
            <Click onClick={addToCart}>
              Adicionar ao carrinho - R$ {preco + '0'}
            </Click>
          </Text>
          <Exit>
            <img
              src={exit}
              alt="Click to exit"
              onClick={() => setModalIsOpen(false)}
            />
          </Exit>
        </ModalContent>
        <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
      </Modal>
    </>
  )
}

export default Product
