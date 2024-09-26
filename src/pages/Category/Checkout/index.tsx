import { FList, Line1 } from './styles'

const Checkout = () => (
  <FList>
    <h2>Entrega</h2>
    <li>
      <label htmlFor="text">Quem irá receber</label>
      <input type="text" />
    </li>
    <li>
      <label htmlFor="text">Endereço</label>
      <input type="text" />
    </li>
    <li>
      <label htmlFor="text">Cidade</label>
      <input type="text" />
    </li>
    <Line1>
      <li>
        <label htmlFor="text">CEP</label>
        <input type="text" />
      </li>
      <li>
        <label htmlFor="text">Número</label>
        <input type="text" />
      </li>
    </Line1>
    <li>
      <label htmlFor="text">Complemento (opcional)</label>
      <input type="text" />
    </li>
  </FList>
)

export default Checkout
