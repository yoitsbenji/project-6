import { Link } from 'react-router-dom'
import { useState } from 'react'

import Tag from '../../../components/Tags'
import {
  Card,
  Click,
  Description,
  Image,
  Modal,
  ModalContent,
  TagPosition,
  Text,
  Title
} from './styles'
import { Comida } from '../../Home'

export type Props = {
  item: Comida[]
  titulo?: string
  tipo: string
  capa?: string
  foto: string
  descricao: string
  preco?: number
  porcao?: string
}

const Product = ({ descricao, titulo, tipo, foto, preco, porcao }: Props) => {
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
        <Link to="/categories">
          <Click type="button" onClick={() => setModalIsOpen(true)}>
            Adicionar ao Carrinho
          </Click>
        </Link>
      </Card>
      <Modal className={modalIsOpen ? 'visible' : ''}>
        <ModalContent>
          <img src={foto} alt={titulo} />
          <Text>
            <h4>{titulo}</h4>
            <p>{descricao}</p>
            <p>{porcao}</p>
            <Click>Adicionar ao carrinho - R$ {preco}</Click>
          </Text>
        </ModalContent>
        <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
      </Modal>
    </>
  )
}

export default Product
