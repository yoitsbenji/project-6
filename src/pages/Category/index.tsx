import { useEffect, useState } from 'react'

import Top from './Header'
import ProductList from './ProductList'

import { Comida } from '../Home'
import { useParams } from 'react-router-dom'

const Category = () => {
  const { id } = useParams()
  const [categoryPage, setcategoryPage] = useState<Comida | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setcategoryPage(res))
  }, [id])

  if (!categoryPage) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Top />
      <ProductList
        cardapio={categoryPage.cardapio}
        capa={categoryPage.capa}
        tipo={categoryPage.tipo}
        item={[]}
        titulo={categoryPage.titulo}
      />
    </>
  )
}

export default Category
