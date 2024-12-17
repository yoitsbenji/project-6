import { HashLink } from 'react-router-hash-link'
import { Title, Header, SubTitle } from './styles'

const Top = () => (
  <Header>
    <HashLink to="/">
      <Title>eFood</Title>
    </HashLink>
    <SubTitle>
      <h3>Viva experiências gastronômicas no conforto da sua casa</h3>
    </SubTitle>
  </Header>
)

export default Top
