import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { products, filterTabs } from '../data/products'

export default function Home() {
  const [activeTab, setActiveTab] = useState('all')
  const navigate = useNavigate()

  const filtered = activeTab === 'all' ? products : products.filter((p) => p.category === activeTab)
  const ekoProduct = products.find((p) => p.category === 'eko-series')

  return (
    <div>
      <Nav tickerItems={['New Exclusive Collection — Shop Now']} />

      <div className="hero">
        <img className="hero-img" src="/img/hero-bg.jpeg" alt="Tharvine SS25" onError={(e) => { e.currentTarget.style.display = 'none' }} />
        <div className="hero-overlay" />
        <div className="hero-grain" />
        <div className="hero-content">
          <div className="hero-tag">New Season — SS25 Collection</div>
          <h1 className="hero-title">Wear the <em>Nature</em> of You</h1>
          <div className="hero-btns">
            <button className="btn btn-primary" onClick={() => document.getElementById('productsSection')?.scrollIntoView({ behavior: 'smooth' })}>Shop Now</button>
            <button className="btn btn-outline" onClick={() => document.getElementById('productsSection')?.scrollIntoView({ behavior: 'smooth' })}>Discover Collection</button>
          </div>
        </div>
        <div className="hero-accent-line">Tharvine — Est. 2020</div>
      </div>

      <div className="section" id="productsSection">
        <div className="section-header">
          <div className="section-title">Popular Picks</div>
          <a className="section-link">View All</a>
        </div>
        <div className="filter-tabs">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              className={`filter-tab ${activeTab === tab.value ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="product-grid">
          {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>

      <div className="featured-banner">
        <button className="featured-panel" onClick={() => navigate('/femme')}>
          <div className="featured-panel-bg">
            <img src="/img/featured-women.jpeg" alt="Femme Nature" onError={(e) => { e.currentTarget.src = '/img/fallback.jpg' }} />
          </div>
          <div className="featured-overlay" />
          <div className="featured-panel-content">
            <div className="featured-panel-label">Femme Nature</div>
            <div className="featured-panel-title">For the<br />Woman Who<br />Moves</div>
          </div>
        </button>
        <button className="featured-panel" onClick={() => ekoProduct && navigate(`/product/${ekoProduct.id}`)}>
          <div className="featured-panel-bg">
            <img src="/img/outer-wear.jpeg" alt="Eko Series II" onError={(e) => { e.currentTarget.src = '/img/fallback.jpg' }} />
          </div>
          <div className="featured-overlay" />
          <div className="featured-panel-content">
            <div className="featured-panel-label">Campaign</div>
            <div className="featured-panel-title">Eko Series II</div>
          </div>
        </button>
      </div>

      <Footer />
    </div>
  )
}
