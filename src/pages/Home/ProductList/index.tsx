import Item from '../../../models/Item'
import { Container } from '../../../styles'
import Product from '../Products'
import { List, Section } from './styles'

export type Props = {
  background: 'blue' | 'lightBlue'
  item: Item[]
}

const ProductList = ({ background, item }: Props) => (
  <Section background={background}>
    <Container>
      <List>
        {item.map((item) => (
          <Product
            key={item.id}
            image={item.image}
            title={item.title}
            rating={item.rating}
            description={item.description}
            infos={item.infos}
          />
        ))}
      </List>
    </Container>
  </Section>
)

export default ProductList
