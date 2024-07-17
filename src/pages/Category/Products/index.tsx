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

import pizza from '../../../assets/images/pizza.png'

import { Props } from '../../Home/Products'

const Product = ({ descricao, titulo, tipo, foto }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <>
      <Card>
        <Image src={foto} alt={titulo} />
        <TagPosition>
          <Tag key={tipo}>{tipo}</Tag>
        </TagPosition>
        <Title>{titulo}</Title>
        <Description>{descricao}</Description>
        <Link to="/categories">
          <Click type="button" onClick={() => setModalIsOpen(true)}>
            Adicionar ao Carrinho
          </Click>
        </Link>
      </Card>
      <Modal className={modalIsOpen ? 'visible' : ''}>
        <ModalContent>
          <img src={pizza} alt="Pizza Marguerita" />
          <Text>
            <h4>Pizza Marguerita</h4>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
            </p>
            <p>Serve: de 2 a 3 pessoas</p>
            <Click>Adicionar ao carrinho - R$ 60,90</Click>
          </Text>
        </ModalContent>
        <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
      </Modal>
    </>
  )
}

export default Product
