import { Link } from 'react-router-dom'

import Tag from '../../../components/Tags'
import Star from '../../../assets/images/star.png'
import { Card, Description, Image, Rating, TagPosition, Title } from './styles'

import { Comida } from '..'
import { Click } from '../../Category/Products/styles'

export type Props = {
  item: Comida[]
  titulo: string
  tipo: string
  avaliacao: string
  foto: string
  descricao: string
  preco?: number
  porcao?: string
  id: number
}

const Product = ({ avaliacao, descricao, titulo, tipo, foto, id }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 195) {
      return descricao.slice(0, 195) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <Image src={foto} alt={titulo} />
      <TagPosition>
        <Tag key={tipo}>{tipo}</Tag>
      </TagPosition>
      <Title>
        {titulo}
        <div>
          <Rating src={Star} alt="Avaliação" />
          <h3>{avaliacao}</h3>
        </div>
      </Title>
      <Description>{getDescricao(descricao)}</Description>
      <Link to={`/categories/${id}`}>
        <Click type="button">Saiba mais</Click>
      </Link>
    </Card>
  )
}

export default Product
