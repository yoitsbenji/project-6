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
  Title
} from './styles'

import { Props } from '../ProductList'

const Product = ({ item }: Props) => {
  return (
    <Card>
      <Image src={item.cover} alt={item.title} />
      <RatingNote>{item.rating}</RatingNote>
      {/* <TagPosition>
        {infos?.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </TagPosition> */}
      <Rating src={Star} alt="Avaliação" />
      <Title>{item.title}</Title>
      <Description>{item.description}</Description>
      <Link to="/categories">
        <Click type="submit">Saiba mais</Click>
      </Link>
    </Card>
  )
}

export default Product
