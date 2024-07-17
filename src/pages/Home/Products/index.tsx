import { Link } from 'react-router-dom'

import Tag from '../../../components/Tags'
import Star from '../../../assets/images/star.png'
import {
  Card,
  Click,
  Description,
  Image,
  Rating,
  RatingNote,
  TagPosition,
  Title
} from './styles'

import { Comida, CoverImg } from '..'

export type Props = {
  titulo: string
  tipo: string
  avaliacao: string
  descricao: string
  item: Comida[]
  foto: CoverImg[]
}

const Product = ({ avaliacao, descricao, titulo, foto, tipo }: Props) => {
  return (
    <Card>
      <Image src={foto} />
      <RatingNote>{avaliacao}</RatingNote>
      <TagPosition>
        <Tag key={tipo}>{tipo}</Tag>
      </TagPosition>
      <Rating src={Star} alt="Avaliação" />
      <Title>{titulo}</Title>
      <Description>{descricao}</Description>
      <Link to="/categories">
        <Click type="submit">Saiba mais</Click>
      </Link>
    </Card>
  )
}

export default Product
