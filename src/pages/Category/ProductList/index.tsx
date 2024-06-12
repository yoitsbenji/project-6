import Item from '../../../models/Item'
import { Container } from '../../../styles'
import Product from '../../../components/Products'
import { Banner, List, Section, SubSubTitle, SubTitle } from './styles'
import banner from '../../../assets/images/banner.png'

export type Props = {
  background: 'blue' | 'lightBlue'
  item: Item[]
}

const ProductList = ({ background, item }: Props) => (
  <Section background={background}>
    <Banner>
      <img src={banner} alt="Ryzen" />
    </Banner>
    <Container>
      <SubTitle>Processadores</SubTitle>
      <SubSubTitle>Ryzen AMD & Intel</SubSubTitle>
      <List>
        {item.map((item) => (
          <Product
            key={item.id}
            image={item.image}
            title={item.title}
            category={item.category}
            system={item.system}
            description={item.description}
            infos={item.infos}
          />
        ))}
      </List>
    </Container>
  </Section>
)

export default ProductList
