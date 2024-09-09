import { Link } from 'react-router-dom'
import { Container } from '../../../styles'
import { Title, Header, HList } from './styles'

const Top = () => (
  <Header>
    <HList>
      <li>
        <Link to="/">Restaurantes</Link>
      </li>
      <li>
        <Title href="#">e-Shop</Title>
      </li>
      <p>0 produto(s) no carrinho</p>
    </HList>
  </Header>
)

export default Top
