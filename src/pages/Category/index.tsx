import ryzen from '../../assets/images/ryzen.png'
import Item from '../../models/Item'
import Top from './Header'
import ProductList from './ProductList'

const line1: Item[] = [
  {
    id: 1,
    title: ' AMD Ryzen 9 5900X',
    system: 'PC',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, dolor a porta molestie, sapien risus tincidunt magna, id finibus eros sem vitae sapien. Suspendisse sed purus vel diam ultrices eleifend quis id tortor. In placerat neque eget tortor lobortis, at vestibulum quam egestas. Cras congue facilisis ligula, a tristique mauris maximus in. Maecenas in dictum dui',
    infos: ['50%'],
    image: ryzen
  },
  {
    id: 2,
    title: ' AMD Ryzen 9 5900X',
    system: 'PC',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, dolor a porta molestie, sapien risus tincidunt magna, id finibus eros sem vitae sapien. Suspendisse sed purus vel diam ultrices eleifend quis id tortor. In placerat neque eget tortor lobortis, at vestibulum quam egestas. Cras congue facilisis ligula, a tristique mauris maximus in. Maecenas in dictum dui',
    infos: ['50%'],
    image: ryzen
  },
  {
    id: 3,
    title: ' AMD Ryzen 9 5900X',
    system: 'PC',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, dolor a porta molestie, sapien risus tincidunt magna, id finibus eros sem vitae sapien. Suspendisse sed purus vel diam ultrices eleifend quis id tortor. In placerat neque eget tortor lobortis, at vestibulum quam egestas. Cras congue facilisis ligula, a tristique mauris maximus in. Maecenas in dictum dui',
    infos: ['50%'],
    image: ryzen
  },
  {
    id: 1,
    title: ' AMD Ryzen 9 5900X',
    system: 'PC',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, dolor a porta molestie, sapien risus tincidunt magna, id finibus eros sem vitae sapien. Suspendisse sed purus vel diam ultrices eleifend quis id tortor. In placerat neque eget tortor lobortis, at vestibulum quam egestas. Cras congue facilisis ligula, a tristique mauris maximus in. Maecenas in dictum dui',
    infos: ['50%'],
    image: ryzen
  },
  {
    id: 2,
    title: ' AMD Ryzen 9 5900X',
    system: 'PC',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, dolor a porta molestie, sapien risus tincidunt magna, id finibus eros sem vitae sapien. Suspendisse sed purus vel diam ultrices eleifend quis id tortor. In placerat neque eget tortor lobortis, at vestibulum quam egestas. Cras congue facilisis ligula, a tristique mauris maximus in. Maecenas in dictum dui',
    infos: ['50%'],
    image: ryzen
  },
  {
    id: 3,
    title: ' AMD Ryzen 9 5900X',
    system: 'PC',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum, dolor a porta molestie, sapien risus tincidunt magna, id finibus eros sem vitae sapien. Suspendisse sed purus vel diam ultrices eleifend quis id tortor. In placerat neque eget tortor lobortis, at vestibulum quam egestas. Cras congue facilisis ligula, a tristique mauris maximus in. Maecenas in dictum dui',
    infos: ['50%'],
    image: ryzen
  }
]

const Category = () => (
  <>
    <Top />
    <ProductList item={line1} background="blue" />
  </>
)

export default Category
