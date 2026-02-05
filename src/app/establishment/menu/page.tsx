'use client';

import { cardapio } from '@/utils/mockData';
import { Pencil, MoreVertical, Plus, Image as ImageIcon, Search } from 'lucide-react';
import { useState } from 'react';

export default function MenuManagement() {
  const [busca, setBusca] = useState('');

  // Filtro simples para facilitar a gestão
  const produtosFiltrados = cardapio.filter(item => 
    item.name.toLowerCase().includes(busca.toLowerCase()) ||
    item.category.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="animate-in fade-in duration-500">
      {/* HEADER */}
      <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight uppercase">
            Menu ({cardapio.length} itens)
          </h1>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Barra de Busca rápida */}
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
            <input 
              type="text"
              placeholder="Buscar no menu..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-card border border-halli-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
            />
          </div>
          
          <button className="bg-brand-green hover:bg-emerald-600 text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg transition-all active:scale-95 whitespace-nowrap">
            <Plus size={18} /> Incluir
          </button>
        </div>
      </header>

      {/* TABELA DE PRODUTOS */}
      <div className="bg-card border border-halli-border rounded-[2rem] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[10px] uppercase tracking-[0.2em] text-muted border-b border-halli-border bg-background/50">
                <th className="px-6 py-5 font-bold">Produto</th>
                <th className="px-6 py-5 font-bold">Categoria / Sub</th>
                <th className="px-6 py-5 font-bold">Preço</th>
                <th className="px-6 py-5 font-bold text-center">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-halli-border">
              {produtosFiltrados.map((item) => (
                <tr key={item.id} className="hover:bg-secondary/5 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      {/* Thumbnail do Produto */}
                      <div className="w-14 h-14 rounded-2xl bg-background border border-halli-border flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                        {item.image ? (
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                          />
                        ) : (
                          <ImageIcon className="text-muted/20" size={20} />
                        )}
                      </div>
                      {/* Info do Produto */}
                      <div>
                        <p className="font-extrabold text-sm leading-tight text-foreground italic">
                          {item.name}
                        </p>
                        <p className="text-[11px] text-muted mt-1 max-w-[280px] line-clamp-1 font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] font-black uppercase tracking-wider bg-secondary/10 text-secondary px-2 py-0.5 rounded-md w-fit">
                        {item.category}
                      </span>
                      <span className="text-[9px] font-bold uppercase text-muted/60 ml-0.5">
                        {item.subcategory}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4 font-black text-sm tabular-nums text-foreground italic">
                    R$ {item.price.toFixed(2)}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center items-center gap-1">
                      <button className="p-2.5 hover:bg-secondary/10 rounded-xl text-muted hover:text-secondary transition-all" title="Editar">
                        <Pencil size={18} />
                      </button>
                      <button className="p-2.5 hover:bg-background rounded-xl text-muted hover:text-foreground transition-all">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {produtosFiltrados.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-20 text-center text-muted font-medium italic">
                    Nenhum produto encontrado com "{busca}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}