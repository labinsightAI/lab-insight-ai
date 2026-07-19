import Link from "next/link";

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8">

      <nav className="flex flex-wrap gap-5 mb-10 text-blue-700 font-medium">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/lab-test">Lab Tests</Link>
        <Link href="/chat">AI Assistant</Link>
        <Link href="/progress">Progress</Link>
      </nav>


      <section className="bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-blue-700">
          📝 LabInsight AI Quiz Mode
        </h1>

        <p className="mt-3 text-gray-600">
          Test your laboratory knowledge and improve your learning.
        </p>


        <div className="mt-8 bg-blue-50 rounded-2xl p-6">

          <h2 className="text-2xl font-bold">
            Question 1
          </h2>

          <p className="mt-4 text-lg">
            What does CBC stand for?
          </p>


          <div className="mt-6 space-y-3">

            <button className="w-full text-left bg-white border rounded-xl p-4 hover:bg-blue-100">
              A) Complete Blood Count
            </button>

            <button className="w-full text-left bg-white border rounded-xl p-4 hover:bg-blue-100">
              B) Clinical Blood Check
            </button>

            <button className="w-full text-left bg-white border rounded-xl p-4 hover:bg-blue-100">
              C) Cell Body Calculation
            </button>

          </div>


          <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl">
            Submit Answer
          </button>

        </div>


        <div className="mt-8 bg-white border rounded-xl p-5">
          <h3 className="font-bold">
            🎯 Quiz Progress
          </h3>

          <p className="mt-2 text-gray-600">
            Question 1 of 10
          </p>
        </div>


      </section>

    </main>
  );
}