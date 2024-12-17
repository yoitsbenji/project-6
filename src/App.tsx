import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { store } from './store'
import Home from './pages/Home'
import Category from './pages/Category'
import Checkout from './pages/Checkout'
import Bottom from './components/Footer'
import Cart from './components/Cart'
import { GlobalCss } from './styles'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories/:id" element={<Category />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Bottom />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
