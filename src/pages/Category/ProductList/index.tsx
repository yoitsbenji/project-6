import { Container } from '../../../styles'
import Product, { Props } from '../Products'
import { Banner, List, Section, SubSubTitle, SubTitle } from './styles'

const ProductList = ({ capa, tipo, titulo, item }: Props) => {
  return (
    <>
      <Section>
        <Banner>
          <img src={capa} />
        </Banner>
        <Container>
          <SubTitle>{tipo}</SubTitle>
          <SubSubTitle>{titulo}</SubSubTitle>
          <List>
            {item.map((item) => (
              <Product
                key={item.cardapio.id}
                foto={item.cardapio.foto}
                preco={item.cardapio.preco}
                porcao={item.cardapio.porcao}
                titulo={item.cardapio.nome}
                tipo={''}
                item={[]}
                cardapio={[]}
                descricao={''}
              />
            ))}
          </List>
        </Container>
      </Section>
    </>
  )
}

export default ProductList
