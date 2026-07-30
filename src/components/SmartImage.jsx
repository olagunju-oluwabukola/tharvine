import { useState, useEffect } from 'react'

/**
 * An image inside a fixed-aspect-ratio box that never collapses to 0 height
 * (see .ar-box in index.css), and that falls back to a "THARVINE" placeholder
 * if the file 404s instead of showing a broken-image icon.
 *
 * ratio: '3-4' or '4-5'
 */
export default function SmartImage({ src, alt, ratio = '3-4', className = '', children }) {
  const [failed, setFailed] = useState(false)

  // Reset the failed state whenever the src changes, so switching between
  // product photos doesn't get stuck on an old error state.
  useEffect(() => { setFailed(false) }, [src])

  return (
    <div className={`ar-box ar-${ratio} ${className}`}>
      {failed ? (
        <div className="fallback"><span>Tharvine</span></div>
      ) : (
        <img src={src} alt={alt || ''} onError={() => setFailed(true)} />
      )}
      {children}
    </div>
  )
}
