import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-white dark:bg-navy-500 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Tentang <span className="gold-gradient">Suvarna</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">Platform investasi emas digital berbasis blockchain yang aman, transparan, dan terpercaya.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="flex items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Misi Kami</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Misi kami adalah untuk demokratisasi investasi emas dan membuat aset yang dahulunya sulit diakses menjadi dapat dijangkau oleh semua orang Indonesia.</p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Dengan teknologi blockchain, kami menciptakan platform yang transparan, aman, dan efisien untuk berinvestasi dalam emas digital dengan minimum investasi yang rendah.
                </p>
              </div>
            </div>
            <div>
              <AspectRatio ratio={16 / 9} className="bg-white-100 rounded-xl overflow-hidden">
                <img src="/assets/img/about/about2.png" alt="Suvarna Mission" className="object-cover w-full h-full" />
              </AspectRatio>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="order-2 lg:order-1">
              <AspectRatio ratio={16 / 9} className="bg-white-100 rounded-xl overflow-hidden">
                <img src="/assets/img/about/about1.png" alt="Suvarna Vision" className="object-cover w-full h-full" />
              </AspectRatio>
            </div>
            <div className="order-1 lg:order-2 flex items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Visi Kami</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Kami memvisualisasikan masa depan di mana semua orang Indonesia memiliki akses ke investasi emas berkualitas tinggi yang dikelola dengan teknologi blockchain modern.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">Suvarna bertujuan untuk menjadi platform investasi emas digital terbesar di Indonesia yang dikenal karena keamanan, transparansi, dan kepercayaan pelanggan.</p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-8">Nilai-Nilai Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-t-4 border-t-gold-500 transition-transform duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2 gold-gradient">Transparansi</h3>
                  <p className="text-gray-600 dark:text-gray-300">Kami percaya pada transparansi penuh dalam semua operasi bisnis kami.</p>
                </CardContent>
              </Card>
              <Card className="border-t-4 border-t-gold-500 transition-transform duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2 gold-gradient">Keamanan</h3>
                  <p className="text-gray-600 dark:text-gray-300">Keamanan investasi pelanggan adalah prioritas utama dalam setiap keputusan kami.</p>
                </CardContent>
              </Card>
              <Card className="border-t-4 border-t-gold-500 transition-transform duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2 gold-gradient">Inovasi</h3>
                  <p className="text-gray-600 dark:text-gray-300">Kami terus berinovasi untuk memberikan layanan investasi emas terbaik.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
