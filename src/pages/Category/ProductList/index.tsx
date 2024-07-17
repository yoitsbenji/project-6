import { Container } from '../../../styles'
import { Comida } from '../../Home'
import Product from '../Products'
import { Banner, List, Section, SubSubTitle, SubTitle } from './styles'

type Props = {
  background?: 'blue' | 'lightBlue'
  item: Comida[]
  capa?: string
  tipo?: string
  titulo?: string
}

const ProductList = ({ background, item, capa, tipo, titulo }: Props) => {
  return (
    <>
      <Section background={background}>
        <Banner>
          <img src={capa} />
        </Banner>
        <Container>
          <SubTitle>{tipo}</SubTitle>
          <SubSubTitle>{titulo}</SubSubTitle>
          <List>
            {item.map((item) => (
              <Product
                key={item.id}
                descricao={item.descricao}
                titulo={item.titulo}
                avaliacao={item.avaliacao}
                tipo={item.tipo}
                foto={item.cardapio.foto}
                item={[]}
              />
            ))}
          </List>
        </Container>
      </Section>
    </>
  )
}

export default ProductList
