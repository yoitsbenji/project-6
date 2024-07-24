import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { GlobalCss } from './styles'
import Home from './pages/Home'
import Category from './pages/Category'
import Bottom from './components/Footer'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories/:id" element={<Category />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <Bottom />
    </BrowserRouter>
  )
}

export default App
