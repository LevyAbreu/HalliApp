'use client';

import { useState } from 'react';
import Navbar from '@/components/ui/nav';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import Cart from '@/components/Cart';
import { useCart } from '@/hooks/useCart';
import { useFilter } from '@/hooks/useFilter';
import { ShoppingBag, Search, ChevronDown, X } from 'lucide-react';

export default function Home() {
  const { cartItems, updateQuantity, total } = useCart();
  const { 
    busca, 
    setBusca, 
    categoriaAtiva, 
    setCategoriaAtiva, 
    isDropdownOpen, 
    setIsDropdownOpen, 
    produtosFiltrados, 
    categoriasParaExibir,
    categoriasDisponiveis 
  } = useFilter();

  const [isCartOpen, setIsCartOpen] = useState(false);

  const labels: Record<string, string> = {
    proteinas: "Proteínas",
    acompanhamentos: "Acompanhamentos",
    saladas: "Saladas",
    massas: "Massas",
    extras: "Molhos e Extras"
  };

  const formatTitle = (title: string) => labels[title] || title.toUpperCase();

  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0 font-sans text-foreground">
      {/* Navbar - Utilizando a cor vinho (--secondary) */}
      <Navbar />

      <main className="max-w-7xl mx-auto p-4 md:p-6">
        <Header />

        {/* --- FILTROS --- */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mt-6 relative">
          <div className="relative w-full md:w-64">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 bg-card border border-halli-border px-4 py-2.5 rounded-lg text-foreground font-semibold w-full justify-between hover:bg-background shadow-sm transition-colors"
            >
              {categoriaAtiva ? formatTitle(categoriaAtiva) : "Lista de categorias"}
              <ChevronDown size={16} className={`text-muted transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-full mt-2 bg-card border border-halli-border rounded-lg shadow-xl z-30 py-1 overflow-hidden">
                <button 
                  onClick={() => { setCategoriaAtiva(null); setIsDropdownOpen(false); }}
                  className="w-full text-left px-4 py-2.5 text-foreground hover:bg-secondary/5 hover:text-secondary transition-colors border-b border-halli-border"
                >
                  Todas as categorias
                </button>
                {categoriasDisponiveis.map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => { setCategoriaAtiva(cat); setIsDropdownOpen(false); }}
                    className="w-full text-left px-4 py-2.5 text-sm text-foreground hover:bg-secondary/5 hover:text-secondary transition-colors"
                  >
                    {formatTitle(cat)}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
            <input 
              type="text" 
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Busque por um produto"
              className="w-full pl-12 pr-10 py-2.5 bg-card border border-halli-border rounded-lg text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all shadow-sm"
            />
          </div>
        </div>

        {/* --- GRID DE PRODUTOS --- */}
        <div className="grid grid-cols-12 gap-0 md:gap-8 mt-8">
          <div className="col-span-12 lg:col-span-8 space-y-10">
            {categoriasParaExibir.map((cat) => (
              <section key={cat}>
                <h2 className="text-lg md:text-xl font-bold mb-4 text-foreground uppercase border-b-2 border-secondary/20 pb-2 tracking-widest">
                  {formatTitle(cat)}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {produtosFiltrados
                    .filter(item => item.category === cat)
                    .map((item) => {
                      const cartItem = cartItems.find(i => i.id === item.id);
                      return (
                        <ProductCard 
                          key={item.id}
                          {...item}
                          quantity={cartItem?.quantity || 0}
                          onAdd={() => updateQuantity(item, 1)}
                          onRemove={() => updateQuantity(item, -1)}
                        />
                      );
                    })}
                </div>
              </section>
            ))}
          </div>

          {/* Coluna Lateral - Sacola Desktop */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24">
              <Cart items={cartItems} total={total} />
            </div>
          </aside>
        </div>
      </main>

      {/* --- LÓGICA DA SACOLA MOBILE (DRAWER) --- */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-brand-black/40 z-40 lg:hidden backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      <div className={`
        lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-halli-border rounded-t-3xl shadow-2xl transition-all duration-500 ease-in-out
        ${isCartOpen ? 'h-[85vh] translate-y-0' : 'h-0 translate-y-full'}
      `}>
        <div className="flex justify-center p-3" onClick={() => setIsCartOpen(false)}>
          <div className="w-12 h-1.5 bg-halli-border rounded-full cursor-pointer" />
        </div>

        <div className="p-4 overflow-y-auto h-full pb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-foreground">Minha Sacola</h2>
            <button onClick={() => setIsCartOpen(false)} className="p-2 bg-background text-muted rounded-full">
              <X size={20} />
            </button>
          </div>
          <Cart items={cartItems} total={total} />
        </div>
      </div>

      {/* Botão Flutuante Mobile - Utilizando brand-green para ação principal */}
      {total > 0 && !isCartOpen && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-lg border-t border-halli-border z-40">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="w-full bg-brand-green hover:bg-emerald-600 text-white flex items-center justify-between px-6 py-4 rounded-2xl font-bold shadow-lg transition-transform active:scale-95"
          >
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} />
              <span>Ver sacola ({cartItems.length})</span>
            </div>
            <span className="bg-black/10 px-3 py-1 rounded-lg">R$ {total.toFixed(2)}</span>
          </button>
        </div>
      )}
      {/* --- RODAPÉ --- */}
      <footer className="bg-brand-black border-t border-halli-border mt-20 py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border border-white/20 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden shadow-inner">
              <img 
                  src="https://st4.depositphotos.com/1496387/38299/v/450/depositphotos_382990074-stock-illustration-hand-drawn-logo-cooking-menu.jpg" 
                  alt="Logo" 
                  className="w-full h-full object-cover grayscale invert opacity-90"
              />
            </div>
            <h1 className="text-sm md:text-2xl font-bold tracking-tighter text-muted tracking-tighter italic">
              Halli
            </h1>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-muted font-medium">
              Developed by <span className="text-secondary hover:underline cursor-pointer">Levy Abreu</span> — 2026.
            </p>
            <p className="text-[10px] text-muted/60 uppercase tracking-[0.2em]">
              © Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}