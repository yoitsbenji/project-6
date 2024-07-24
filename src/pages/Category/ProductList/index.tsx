import { Container } from '../../../styles'
import Product, { Props } from '../Products'
import { Banner, List, Section, SubSubTitle, SubTitle } from './styles'

const ProductList = ({ capa, tipo, titulo, item }: Props) => {
  return (
    <>
      <Section>
        <Banner>
          <img src={item.capa} />
        </Banner>
        <Container>
          <SubTitle>{tipo}</SubTitle>
          <SubSubTitle>{titulo}</SubSubTitle>
          <List>
            {item.map((item) => (
              <div key={item.id}>
                {item.cardapio.map((cardapioItem) => (
                  <Product
                    key={item.id}
                    foto={cardapioItem.foto}
                    preco={cardapioItem.preco}
                    porcao={cardapioItem.porcao}
                    titulo={cardapioItem.nome}
                    descricao={cardapioItem.descricao}
                    tipo={item.tipo}
                    item={[]}
                  />
                ))}
              </div>
            ))}
          </List>
        </Container>
      </Section>
    </>
  )
}

export default ProductList
