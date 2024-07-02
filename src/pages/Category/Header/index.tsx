import { Link } from 'react-router-dom'
import { Container } from '../../../styles'
import { Title, Header, HList, Hlink } from './styles'

const Top = () => (
  <Header>
    <Container>
      <HList>
        <li>
          <Link to="/">
            <Hlink href="#">Restaurantes</Hlink>
          </Link>
        </li>
        <li>
          <Title href="#">e-Shop</Title>
        </li>
        <p>0 produto(s) no carrinho</p>
      </HList>
    </Container>
  </Header>
)

export default Top
