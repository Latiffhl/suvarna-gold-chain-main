
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { handleLogin, handleSignUp } from "@/lib/auth";

type LoginModalProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
};

export default function LoginModal({ children, fullWidth = false }: LoginModalProps) {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLoginMode) {
        await handleLogin(email, password);
        toast({
          title: "Login Berhasil",
          description: "Anda berhasil login ke akun Suvarna.",
        });
      } else {
        await handleSignUp(email, password);
        toast({
          title: "Pendaftaran Berhasil",
          description: "Akun Suvarna Anda berhasil dibuat.",
        });
      }
    } catch (error) {
      toast({
        title: "Gagal",
        description: "Terjadi kesalahan. Silakan coba lagi.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={fullWidth ? "w-full" : ""}>
          {children}
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {isLoginMode ? "Login ke Akun Anda" : "Daftar Akun Baru"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="email@contoh.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="btn-primary w-full" disabled={isLoading}>
            {isLoading
              ? "Memproses..."
              : isLoginMode
              ? "Masuk"
              : "Daftar"}
          </Button>

          <div className="text-center text-sm">
            {isLoginMode ? "Belum punya akun? " : "Sudah punya akun? "}
            <button
              type="button"
              className="text-gold-500 hover:underline font-medium"
              onClick={() => setIsLoginMode(!isLoginMode)}
            >
              {isLoginMode ? "Daftar" : "Login"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
