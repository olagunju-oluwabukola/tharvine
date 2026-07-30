import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import CartSidebar from './components/CartSidebar'
import WhatsAppFloat from './components/WhatsAppFloat'
import Toast from './components/Toast'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import FemmePage from './pages/FemmePage'
import AboutPage from './pages/AboutPage'
import CheckoutPage from './pages/CheckoutPage'

export default function App() {
  return (
    <CartProvider>
      <WhatsAppFloat />
      <Toast />
      <CartSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/femme" element={<FemmePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </CartProvider>
  )
}
