'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-dark hover:text-primary transition duration-300">
          GelasKaca
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/#home" className="text-dark hover:text-primary text-lg font-medium transition duration-300">
            Beranda
          </Link>
          <Link href="/#products" className="text-dark hover:text-primary text-lg font-medium transition duration-300">
            Produk
          </Link>
          <Link href="/#about" className="text-dark hover:text-primary text-lg font-medium transition duration-300">
            Tentang Kami
          </Link>
          <Link href="/#contact" className="text-dark hover:text-primary text-lg font-medium transition duration-300">
            Kontak
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-dark focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg pb-4">
          <Link href="/#home" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-dark hover:bg-gray-100 text-lg font-medium">
            Beranda
          </Link>
          <Link href="/#products" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-dark hover:bg-gray-100 text-lg font-medium">
            Produk
          </Link>
          <Link href="/#about" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-dark hover:bg-gray-100 text-lg font-medium">
            Tentang Kami
          </Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-dark hover:bg-gray-100 text-lg font-medium">
            Kontak
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
