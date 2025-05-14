import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export default function Hero() {
  const { toast } = useToast();

  const handleBuyGold = () => {
    toast({
      title: 'Beli Emas',
      description: 'Fitur pembelian emas akan segera tersedia!',
      duration: 3000,
    });
  };

  const handleDownloadApp = () => {
    toast({
      title: 'Download Aplikasi',
      description: 'Aplikasi Suvarna akan segera tersedia di Play Store dan App Store!',
      duration: 3000,
    });
  };

  const handleStartInvesting = () => {
    toast({
      title: 'Mulai Investasi',
      description: 'Fitur investasi akan segera tersedia!',
      duration: 3000,
    });
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Investasi Emas <span className="gold-gradient">Aman & Digital</span> Berbasis Blockchain
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">Miliki emas fisik dengan token digital. Investasi aman, transparan, dan likuid dengan teknologi blockchain.</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-primary animate-pulse-gold" onClick={handleBuyGold}>
                Beli Emas Sekarang
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="btn-outline">Download Aplikasi</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Download Aplikasi Suvarna</DialogTitle>
                  </DialogHeader>
                  <div className="py-4">
                    <p>Aplikasi Suvarna akan segera tersedia di:</p>
                    <div className="flex gap-4 mt-4">
                      <Button onClick={handleDownloadApp} className="flex-1">
                        Play Store
                      </Button>
                      <Button onClick={handleDownloadApp} className="flex-1">
                        App Store
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center text-xs text-gold-700">+3k</div>
                <div className="w-8 h-8 rounded-full bg-navy-100 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-navy-200 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-navy-300 border-2 border-white"></div>
              </div>
              <p className="text-sm text-muted-foreground">
                Bergabung dengan <span className="text-gold-500 font-medium">3,000+</span> investor emas digital
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-300/30 to-navy-500/30 rounded-3xl transform rotate-6 blur-xl"></div>
              <div className="relative bg-gradient-to-br from-white via-gold-50 to-white dark:from-navy-700 dark:via-navy-600 dark:to-navy-700 p-1 rounded-3xl shadow-2xl">
                <div className="bg-white dark:bg-navy-800 rounded-3xl p-6 md:p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2">Token Emas Digital</h3>
                    <div className="bg-gold-50 dark:bg-navy-700 rounded-lg p-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-muted-foreground">1 SVGLD</span>
                        <span className="font-medium">1 gram emas</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Harga</span>
                        <span className="font-bold text-gold-500">Rp1.886.000</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-green-500"></div>
                      <span>Diaudit & Tersertifikasi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                      <span>100% Backed by Physical Gold</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                      <span>Blockchain Security</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="btn-primary w-full" onClick={handleStartInvesting}>
                      Mulai Investasi
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
