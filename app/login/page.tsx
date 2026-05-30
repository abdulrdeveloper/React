"use client";

import { useState } from "react";
import { ReactFormState } from "react-dom/client";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    setLoading(true);
    const url = "https://api.freeapi.app/api/v1/users/login";
    const data = { username, password };
    
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      });
      
      if(!response.ok){
        throw new Error(`Login failed, HTTP response Status ${ response.status }`);
      }

      const result = await response.json();
      console.log(`Success: `, result);

    } catch (error) {
      console.log(`Failed : `, error);
    }
      finally {
        setLoading(false);
      }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="bg-gray-900 p-8 rounded-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6">Login</h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            pattern="^[a-zA-Z0-9_]+$"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-gray-800 text-white p-3 rounded-lg outline-none" required
          />
          <input
            type="password"
            placeholder="Password"
            pattern=".{6,}"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-gray-800 text-white p-3 rounded-lg outline-none" required
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold cursor-pointer"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>

        <p className="text-gray-400 text-sm text-center mt-4">
          No account?
          <a href="/register" className="text-blue-400">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
