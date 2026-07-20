import Link from "next/link";

export default function LabTestPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8">

      <nav className="flex flex-wrap gap-5 mb-10 text-blue-700 font-medium">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/chat">AI Assistant</Link>
        <Link href="/quiz">Quiz</Link>
        <Link href="/progress">Progress</Link>
      </nav>


      <section className="bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-blue-700">
          🧪 Lab Test Library
        </h1>

        <p className="mt-3 text-gray-600">
          Explore important laboratory tests and understand their clinical importance.
        </p>


        <div className="mt-8 grid md:grid-cols-3 gap-6">


          <div className="bg-blue-50 rounded-2xl p-6 shadow hover:shadow-xl">
            <h2 className="text-xl font-bold">
              🩸 CBC Test
            </h2>

            <p className="mt-3 text-gray-600">
              Learn about RBC, WBC, Hemoglobin and Platelets.
            </p>

            <Link
              href="/lab-test/cbc"
              className="inline-block mt-5 bg-blue-600 text-white px-5 py-2 rounded-xl"
            >
              View Details
            </Link>
          </div>



          <div className="bg-blue-50 rounded-2xl p-6 shadow hover:shadow-xl">
            <h2 className="text-xl font-bold">
              🧬 LFT Test
            </h2>

            <p className="mt-3 text-gray-600">
              Understand liver enzymes and health markers.
            </p>

            <Link
              href="/lab-test/lft"
              className="inline-block mt-5 bg-blue-600 text-white px-5 py-2 rounded-xl"
            >
              View Details
            </Link>
          </div>



          <div className="bg-blue-50 rounded-2xl p-6 shadow hover:shadow-xl">
            <h2 className="text-xl font-bold">
              🧪 KFT Test
            </h2>

            <p className="mt-3 text-gray-600">
              Learn about kidney health indicators.
            </p>

            <Link
              href="/lab-test/kft"
              className="inline-block mt-5 bg-blue-600 text-white px-5 py-2 rounded-xl"
            >
              View Details
            </Link>
          </div>


        </div>

      </section>

    </main>
  );
}