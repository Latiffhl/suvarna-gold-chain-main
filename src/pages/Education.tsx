
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Shield, Database, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-12 text-center animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gold-gradient">Edukasi</span> Emas Digital
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-700 dark:text-gray-300">
            Pelajari tentang investasi emas digital berbasis blockchain dan cloud computing untuk
            masa depan finansial yang lebih cerah
          </p>
        </div>

        {/* What is Digital Gold Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">Apa Itu Emas Digital?</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                Emas digital adalah aset digital yang nilainya didukung oleh emas fisik. Setiap token 
                atau unit emas digital mewakili kepemilikan sejumlah emas fisik tertentu yang disimpan 
                di fasilitas penyimpanan yang aman.
              </p>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                Dengan Suvarna, Anda memiliki emas secara digital melalui teknologi blockchain, yang 
                menjamin transparansi, keamanan, dan kemudahan transaksi tanpa perlu menyimpan emas fisik.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white dark:bg-navy-600 p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h3 className="text-xl font-semibold mb-4 gold-gradient">Keunggulan Emas Digital</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <ArrowRight className="text-amber-500 mr-2 mt-1 h-5 w-5" />
                      <span>Likuiditas tinggi - jual beli kapan saja</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-amber-500 mr-2 mt-1 h-5 w-5" />
                      <span>Tidak ada biaya penyimpanan dan asuransi</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-amber-500 mr-2 mt-1 h-5 w-5" />
                      <span>Transaksi instan 24/7</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-amber-500 mr-2 mt-1 h-5 w-5" />
                      <span>Pecahan kecil mulai dari 0.001 gram</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-navy-600 p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h3 className="text-xl font-semibold mb-4 gold-gradient">Perbedaan dari Emas Fisik</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <ArrowRight className="text-amber-500 mr-2 mt-1 h-5 w-5" />
                      <span>Tidak perlu tempat penyimpanan fisik</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-amber-500 mr-2 mt-1 h-5 w-5" />
                      <span>Lebih mudah dijual kembali</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-amber-500 mr-2 mt-1 h-5 w-5" />
                      <span>Terlacak dalam blockchain</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="text-amber-500 mr-2 mt-1 h-5 w-5" />
                      <span>Dapat diakses dari mana saja</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blockchain Technology Section */}
        <section className="py-16 bg-white dark:bg-navy-500 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">Teknologi Blockchain</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                Blockchain adalah teknologi buku besar terdistribusi yang menyimpan data dalam blok-blok yang 
                terhubung dan aman. Dalam konteks emas digital, blockchain menyediakan:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-navy-600 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <Shield className="h-16 w-16 text-amber-500 mb-4 animate-pulse-gold" />
                  <h3 className="text-lg font-semibold mb-2">Keamanan Tinggi</h3>
                  <p className="text-center text-gray-700 dark:text-gray-300">
                    Data terenkripsi dan tidak bisa diubah, melindungi kepemilikan Anda dari manipulasi.
                  </p>
                </div>

                <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-navy-600 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <Layers className="h-16 w-16 text-amber-500 mb-4 animate-pulse-gold" />
                  <h3 className="text-lg font-semibold mb-2">Transparansi</h3>
                  <p className="text-center text-gray-700 dark:text-gray-300">
                    Semua transaksi tercatat dan dapat diverifikasi oleh siapa saja pada jaringan.
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-amber-50 dark:bg-navy-700 p-6 rounded-xl border border-amber-200 dark:border-amber-700 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Smart Contract</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Suvarna menggunakan smart contract pada blockchain untuk memastikan bahwa setiap token digital 
                  yang beredar didukung oleh emas fisik di brankas. Smart contract ini diaudit secara berkala dan 
                  terbuka untuk diinspeksi oleh siapapun.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Computing Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900 animate-fade-in" style={{ animationDelay: "300ms" }}>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">Cloud Computing</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                Cloud computing memungkinkan Suvarna untuk menyediakan layanan yang andal, aman, dan 
                dapat diakses dari mana saja dan kapan saja.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="flex flex-col items-center p-6 bg-white dark:bg-navy-600 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <Cloud className="h-16 w-16 text-amber-500 mb-4 animate-pulse-gold" />
                  <h3 className="text-lg font-semibold mb-2">Skalabilitas</h3>
                  <p className="text-center text-gray-700 dark:text-gray-300">
                    Infrastruktur yang dapat disesuaikan dengan jumlah pengguna dan volume transaksi.
                  </p>
                </div>

                <div className="flex flex-col items-center p-6 bg-white dark:bg-navy-600 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <Database className="h-16 w-16 text-amber-500 mb-4 animate-pulse-gold" />
                  <h3 className="text-lg font-semibold mb-2">Ketersediaan Tinggi</h3>
                  <p className="text-center text-gray-700 dark:text-gray-300">
                    Sistem yang selalu online dengan backup terdistribusi dan perlindungan terhadap bencana.
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 border-l-4 border-amber-500 bg-amber-50 dark:bg-navy-700 transition-all duration-300 hover:border-amber-600">
                <p className="italic text-gray-700 dark:text-gray-300">
                  "Kombinasi blockchain dan cloud computing menciptakan fondasi teknologi yang kuat untuk 
                  investasi emas digital yang aman, transparan, dan mudah diakses."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white dark:bg-navy-500 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Siap Untuk Berinvestasi Emas Digital?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              Mulai perjalanan investasi emas digital Anda bersama Suvarna dan nikmati 
              keamanan blockchain dan kemudahan cloud computing.
            </p>
            <Link to="/#calculator">
              <Button className="btn-primary text-lg px-8 py-6 h-auto transition-all duration-300 hover:scale-105">
                Simulasi Investasi Sekarang
              </Button>
            </Link>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Education;
