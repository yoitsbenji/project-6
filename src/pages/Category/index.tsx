import pizza from '../../assets/images/pizza.png'
import Item from '../../models/Item'
import Top from './Header'
import ProductList from './ProductList'

const line1: Item[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    rating: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [],
    image: pizza
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    rating: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [],
    image: pizza
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    rating: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [],
    image: pizza
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    rating: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [],
    image: pizza
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    rating: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [],
    image: pizza
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    rating: '',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [],
    image: pizza
  }
]

const Category = () => (
  <>
    <Top />
    <ProductList item={line1} background="blue" />
  </>
)

export default Category
