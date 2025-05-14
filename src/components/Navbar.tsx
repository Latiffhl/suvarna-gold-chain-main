
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  const location = useLocation();

  const handleLogin = () => {
    toast({
      title: "Fitur Login",
      description: "Fitur login akan segera tersedia!",
    });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-navy-500/80 backdrop-blur-lg z-50 py-4 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold gold-gradient transition-all duration-300 hover:scale-105">Suvarna</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/#features" 
            className={`link-gold font-medium transition-all duration-200 hover:translate-y-[-2px] ${
              location.pathname === "/" ? "" : "opacity-75 hover:opacity-100"
            }`}
          >
            Fitur
          </Link>
          <Link 
            to="/#calculator" 
            className={`link-gold font-medium transition-all duration-200 hover:translate-y-[-2px] ${
              location.pathname === "/" ? "" : "opacity-75 hover:opacity-100"
            }`}
          >
            Simulasi
          </Link>
          <Link 
            to="/education" 
            className={`link-gold font-medium transition-all duration-200 hover:translate-y-[-2px] ${
              location.pathname === "/education" ? "text-amber-700 dark:text-amber-300" : ""
            }`}
          >
            Edukasi
          </Link>
          <Link 
            to="/about" 
            className={`link-gold font-medium transition-all duration-200 hover:translate-y-[-2px] ${
              location.pathname === "/about" ? "text-amber-700 dark:text-amber-300" : ""
            }`}
          >
            Tentang Kami
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="btn-primary transition-all duration-300 hover:scale-105">Login</Button>
            </DialogTrigger>
            <DialogContent className="animate-fade-in">
              <DialogHeader>
                <DialogTitle>Login Ke Akun Anda</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <p>Fitur login akan segera tersedia dalam waktu dekat.</p>
                <Button onClick={handleLogin} className="btn-primary w-full mt-4 transition-transform duration-300 hover:scale-105">Coming Soon</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Tutup Menu" : "Buka Menu"}
            className="transition-all duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-navy-500 shadow-lg py-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link
              to="/#features" 
              className="link-gold font-medium py-2 transition-all duration-200 hover:translate-x-2"
              onClick={closeMenu}
            >
              Fitur
            </Link>
            <Link
              to="/#calculator" 
              className="link-gold font-medium py-2 transition-all duration-200 hover:translate-x-2"
              onClick={closeMenu}
            >
              Simulasi
            </Link>
            <Link 
              to="/education" 
              className={`link-gold font-medium py-2 transition-all duration-200 hover:translate-x-2 ${
                location.pathname === "/education" ? "text-amber-700 dark:text-amber-300" : ""
              }`}
              onClick={closeMenu}
            >
              Edukasi
            </Link>
            <Link 
              to="/about" 
              className={`link-gold font-medium py-2 transition-all duration-200 hover:translate-x-2 ${
                location.pathname === "/about" ? "text-amber-700 dark:text-amber-300" : ""
              }`}
              onClick={closeMenu}
            >
              Tentang Kami
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="btn-primary w-full transition-all duration-300 hover:scale-105" onClick={closeMenu}>Login</Button>
              </DialogTrigger>
              <DialogContent className="animate-fade-in">
                <DialogHeader>
                  <DialogTitle>Login Ke Akun Anda</DialogTitle>
                </DialogHeader>
                <div className="py-4">
                  <p>Fitur login akan segera tersedia dalam waktu dekat.</p>
                  <Button onClick={handleLogin} className="btn-primary w-full mt-4 transition-all duration-300 hover:scale-105">Coming Soon</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}
    </nav>
  );
}
