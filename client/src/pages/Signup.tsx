import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { signup } from "../utils/api";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await signup(name, email, password);

      // store token
      localStorage.setItem("token", data.token);

      // go to chat
      navigate("/chat");
    } catch (err: any) {
      setError("Unable to create account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-200">
      <div className="w-80 bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-semibold text-center">Create Account</h2>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        {error && (
          <p className="text-sm text-red-400 text-center">{error}</p>
        )}

        <button
          onClick={handleSignup}
          disabled={loading}
          className="w-full py-2 rounded-lg bg-green-600 hover:bg-green-500 font-medium disabled:opacity-50"
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>

        <p className="text-sm text-center text-slate-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
