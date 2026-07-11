import { toast } from "react-toastify"

function CartItem({ item, removeFromCart }) {
  const handleRemove = () => {
    removeFromCart(item.id)
    toast.error(`${item.name} removed from cart!`)
  }

  return (
    <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4 mb-3">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{item.icon}</span>
        <div>
          <p className="font-medium">{item.name}</p>
          <p className="text-gray-500 text-sm">${item.price}</p>
        </div>
      </div>
      <button
        onClick={handleRemove}
        className="text-red-500 text-sm font-medium hover:underline"
      >
        Remove
      </button>
    </div>
  )
}

export default CartItem