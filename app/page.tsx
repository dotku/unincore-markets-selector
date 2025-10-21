"use client";

import { useState } from "react";
import Image from "next/image";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { Language, translations } from "./translations";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  const [language, setLanguage] = useState<Language>("zh");
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-stone-100 to-neutral-100">
      <Analytics />
      {/* Language Switcher */}
      <LanguageSwitcher
        currentLanguage={language}
        onLanguageChange={setLanguage}
      />

      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center">
            <div className="inline-block mb-6 sm:mb-8">
              <Image
                src="/unicore-logo.png?v=3"
                alt="UNI&CORE"
                width={300}
                height={100}
                className="w-48 sm:w-64 md:w-80 h-auto"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Region Selection */}
          <div className="max-w-4xl mx-auto mb-12 sm:mb-20 px-4 sm:px-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 sm:p-12">
              {/* Asia Section */}
              <div className="mb-10">
                <h2 className="text-lg font-semibold text-gray-600 mb-6">
                  Asia
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="https://shop300502436.world.taobao.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-2xl">🇨🇳</span>
                    <span className="text-gray-700 group-hover:text-green-600 transition-colors">
                      {t.stores.china.title}
                    </span>
                  </a>

                  <a
                    href="https://unincore.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-2xl">🇰🇷</span>
                    <span className="text-gray-700 group-hover:text-green-600 transition-colors">
                      {t.stores.korea.title}
                    </span>
                  </a>

                  <a
                    href="https://unincore.sg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-2xl">🇸🇬</span>
                    <span className="text-gray-700 group-hover:text-green-600 transition-colors">
                      {t.stores.singapore.title}
                    </span>
                  </a>

                  <a
                    href="https://unincore.hk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-2xl">🇭🇰</span>
                    <span className="text-gray-700 group-hover:text-green-600 transition-colors">
                      {t.stores.hongkong.title}
                    </span>
                  </a>
                </div>
              </div>

              {/* North America Section */}
              <div className="mb-10">
                <h2 className="text-lg font-semibold text-gray-600 mb-6">
                  North America
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="https://unincore.us"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-2xl">🇺🇸</span>
                    <span className="text-gray-700 group-hover:text-green-600 transition-colors">
                      {t.stores.us.title}
                    </span>
                  </a>
                </div>
              </div>

              {/* International Section */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-600 mb-6">
                  International
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="https://intl.unincore.cn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-2xl">🌍</span>
                    <span className="text-gray-700 group-hover:text-green-600 transition-colors">
                      {t.stores.international.title}
                    </span>
                  </a>
                </div>
              </div>

              {/* Bottom Text */}
              <div className="text-center pt-6 border-t border-gray-200">
                <p className="text-gray-500 text-sm">{t.hero.description}</p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-white/60 mx-2 sm:mx-auto">
            <h3 className="text-center text-gray-700 font-serif text-xl sm:text-2xl mb-6 sm:mb-8">
              {t.features.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-green-50">
                  <span className="text-xl sm:text-2xl">⭐</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-700 font-medium whitespace-pre-line leading-relaxed">
                  {t.features.quality}
                </span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-50">
                  <span className="text-xl sm:text-2xl">💎</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-700 font-medium whitespace-pre-line leading-relaxed">
                  {t.features.character}
                </span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-purple-50">
                  <span className="text-xl sm:text-2xl">✓</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-700 font-medium whitespace-pre-line leading-relaxed">
                  {t.features.assurance}
                </span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-amber-50">
                  <span className="text-xl sm:text-2xl">🌍</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-700 font-medium whitespace-pre-line leading-relaxed">
                  {t.features.global}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
