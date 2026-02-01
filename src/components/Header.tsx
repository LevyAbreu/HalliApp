import { restaurantInfo } from '@/utils/mockData';
import { getRestaurantStatus } from '../hooks/isClosed';

export default function Header() {
  const status = getRestaurantStatus();

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-8 bg-card p-6 rounded-2xl shadow-sm border border-halli-border text-center md:text-left">
      <div className="w-24 h-24 md:w-32 md:h-32 border border-halli-border rounded-2xl overflow-hidden flex-shrink-0 bg-white shadow-inner">
         <img src={restaurantInfo.logo} alt="Logo" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col justify-center h-full py-2">
        <h1 className="text-2xl md:text-3xl font-black text-foreground tracking-tighter">
          {restaurantInfo.name}
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-2 text-sm">
          <span className={`font-bold flex items-center gap-1.5 ${status.isOpen ? 'text-brand-green' : 'text-muted'}`}>
            <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-brand-green animate-pulse' : 'bg-muted'}`}></span>
            {status.text}
          </span>
          <span className="hidden md:inline text-halli-border">•</span>
          <span className="text-muted font-medium">{restaurantInfo.location}</span>
        </div>
      </div>
    </div>
  );
}