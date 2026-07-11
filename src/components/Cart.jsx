import { toast } from "react-toastify"
import CartItem from "./CartItem"

function Cart({ cartItems, removeFromCart, clearCart }) {
  // total price calculate kora hocche - shob item er price jog kore
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  const handleCheckout = () => {
    clearCart()
    toast.success("Order placed successfully! Cart cleared.")
  }

  return (
    <section className="px-8 py-16 max-w-2xl mx-auto">
      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold mb-5">Your Cart</h2>

        {/* Jodi cart empty hoy, message dekhabe */}
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center py-10">
            Your cart is empty. Add some products to get started!
          </p>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
            ))}

            {/* Total */}
            <div className="flex justify-between items-center mt-5 mb-4 font-medium">
              <span>Total:</span>
              <span className="text-xl font-bold">${total}</span>
            </div>

            {/* Checkout button */}
            <button
              onClick={handleCheckout}
              className="w-full bg-purple-600 text-white py-3 rounded-full font-medium hover:bg-purple-700"
            >
              Proceed To Checkout
            </button>
          </>
        )}
      </div>
    </section>
  )
}

export default Cart