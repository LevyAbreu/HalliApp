import { Plus, Minus } from 'lucide-react';

interface ProductProps {
  name: string;
  desc: string;
  price: number;
  image: string;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}

export default function ProductCard({ name, desc, price, image, quantity, onAdd, onRemove }: ProductProps) {
  return (
    <div className="flex justify-between bg-card p-5 rounded-2xl border border-halli-border hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-secondary/20 transition-all duration-300 h-full group">
      <div className="flex flex-col justify-between pr-4 flex-1">
        <div>
          {/* Nome do produto com tracking-tight para um ar mais premium */}
          <h3 className="font-bold text-foreground text-base mb-1 tracking-tight group-hover:text-secondary transition-colors">
            {name}
          </h3>
          {/* Descrição com cor muted (Slate 500) */}
          <p className="text-xs text-muted leading-relaxed line-clamp-2 mb-2">
            {desc}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          {/* Preço com destaque sutil */}
          <span className="text-foreground font-extrabold text-lg">
            R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>

          {/* CONTROLES DE QUANTIDADE REESTILIZADOS */}
          {quantity === 0 ? (
            <button 
              onClick={onAdd}
              className="p-2 bg-background hover:bg-secondary hover:text-white text-secondary rounded-xl border border-halli-border shadow-sm transition-all active:scale-90"
            >
              <Plus size={18} />
            </button>
          ) : (
            <div className="flex items-center gap-3 bg-secondary text-white p-1.5 rounded-xl shadow-md animate-in zoom-in-95 duration-200">
              <button 
                onClick={onRemove} 
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              >
                <Minus size={14} strokeWidth={3} />
              </button>
              <span className="font-bold text-sm min-w-[16px] text-center">
                {quantity}
              </span>
              <button 
                onClick={onAdd} 
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              >
                <Plus size={14} strokeWidth={3} />
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Container da imagem com aspecto mais limpo */}
      <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-50 border border-halli-border/50">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
    </div>
  );
}