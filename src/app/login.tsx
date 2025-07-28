"use client";
import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Şimdilik sadece demo, gerçek doğrulama yok
    if (email === "admin@mail.com" && password === "admin123") {
      window.location.href = "/";
    } else {
      setError("Geçersiz e-posta veya şifre!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
        <h1 className="text-2xl font-bold text-indigo-700 mb-6 text-center">Mailsy Giriş</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">E-posta</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="admin@mail.com"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Şifre</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              placeholder="Şifreniz"
            />
          </div>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
}
