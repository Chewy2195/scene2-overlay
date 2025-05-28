
import Head from 'next/head';

export default function Home() {
  return (
    <div className=\"relative w-screen h-screen bg-black text-white font-sans\">
      <Head>
        <title>Scene 2 Overlay</title>
      </Head>

      {/* Card Lot Display */}
      <div className=\"absolute top-4 left-4 w-3/5 h-3/4 bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-4\">
        <h2 className=\"text-xl font-semibold mb-2\">🔹 Card Lot Preview 🔹</h2>
        <ul className=\"text-sm space-y-1 list-disc list-inside\">
          <li>Kurikara Divincarnate</li>
          <li>Injection Fairy Lily (Platinum)</li>
          <li>Ghost Fusion</li>
          <li>Royal Decree (Platinum)</li>
        </ul>
        <div className=\"mt-3 text-xs text-gray-300\">Estimated Value: $9</div>
      </div>

      {/* Facecam Box */}
      <div className=\"absolute bottom-4 right-4 w-1/4 h-1/3 border-2 border-blue-500 rounded-xl overflow-hidden shadow-md\">
        <div className=\"w-full h-full bg-gray-800 flex items-center justify-center\">
          <span className=\"text-sm\">🎥 Your Facecam Here</span>
        </div>
      </div>

      {/* Status Bar */}
      <div className=\"absolute top-0 right-0 p-2 text-xs text-gray-400\">
        🎙️ Live - Scene 2: Facecam + Cards
      </div>
    </div>
  );
}
