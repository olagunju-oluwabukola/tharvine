import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function FemmePage() {
  return (
    <div>
      <Nav tickerItems={['Femme Nature — SS25', 'For the Woman Who Moves', 'Free delivery on orders over £150']} />

      <Link to="/" className="back-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 12, height: 12 }}><path d="M15 18l-6-6 6-6" /></svg>
        Back to Shop
      </Link>

      <div className="femme-hero">
        <img src="/img/featured-women.jpeg" alt="Femme Nature" onError={(e) => { e.currentTarget.style.opacity = 0 }} />
        <div className="femme-hero-overlay" />
        <div className="femme-hero-content">
          <div className="femme-hero-tag">Femme Nature — SS25</div>
          <h1 className="femme-hero-title">For the Woman<br />Who <em>Moves</em></h1>
          <button className="btn btn-primary" onClick={() => document.getElementById('femmeProducts')?.scrollIntoView({ behavior: 'smooth' })}>Shop the Edit</button>
        </div>
      </div>

      <div className="femme-editorial">
        <div className="femme-editorial-text">
          <h2>Draped in<br />Intention</h2>
          <p>The Femme Nature edit is built for the woman who carries herself with quiet confidence. Each piece is designed to move with the body — never against it.</p>
          <p>Crafted from premium Nigerian-sourced cotton blends, the collection draws on the textures and colours of West African landscape: terracotta, ivory, deep forest green, and the rich brown of harmattan earth.</p>
          <p>From the streets of Lagos to any city in the world, these pieces are a statement of identity — rooted, bold, and effortlessly beautiful.</p>
        </div>
        <div className="ar-box ar-3-4">
          <img src="/img/featured-women.jpeg" alt="Femme editorial" />
        </div>
      </div>

      <div className="femme-grid" id="femmeProducts">
        <div className="femme-grid-title">The Full Edit</div>
        <div className="femme-products">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>

      <Footer />
    </div>
  )
}
