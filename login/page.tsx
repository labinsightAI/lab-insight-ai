export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center text-blue-700">
          Login
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Welcome to LabInsight AI
        </p>

        <form className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3"
          />

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Don't have an account?{" "}
          <span className="text-blue-600 font-semibold">Sign Up</span>
        </p>
      </div>
    </main>
  );
}