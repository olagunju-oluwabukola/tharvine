import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('tharvine-cart')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })
  const [cartOpen, setCartOpen] = useState(false)
  const [toast, setToast] = useState('')

  useEffect(() => {
    localStorage.setItem('tharvine-cart', JSON.stringify(cart))
  }, [cart])

  const showToast = useCallback((msg) => {
    setToast(msg)
    const t = setTimeout(() => setToast(''), 2200)
    return () => clearTimeout(t)
  }, [])

  const addToCart = useCallback((product, size) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id && i.size === size)
      if (existing) {
        return prev.map((i) => (i === existing ? { ...i, qty: i.qty + 1 } : i))
      }
      return [...prev, { ...product, size, qty: 1 }]
    })
    showToast('Added to bag')
    setCartOpen(true)
  }, [showToast])

  const changeQty = useCallback((index, delta) => {
    setCart((prev) => {
      const next = [...prev]
      next[index] = { ...next[index], qty: next[index].qty + delta }
      return next[index].qty <= 0 ? next.filter((_, i) => i !== index) : next
    })
  }, [])

  const removeItem = useCallback((index) => {
    setCart((prev) => prev.filter((_, i) => i !== index))
  }, [])

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0)
  const count = cart.reduce((s, i) => s + i.qty, 0)

  const value = {
    cart, cartOpen, setCartOpen, addToCart, changeQty, removeItem,
    total, count, toast, showToast,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside a CartProvider')
  return ctx
}
