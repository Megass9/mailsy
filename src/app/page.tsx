


"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Login from "./login";
import { motion } from "framer-motion";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (showLogin) {
    return <Login />;
  }

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/mailsy-logo.svg" alt="Mailsy Logo" width={64} height={64} priority />
            <span className="ml-4 text-3xl font-bold text-[#9900CB]">Mailsy</span>
          </div>
          <button
            onClick={() => setShowLogin(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full font-medium transition-all"
          >
            Giriş Yap
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Shopier E-postalarınızı <br />
              <span className="text-indigo-600">Otomatikleştirin</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Müşterilerinize özel, otomatik teşekkür mesajları ve indirim kodları gönderin.
              Satışlarınızı artırın, müşteri memnuniyetini yükseltin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowLogin(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Hemen Başlayın
              </button>
              <a
                href="#features"
                className="bg-white hover:bg-gray-50 text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Özellikleri Keşfedin
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-4xl font-bold text-indigo-600 mb-2">%40</h3>
              <p className="text-gray-600">Daha Yüksek Müşteri Memnuniyeti</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-4xl font-bold text-indigo-600 mb-2">2dk</h3>
              <p className="text-gray-600">Kurulum Süresi</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-4xl font-bold text-indigo-600 mb-2">%25</h3>
              <p className="text-gray-600">Tekrarlanan Siparişlerde Artış</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Neler Sunuyoruz?</h2>
            <p className="text-xl text-gray-600">E-posta otomasyonunu kolaylaştırıyoruz</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Shopier Entegrasyonu",
                description: "Tek tıkla Shopier hesabınızı bağlayın ve otomatik e-postaları başlatın",
                icon: "🔌"
              },
              {
                title: "Özelleştirilebilir Şablonlar",
                description: "Markanıza özel e-posta şablonları oluşturun ve yönetin",
                icon: "✨"
              },
              {
                title: "Detaylı Raporlama",
                description: "E-posta performansınızı ve müşteri etkileşimini takip edin",
                icon: "📊"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">
              Hemen Başlayın ve Satışlarınızı Artırın
            </h2>
            <button
              onClick={() => setShowLogin(true)}
              className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Ücretsiz Deneyin
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image src="/logo.svg" alt="Mailsy Logo" width={32} height={32} />
                <span className="ml-2 text-xl font-bold text-white">Mailsy</span>
              </div>
              <p className="text-sm">
                Shopier için otomatik e-posta çözümü
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">İletişim</h3>
              <p className="text-sm">destek@mailsy.com</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Yasal</h3>
              <ul className="space-y-2 text-sm">
                <li>Gizlilik Politikası</li>
                <li>Kullanım Koşulları</li>
                <li>KVKK</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            &copy; {new Date().getFullYear()} Mailsy | Tüm hakları saklıdır
          </div>
        </div>
      </footer>
    </div>
  );
}
