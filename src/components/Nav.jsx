import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Nav({ tickerItems }) {
  const { count, setCartOpen } = useCart()

  return (
    <>
      <div className="ticker">
        <div className="ticker-inner">
          {[...tickerItems, ...tickerItems].map((t, i) => (
            <span key={i}>{t}<span> · </span></span>
          ))}
        </div>
      </div>
      <nav>
        <Link to="/" className="nav-logo">THARVINE</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/">Shop</Link>
          <Link to="/femme">Femme</Link>
          <Link to="/about">About Us</Link>
        </div>
        <div className="nav-right">
          <button className="nav-icon" onClick={() => setCartOpen(true)} aria-label="Open cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {count > 0 && <span className="cart-count">{count}</span>}
          </button>
        </div>
      </nav>
    </>
  )
}
