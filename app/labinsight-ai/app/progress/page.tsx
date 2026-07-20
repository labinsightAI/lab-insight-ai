import Link from "next/link";

export default function ProgressPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8">

      <nav className="flex flex-wrap gap-5 mb-10 text-blue-700 font-medium">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/lab-test">Lab Tests</Link>
        <Link href="/chat">AI Assistant</Link>
        <Link href="/quiz">Quiz</Link>
      </nav>


      <section className="bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-blue-700">
          📈 Learning Progress
        </h1>

        <p className="mt-3 text-gray-600">
          Track your LabInsight AI learning journey and achievements.
        </p>


        <div className="mt-8 bg-blue-50 rounded-2xl p-6">

          <h2 className="text-2xl font-bold">
            Overall Progress
          </h2>

          <p className="mt-2 text-gray-600">
            80% Completed
          </p>

          <div className="mt-4 w-full bg-gray-200 rounded-full h-5">
            <div className="bg-blue-600 h-5 rounded-full w-[80%]"></div>
          </div>

        </div>


        <div className="mt-8 grid md:grid-cols-2 gap-6">


          <div className="bg-white border rounded-xl p-5 shadow">
            <h3 className="font-bold text-lg">
              ✅ Completed Modules
            </h3>

            <ul className="mt-3 space-y-2 text-gray-600">
              <li>✓ Home Page</li>
              <li>✓ Login Page</li>
              <li>✓ Student Dashboard</li>
              <li>✓ AI Assistant</li>
              <li>✓ Quiz Mode</li>
              <li>✓ Lab Test Library</li>
            </ul>
          </div>


          <div className="bg-white border rounded-xl p-5 shadow">

            <h3 className="font-bold text-lg">
              🎯 Learning Goals
            </h3>

            <p className="mt-3 text-gray-600">
              Continue exploring laboratory tests,
              improve quiz scores and learn with AI assistance.
            </p>

          </div>


        </div>

      </section>

    </main>
  );
}