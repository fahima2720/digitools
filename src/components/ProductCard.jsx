import { toast } from "react-toastify"

function ProductCard({ product, addToCart }) {
  // tagType onujayi color change korbe badge er
  const tagColors = {
    "best-seller": "bg-orange-100 text-orange-700",
    "popular": "bg-purple-100 text-purple-700",
    "new": "bg-green-100 text-green-700",
  }

  const handleBuyNow = () => {
    addToCart(product)
    toast.success(`${product.name} added to cart!`)
  }

  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition relative">
      {/* Tag badge - top right */}
      <span
        className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full font-medium ${tagColors[product.tagType]}`}
      >
        {product.tag}
      </span>

      {/* Icon */}
      <div className="text-3xl mb-3">{product.icon}</div>

      {/* Name & description */}
      <h3 className="font-bold text-lg mb-2">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-4">{product.description}</p>

      {/* Price */}
      <p className="mb-4">
        <span className="text-2xl font-bold">${product.price}</span>
        <span className="text-gray-500 text-sm">
          /{product.period === "one-time" ? "One-Time" : "Mo"}
        </span>
      </p>

      {/* Features list */}
      <ul className="mb-5 space-y-2">
        {product.features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
            <span className="text-green-500">✔</span> {feature}
          </li>
        ))}
      </ul>

      {/* Buy Now button */}
      <button
        onClick={handleBuyNow}
        className="w-full bg-purple-600 text-white py-2 rounded-full font-medium hover:bg-purple-700"
      >
        Buy Now
      </button>
    </div>
  )
}

export default ProductCard