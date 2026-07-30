import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Nav from '../components/Nav'
import SmartImage from '../components/SmartImage'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

const SIZES = ['XS', 'S', 'M', 'L']

export default function ProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const product = products.find((p) => p.id === id)
  const [activeModel, setActiveModel] = useState(0)
  const [selectedSize, setSelectedSize] = useState(null)

  // Reset gallery + size selection whenever the visited product changes,
  // so navigating from one PDP straight to another never shows stale state.
  useEffect(() => {
    setActiveModel(0)
    setSelectedSize(null)
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return (
      <div>
        <Nav tickerItems={['New Exclusive Collection — Shop Now']} />
        <div className="section">
          <p>We couldn't find that product.</p>
          <Link to="/" className="section-link">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const currentModel = product.models[activeModel]

  const handleAddToCart = () => {
    if (!selectedSize) return
    addToCart(product, selectedSize)
  }

  return (
    <div>
      <Nav tickerItems={['New Exclusive Collection — Shop Now', 'Free delivery on orders over £150', 'Subscribe for 10% off your first order']} />

      <div className="product-page-layout">
        <div className="product-gallery">
          <div className="main-img-wrap">
            <SmartImage src={currentModel.img} alt={currentModel.label} ratio="3-4">
              <div className="model-label">{currentModel.label}</div>
            </SmartImage>
          </div>
          <div className="thumb-row">
            {product.models.map((m, i) => (
              <button
                key={m.img + i}
                className={`thumb ${i === activeModel ? 'active' : ''}`}
                onClick={() => setActiveModel(i)}
              >
                <SmartImage src={m.img} alt={m.label} ratio="3-4">
                  <div className="thumb-desc">{m.label}</div>
                </SmartImage>
              </button>
            ))}
          </div>
        </div>

        <div className="product-info">
          <button className="product-breadcrumb" onClick={() => navigate(-1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 12, height: 12 }}><path d="M15 18l-6-6 6-6" /></svg>
            <span>← Shop / {product.name}</span>
          </button>
          <h1 className="product-page-name">{product.name}</h1>
          <div className="product-page-price">₦{product.price.toLocaleString()}</div>
          <div className="product-page-desc">{product.desc}</div>

          <div className="size-label">Select Size</div>
          <div className="size-options">
            {SIZES.map((size) => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
            <button className="size-btn unavailable" disabled>XL</button>
          </div>

          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            {selectedSize ? 'Add to Bag' : 'Select a size'}
          </button>

          <div className="product-meta">
            <div className="meta-row"><span>Material</span><strong>{product.material || '—'}</strong></div>
            <div className="meta-row"><span>Fit</span><strong>{product.fit || '—'}</strong></div>
            <div className="meta-row"><span>Made in</span><strong>Nigeria</strong></div>
            <div className="meta-row"><span>Care</span><strong>Machine wash 30°</strong></div>
          </div>
        </div>
      </div>
    </div>
  )
}
