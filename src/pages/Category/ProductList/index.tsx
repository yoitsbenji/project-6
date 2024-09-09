import { Container } from '../../../styles'
import { Cardapio, Comida } from '../../Home'
import Product from '../Products'
import { Banner, List, Section, SubSubTitle, SubTitle } from './styles'

export type Props = {
  item: Comida[]
  cardapio: Cardapio[]
  titulo: string
  capa: string
  tipo: string
}

const ProductList = ({ cardapio, capa, tipo, titulo }: Props) => {
  console.log('Cardapio:', cardapio)
  console.log('Capa:', capa)
  console.log('Tipo:', tipo)
  console.log('Titulo:', titulo)
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
            {Array.isArray(cardapio) &&
              cardapio.map((cardapioItem) => (
                <Product
                  key={cardapioItem.id}
                  foto={cardapioItem.foto}
                  preco={cardapioItem.preco}
                  porcao={cardapioItem.porcao}
                  titulo={cardapioItem.nome}
                  descricao={cardapioItem.descricao}
                  item={[]}
                  tipo={tipo}
                />
              ))}
          </List>
        </Container>
      </Section>
    </>
  )
}

export default ProductList
