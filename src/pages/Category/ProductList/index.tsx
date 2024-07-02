import { Container } from '../../../styles'
import Product from '../Products'
import { Banner, List, Section, SubSubTitle, SubTitle } from './styles'

import { Props } from '../../Home/ProductList'

const ProductList = ({ background, item }: Props) => (
  <>
    <Section background={background}>
      <Banner>
        <img src={item.cover} alt="Pasta" />
      </Banner>
      <Container>
        <SubTitle>Italiana</SubTitle>
        <SubSubTitle>La Dolce Vita Trattoria</SubSubTitle>
        <List>
          {item.map((item) => (
            <Product
              key={item.id}
              cover={item.cover}
              title={item.title}
              rating={item.rating}
              description={item.description}
              type={item.type}
              menu={item.menu}
            />
          ))}
        </List>
      </Container>
    </Section>
  </>
)

export default ProductList
