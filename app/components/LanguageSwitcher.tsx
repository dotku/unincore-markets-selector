'use client';

import { useState, useEffect, useRef } from 'react';
import { Language } from '../translations';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'zh', label: '中文' },
    { code: 'ko', label: '한국어' },
    { code: 'sg', label: 'Singapore' },
    { code: 'hk', label: '香港' },
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/50 backdrop-blur-sm rounded-full shadow-sm border border-gray-200/50 px-3 py-1.5 hover:bg-white/70 transition-all duration-200 flex items-center gap-1.5"
        >
          <span className="text-xs font-medium text-gray-600 uppercase">{currentLang.code}</span>
        </button>

        {isOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  onLanguageChange(lang.code);
                  setIsOpen(false);
                }}
                className={`
                  w-full px-4 py-2 text-left text-sm transition-colors flex items-center gap-2
                  ${
                    currentLanguage === lang.code
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-700 hover:bg-gray-50'
                  }
                `}
              >
                <span className="font-medium uppercase text-xs text-gray-500">{lang.code}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
