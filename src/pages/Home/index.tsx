import { useEffect, useState } from 'react'
import ProductList from './ProductList'
import Top from './Header'

export interface CoverImg {
  url: string
}

export type Comida = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: CoverImg
  cardapio: {
    foto: CoverImg
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [food, setFood] = useState<Comida[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setFood(res))
  }, [])

  return (
    <>
      <Top />
      <ProductList item={food} background="blue" />
    </>
  )
}

export default Home
