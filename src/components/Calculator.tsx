import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';

export default function Calculator() {
  const [investment, setInvestment] = useState(1000000); // Rp 1,000,000
  const [goldPrice, setGoldPrice] = useState(1886000); // Rp 1,050,000 per gram
  const [goldAmount, setGoldAmount] = useState(0);
  const [years, setYears] = useState(5);
  const [projectedValue, setProjectedValue] = useState(0);

  // Historical annual return of gold (approximately 10%)
  const annualReturn = 0.1;

  // Calculate gold amount and projected value
  useEffect(() => {
    const goldGrams = investment / goldPrice;
    setGoldAmount(goldGrams);

    // Compound interest formula: FV = PV * (1 + r)^t
    const futureValue = investment * Math.pow(1 + annualReturn, years);
    setProjectedValue(futureValue);
  }, [investment, goldPrice, years]);

  // Format number to IDR
  const formatToIdr = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="calculator" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2 animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simulasi Investasi Emas</h2>
            <p className="text-lg text-muted-foreground mb-6">Coba simulasikan berapa gram emas yang bisa kamu dapatkan dan proyeksi nilainya di masa depan.</p>

            <div className="bg-white dark:bg-navy-600 rounded-xl shadow-md p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Jumlah Investasi</label>
                  <div className="relative">
                    <Input type="number" value={investment} onChange={(e) => setInvestment(Number(e.target.value))} className="pl-12 text-lg font-medium" />
                    <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none text-muted-foreground">Rp</div>
                  </div>
                  <Slider defaultValue={[1000000]} max={10000000} step={100000} onValueChange={(value) => setInvestment(value[0])} className="mt-4" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Rp100rb</span>
                    <span>Rp10jt</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Jangka Waktu Investasi</label>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-medium">{years} Tahun</span>
                  </div>
                  <Slider defaultValue={[5]} min={1} max={20} step={1} onValueChange={(value) => setYears(value[0])} />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1 Tahun</span>
                    <span>20 Tahun</span>
                  </div>
                </div>

                <Button className="btn-primary w-full">Mulai Investasi Sekarang</Button>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 animate-fade-in-right">
            <div className="bg-gradient-to-br from-gold-50 to-white dark:from-navy-800 dark:to-navy-700 rounded-xl shadow-lg p-6 md:p-8 border border-gold-100 dark:border-gold-900/20">
              <h3 className="text-xl font-bold mb-6">Hasil Simulasi</h3>

              <div className="space-y-8">
                <div>
                  <p className="text-muted-foreground mb-1">Dengan investasi {formatToIdr(investment)}</p>
                  <div className="flex items-end">
                    <span className="text-3xl font-bold gold-gradient">{goldAmount.toFixed(2)} gram</span>
                    <span className="ml-2 text-muted-foreground">emas</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Berdasarkan harga emas saat ini: {formatToIdr(goldPrice)}/gram</p>
                </div>

                <div className="border-t border-gold-100 dark:border-navy-600 pt-6">
                  <p className="text-muted-foreground mb-1">Proyeksi nilai setelah {years} tahun:</p>
                  <div className="flex items-end">
                    <span className="text-3xl font-bold gold-gradient">{formatToIdr(projectedValue)}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">*Asumsi rata-rata kenaikan nilai emas 10% per tahun</p>
                </div>

                <div className="bg-gold-50 dark:bg-navy-700/50 rounded-lg p-4">
                  <p className="text-sm">
                    <span className="font-medium text-gold-600 dark:text-gold-400">Ketahui:</span> Nilai investasi dapat naik atau turun. Data historis tidak menjamin hasil di masa depan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
