import { useEffect, useState } from 'react'
import ProductList from './ProductList'
import Top from './Header'

export interface Cardapio {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type Comida = {
  id: number
  foto: string
  preco: number
  porcao: string
  nome: string
  capa: string
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  cardapio: Cardapio[]
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
