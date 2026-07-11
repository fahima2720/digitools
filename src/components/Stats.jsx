function Stats() {
  // Stats data - eta ekta array, map kore loop kore dekhabo
  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "200+", label: "Premium Tools" },
    { number: "4.9", label: "Rating" },
  ]

  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
        {stats.map((item, index) => (
          <div key={index}>
            <h2 className="text-4xl font-bold mb-1">{item.number}</h2>
            <p className="text-purple-100">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats