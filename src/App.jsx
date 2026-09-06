import { useState } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Stats from "./components/Stats"
import Products from "./components/Products"
import Cart from "./components/Cart"
import Steps from "./components/Steps"
import Pricing from "./components/Pricing"
import Footer from "./components/Footer"

function App() {
  // cart e ki ki product ache seta track korbe
  const [cartItems, setCartItems] = useState([])

  // products/cart toggle
  const [view, setView] = useState("products")

  // product cart e add korar function
  // jodi already cart e thake, abar add hobe na
  const addToCart = (product) => {
    const alreadyInCart = cartItems.find((item) => item.id === product.id)
    if (alreadyInCart) {
      return
    }
    setCartItems([...cartItems, product])
  }

  // cart theke product remove korar function
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  // checkout korle shob clear
  const clearCart = () => {
    setCartItems([])
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Toast notification container */}
      <ToastContainer position="top-right" autoClose={2000} />

      {/* Navbar - cartCount prop diye count pathacchi */}
      <Navbar
        cartCount={cartItems.length}
        view={view}
        setView={setView}
      />

      {/* Banner section */}
      <Banner />

      {/* Stats section */}
      <Stats />

      {/* Products/Cart toggle buttons */}
      <div className="flex justify-center gap-4 mt-12">
        <button
          onClick={() => setView("products")}
          className={`px-8 py-2 rounded-full font-medium transition ${
            view === "products"
              ? "bg-purple-600 text-white"
              : "border border-purple-600 text-purple-600 hover:bg-purple-50"
          }`}
        >
          Products
        </button>
        <button
          onClick={() => setView("cart")}
          className={`px-8 py-2 rounded-full font-medium transition ${
            view === "cart"
              ? "bg-purple-600 text-white"
              : "border border-purple-600 text-purple-600 hover:bg-purple-50"
          }`}

        
        >
          Cart ({cartItems.length})
        </button>
      </div>

      {/* view er value onujayi Products ba Cart dekhabe */}
      {view === "products" ? (
        <Products addToCart={addToCart} />
      ) : (
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />
      )}

      {/* Static sections */}
      <Steps />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App