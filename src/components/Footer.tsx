import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-white hover:text-primary transition duration-300">
              GelasKaca
            </Link>
            <p className="text-sm mt-2">Solusi Kaca Terbaik untuk Ruangan Anda.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/#home" className="text-light hover:text-primary transition duration-300">
              Beranda
            </Link>
            <Link href="/#products" className="text-light hover:text-primary transition duration-300">
              Produk
            </Link>
            <Link href="/#about" className="text-light hover:text-primary transition duration-300">
              Tentang Kami
            </Link>
            <Link href="/#contact" className="text-light hover:text-primary transition duration-300">
              Kontak
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} GelasKaca. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
