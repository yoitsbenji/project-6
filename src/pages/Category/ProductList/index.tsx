import { Container } from '../../../styles'
import { Comida } from '../../Home'
import Product from '../Products'
import { Banner, List, Section, SubSubTitle, SubTitle } from './styles'

type Props = {
  background?: 'blue' | 'lightBlue'
  item: Comida[]
  foto?: string
}

const ProductList = ({ background, item, foto }: Props) => (
  <>
    <Section background={background}>
      <Banner>
        <img src={foto} alt="Pasta" />
      </Banner>
      <Container>
        <SubTitle>Italiana</SubTitle>
        <SubSubTitle>La Dolce Vita Trattoria</SubSubTitle>
        <List>
          {item.map((item) => (
            <Product
              key={item.id}
              descricao={item.descricao}
              titulo={item.titulo}
              avaliacao={item.avaliacao}
              tipo={item.tipo}
              item={[]}
              foto={[]}
            />
          ))}
        </List>
      </Container>
    </Section>
  </>
)

export default ProductList
