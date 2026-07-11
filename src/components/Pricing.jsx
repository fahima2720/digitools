function Pricing() {
  const plans = [
    {
      name: "Starter",
      desc: "Perfect for getting started",
      price: "$0",
      highlight: false,
      button: "Get Started Free",
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
    },
    {
      name: "Pro",
      desc: "Best for professionals",
      price: "$29",
      highlight: true,
      badge: "Most Popular",
      button: "Start Pro Trial",
      features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
    },
    {
      name: "Enterprise",
      desc: "For teams and businesses",
      price: "$99",
      highlight: false,
      button: "Contact Sales",
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
    },
  ]

  return (
    <section className="px-8 py-16 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-2">Simple, Transparent Pricing</h2>
      <p className="text-gray-500 mb-12">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl p-8 text-left relative ${
              plan.highlight
                ? "bg-gradient-to-b from-purple-600 to-indigo-600 text-white scale-105"
                : "bg-white border"
            }`}
          >
            {plan.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs px-3 py-1 rounded-full font-medium">
                {plan.badge}
              </span>
            )}
            <h3 className="font-bold text-lg">{plan.name}</h3>
            <p className={`text-sm mb-4 ${plan.highlight ? "text-purple-100" : "text-gray-500"}`}>
              {plan.desc}
            </p>
            <p className="mb-5">
              <span className="text-3xl font-bold">{plan.price}</span>
              <span className={plan.highlight ? "text-purple-100" : "text-gray-500"}>/Month</span>
            </p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((f, i) => (
                <li key={i} className="text-sm flex items-center gap-2">
                  <span className="text-green-400">✔</span> {f}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded-full font-medium ${
                plan.highlight
                  ? "bg-white text-purple-600"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing