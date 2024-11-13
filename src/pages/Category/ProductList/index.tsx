import Product from '../Products'
import { Menu, Food } from '../../Home'
import { Container } from '../../../styles'
import { Banner, List, Section, Title } from './styles'

export type Props = {
  item: Food[]
  menu: Menu[]
  title: string
  cover: string
  type: string
}

const ProductList = ({ menu, cover, type, title }: Props) => {
  console.log('Menu:', menu)
  console.log('Cover:', cover)
  console.log('Type:', type)
  console.log('Title:', title)

  return (
    <>
      <Section>
        <Banner>
          <img src={cover} />
        </Banner>
        <Container>
          <Title>
            <h2>{type}</h2>
            <h3>{title}</h3>
          </Title>
          <List>
            {Array.isArray(menu) &&
              menu.map((menuItem) => (
                <Product
                  key={menuItem.id}
                  image={menuItem.image}
                  price={menuItem.price}
                  portion={menuItem.portion}
                  title={menuItem.name}
                  description={menuItem.description}
                  type={type}
                  item={menuItem}
                />
              ))}
          </List>
        </Container>
      </Section>
    </>
  )
}

export default ProductList
