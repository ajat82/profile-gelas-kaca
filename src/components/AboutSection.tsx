const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-dark mb-12">
          Tentang GelasKaca
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              GelasKaca adalah penyedia solusi kaca terkemuka yang berdedikasi untuk menghadirkan kualitas dan inovasi terbaik dalam setiap proyek. Dengan pengalaman bertahun-tahun di industri, kami memahami pentingnya kaca yang tidak hanya estetis tetapi juga fungsional dan aman.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Kami berkomitmen untuk menyediakan beragam produk kaca, mulai dari kaca tempered yang kuat hingga kaca laminasi yang aman, serta solusi kaca hemat energi. Tim ahli kami siap membantu Anda memilih produk yang tepat dan memberikan layanan pemasangan profesional.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://source.unsplash.com/featured/?glass-factory,glass-production"
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
