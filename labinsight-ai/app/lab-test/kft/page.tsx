import Link from "next/link";

export default function KFTPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <Link href="/lab-test" className="text-blue-600">
        ← Back to Lab Tests
      </Link>

      <div className="bg-white rounded-xl p-8 shadow mt-6">

        <h1 className="text-3xl font-bold">
          🧪 Kidney Function Test (KFT)
        </h1>

        <p className="mt-4 text-gray-600">
          KFT evaluates kidney function by measuring important markers
          related to kidney health.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          Components:
        </h2>

        <ul className="mt-3 list-disc ml-6">
          <li>Creatinine</li>
          <li>Urea</li>
          <li>Blood Urea Nitrogen (BUN)</li>
          <li>Electrolytes</li>
        </ul>

      </div>

    </main>
  );
}