'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, User, Loader2, AlertCircle, ArrowLeft, ChevronRight } from 'lucide-react';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    const validUsers = ['admin', 'delivery'];
    if (!validUsers.includes(username.toLowerCase())) {
      setError('Usuário não cadastrado no sistema.');
      setIsLoading(false);
      return;
    }

    if (password !== '0000') {
      setError('Senha incorreta. Tente novamente.');
      setIsLoading(false);
      return;
    }

    const routes: Record<string, string> = {
      admin: '/establishment',
      delivery: '/delivery'
    };

    router.push(routes[username.toLowerCase()]);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden font-sans">
      
      {/* Elementos Decorativos de Fundo (Blur) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-green/10 rounded-full blur-[120px]" />

      <div className="w-full max-w-[440px] z-10">
        
        {/* Voltar para Home */}
        <button 
          onClick={() => router.push('/')}
          className="group mb-8 flex items-center gap-2 text-muted hover:text-secondary transition-colors font-bold text-xs uppercase tracking-widest"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Voltar para o Menu
        </button>

        {/* Logo Section */}
        <div className="mb-10 flex flex-col items-center">
          <div className="w-20 h-20 bg-card border border-halli-border rounded-[2rem] flex items-center justify-center shadow-2xl mb-4">
             <img 
                src="https://img.icons8.com/?size=100&id=qBglhZbOPz3l&format=png&color=831843" 
                alt="Logo" 
                className="w-12 h-12 grayscale invert opacity-80" 
              />
          </div>
          <h1 className="text-5xl font-black text-foreground tracking-tighter italic uppercase leading-none">
            Halli
          </h1>
        </div>

        {/* Login Card */}
        <div className="bg-card/50 backdrop-blur-xl border border-halli-border rounded-[3rem] p-10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] relative overflow-hidden">
          
          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Input Usuário */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted/60 ml-2">Identificação</label>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-secondary transition-colors">
                  <User size={20} />
                </div>
                <input 
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Seu usuário (admin/user/delivery)"
                  className="w-full pl-14 pr-6 py-5 bg-background border border-halli-border rounded-[1.5rem] text-foreground font-medium placeholder:text-muted/40 focus:outline-none focus:ring-4 focus:ring-secondary/5 focus:border-secondary transition-all shadow-inner"
                  required
                />
              </div>
            </div>

            {/* Input Senha */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted/60">Senha de Acesso</label>
                <button type="button" className="text-[10px] font-bold text-secondary hover:underline">Esqueceu?</button>
              </div>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-secondary transition-colors">
                  <Lock size={20} />
                </div>
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-14 pr-6 py-5 bg-background border border-halli-border rounded-[1.5rem] text-foreground font-medium placeholder:text-muted/40 focus:outline-none focus:ring-4 focus:ring-secondary/5 focus:border-secondary transition-all shadow-inner"
                  required
                />
              </div>
            </div>

            {/* Erro */}
            {error && (
              <div className="flex items-center gap-3 text-red-500 bg-red-500/5 border border-red-500/10 p-4 rounded-2xl animate-in fade-in zoom-in duration-300">
                <AlertCircle size={20} className="shrink-0" />
                <span className="text-xs font-bold leading-tight">{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-secondary hover:bg-secondary/90 text-white py-5 rounded-[1.5rem] font-black text-base shadow-[0_12px_24px_-6px_rgba(131,24,67,0.3)] transition-all active:scale-[0.97] flex items-center justify-center gap-3 disabled:opacity-70 group overflow-hidden relative"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={22} />
                  <span className="tracking-widest uppercase text-sm">Validando credenciais...</span>
                </>
              ) : (
                <>
                  <span className="tracking-widest uppercase text-sm">Acessar Painel</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-[10px] font-black text-muted/40 uppercase tracking-[0.3em]">
            Copyright © 2026 Halli
          </p>
        </div>
      </div>
    </div>
  );
}