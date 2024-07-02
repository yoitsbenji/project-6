import { useEffect, useState } from 'react'
import ProductList from './ProductList'

import Top from './Header'

export type Food = {
  id: number
  title: string
  highlight: boolean
  type: string
  rating: number
  description: string
  cover: string
  menu?: []
}

const Home = () => {
  const [food, setFood] = useState<Food[]>([])

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
