import { Link } from 'react-router-dom'
import Tag from '../Tags'
import { Card, Click, Description, Image, TagPosition, Title } from './styles'

type Props = {
  title: string
  category?: string
  system: string
  description: string
  infos?: string[]
  image: string
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => (
  <Card>
    <Image src={image} alt={title} />
    <TagPosition>
      {infos?.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </TagPosition>
    <Title>{title}</Title>
    <Tag>{system}</Tag>
    <Description>{description}</Description>
    <Link to="/categories">
      <Click type="button">Ver tudo</Click>
    </Link>
  </Card>
)

export default Product
