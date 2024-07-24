import { useEffect, useState } from 'react'
import ProductList from './ProductList'
import Top from './Header'

export type Comida = {
  foto: string
  preco: number
  porcao: string
  nome: string
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [homePage, sethomePage] = useState<Comida[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => sethomePage(res))
  }, [])

  return (
    <>
      <Top />
      <ProductList item={homePage} />
    </>
  )
}

export default Home
