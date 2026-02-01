import { Search, ChevronDown } from 'lucide-react';

export default function FilterBar() {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between mt-6">
      <button className="flex items-center gap-2 bg-white border border-halli-border px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 w-full md:w-auto justify-between shadow-sm">
        Lista de categorias
        <ChevronDown size={16} className="text-gray-400" />
      </button>
      
      <div className="relative w-full md:max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Busque por um produto"
          className="w-full pl-12 pr-4 py-2.5 bg-input-bg border border-halli-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:bg-white focus:border-brand-green transition-all shadow-sm"
        />
      </div>
    </div>
  );
}