import { Link } from 'react-router-dom'
import { WHATSAPP_NUMBER } from '../data/products'

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-brand">THARVINE</div>
          <p className="footer-desc">
            Elevated streetwear crafted for those who move with intention.
            Every piece tells a story of nature, culture, and identity.
          </p>
        </div>
        <div className="footer-col">
          <h4>Shop</h4>
          <Link to="/">All Products</Link>
          <Link to="/femme">Femme</Link>
        </div>
        <div className="footer-col">
          <h4>Info</h4>
          <Link to="/about">About Us</Link>
          <a>Stories</a>
          <a>Press</a>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <a>Size Guide</a>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Tharvine. All rights reserved.</span>
        <span>Privacy Policy · Terms of Service</span>
      </div>
    </footer>
  )
}
