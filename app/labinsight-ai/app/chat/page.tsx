import Link from "next/link";

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8">

      <nav className="flex flex-wrap gap-5 mb-10 text-blue-700 font-medium">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/lab-test">Lab Tests</Link>
        <Link href="/quiz">Quiz</Link>
        <Link href="/progress">Progress</Link>
      </nav>

      <section className="bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-blue-700">
          🤖 LabInsight AI Assistant
        </h1>

        <p className="mt-3 text-gray-600">
          Your AI learning partner for Biochemistry, Pathology and Laboratory Science.
        </p>


        <div className="mt-8 space-y-4">

          <div className="bg-gray-100 rounded-2xl p-5 max-w-xl">
            <h3 className="font-bold">
              👨‍🎓 Student
            </h3>
            <p className="mt-2">
              What is a CBC test?
            </p>
          </div>


          <div className="bg-blue-50 rounded-2xl p-5 max-w-xl ml-auto">
            <h3 className="font-bold text-blue-700">
              🤖 AI Assistant
            </h3>
            <p className="mt-2">
              CBC (Complete Blood Count) is a blood test that measures
              RBC, WBC, Hemoglobin and Platelets.
            </p>
          </div>

        </div>


        <div className="mt-8">

          <input
            type="text"
            placeholder="Ask your laboratory question..."
            className="w-full border rounded-xl p-4 outline-none"
          />

          <button className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700">
            Ask AI
          </button>

        </div>

      </section>

    </main>
  );
}