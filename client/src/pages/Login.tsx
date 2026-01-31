import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { login } from "../utils/api";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await login(email, password);
      localStorage.setItem("token", data.token);
      navigate("/chat");
    } catch (err: any) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-200">
      <div className="w-80 bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-semibold text-center">LinguaFlow</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        {error && (
          <p className="text-sm text-red-400 text-center">{error}</p>
        )}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-500 font-medium disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-sm text-center text-slate-400">
          New here?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}
