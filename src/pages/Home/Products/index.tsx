import { Link } from 'react-router-dom'

import { Food } from '..'
import Tag from '../../../components/Tags'
import Star from '../../../assets/images/star.png'

import { Card, Description, Image, Rating, TagPosition, Title } from './styles'
import { Click } from '../../Category/Products/styles'

export type Props = {
  item: Food[]
  title: string
  type: string
  score: string
  image: string
  description: string
  price?: number
  portion?: string
  id: number
}

const Product = ({ score, description, title, type, image, id }: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 195) {
      return description.slice(0, 195) + '...'
    }
    return description
  }

  return (
    <Card>
      <Image src={image} alt={title} />
      <TagPosition>
        <Tag key={type}>{type}</Tag>
      </TagPosition>
      <Title>
        {title}
        <div>
          <Rating src={Star} alt="Avaliação" />
          <h3>{score}</h3>
        </div>
      </Title>
      <Description>{getDescription(description)}</Description>
      <Link to={`/categories/${id}`}>
        <Click type="button">Saiba mais</Click>
      </Link>
    </Card>
  )
}

export default Product
