export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-200">
      <div className="w-80 bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-semibold text-center">Create Account</h2>

        <input
          placeholder="Name"
          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <input
          placeholder="Email"
          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <button className="w-full py-2 rounded-lg bg-green-600 hover:bg-green-500 font-medium">
          Sign Up
        </button>

        <p className="text-sm text-center text-slate-400">
          Already have an account? <span className="text-blue-400 cursor-pointer">Login</span>
        </p>
      </div>
    </div>
  );
}
