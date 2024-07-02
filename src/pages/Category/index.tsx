import { Food } from '../Home'
import Top from './Header'
import ProductList from './ProductList'

const Category = ({ item }: Props) => (
  <>
    <Top />
    <ProductList item={item.title} background="blue" />
  </>
)

export default Category
