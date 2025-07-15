import HeroSection from '@/components/HeroSection';
import GlassTypeCard from '@/components/GlassTypeCard';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const glassTypes = [
    {
      title: 'Kaca Tempered',
      description: 'Kaca yang diperkuat melalui proses pemanasan dan pendinginan cepat, membuatnya 4-5 kali lebih kuat dari kaca biasa dan pecah menjadi fragmen kecil yang aman.',
      imageUrl: 'https://source.unsplash.com/featured/?tempered-glass,safety',
    },
    {
      title: 'Kaca Laminated',
      description: 'Terdiri dari dua atau lebih lembaran kaca yang disatukan oleh lapisan interlayer (PVB/EVA), memberikan keamanan tinggi karena tidak pecah berhamburan saat retak.',
      imageUrl: 'https://source.unsplash.com/featured/?laminated-glass,security',
    },
    {
      title: 'Kaca Low-E (Low Emissivity)',
      description: 'Dirancang untuk meminimalkan jumlah sinar ultraviolet dan inframerah yang melewati kaca tanpa mengorbankan jumlah cahaya yang masuk, meningkatkan efisiensi energi.',
      imageUrl: 'https://source.unsplash.com/featured/?low-e-glass,energy-efficient',
    },
    {
      title: 'Kaca Frosted (Kaca Buram)',
      description: 'Kaca yang diolah untuk menciptakan permukaan buram atau semi-transparan, memberikan privasi sambil tetap memungkinkan cahaya masuk. Ideal untuk kamar mandi atau kantor.',
      imageUrl: 'https://source.unsplash.com/featured/?frosted-glass,privacy',
    },
    {
      title: 'Kaca Insulated (IGU)',
      description: 'Terdiri dari dua atau lebih panel kaca yang dipisahkan oleh ruang berisi gas, berfungsi sebagai isolator termal dan akustik yang sangat baik.',
      imageUrl: 'https://source.unsplash.com/featured/?insulated-glass,soundproof',
    },
    {
      title: 'Kaca Bermotif (Patterned Glass)',
      description: 'Kaca dengan pola atau tekstur yang dicetak pada permukaannya, menambahkan elemen dekoratif dan privasi parsial. Tersedia dalam berbagai desain.',
      imageUrl: 'https://source.unsplash.com/featured/?patterned-glass,decorative',
    },
  ];

  return (
    <>
      <HeroSection />

      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-dark mb-12">
            Produk Kaca Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {glassTypes.map((glass, index) => (
              <GlassTypeCard
                key={index}
                title={glass.title}
                description={glass.description}
                imageUrl={glass.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
      <ContactSection />
    </>
  );
}
