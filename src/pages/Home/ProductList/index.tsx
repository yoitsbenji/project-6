import { Comida } from '..'
import { Container } from '../../../styles'
import Product from '../Products'
import { List, Section } from './styles'

export type Props = {
  item: Comida[]
}

const ProductList = ({ item }: Props) => {
  return (
    <Section>
      <Container>
        <List>
          {item.map((item) => (
            <Product
              key={item.id}
              descricao={item.descricao}
              titulo={item.titulo}
              foto={item.capa}
              avaliacao={item.avaliacao}
              tipo={item.tipo}
              item={[]}
            />
          ))}
        </List>
      </Container>
    </Section>
  )
}
export default ProductList
