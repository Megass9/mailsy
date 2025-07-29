"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Örnek veri
const demoStats = {
  totalEmails: 1234,
  openRate: 45.8,
  clickRate: 22.3,
  revenue: "12.450",
};

const demoEmails = [
  { id: 1, subject: "Siparişiniz için teşekkürler!", sent: 450, opened: 380, clicked: 120 },
  { id: 2, subject: "Size özel %10 indirim kuponu", sent: 320, opened: 280, clicked: 95 },
  { id: 3, subject: "Yeni ürünlerimizi gördünüz mü?", sent: 280, opened: 200, clicked: 85 },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Image src="/mailsy-logo.svg" alt="Mailsy Logo" width={64} height={64} priority />
              <span className="ml-4 text-3xl font-bold text-[#9900CB]">Mailsy</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="relative">
                <button className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
                    A
                  </div>
                  <span className="text-gray-700">Admin</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Kontrol Paneli</h1>
          <p className="text-gray-600">Shopier e-posta otomasyonunuzu yönetin</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Toplam E-posta", value: demoStats.totalEmails },
            { label: "Açılma Oranı", value: `%${demoStats.openRate}` },
            { label: "Tıklanma Oranı", value: `%${demoStats.clickRate}` },
            { label: "Toplam Gelir", value: `${demoStats.revenue}₺` },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
              <p className="mt-2 text-3xl font-semibold text-gray-900">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: "overview", label: "Genel Bakış" },
              { id: "campaigns", label: "Kampanyalar" },
              { id: "templates", label: "Şablonlar" },
              { id: "settings", label: "Ayarlar" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        {activeTab === "overview" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Son Gönderilen E-postalar</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {demoEmails.map((email) => (
                <motion.div
                  key={email.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="px-6 py-5 flex items-center justify-between hover:bg-gray-50"
                >
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{email.subject}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Gönderim: {email.sent} | Açılma: {email.opened} | Tıklanma: {email.clicked}
                    </p>
                  </div>
                  <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                    Detaylar
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
