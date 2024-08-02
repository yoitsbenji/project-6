import { useEffect, useState } from 'react'

import Top from './Header'
import ProductList from './ProductList'

import { Comida } from '../Home'
import { useParams } from 'react-router-dom'

const Category = () => {
  const { id } = useParams()
  const [categoryPage, setcategoryPage] = useState<Comida[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/1')
      .then((res) => res.json())
      .then((res) => setcategoryPage(res))
  }, [id])

  return (
    <>
      <Top />
      <ProductList item={categoryPage} tipo={''} cardapio={[]} capa={''} />
    </>
  )
}

export default Category
