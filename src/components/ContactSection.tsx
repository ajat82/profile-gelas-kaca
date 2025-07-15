const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-dark mb-12">
          Hubungi Kami
        </h2>
        <div className="max-w-3xl mx-auto bg-light p-8 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700 text-center mb-8">
            Tertarik dengan produk kaca kami atau memiliki pertanyaan? Jangan ragu untuk menghubungi kami!
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-800 text-lg font-medium mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Masukkan nama Anda"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-800 text-lg font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Masukkan email Anda"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-800 text-lg font-medium mb-2">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Tulis pesan Anda di sini..."
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
          <div className="mt-10 text-center text-gray-700">
            <p className="text-lg mb-2">Atau hubungi kami langsung:</p>
            <p className="text-xl font-semibold">Telepon: +62 812-3456-7890</p>
            <p className="text-xl font-semibold">Email: info@gelaskaca.com</p>
            <p className="text-md mt-4">Alamat: Jl. Kaca Indah No. 123, Jakarta, Indonesia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
