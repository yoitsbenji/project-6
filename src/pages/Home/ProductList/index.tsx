import { Food } from '../'
import { Container } from '../../../styles'
import Product from '../Products'
import { List, Section } from './styles'

export type Props = {
  background: 'blue' | 'lightBlue'
  item: Food[]
}

const ProductList = ({ background, item }: Props) => (
  <Section background={background}>
    <Container>
      <List>
        {item.map((item) => (
          <Product
            key={item.id}
            item={item.rating}
            description={item.description}
            title={item.title}
            cover={item.cover}
            type={item.type}
            menu={item.menu}
          />
        ))}
      </List>
    </Container>
  </Section>
)

export default ProductList
