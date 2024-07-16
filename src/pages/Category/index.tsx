import Top from './Header'
import ProductList from './ProductList'

import { Props } from '../Home/ProductList'

const Category = ({ item }: Props) => (
  <>
    <Top />
    <ProductList item={item} background="blue" />
  </>
)

export default Category
