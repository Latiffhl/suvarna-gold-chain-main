import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GoldPriceData {
  open: number;
  high: number;
  low: number;
  close: number;
  exchange: string;
  timestamp: number;
  price?: number;
}

const fetchGoldPrice = async (): Promise<GoldPriceData> => {
  // Using the provided fetch implementation
  const myHeaders = new Headers();
  myHeaders.append('x-access-token', 'goldapi-300csmanklzj3-io');
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow' as RequestRedirect,
  };

  try {
    const response = await fetch('https://www.goldapi.io/api/XAU/USD', requestOptions);

    if (!response.ok) {
      throw new Error('API request failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching gold price:', error);
    // Fallback data if API fails
    return {
      open: 3250.225,
      high: 3257.2,
      low: 3140.92,
      close: 3154.92,
      exchange: 'DEMO',
      timestamp: Date.now(),
      price: 3154.92,
    };
  }
};

export default function GoldPrice() {
  const { toast } = useToast();
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const { data, isLoading, error } = useQuery({
    queryKey: ['goldPrice'],
    queryFn: fetchGoldPrice,
    refetchInterval: 60000, //refresh tiap 1 menit
    onSettled: (data) => {
      if (data) {
        setLastUpdate(new Date());
      }
    },
    onError: () => {
      toast({
        title: 'Gagal memuat data harga emas',
        description: 'Menggunakan data demo saat ini. Data akan otomatis diupdate saat koneksi kembali.',
        variant: 'destructive',
      });
    },
  });

  // Format IDR
  const formatPrice = (price: number | undefined) => {
    if (price === undefined || isNaN(price)) {
      return 'Data tidak tersedia';
    }

    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price * 16500);
  };

  // Format update time
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  // Toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`fixed top-40 right-0 z-10 w-25 animate-fade-in transition-all duration-300 ${isVisible ? 'translate-x-0' : 'translate-x-[calc(100%-32px)]'}`}>
      <Card className="bg-white/90 dark:bg-navy-500/90 backdrop-blur-md shadow-lg border border-gold-200 hover:border-gold-400 transition-all duration-300 transform hover:translate-y-1">
        <div onClick={toggleVisibility} className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-3 bg-amber-500 rounded-full p-1 cursor-pointer shadow-md hover:bg-amber-600 transition-all">
          {isVisible ? <ChevronRight className="h-4 w-4 text-white" /> : <ChevronLeft className="h-4 w-4 text-white" />}
        </div>
        <CardHeader className="py-3">
          <CardTitle className="text-lg gold-gradient flex items-center justify-between">
            Harga Emas Terkini
            {isLoading && <span className="animate-pulse">⟳</span>}
          </CardTitle>
        </CardHeader>
        <CardContent className={`py-2 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {error ? (
            <p className="text-red-500">Error memuat data. Menampilkan harga demo.</p>
          ) : (
            <>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600 dark:text-gray-300">Harga:</span>
                <span className="font-semibold">{data ? formatPrice(data.price || data.close) : 'Loading...'}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600 dark:text-gray-300">Tertinggi:</span>
                <span className="font-semibold">{data ? formatPrice(data.high) : 'Loading...'}</span>
              </div>
              <div className="flex justify-between mb-3">
                <span className="text-gray-600 dark:text-gray-300">Terendah:</span>
                <span className="font-semibold">{data ? formatPrice(data.low) : 'Loading...'}</span>
              </div>
              <div className="text-xs text-gray-500 text-right">Update terakhir: {formatTime(lastUpdate)}</div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
