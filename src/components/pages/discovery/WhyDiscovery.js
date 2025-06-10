export default function WhyDiscovery() {
  return (
    <div className="bg-transparent py-44">
      <div className="container">
        <h1 className="text-5xl title font-bold mb-4 text-white">Why This Session Matters ?</h1>
        <p className="text-xl font-black text-zinc-300">We have carefully prepared all the matters to be addressed during the session for you.</p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-gray-200 rounded-2xl shadow-xl hover:shadow-md transition duration-200">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Clarify Your Goals</h3>
            <p className="text-gray-600 text-base">
              Get crystal-clear on what your business really needs, before you
              invest time and money.
            </p>
          </div>

          <div className="p-6 bg-gray-200 rounded-2xl shadow-xl hover:shadow-md transition duration-200">
            <div className="text-3xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-2">Save Time & Money</h3>
            <p className="text-gray-600 text-base">
              Avoid costly mistakes and make smarter decisions from the very
              first step.
            </p>
          </div>

          <div className="p-6 bg-gray-200 rounded-2xl shadow-xl hover:shadow-md transition duration-200">
            <div className="text-3xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">Get a Tailored Solution</h3>
            <p className="text-gray-600 text-base">
              No generic advice, receive recommendations crafted specifically
              for your business.
            </p>
          </div>

          <div className="p-6 bg-gray-200 rounded-2xl shadow-xl hover:shadow-md transition duration-200">
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">
              Build Trust Before You Commit
            </h3>
            <p className="text-gray-600 text-base">
              Meet our team, get expert insights, and feel confident before
              making any commitment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
