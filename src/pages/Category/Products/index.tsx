import { Link } from 'react-router-dom'
import Tag from '../../../components/Tags'
import { Card, Click, Description, Image, TagPosition, Title } from './styles'

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
    <TagPosition>
      {infos?.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </TagPosition>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Link to="/categories">
      <Click type="submit">Adicionar ao Carrinnho</Click>
    </Link>
  </Card>
)

export default Product
