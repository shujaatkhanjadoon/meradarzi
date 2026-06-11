import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-16 min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-black text-slate-200 mb-4">404</div>
        <h1 className="text-3xl font-black text-slate-900 mb-3">
          Ye Page Nahi Mila
        </h1>
        <p className="text-slate-500 mb-8 leading-relaxed">
          Jo page aap dhundh rahe hain, woh exist nahi karta ya move ho gaya hai.
          Ghar wapas chalein?
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-8 py-3.5 rounded-2xl hover:bg-blue-700 transition-all"
        >
          Home Page Pe Jayein
        </Link>
      </div>
    </div>
  );
}
