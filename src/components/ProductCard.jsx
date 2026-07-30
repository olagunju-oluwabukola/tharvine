import { useNavigate } from 'react-router-dom'
import SmartImage from './SmartImage'

export default function ProductCard({ product }) {
  const navigate = useNavigate()

  return (
    <button className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="product-img-wrap">
        <SmartImage src={product.coverImg} alt={product.name} ratio="3-4">
          <div className="product-add">Quick View</div>
        </SmartImage>
      </div>
      <div className="product-card-info">
        <div className="product-name">{product.name}</div>
        <div className="product-price">₦{product.price.toLocaleString()}</div>
      </div>
    </button>
  )
}
