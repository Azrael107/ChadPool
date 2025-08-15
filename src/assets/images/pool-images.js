// src/assets/images/pool-images.js
import Pool1 from './Pool1.jpg'; // Direct imports
import Pool2 from './Pool2.jpg';
import Pool3 from './Pool3.jpg';

const poolImages = [
  {
    id: 1,
    src: Pool1, // Use imported reference
    alt: "Infinity Pool",
    title: "Luxury Design",
    description: "Premium infinity edge pool"
  },
  {
    id: 2,
    src: Pool2,
    alt: "Modern Pool",
    title: "Contemporary Design",
    description: "Sleek geometric shapes"
  },
  {
    id: 3,
    src: Pool3,
    alt: "Family Pool",
    title: "Entertainment Ready",
    description: "Complete with waterfall"
  }
];

export default poolImages;