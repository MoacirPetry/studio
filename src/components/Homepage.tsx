function Homepage() {
  return (
    <div className="animate-fade-in">
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Welcome to the Homepage
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          This is the main landing page of our application.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              About This Project
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            This is a React application with routing capabilities, allowing
            seamless navigation between different pages.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg p-8 text-white hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Features</h2>
          </div>
          <ul className="space-y-2 text-blue-50">
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Modern React with TypeScript
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Beautiful Tailwind CSS styling
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Responsive design
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
