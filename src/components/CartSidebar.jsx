import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import SmartImage from './SmartImage'

export default function CartSidebar() {
  const { cart, cartOpen, setCartOpen, changeQty, removeItem, total } = useCart()
  const navigate = useNavigate()

  const goToCheckout = () => {
    setCartOpen(false)
    navigate('/checkout')
  }

  return (
    <>
      <div className={`cart-overlay ${cartOpen ? 'open' : ''}`} onClick={() => setCartOpen(false)} />
      <div className={`cart-sidebar ${cartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <div className="cart-title">Your Bag</div>
          <button className="close-btn" onClick={() => setCartOpen(false)}>✕</button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty">Your bag is empty.</div>
          ) : (
            cart.map((item, i) => (
              <div className="cart-item" key={`${item.id}-${item.size}`}>
                <div className="cart-item-img">
                  <SmartImage src={item.coverImg} alt={item.name} ratio="3-4" />
                </div>
                <div>
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-detail">Size: {item.size}</div>
                  <div className="qty-row">
                    <button className="qty-btn" onClick={() => changeQty(i, -1)}>−</button>
                    <span>{item.qty}</span>
                    <button className="qty-btn" onClick={() => changeQty(i, 1)}>+</button>
                  </div>
                  <button className="remove-item" onClick={() => removeItem(i)}>Remove</button>
                </div>
                <div>₦{(item.price * item.qty).toLocaleString()}</div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal"><span>Subtotal</span><span>₦{total.toLocaleString()}</span></div>
            <button className="checkout-btn" onClick={goToCheckout}>Proceed to Checkout</button>
          </div>
        )}
      </div>
    </>
  )
}
