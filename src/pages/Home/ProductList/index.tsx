import { Comida } from '..'
import { Container } from '../../../styles'
import Product from '../Products'
import { List, Section } from './styles'

export type Props = {
  background?: 'blue' | 'lightBlue'
  item: Comida[]
}

const ProductList = ({ background, item }: Props) => {
  return (
    <Section background={background}>
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
