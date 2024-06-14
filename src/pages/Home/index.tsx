import ProductList from './ProductList'

import pasta from '../../assets/images/pasta.png'
import sushi from '../../assets/images/sushi.png'
import Item from '../../models/Item'
import Top from './Header'

const line1: Item[] = [
  {
    id: 1,
    title: 'Hioki Sushi ',
    rating: '8.3',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    image: sushi
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    rating: '9.1',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: [],
    image: pasta
  }
]

const line2: Item[] = [
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    rating: '9.1',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: [],
    image: pasta
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    rating: '9.1',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: [],
    image: pasta
  }
]

const line3: Item[] = [
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    rating: '9.1',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: [],
    image: pasta
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    rating: '9.1',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: [],
    image: pasta
  }
]

const Home = () => (
  <>
    <Top />
    <ProductList item={line1} background="blue" />
    <ProductList item={line2} background="lightBlue" />
    <ProductList item={line3} background="blue" />
  </>
)

export default Home
