function Navbar({ cartCount, view, setView }) {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-sm bg-white sticky top-0 z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-purple-600">DigiTools</h1>

      {/* Menu links - shudhu design er jonno, functional na */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li className="hover:text-purple-600 cursor-pointer">Products</li>
        <li className="hover:text-purple-600 cursor-pointer">Features</li>
        <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
        <li className="hover:text-purple-600 cursor-pointer">Testimonials</li>
        <li className="hover:text-purple-600 cursor-pointer">FAQ</li>
      </ul>

      {/* Right side - Login & Get Started button */}
      <div className="flex items-center gap-4">
        <button className="text-gray-700 font-medium hidden sm:block">Login</button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-full font-medium hover:bg-purple-700">
          Get Started
        </button>

        {/* Cart icon with count badge */}
        <button
          onClick={() => setView("cart")}
          className="relative text-2xl"
        >
          🛒
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
          
        </button>
      </div>
    </nav>
  )
}

export default Navbar
