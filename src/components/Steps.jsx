function Steps() {
  const steps = [
    {
      number: "01",
      icon: "👤",
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
    },
    {
      number: "02",
      icon: "📦",
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs.",
    },
    {
      number: "03",
      icon: "🚀",
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
    },
  ]

  return (
    <section className="px-8 py-16 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-2">Get Started In 3 Steps</h2>
      <p className="text-gray-500 mb-12">Start using premium digital tools in minutes, not hours.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-white border rounded-xl p-8 relative">
            <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs w-7 h-7 rounded-full flex items-center justify-center">
              {step.number}
            </span>
            <div className="text-3xl bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              {step.icon}
            </div>
            <h3 className="font-bold text-lg mb-2">{step.title}</h3>
            <p className="text-gray-500 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Steps