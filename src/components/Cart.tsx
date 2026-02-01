import { ShoppingBasket, MapPin } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  total: number;
  isMobileView?: boolean;
  onClose?: () => void;
}

export default function Cart({ items, total, isMobileView, onClose }: CartProps) {
  return (
    <div className={`${isMobileView ? '' : 'bg-card rounded-2xl border border-halli-border shadow-[0_8px_30px_rgb(0,0,0,0.04)]'} overflow-hidden`}>
      {/* Cabeçalho da Sacola */}
      <div className="p-5 border-b border-halli-border flex justify-between items-center bg-background/50 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <ShoppingBasket size={16} className="text-secondary" />
          <h3 className="font-bold text-foreground uppercase text-[10px] tracking-[0.15em]">Sua Sacola</h3>
        </div>
        {isMobileView && (
          <button 
            onClick={onClose} 
            className="text-muted hover:text-secondary text-xs font-bold transition-colors"
          >
            FECHAR
          </button>
        )}
      </div>
      
      <div className="p-5 overflow-y-auto max-h-[60vh] lg:max-h-none">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <ShoppingBasket size={40} className="text-halli-border mb-4" />
            <p className="text-sm text-muted font-medium">Sua sacola está vazia</p>
            <p className="text-xs text-muted/60 mt-1">Adicione itens para começar</p>
          </div>
        ) : (
          <>
            {/* Lista de Itens */}
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-start group">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center bg-secondary/10 text-secondary text-[10px] font-bold h-5 w-5 rounded-md">
                        {item.quantity}
                      </span>
                      <p className="text-sm font-semibold text-foreground leading-tight tracking-tight">
                        {item.name}
                      </p>
                    </div>
                    <p className="text-[11px] text-muted mt-1 ml-7">
                      un. R$ {item.price.toFixed(2)}
                    </p>
                  </div>
                  <span className="text-sm font-bold text-foreground tabular-nums">
                    R$ {(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Resumo e Botão */}
            <div className="border-t border-halli-border pt-5 mt-6">
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs text-muted">
                  <span>Subtotal</span>
                  <span className="tabular-nums">R$ {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-extrabold text-xl text-foreground pt-1">
                  <span>Total</span>
                  <span className="text-brand-green tabular-nums">R$ {total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-brand-green hover:bg-emerald-600 text-white py-4 rounded-2xl font-bold shadow-[0_10px_20px_-5px_rgba(16,185,129,0.3)] transition-all active:scale-[0.97] flex items-center justify-center gap-2 group">
                <span>Finalizar Pedido</span>
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse group-hover:scale-125 transition-transform" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}