import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold gold-gradient mb-4">Suvarna</h3>
            <p className="text-gray-300 mb-4">Platform investasi emas digital berbasis blockchain yang aman, transparan, dan terpercaya.</p>
            <div className="flex space-x-4">
              <a href="https://github.com/Latiffhl/suvarna-gold-chain-main" className="text-gray-300 hover:text-gold-300">
                <span className="sr-only">Github</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.252-4.555-1.11-4.555-4.944 0-1.091.39-1.984 1.03-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.026 2.748-1.026.546 1.377.203 2.394.1 2.647.64.699 1.029 1.592 1.029 2.683 0 3.842-2.337 4.688-4.566 4.935.359.309.678.919.678 1.852 0 1.337-.012 2.419-.012 2.747 0 .268.18.58.688.481C19.137 20.162 22 16.417 22 12c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Produk</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-gold-300">
                  Token Emas Digital
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gold-300">
                  Wallet
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gold-300">
                  Tabungan Emas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gold-300">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Perusahaan</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-gold-300">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gold-300">
                  Karir
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gold-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gold-300">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Berlangganan</h4>
            <p className="text-gray-300 mb-4">Dapatkan info terbaru tentang produk dan harga emas</p>
            <div className="flex">
              <input type="email" placeholder="Email Anda" className="bg-navy-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-1 focus:ring-gold-400" />
              <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 rounded-l-none">Kirim</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© {currentYear} Suvarna. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-gold-300">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-300">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-300">
                Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
