
import { 
  ShieldCheck, 
  BarChart, 
  Lock, 
  FileText,
  Database,
  Wallet
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-gold-400" />,
      title: "Tokenisasi Emas",
      description: "Setiap token mewakili kepemilikan emas fisik yang disimpan di fasilitas penyimpanan bersertifikat."
    },
    {
      icon: <Lock className="h-10 w-10 text-gold-400" />,
      title: "Keamanan Blockchain",
      description: "Teknologi blockchain menjamin transaksi yang aman, transparan, dan tidak dapat dimanipulasi."
    },
    {
      icon: <FileText className="h-10 w-10 text-gold-400" />,
      title: "Audit Trail Transparan",
      description: "Lacak riwayat kepemilikan emas dan verifikasi secara real-time melalui smart contract."
    },
    {
      icon: <Database className="h-10 w-10 text-gold-400" />,
      title: "Penyimpanan Emas Fisik",
      description: "Emas fisik disimpan di fasilitas penyimpanan berkeamanan tinggi dengan jaminan asuransi penuh."
    },
    {
      icon: <BarChart className="h-10 w-10 text-gold-400" />,
      title: "Analisis Investasi",
      description: "Dashboard analitik untuk memantau pertumbuhan investasi emas Anda dari waktu ke waktu."
    },
    {
      icon: <Wallet className="h-10 w-10 text-gold-400" />,
      title: "Likuiditas Tinggi",
      description: "Beli dan jual emas kapan saja dengan spread rendah dan tanpa biaya penyimpanan."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50 dark:bg-navy-700/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fitur Utama Suvarna</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Platform investasi emas digital yang aman, transparan, dan didukung oleh teknologi blockchain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-navy-600 rounded-xl shadow-md p-6 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
