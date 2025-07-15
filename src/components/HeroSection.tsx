import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <Image
        src="https://source.unsplash.com/featured/?glass,architecture,modern-building"
        alt="Modern Glass Architecture"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="relative z-20 text-white p-6 md:p-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
          Elegansi dan Kekuatan dalam Setiap Kaca
        </h1>
        <p className="text-lg md:text-xl mb-8 animate-fade-in-up delay-200">
          Menyediakan berbagai jenis kaca berkualitas tinggi untuk kebutuhan arsitektur dan interior Anda.
        </p>
        <a
          href="/#products"
          className="inline-block bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up delay-400"
        >
          Lihat Produk Kami
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
