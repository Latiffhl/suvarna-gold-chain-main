export default function Trust() {
  const partners = [
    { name: 'Antam', logo: '/assets/img/mitra/mitra1.png' },
    { name: 'Pegadaian', logo: '/assets/img/mitra/mitra3.png' },
    { name: 'Bank Negara Indonesia', logo: '/assets/img/mitra/mitra2.png' },
    { name: 'Blockchain Association', logo: '/assets/img/mitra/mitra4.png' },
  ];

  const certifications = [
    { name: 'ISO 27001', logo: '/assets/img/sertifikasi/sertifikasi1.png' },
    { name: 'Smart Contract Audit', logo: '/assets/img/sertifikasi/sertifikasi2.png' },
    { name: 'PPATK Registered', logo: '/assets/img/sertifikasi/sertifikasi3.webp' },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-navy-700/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dipercaya & Didukung</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Kami berkomitmen untuk menjaga keamanan dan transparansi dengan standar industri tertinggi</p>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 text-center">Mitra Resmi</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white dark:bg-navy-600 rounded-lg p-4 flex items-center justify-center shadow-sm animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <img src={partner.logo} alt={partner.name} className="h-12 w-auto" />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 text-center">Sertifikasi & Keamanan</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col items-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-white dark:bg-navy-600 rounded-full p-4 shadow-md mb-3">
                  <img src={cert.logo} alt={cert.name} className="h-16 w-16" />
                </div>
                <span className="font-medium">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-center">Testimoni Pengguna</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white dark:bg-navy-600 rounded-lg p-6 shadow-md animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-navy-500 mr-4"></div>
                  <div>
                    <h4 className="font-bold">Pengguna {index + 1}</h4>
                    <div className="flex text-gold-400">{'★'.repeat(5)}</div>
                  </div>
                </div>
                <p className="text-muted-foreground">"Platform investasi emas digital terbaik yang pernah saya gunakan. Aman, transparan, dan sangat mudah digunakan."</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
