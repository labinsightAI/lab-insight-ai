import Link from "next/link";

export default function CBCPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <Link href="/lab-test" className="text-blue-600">
        ← Back to Lab Tests
      </Link>

      <div className="bg-white rounded-xl p-8 shadow mt-6">
        <h1 className="text-3xl font-bold">
          🩸 Complete Blood Count (CBC)
        </h1>

        <p className="mt-4 text-gray-600">
          CBC is a common blood test used to evaluate blood cells including
          red blood cells, white blood cells, hemoglobin, and platelets.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          Components:
        </h2>

        <ul className="mt-3 list-disc ml-6">
          <li>RBC Count</li>
          <li>WBC Count</li>
          <li>Hemoglobin</li>
          <li>Platelet Count</li>
        </ul>
      </div>

    </main>
  );
}