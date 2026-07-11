function Banner() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 gap-10 max-w-7xl mx-auto">
      {/* Left side - text content */}
      <div className="flex-1">
        <span className="inline-block bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full mb-4">
          ✨ New: AI-Powered Tools Available
        </span>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Supercharge Your Digital Workflow
        </h1>

        <p className="text-gray-600 mb-6">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
        </p>

        <div className="flex gap-4">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700">
            Explore Products
          </button>
          <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-purple-50">
            ▶ Watch Demo
          </button>
        </div>
      </div>

      {/* Right side - image */}
      <div className="flex-1">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600"
          alt="Digital workflow illustration"
          className="rounded-xl w-full"
        />
      </div>
    </section>
  )
}

export default Banner