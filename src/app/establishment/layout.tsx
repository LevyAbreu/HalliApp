'use client';

import { LayoutDashboard, UtensilsCrossed, BarChart3, UserCircle, LogOut } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function EstablishmentLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const menuOptions = [
    { icon: <LayoutDashboard size={22} />, label: "Home", path: "/establishment" },
    { icon: <UtensilsCrossed size={22} />, label: "Menu", path: "/establishment/menu" },
    { icon: <BarChart3 size={22} />, label: "Financeiro", path: "/establishment/finance" },
    { icon: <UserCircle size={22} />, label: "Perfil", path: "/establishment/profile" },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="w-20 hover:w-64 bg-secondary border-r border-white/10 flex flex-col fixed h-full z-50 transition-all duration-300 ease-in-out group overflow-hidden">
        
        {/* Logo Area */}
        <div className="p-6 flex items-center gap-4 min-w-[256px]">
          <div className="w-9 h-9 flex items-center justify-center shrink-0">
            <img 
              src="https://img.icons8.com/?size=100&id=qBglhZbOPz3l&format=png&color=FFFFFF" 
              alt="Logo" 
              className="w-9 h-9 grayscale invert" 
            />
          </div>
          {/* Opacidade 0 por padrão, 100 quando a sidebar sofre hover */}
          <span className="font-black text-white tracking-tighter italic text-xl uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Halli
          </span>
        </div>

        {/* Menu Navigation */}
        <nav className="flex-1 p-4 space-y-4">
          {menuOptions.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              title={item.label} // Tooltip para quando estiver fechado
              className={`flex items-center gap-4 px-3 py-3 rounded-xl font-bold transition-all min-w-[200px] ${
                pathname === item.path 
                ? 'bg-white text-secondary shadow-lg' 
                : 'text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              <div className="shrink-0">
                {item.icon}
              </div>
              <span className="text-sm tracking-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Footer Sidebar */}
        <div className="p-4 border-t border-white/10">
          <button 
            onClick={() => router.push('/login')}
            className="w-full flex items-center gap-4 px-3 py-3 rounded-xl font-bold text-white/60 hover:bg-red-500/20 hover:text-red-400 transition-all min-w-[200px]"
          >
            <div className="shrink-0">
                <LogOut size={22} />
            </div>
            <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Sair</span>
          </button>
        </div>
      </aside>

      {/* Área de Conteúdo 
          - ML-20: Margem esquerda fixa para não ficar atrás da sidebar fechada
      */}
      <main className="flex-1 ml-20 p-8 transition-all">
        {children}
      </main>
    </div>
  );
}