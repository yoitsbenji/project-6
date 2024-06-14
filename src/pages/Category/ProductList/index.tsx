import Item from '../../../models/Item'
import { Container } from '../../../styles'
import Product from '../Products'
import { Banner, List, Section, SubSubTitle, SubTitle } from './styles'
import pasta from '../../../assets/images/pasta.png'

export type Props = {
  background: 'blue' | 'lightBlue'
  item: Item[]
}

const ProductList = ({ background, item }: Props) => (
  <Section background={background}>
    <Banner>
      <img src={pasta} alt="Pasta" />
    </Banner>
    <Container>
      <SubTitle>Italiana</SubTitle>
      <SubSubTitle>La Dolce Vita Trattoria</SubSubTitle>
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
