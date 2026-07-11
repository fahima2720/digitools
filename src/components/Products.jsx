import productsData from "../data/products.json"
import ProductCard from "./ProductCard"

function Products({ addToCart }) {
  return (
    <section className="px-8 py-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  )
}

export default Products