"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="pt-16 min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">⚠️</div>
        <h1 className="text-3xl font-black text-slate-900 mb-3">
          Kuch Masla Ho Gaya
        </h1>
        <p className="text-slate-500 mb-8 leading-relaxed">
          Koi technical issue aaya hai. Hum is par kaam kar rahe hain.
          Dobara try karein ya support se contact karein.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-8 py-3.5 rounded-2xl hover:bg-blue-700 transition-all"
        >
          Dobara Koshish Karein
        </button>
      </div>
    </div>
  );
}
