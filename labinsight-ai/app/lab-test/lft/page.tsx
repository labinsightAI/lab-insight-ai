import Link from "next/link";

export default function LFTPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <Link href="/lab-test" className="text-blue-600">
        ← Back to Lab Tests
      </Link>

      <div className="bg-white rounded-xl p-8 shadow mt-6">

        <h1 className="text-3xl font-bold">
          🧪 Liver Function Test (LFT)
        </h1>

        <p className="mt-4 text-gray-600">
          LFT is used to check liver health by measuring enzymes,
          proteins, and bilirubin levels.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          Components:
        </h2>

        <ul className="mt-3 list-disc ml-6">
          <li>ALT (Alanine Aminotransferase)</li>
          <li>AST (Aspartate Aminotransferase)</li>
          <li>Bilirubin</li>
          <li>Albumin</li>
          <li>Alkaline Phosphatase</li>
        </ul>

      </div>

    </main>
  );
}