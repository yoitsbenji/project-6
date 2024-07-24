import { useEffect, useState } from 'react'

import Top from './Header'
import ProductList from './ProductList'

import { Comida } from '../Home'

const Category = () => {
  const [categoryPage, setcategoryPage] = useState<Comida[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setcategoryPage(res))
  }, [])

  return (
    <>
      <Top />
      <ProductList
        item={categoryPage}
        titulo={''}
        tipo={''}
        foto={''}
        descricao={''}
      />
    </>
  )
}

export default Category
