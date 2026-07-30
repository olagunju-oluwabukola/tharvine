// Product catalog.
// coverImg = shown on grid cards (Home / Femme).
// models = shown on the individual product page (main image + thumbnails).
// All paths are relative to /public, so drop your real files into /public/img/
// using these same names (or edit the paths below to match your files).
export const products = [
  {
    id: 'motion-i', name: 'Motion I', price: 21700, category: 'motion',
    coverImg: '/img/motionfront.PNG',
    desc: 'Placeholder description — update with real copy for Motion I.',
    material: '', fit: '',
    models: [
      { label: 'Front View', img: '/img/placeholder-motion-i.png' },
    ],
  },
  {
    id: 'motion-ii', name: 'Motion II', price: 21700, category: 'motion',
    coverImg: '/img/placeholder-motion-ii.png',
    desc: 'Placeholder description — update with real copy for Motion II.',
    material: '', fit: '',
    models: [
      { label: 'Front View', img: '/img/placeholder-motion-ii.png' },
    ],
  },
  {
    id: 'eko-series-ii', name: 'Eko Series II', price: 21700, category: 'eko-series',
    coverImg: '/img/EKO SERIES II (Front).png',
    desc: 'Inspired by West African street culture. Vibrant hand-finished graphics on premium ringspun cotton.',
    material: '100% Ringspun Cotton', fit: 'Regular / Slightly Tapered',
    models: [
      { label: 'Front View', img: '/img/EKO SERIES II (Front).png' },
      { label: 'Styled', img: '/img/eko-styled.jpeg' },
      { label: 'Back View', img: '/img/EKO SERIES II (Back).png' },
    ],
  },
  {
    id: 'bus-jersey', name: 'B.U.S Jersey', price: 19700, category: 'bus-jersey',
    coverImg: '/img/B.U.S JERSEY (Back).png',
    desc: 'The B.U.S Jersey — a signature Tharvine piece. Screen-printed artwork on heavyweight cotton with a relaxed, boxy silhouette.',
    material: '100% Cotton (280gsm)', fit: 'Oversized / Boxy',
    models: [
      { label: 'Front View', img: '/img/B.U.S JERSEY (Front).png' },
      { label: 'Back View', img: '/img/B.U.S JERSEY (Back).png' },
      { label: 'Styled', img: '/img/bus-modeled.jpeg' },
    ],
  },
  {
    id: 'fresh-teddy', name: 'Fresh Teddy', price: 17200, category: 'fresh-teddy',
    coverImg: '/img/FRESH TEDDY.png',
    desc: 'A statement piece built on a classic silhouette, reimagined in bold colour. Features a contrast collar.',
    material: '98% Cotton, 2% Elastane', fit: 'Unisex Oversized',
    models: [
      { label: 'Front View', img: '/img/FRESH TEDDY.png' },
      { label: 'Styled', img: '/img/Fresh Teddy- 15k.JPG' },
    ],
  },
  {
    id: 'tharvine-classic', name: 'Tharvine Classic', price: 12700, category: 'tharvine-classic',
    coverImg: '/img/THARVINE CLASSIC.png',
    desc: 'The Classic — a heavyweight cotton piece with a wide, relaxed silhouette. Finished with an embossed Tharvine logo.',
    material: '100% Heavy Cotton (320gsm)', fit: '',
    models: [
      { label: 'Black', img: '/img/THARVINE CLASSIC.png' },
      { label: 'White', img: '/img/THARVINE CLASSIC (White).png' },
    ],
  },
  {
    id: 'jiggy', name: 'Jiggy', price: 16700, category: 'jiggy',
    coverImg: '/img/JIGGY.png',
    desc: 'Animal instinct meets tailored structure. Custom-printed fabric, relaxed fit.',
    material: '', fit: 'Relaxed / Structured',
    models: [
      { label: 'Front View', img: '/img/JIGGY.png' },
      { label: 'Styled', img: '/img/JIGGY- 15k .jpg' },
    ],
  },
  {
    id: 'morphism', name: 'Morphism', price: 17200, category: 'morphism',
    coverImg: '/img/MORPHISM.png',
    desc: 'A minimal, versatile piece anchored by the Tharvine silhouette. Lightweight and breathable.',
    material: '100% Cotton', fit: 'Regular',
    models: [
      { label: 'Front View', img: '/img/MORPHISM.png' },
      { label: 'Styled', img: '/img/Morphism- 15k.JPG' },
    ],
  },
  {
    id: 'nasaa', name: 'Barbed Moon', price: 16700, category: 'nasaa',
    coverImg: '/img/NASAA (Front).png',
    desc: 'NASAA — the cosmos meets streetwear. Interstellar graphic piece inspired by exploration.',
    material: '100% Cotton (260gsm)', fit: 'Oversized',
    models: [
      { label: 'Front View', img: '/img/NASAA (Front).png' },
      { label: 'Back View', img: '/img/NASAA (Back).png' },
    ],
  },
  {
    id: 'toyw', name: 'Take Over Your World', price: 17200, category: 'toyw',
    coverImg: '/img/TOYW (Front).png',
    desc: 'The Original, Your Way. TOYW is a Tharvine signature — a versatile canvas piece.',
    material: '100% Cotton', fit: 'Regular / Clean Cut',
    models: [
      { label: 'Front View', img: '/img/TOYW (Front).png' },
      { label: 'Back View', img: '/img/TOYW (Back).png' },
    ],
  },
  {
    id: 'vintage', name: 'Vintage', price: 17200, category: 'vintage',
    coverImg: '/img/VINTAGE.png',
    desc: 'Washed, worn-in, and full of character. The Vintage edit channels nostalgic West African street style.',
    material: '100% Washed Cotton', fit: 'Relaxed / Worn-in',
    models: [
      { label: 'Front View', img: '/img/VINTAGE.png' },
      { label: 'Styled', img: '/img/Vintage- 15k.JPG' },
    ],
  },
  {
    id: 'thvn', name: 'THVN', price: 23000, category: 'thvn',
    coverImg: '/img/THVN (Back).png',
    desc: 'THVN — stripped back to the initials. A refined, logo-forward piece for those who know.',
    material: '100% Ringspun Cotton', fit: 'Regular',
    models: [
      { label: 'Front View', img: '/img/THVN (Front).png' },
      { label: 'Back View', img: '/img/THVN (Back).png' },
      { label: 'Styled', img: '/img/THVN- 20k.JPG' },
    ],
  },
  {
    id: 'bold-gorilla', name: "Tharvine's Bold Gorilla", price: 16700, category: 'bold',
    coverImg: '/img/THARVINE_s BOLD GORILLA (Front).png',
    desc: 'The boldest piece in the collection. Oversized statement garment with large-scale print work.',
    material: '100% Heavy Cotton (320gsm)', fit: 'Oversized / Boxy',
    models: [
      { label: 'Front View', img: '/img/THARVINE_s BOLD GORILLA (Front).png' },
      { label: 'Back View', img: '/img/THARVINE_s BOLD GORILLA (Back).png' },
    ],
  },
]

export const filterTabs = [
  { label: 'All', value: 'all' },
  { label: 'Motion', value: 'motion' },
  { label: 'B.U.S Jersey', value: 'bus-jersey' },
  { label: 'Eko Series II', value: 'eko-series' },
  { label: 'Fresh Teddy', value: 'fresh-teddy' },
  { label: 'Tharvine Classic', value: 'tharvine-classic' },
  { label: 'Jiggy', value: 'jiggy' },
  { label: 'Morphism', value: 'morphism' },
  { label: 'NASAA', value: 'nasaa' },
  { label: 'TOYW', value: 'toyw' },
  { label: 'Vintage', value: 'vintage' },
  { label: 'THVN', value: 'thvn' },
  { label: "Tharvine's Bold", value: 'bold' },
]

export const WHATSAPP_NUMBER = '2349028651157'

export const BANK_DETAILS = {
  bankName: 'Kuda Bank',
  accountName: 'Tharvine LTD',
  accountNumber: '3004001170',
}