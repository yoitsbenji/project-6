import Top from './Header'
import ProductList from './ProductList'

import { useEffect, useState } from 'react'
import { Comida } from '../Home'

const Category = () => {
  const [categoryPage, setcategoryPage] = useState<Comida[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/1')
      .then((res) => res.json())
      .then((res) => setcategoryPage(res))
  }, [])

  return (
    <>
      <Top />
      <ProductList item={categoryPage} background="blue" />
    </>
  )
}
export default Category
