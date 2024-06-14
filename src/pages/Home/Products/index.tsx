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

type Props = {
  title: string
  rating: string
  description: string
  infos?: string[]
  image: string
}

const Product = ({ title, rating, description, infos, image }: Props) => (
  <Card>
    <Image src={image} alt={title} />
    <RatingNote>{rating}</RatingNote>
    <TagPosition>
      {infos?.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </TagPosition>
    <Rating src={Star} alt="Avaliação" />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Link to="/categories">
      <Click type="submit">Saiba mais</Click>
    </Link>
  </Card>
)

export default Product
