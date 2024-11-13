import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, open } from '../../../store/reducers/cart'
import Tag from '../../../components/Tags'
import { Menu } from '../../Home'
import exit from '../../../assets/images/x.png'
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

export type Props = {
  item: Menu
  title?: string
  cover?: string
  type: string
  image: string
  description: string
  price?: number
  portion?: string
}

const Product = ({
  description,
  title,
  type,
  image,
  price,
  portion,
  item
}: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(item))
    dispatch(open())
  }

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const getDescription = (description: string) => {
    if (description.length > 160) {
      return description.slice(0, 160) + '...'
    }
    return description
  }

  return (
    <>
      <Card>
        <Image src={image} alt={title} />
        <TagPosition>
          <Tag key={type}>{type}</Tag>
        </TagPosition>
        <Title>{title}</Title>
        <Description>{getDescription(description)}</Description>
        <Click type="button" onClick={() => setModalIsOpen(true)}>
          Ver mais
        </Click>
      </Card>
      <Modal className={modalIsOpen ? 'visible' : ''}>
        <ModalContent>
          <Box>
            <img src={image} alt={title} />
          </Box>
          <Text>
            <h4>{title}</h4>
            <p>{description}</p>
            <p>Serve de {portion}</p>
            <Click onClick={addToCart}>
              Adicionar ao carrinho - R$ {price + '0'}
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
