import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">

      {/* Navigation */}
      <nav className="flex flex-wrap justify-center gap-6 mb-10 text-blue-600 font-medium">
        <Link href="/login">Login</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/lab-test">Lab Tests</Link>
        <Link href="/chat">AI Assistant</Link>
        <Link href="/quiz">Quiz</Link>
        <Link href="/progress">Progress</Link>
      </nav>


      {/* Welcome Hero */}
      <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10 text-center">

        <h1 className="text-4xl font-bold text-blue-700">
          Welcome to LabInsight AI 🧪🤖
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Your intelligent learning assistant for laboratory science,
          biochemistry and medical education.
        </p>


        <div className="mt-8 flex justify-center gap-4 flex-wrap">

          <Link
            href="/login"
            className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow"
          >
            Get Started
          </Link>


          <Link
            href="/chat"
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-xl"
          >
            Learn More
          </Link>

        </div>

      </section>


      {/* Features */}
      <section className="max-w-5xl mx-auto mt-10 grid md:grid-cols-3 gap-6">


        <Link href="/lab-test">
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl">

            <div className="text-4xl">🧪</div>

            <h2 className="text-xl font-bold mt-4 text-blue-700">
              Lab Test Library
            </h2>

            <p className="mt-2 text-gray-600">
              Explore CBC, LFT, KFT and important laboratory tests.
            </p>

          </div>
        </Link>


        <Link href="/chat">
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl">

            <div className="text-4xl">🤖</div>

            <h2 className="text-xl font-bold mt-4 text-blue-700">
              AI Assistant
            </h2>

            <p className="mt-2 text-gray-600">
              Ask questions and learn with AI support.
            </p>

          </div>
        </Link>


        <Link href="/quiz">
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl">

            <div className="text-4xl">📝</div>

            <h2 className="text-xl font-bold mt-4 text-blue-700">
              Quiz Mode
            </h2>

            <p className="mt-2 text-gray-600">
              Test your laboratory knowledge.
            </p>

          </div>
        </Link>


      </section>


      {/* Extra Features */}
      <section className="max-w-5xl mx-auto mt-6 grid md:grid-cols-2 gap-6">


        <Link href="/dashboard">
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl">

            <div className="text-4xl">📊</div>

            <h2 className="text-xl font-bold mt-4 text-blue-700">
              Student Dashboard
            </h2>

            <p className="mt-2 text-gray-600">
              Access your learning tools in one place.
            </p>

          </div>
        </Link>


        <Link href="/progress">
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl">

            <div className="text-4xl">📈</div>

            <h2 className="text-xl font-bold mt-4 text-blue-700">
              Learning Progress
            </h2>

            <p className="mt-2 text-gray-600">
              Track your completed modules and achievements.
            </p>

          </div>
        </Link>


      </section>


    </main>
  );
}
