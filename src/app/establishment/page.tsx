'use client';

import { useState } from 'react';
import { 
  Plus, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  AlertCircle,
  Bike
} from 'lucide-react';
// Importando os dados externos
import { estatisticasHome, pedidosRecentes } from '@/utils/mockData';

export default function EstablishmentAdmin() {
  const [activeTab] = useState('home');

  // Função para retornar o ícone correto baseado no tipo da estatística
  const getStatIcon = (type: string) => {
    switch (type) {
      case 'preparo': return <Clock className="text-orange-500" />;
      case 'entrega': return <Bike className="text-blue-500" />;
      case 'atrasado': return <AlertCircle className="text-red-500" />;
      case 'finalizado': return <CheckCircle2 className="text-brand-green" />;
      case 'faturamento': return <TrendingUp className="text-emerald-500" />;
      default: return <Clock />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex font-sans text-foreground">
      <main className="flex-1 p-8 overflow-y-auto">
        
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-black tracking-tight uppercase">
              {activeTab === 'home' ? 'Dashboard' : 'Gerenciamento'}
            </h1>
          </div>
        </header>

        {activeTab === 'home' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            
            {/* CARDS DE RESUMO DINÂMICOS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {estatisticasHome.map((stat) => (
                <StatCard 
                  key={stat.id}
                  icon={getStatIcon(stat.type)} 
                  label={stat.label} 
                  value={stat.value} 
                />
              ))}
            </div>

            {/* PEDIDOS RECENTES DINÂMICOS */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-black uppercase tracking-tight flex items-center gap-2">
                  <Clock size={20} className="text-secondary" />
                  Pedidos Recentes
                </h2>
                <span className="text-[10px] font-bold bg-secondary/10 text-secondary px-3 py-1 rounded-full uppercase tracking-widest">
                  Ultima atualização: ha 5 min
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {pedidosRecentes.map((pedido) => (
                  <div key={pedido.id} className="bg-card border border-halli-border rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-all flex flex-col h-full group">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-[10px] font-black text-muted uppercase tracking-widest">Pedido</span>
                        <p className="text-lg font-black italic">#{pedido.id}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter shadow-sm ${
                        pedido.status === 'preparo' ? 'bg-orange-500/10 text-orange-600 border border-orange-500/20' :
                        pedido.status === 'atrasado' ? 'bg-red-500/10 text-red-600 border border-red-500/20' :
                        'bg-blue-500/10 text-blue-600 border border-blue-500/20'
                      }`}>
                        {pedido.status === 'preparo' ? 'Em Preparo' : 
                         pedido.status === 'atrasado' ? 'Atrasado' : 'Em Rota'}
                      </div>
                    </div>

                    <div className="flex-1 space-y-4">
                      <div>
                        <span className="text-[10px] font-bold text-muted uppercase tracking-widest block mb-1">Itens</span>
                        <p className="text-sm font-medium text-foreground leading-relaxed">
                          {pedido.items}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold text-muted uppercase tracking-widest block mb-1">Observações</span>
                        <p className="text-[11px] text-muted italic bg-background p-3 rounded-xl border border-halli-border">
                          {pedido.obs}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-halli-border flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted">
                        <Clock size={14} className={pedido.status === 'atrasado' ? 'text-red-500' : ''} />
                        <span className={`text-xs font-bold ${pedido.status === 'atrasado' ? 'text-red-500' : ''}`}>
                          {pedido.time}
                        </span>
                      </div>
                      <button className="text-[10px] font-black uppercase text-secondary group-hover:tracking-[0.2em] transition-all duration-300">
                        Gerenciar →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// Sub-componente StatCard permanece igual, mas agora recebe os dados mapeados
function StatCard({ icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="bg-card border border-halli-border p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-all group cursor-default">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-background rounded-xl border border-halli-border group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <span className="text-[10px] font-black uppercase tracking-widest text-muted">{label}</span>
      </div>
      <p className="text-2xl font-black tracking-tighter tabular-nums">{value}</p>
    </div>
  );
}