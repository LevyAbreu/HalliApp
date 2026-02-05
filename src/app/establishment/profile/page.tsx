'use client';

import { useState } from 'react';
import { 
  UserCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Camera, 
  Save, 
  Lock, 
  Bell, 
  Clock,
  ShieldCheck
} from 'lucide-react';
// Importando seus dados e o hook de status
import { restaurantInfo } from '@/utils/mockData';
import { getRestaurantStatus } from '@/hooks/isClosed'; 

export default function PerfilPage() {
  const [loading, setLoading] = useState(false);
  const status = getRestaurantStatus(); // Lógica unificada de status

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8 pb-12">
      
      {/* HEADER DA PÁGINA */}
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black tracking-tight uppercase">Gerenciamento do estabelecimento</h1>
        </div>
        <button 
          onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 1500); }}
          className="flex items-center gap-2 px-6 py-3 bg-brand-green text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-emerald-600 shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
        >
          {loading ? 'Processando...' : <><Save size={18} /> Salvar Alterações</>}
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* COLUNA ESQUERDA: IDENTIDADE E STATUS ATUAL */}
        <div className="space-y-6">
          <div className="bg-card border border-halli-border rounded-[3rem] p-10 flex flex-col items-center text-center relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-full h-24 bg-secondary/5" />
            
            <div className="relative mt-4">
              <div className="w-32 h-32 rounded-[2.5rem] border-4 border-background overflow-hidden shadow-2xl bg-white">
                <img 
                  src={restaurantInfo.logo} 
                  alt="Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-secondary text-white rounded-xl border-4 border-card hover:scale-110 transition-transform shadow-lg">
                <Camera size={16} />
              </button>
            </div>

            <h2 className="mt-6 text-xl font-black italic leading-tight">{restaurantInfo.name}</h2>
            <p className="text-[10px] font-black text-muted uppercase tracking-[0.2em] mt-2 px-4 py-1 bg-background border border-halli-border rounded-full">
              {restaurantInfo.categoria}
            </p>
            
            {/* STATUS UNIFICADO COM O CLIENTE */}
            <div className={`mt-8 flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-black uppercase border transition-colors ${
              status.isOpen 
                ? 'bg-brand-green/10 text-brand-green border-brand-green/20' 
                : 'bg-muted/10 text-muted border-halli-border'
            }`}>
              <div className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-brand-green animate-pulse' : 'bg-muted'}`} />
              {status.text}
            </div>
          </div>

          {/* Atalhos Rápidos */}
          <div className="bg-card border border-halli-border rounded-[2.5rem] p-6 space-y-2">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted mb-4 px-2">Segurança do Painel</h3>
            <button className="w-full flex items-center justify-between p-4 hover:bg-secondary/5 rounded-2xl transition-all group">
              <div className="flex items-center gap-3">
                <ShieldCheck size={18} className="text-secondary" />
                <span className="text-sm font-bold">2FA Ativo</span>
              </div>
              <div className="w-10 h-5 bg-brand-green rounded-full relative p-1">
                <div className="w-3 h-3 bg-white rounded-full ml-auto shadow-sm" />
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-secondary/5 rounded-2xl transition-all">
              <div className="flex items-center gap-3 text-muted">
                <Bell size={18} />
                <span className="text-sm font-bold">Alertas Push</span>
              </div>
              <div className="w-10 h-5 bg-halli-border rounded-full relative p-1">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
            </button>
          </div>
        </div>

        {/* COLUNA DIREITA: FORMULÁRIO DE EDIÇÃO */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card border border-halli-border rounded-[3rem] p-10">
            <h3 className="font-black uppercase tracking-tight text-lg mb-8 flex items-center gap-3">
              <UserCircle className="text-secondary" /> Dados Institucionais
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputGroup label="Razão Social / Nome" defaultValue={restaurantInfo.name} icon={<UserCircle size={18}/>} />
              <InputGroup label="E-mail Administrativo" defaultValue={restaurantInfo.email} icon={<Mail size={18}/>} />
              <InputGroup label="WhatsApp de Atendimento" defaultValue={restaurantInfo.telefone} icon={<Phone size={18}/>} />
              <InputGroup label="Localidade" defaultValue={restaurantInfo.location} icon={<MapPin size={18}/>} />
              
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted ml-2">Endereço de Retirada/Entrega</label>
                <div className="relative group">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-secondary transition-colors" size={20} />
                  <input 
                    type="text" 
                    defaultValue={restaurantInfo.endereco}
                    className="w-full pl-12 pr-6 py-4 bg-background border border-halli-border rounded-2xl focus:outline-none focus:ring-4 focus:ring-secondary/5 focus:border-secondary transition-all font-medium" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* GESTÃO DE HORÁRIOS */}
          <div className="bg-card border border-halli-border rounded-[3rem] p-10">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-black uppercase tracking-tight text-lg flex items-center gap-3">
                <Clock className="text-secondary" /> Horário de Operação
              </h3>
              <span className="text-[10px] font-bold text-muted italic">Configurado para 24h</span>
            </div>
            
            <div className="space-y-4">
              {[
                { dia: 'Segunda a Sexta', open: '08:00', close: `${restaurantInfo.closeHour}:${restaurantInfo.closeMinutes}` },
                { dia: 'Sábado', open: '08:00', close: '14:00' },
                { dia: 'Domingo e Feriados', open: 'Fechado', close: 'Fechado' }
              ].map((item) => (
                <div key={item.dia} className="flex items-center justify-between p-5 bg-background border border-halli-border rounded-[1.5rem] group hover:border-secondary/30 transition-colors">
                  <span className="text-sm font-bold text-foreground">{item.dia}</span>
                  <div className="flex items-center gap-4">
                    <input 
                      type="text" 
                      defaultValue={item.open} 
                      className="w-16 bg-transparent font-black italic text-secondary text-right focus:outline-none" 
                    />
                    <span className="text-[10px] font-black text-muted opacity-40">ATÉ</span>
                    <input 
                      type="text" 
                      defaultValue={item.close} 
                      className="w-16 bg-transparent font-black italic text-secondary focus:outline-none" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputGroup({ label, defaultValue, icon }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black uppercase tracking-widest text-muted ml-2">{label}</label>
      <div className="relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-secondary transition-colors">
          {icon}
        </div>
        <input 
          type="text" 
          defaultValue={defaultValue}
          className="w-full pl-12 pr-6 py-4 bg-background border border-halli-border rounded-2xl focus:outline-none focus:ring-4 focus:ring-secondary/5 focus:border-secondary transition-all font-medium" 
        />
      </div>
    </div>
  );
}