'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  useEffect(() => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMobileMenu = () => {
      mobileMenu?.classList.toggle('hidden');
    };

    const closeMobileMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#mobile-menu') && !target.closest('#mobile-menu-button')) {
        mobileMenu?.classList.add('hidden');
      }
    };

    mobileMenuButton?.addEventListener('click', toggleMobileMenu);
    document.addEventListener('click', closeMobileMenu);

    return () => {
      mobileMenuButton?.removeEventListener('click', toggleMobileMenu);
      document.removeEventListener('click', closeMobileMenu);
    };
  }, []);

  return (
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <span className="text-rm-blue font-bold text-xl">RM</span>
        </div>
        <h1 className="text-2xl font-bebas tracking-wider">R3AL M4DRID FANDOM</h1>
      </div>
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="hover:text-rm-yellow transition-colors">Home</Link>
        <Link href="/teams" className="hover:text-rm-yellow transition-colors">Teams</Link>
        <Link href="/fixtures" className="hover:text-rm-yellow transition-colors">Fixtures</Link>
        <Link href="/standings" className="hover:text-rm-yellow transition-colors">Standings</Link>
        <a href="#rules" className="hover:text-rm-yellow transition-colors">Rules</a>
      </div>
      <div className="md:hidden relative">
        <button 
          id="mobile-menu-button"
          className="p-2 rounded-md text-white hover:bg-rm-blue/20 transition-colors focus:outline-none focus:ring-2 focus:ring-rm-yellow"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div 
          id="mobile-menu" 
          className="hidden absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
        >
          <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}>
            Home
          </Link>
          <Link 
            href="/teams" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
          >
            Teams
          </Link>
          <Link 
            href="/fixtures" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
          >
            Fixtures
          </Link>
          <Link 
            href="/standings" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
          >
            Standings
          </Link>
          <a 
            href="#rules" 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
          >
            Rules
          </a>
        </div>
      </div>
    </nav>
  );
}
