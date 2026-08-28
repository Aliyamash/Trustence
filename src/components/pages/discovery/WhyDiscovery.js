export default function WhyDiscovery() {
  return (
    <div className="bg-transparent py-44">
      <div className="container">
        <h2 className="text-5xl title font-bold mb-4 text-white">Clarity before scope.</h2>
        <p className="text-xl font-black text-zinc-300">A useful discovery session should leave you with sharper decisions—not a rehearsed sales pitch.</p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-gray-200 rounded-2xl shadow-xl hover:shadow-md transition duration-200">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Define the real objective</h3>
            <p className="text-gray-600 text-base">
              Separate the desired business outcome from assumptions about the solution.
            </p>
          </div>

          <div className="p-6 bg-gray-200 rounded-2xl shadow-xl hover:shadow-md transition duration-200">
            <div className="text-3xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-2">Protect the investment</h3>
            <p className="text-gray-600 text-base">
              Identify avoidable complexity, dependencies, and risks before they become expensive.
            </p>
          </div>

          <div className="p-6 bg-gray-200 rounded-2xl shadow-xl hover:shadow-md transition duration-200">
            <div className="text-3xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">Explore the right system</h3>
            <p className="text-gray-600 text-base">
              Consider the right combination of web, software, automation, and growth capability.
            </p>
          </div>

          <div className="p-6 bg-gray-200 rounded-2xl shadow-xl hover:shadow-md transition duration-200">
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">
              Assess the partnership
            </h3>
            <p className="text-gray-600 text-base">
              Understand how we think, communicate, and work before either side makes a commitment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
