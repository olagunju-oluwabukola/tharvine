import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { WHATSAPP_NUMBER } from '../data/products'

export default function AboutPage() {
  const navigate = useNavigate()

  return (
    <div>
      <Nav tickerItems={['Crafted with Intention', 'Made in Nigeria', 'Worn with Purpose', 'Tharvine — Est. 2020']} />

      <button className="back-btn" onClick={() => navigate(-1)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 12, height: 12 }}><path d="M15 18l-6-6 6-6" /></svg>
        Back
      </button>

      <div className="about-hero">
        <div className="about-hero-label">Est. 2020 — Lagos, Nigeria</div>
        <h1 className="about-hero-title">We Wear the<br /><em>Nature</em> of Us</h1>
        <p className="about-hero-sub">Tharvine is a Lagos-born streetwear label built on the idea that clothing should carry meaning. Every stitch, every print, every silhouette is a conversation between tradition and the contemporary world.</p>
      </div>

      <div className="about-body">
        <div className="about-grid">
          <div className="ar-box ar-4-5">
            <img src="/img/eko-styled.jpeg" alt="Tharvine Story" />
          </div>
          <div className="about-grid-text">
            <h2>The Story Behind the Name</h2>
            <p>Tharvine was born from a simple question: what does Nigerian identity look like when it's distilled into clothing? The name itself is a fusion — a coined word that felt like home and like the future at the same time.</p>
            <p>Founded in 2020, we started with a single graphic tee and a belief that African streetwear deserved a global platform. We didn't want to be a brand that simply referenced culture from a distance. We wanted to live inside it, wear it, and share it with the world.</p>
            <p>Every collection begins with a conversation — with elders, with young creatives on the streets of Lagos, with textile artisans in the market. The result is clothing that feels lived-in from the first wear.</p>
          </div>
        </div>

        <div className="about-grid reverse">
          <div className="ar-box ar-4-5">
            <img src="/img/bus-modeled.jpeg" alt="Tharvine Craft" />
          </div>
          <div className="about-grid-text">
            <h2>Craft Over Haste</h2>
            <p>We don't drop product for the sake of a schedule. Every piece in a Tharvine collection earns its place. Our process involves months of sampling, conversations with our production team, and sometimes scrapping an entire concept because it didn't feel true.</p>
            <p>We work with local artisans and regional cotton suppliers where possible. Not as a marketing point — but because it's simply the right way to build something that's meant to last.</p>
            <p>When you wear Tharvine, you're wearing the result of real hands, real decisions, and real care.</p>
          </div>
        </div>
      </div>

      <div className="about-values">
        <div className="about-values-title">What We Stand On</div>
        <div className="values-grid">
          <div className="value-item">
            <h3>Roots</h3>
            <p>Every collection is grounded in West African culture — its textures, colours, language, and energy. We don't borrow from our culture; we are it.</p>
          </div>
          <div className="value-item">
            <h3>Craft</h3>
            <p>We believe in making things properly. Our production process is slow by design. We'd rather release one perfect piece than ten mediocre ones.</p>
          </div>
          <div className="value-item">
            <h3>Identity</h3>
            <p>Tharvine is for people who know who they are — or are on their way to finding out. Clothing is a mirror, and ours reflects something real.</p>
          </div>
        </div>
      </div>

      <div className="about-stats">
        <div className="stat-item"><div className="stat-num">2020</div><div className="stat-label">Est. Lagos</div></div>
        <div className="stat-item"><div className="stat-num">11+</div><div className="stat-label">Collections</div></div>
        <div className="stat-item"><div className="stat-num">100%</div><div className="stat-label">Made in Nigeria</div></div>
        <div className="stat-item"><div className="stat-num">∞</div><div className="stat-label">Worn with Purpose</div></div>
      </div>

      <div className="about-team">
        <div className="about-team-title">Come Find Us</div>
        <p className="about-team-sub">We're on WhatsApp, Instagram, and everywhere our customers are. Reach out — we actually respond.</p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary" style={{ background: 'var(--black)', color: 'white' }}>WhatsApp Us</button>
          </a>
          <button className="btn btn-outline" style={{ color: 'var(--black)', borderColor: 'var(--black)' }} onClick={() => navigate('/')}>
            Shop the Collection
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
