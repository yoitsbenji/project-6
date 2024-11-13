import { Food } from '..'
import Product from '../Products'

import { Container } from '../../../styles'
import { List, Section } from './styles'

export type Props = {
  item: Food[]
}

const ProductList = ({ item }: Props) => {
  return (
    <Section>
      <Container>
        <List>
          {item.map((item) => (
            <li key={item.id}>
              <Product
                id={item.id}
                key={item.id}
                description={item.description}
                title={item.title}
                image={item.cover}
                score={item.score}
                type={item.type}
                item={[]}
              />
            </li>
          ))}
        </List>
      </Container>
    </Section>
  )
}
export default ProductList
