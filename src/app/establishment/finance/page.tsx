'use client';

import { 
  DollarSign, 
  Download, 
  TrendingUp, 
  Calendar, 
  ArrowUpRight, 
  ArrowDownRight,
  Filter,
  CreditCard,
  Wallet
} from 'lucide-react';
import { transacoesFinanceiras, metricasFinanceiras } from '@/utils/mockData';

export default function FinanceiroPage() {
  return (
    <div className="animate-in fade-in duration-500 space-y-8">
      
      {/* HEADER */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight uppercase">Financeiro</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-card border border-halli-border rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-secondary/5 transition-all">
            <Calendar size={16} /> Jan 2026 - Fev 2026
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-secondary text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-secondary/90 shadow-lg shadow-secondary/20 transition-all">
            <Download size={16} /> Exportar Relatório
          </button>
        </div>
      </header>

      {/* METRICAS PRINCIPAIS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metricasFinanceiras.map((metrica, index) => (
          <div key={index} className="bg-card border border-halli-border p-8 rounded-[2.5rem] relative overflow-hidden group">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted mb-2">{metrica.label}</p>
            <div className="flex items-end gap-3">
              <h2 className="text-3xl font-black italic tracking-tighter">{metrica.value}</h2>
              <span className="flex items-center text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-lg mb-1">
                <ArrowUpRight size={12} /> {metrica.growth}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* GRÁFICO (SIMULADO) */}
        <div className="lg:col-span-2 bg-card border border-halli-border rounded-[3rem] p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-black uppercase tracking-tight flex items-center gap-2 text-lg">
              <TrendingUp size={20} className="text-secondary" />
              Fluxo de Receita
            </h3>
            <div className="flex gap-2">
              {['7D', '15D', '30D'].map(p => (
                <button key={p} className="px-3 py-1 text-[10px] font-black border border-halli-border rounded-lg hover:bg-secondary/10 transition-colors uppercase">{p}</button>
              ))}
            </div>
          </div>
          
          {/* Placeholder para o Gráfico */}
          <div className="h-[300px] w-full bg-background/50 rounded-[2rem] border border-dashed border-halli-border flex items-center justify-center relative overflow-hidden group">
            <div className="flex flex-col items-center gap-2 text-muted group-hover:text-secondary transition-colors">
              <TrendingUp size={40} className="opacity-20" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Área do Gráfico (Recharts)</p>
            </div>
            {/* Linha decorativa simulando gráfico */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-secondary/5 to-transparent" />
          </div>
        </div>

        {/* DISTRIBUIÇÃO DE PAGAMENTOS */}
        <div className="bg-card border border-halli-border rounded-[3rem] p-8">
          <h3 className="font-black uppercase tracking-tight text-lg mb-8">Métodos</h3>
          <div className="space-y-6">
            <MetodoItem icon={<Wallet size={18}/>} label="Pix" porcentagem={65} valor="R$ 27.852" color="bg-emerald-500" />
            <MetodoItem icon={<CreditCard size={18}/>} label="Crédito" porcentagem={25} valor="R$ 10.712" color="bg-secondary" />
            <MetodoItem icon={<DollarSign size={18}/>} label="Débito/Dinheiro" porcentagem={10} valor="R$ 4.285" color="bg-blue-500" />
          </div>
        </div>
      </div>

      {/* TABELA DE TRANSAÇÕES RECENTES */}
      <div className="bg-card border border-halli-border rounded-[3rem] overflow-hidden shadow-sm">
        <div className="p-8 border-b border-halli-border flex items-center justify-between">
          <h3 className="font-black uppercase tracking-tight text-lg">Transações Recentes</h3>
          <button className="p-2 hover:bg-secondary/5 rounded-xl transition-all">
            <Filter size={20} className="text-muted" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] uppercase font-black tracking-widest text-muted/60 bg-background/50">
                <th className="px-8 py-5">ID / Pedido</th>
                <th className="px-8 py-5">Data</th>
                <th className="px-8 py-5">Método</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-right">Valor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-halli-border">
              {transacoesFinanceiras.map((tr) => (
                <tr key={tr.id} className="hover:bg-secondary/5 transition-colors">
                  <td className="px-8 py-5">
                    <div className="flex flex-col">
                      <span className="font-black text-sm italic">{tr.id}</span>
                      <span className="text-[10px] text-muted font-bold uppercase tracking-tighter">Pedido #{tr.pedido}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm font-medium text-muted">{tr.data}</td>
                  <td className="px-8 py-5">
                    <span className="text-[11px] font-bold uppercase bg-background border border-halli-border px-3 py-1 rounded-lg">
                      {tr.metodo}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                      tr.status === 'concluido' ? 'text-emerald-500 bg-emerald-500/10' : 'text-red-500 bg-red-500/10'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${tr.status === 'concluido' ? 'bg-emerald-500' : 'bg-red-500'}`} />
                      {tr.status}
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right font-black italic text-foreground">
                    R$ {tr.valor.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Sub-componente para itens de método de pagamento
function MetodoItem({ icon, label, porcentagem, valor, color }: any) {
  return (
    <div className="space-y-2 group">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl bg-background border border-halli-border text-muted group-hover:text-secondary transition-colors`}>
            {icon}
          </div>
          <span className="text-xs font-black uppercase tracking-widest">{label}</span>
        </div>
        <span className="text-xs font-black italic">{valor}</span>
      </div>
      <div className="h-2 w-full bg-background rounded-full overflow-hidden border border-halli-border">
        <div 
          className={`h-full ${color} transition-all duration-1000`} 
          style={{ width: `${porcentagem}%` }} 
        />
      </div>
    </div>
  );
}