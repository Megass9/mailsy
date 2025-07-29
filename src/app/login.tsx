"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Şimdilik sadece demo, gerçek doğrulama yok
    if (email === "admin@mail.com" && password === "admin123") {
      window.location.href = "/dashboard";
    } else {
      setError("Geçersiz e-posta veya şifre!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8"
      >
        <div className="text-center mb-8">
          <Image
            src="/mailsy-logo.svg"
            alt="Mailsy Logo"
            width={80}
            height={80}
            priority
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-900">
            {isLogin ? "Hesabınıza Giriş Yapın" : "Yeni Hesap Oluşturun"}
          </h2>
          <p className="text-gray-600 mt-2">
            {isLogin
              ? "Mailsy kontrol panelinize erişin"
              : "Shopier e-posta otomasyonuna başlayın"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-posta Adresi
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all outline-none"
              placeholder="ornek@sirketiniz.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Şifre
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all outline-none"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-600 text-sm bg-red-50 p-3 rounded-lg"
            >
              {error}
            </motion.div>
          )}

          {isLogin && (
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 rounded border-gray-300"
                />
                <label htmlFor="remember" className="ml-2 text-gray-600">
                  Beni Hatırla
                </label>
              </div>
              <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
                Şifremi Unuttum
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            {isLogin ? "Giriş Yap" : "Hesap Oluştur"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
          >
            {isLogin ? "Hesabınız yok mu? Kayıt olun" : "Zaten hesabınız var mı? Giriş yapın"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
