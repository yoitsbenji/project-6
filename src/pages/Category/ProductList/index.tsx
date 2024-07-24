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
            {item.map((produto) => (
              <div key={produto.id}>
                {produto.cardapio.map((cardapioItem) => (
                  <Product
                    key={cardapioItem.id}
                    foto={cardapioItem.foto}
                    preco={cardapioItem.preco}
                    porcao={cardapioItem.porcao}
                    titulo={cardapioItem.nome}
                    descricao={cardapioItem.descricao}
                    tipo={produto.tipo}
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
