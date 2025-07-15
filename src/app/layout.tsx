import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GelasKaca - Solusi Kaca Terbaik',
  description: 'Menyediakan berbagai jenis kaca berkualitas tinggi untuk kebutuhan arsitektur dan interior Anda.',
  keywords: 'kaca, tempered, laminasi, low-e, arsitektur, interior, bangunan, jakarta, indonesia',
  authors: [{ name: 'GelasKaca Team' }],
  openGraph: {
    title: 'GelasKaca - Solusi Kaca Terbaik',
    description: 'Menyediakan berbagai jenis kaca berkualitas tinggi untuk kebutuhan arsitektur dan interior Anda.',
    url: 'https://gelaskaca.com',
    siteName: 'GelasKaca',
    images: [
      {
        url: 'https://source.unsplash.com/featured/?glass-building',
        width: 1200,
        height: 630,
        alt: 'GelasKaca',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-[72px]"> {/* Adjust padding-top based on Navbar height */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
