import ProductList from './ProductList'

import cpu from '../../assets/images/cpu.png'
import graphicard from '../../assets/images/rtx.jpg'
import motherboard from '../../assets/images/motherboard.jpeg'
import gabinetes from '../../assets/images/pc.jpg'
import peripherals from '../../assets/images/peripherals.jpg'
import ram from '../../assets/images/ram.jpg'
import Item from '../../models/Item'
import Top from './Header'

const line1: Item[] = [
  {
    id: 1,
    title: 'Processadores',
    system: 'PC',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, dolor a porta molestie, sapien risus tincidunt magna, id finibus eros sem vitae sapien. Suspendisse sed purus vel diam ultrices eleifend quis id tortor. In placerat neque eget tortor lobortis, at vestibulum quam egestas. Cras congue facilisis ligula, a tristique mauris maximus in. Maecenas in dictum dui',
    infos: [],
    image: cpu
  },
  {
    id: 2,
    title: 'Placa-mãe',
    system: 'PC',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, dolor a porta molestie, sapien risus tincidunt magna, id finibus eros sem vitae sapien. Suspendisse sed purus vel diam ultrices eleifend quis id tortor. In placerat neque eget tortor lobortis, at vestibulum quam egestas. Cras congue facilisis ligula, a tristique mauris maximus in. Maecenas in dictum dui',
    infos: [],
    image: motherboard
  }
]

const line2: Item[] = [
  {
    id: 3,
    title: 'Memória RAM',
    system: 'PC',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, dolor a porta molestie, sapien risus tincidunt magna, id finibus eros sem vitae sapien. Suspendisse sed purus vel diam ultrices eleifend quis id tortor. In placerat neque eget tortor lobortis, at vestibulum quam egestas. Cras congue facilisis ligula, a tristique mauris maximus in. Maecenas in dictum dui',
    infos: [],
    image: ram
  },
  {
    id: 4,
    title: 'Placa de Vídeo',
    system: 'PC',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, dolor a porta molestie, sapien risus tincidunt magna, id finibus eros sem vitae sapien. Suspendisse sed purus vel diam ultrices eleifend quis id tortor. In placerat neque eget tortor lobortis, at vestibulum quam egestas. Cras congue facilisis ligula, a tristique mauris maximus in. Maecenas in dictum dui',
    infos: [],
    image: graphicard
  }
]

const line3: Item[] = [
  {
    id: 6,
    title: 'Gabinetes',
    system: 'PC',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, dolor a porta molestie, sapien risus tincidunt magna, id finibus eros sem vitae sapien. Suspendisse sed purus vel diam ultrices eleifend quis id tortor. In placerat neque eget tortor lobortis, at vestibulum quam egestas. Cras congue facilisis ligula, a tristique mauris maximus in. Maecenas in dictum dui',

    infos: [],
    image: gabinetes
  },
  {
    id: 7,
    title: 'Periféricos',
    system: 'PC & Consoles',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, dolor a porta molestie, sapien risus tincidunt magna, id finibus eros sem vitae sapien. Suspendisse sed purus vel diam ultrices eleifend quis id tortor. In placerat neque eget tortor lobortis, at vestibulum quam egestas. Cras congue facilisis ligula, a tristique mauris maximus in. Maecenas in dictum dui',

    infos: [],
    image: peripherals
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
