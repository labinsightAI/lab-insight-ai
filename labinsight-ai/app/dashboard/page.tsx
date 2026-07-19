import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8">

      <nav className="flex flex-wrap gap-5 mb-10 text-blue-700 font-medium">
        <Link href="/">Home</Link>
        <Link href="/lab-test">Lab Tests</Link>
        <Link href="/chat">AI Assistant</Link>
        <Link href="/quiz">Quiz</Link>
        <Link href="/progress">Progress</Link>
      </nav>

      <section className="bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-blue-700">
          Welcome, Student 👋
        </h1>

        <p className="mt-3 text-gray-600 text-lg">
          This dashboard gives you quick access to Lab Tests,
          AI Assistant, Quiz Mode and your learning progress.
        </p>

      </section>


      <section className="mt-8 grid md:grid-cols-3 gap-6">

        <Link href="/lab-test">
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl">
            <h2 className="text-xl font-bold">
              🧪 Lab Tests
            </h2>
            <p className="mt-2 text-gray-600">
              Explore CBC, LFT, KFT and other laboratory tests.
            </p>
          </div>
        </Link>


        <Link href="/chat">
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl">
            <h2 className="text-xl font-bold">
              🤖 AI Assistant
            </h2>
            <p className="mt-2 text-gray-600">
              Ask questions and learn with AI support.
            </p>
          </div>
        </Link>


        <Link href="/quiz">
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl">
            <h2 className="text-xl font-bold">
              📝 Quiz Mode
            </h2>
            <p className="mt-2 text-gray-600">
              Test your laboratory knowledge.
            </p>
          </div>
        </Link>

      </section>


      <section className="mt-8 bg-white rounded-2xl shadow p-8">

        <h2 className="text-2xl font-bold">
          Learning Progress 📈
        </h2>

        <div className="mt-4 w-full bg-gray-200 rounded-full h-4">
          <div className="bg-blue-600 h-4 rounded-full w-[80%]"></div>
        </div>

        <p className="mt-3 text-gray-600">
          Overall Progress: 80%
        </p>

      </section>

    </main>
  );
}