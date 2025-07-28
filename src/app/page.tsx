

"use client";
import React, { useState } from "react";

const menu = [
  { name: "Gösterge Paneli", icon: "📊" },
  { name: "Otomasyonlar", icon: "🤖" },
  { name: "Şablonlar", icon: "✉️" },
  { name: "Aboneler", icon: "👥" },
  { name: "Ayarlar", icon: "⚙️" },
];

export default function Dashboard() {
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-100 to-indigo-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-indigo-100 flex flex-col py-8 px-4">
        <div className="flex items-center gap-2 mb-10">
          <span className="text-3xl">🚀</span>
          <span className="font-extrabold text-xl text-indigo-700">Mailsy Panel</span>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            {menu.map((item, i) => (
              <li key={item.name}>
                <button
                  className={`flex items-center w-full px-3 py-2 rounded-lg text-left transition font-medium text-gray-700 hover:bg-indigo-50 ${active === i ? "bg-indigo-100 text-indigo-700" : ""}`}
                  onClick={() => setActive(i)}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-10 text-xs text-gray-400 text-center">v1.0.0</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 flex items-center justify-between px-8 bg-white border-b border-indigo-100 shadow-sm">
          <div className="font-bold text-lg text-indigo-700">{menu[active].name}</div>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm">Hoş geldin, Admin</span>
            <span className="w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-bold">A</span>
          </div>
        </header>

        {/* Page Content */}
        <section className="flex-1 p-8 overflow-y-auto">
          {active === 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Gösterge Paneli</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                  <span className="text-3xl mb-2">📧</span>
                  <div className="text-lg font-semibold">Toplam Gönderilen E-posta</div>
                  <div className="text-2xl text-indigo-700 font-bold mt-2">0</div>
                </div>
                <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                  <span className="text-3xl mb-2">🤖</span>
                  <div className="text-lg font-semibold">Aktif Otomasyon</div>
                  <div className="text-2xl text-indigo-700 font-bold mt-2">0</div>
                </div>
                <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                  <span className="text-3xl mb-2">👥</span>
                  <div className="text-lg font-semibold">Abone Sayısı</div>
                  <div className="text-2xl text-indigo-700 font-bold mt-2">0</div>
                </div>
              </div>
            </div>
          )}
          {active === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Otomasyonlar</h2>
              <p className="text-gray-500 mb-2">Sipariş sonrası otomatik e-posta/SMS gönderimi için kurallarınızı buradan yönetin.</p>
              <div className="bg-white rounded-xl shadow p-6 mt-4">(Otomasyon listesi ve ekleme arayüzü yakında)</div>
            </div>
          )}
          {active === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Şablonlar</h2>
              <p className="text-gray-500 mb-2">Teşekkür, indirim, karşılama gibi e-posta/SMS şablonlarınızı yönetin.</p>
              <div className="bg-white rounded-xl shadow p-6 mt-4">(Şablon yönetimi yakında)</div>
            </div>
          )}
          {active === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Aboneler</h2>
              <p className="text-gray-500 mb-2">E-posta/SMS gönderilecek müşteri ve abone listenizi görüntüleyin.</p>
              <div className="bg-white rounded-xl shadow p-6 mt-4">(Abone listesi yakında)</div>
            </div>
          )}
          {active === 4 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Ayarlar</h2>
              <p className="text-gray-500 mb-2">Shopier API, e-posta ve SMS servis ayarlarınızı buradan yapabilirsiniz.</p>
              <div className="bg-white rounded-xl shadow p-6 mt-4">(Ayarlar arayüzü yakında)</div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
