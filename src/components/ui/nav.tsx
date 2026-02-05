import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
    const router = useRouter();
    return (
        <nav className="bg-secondary/95 text-white py-4 px-4 md:px-10 flex justify-between items-center sticky top-0 z-50 border-b border-white/5 shadow-lg backdrop-blur-md">
            <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center overflow-hidden shadow-inner">
                    <img 
                        src="https://img.icons8.com/?size=100&id=qBglhZbOPz3l&format=png&color=FFFFFF" 
                        alt="Logo" 
                        className="w-full h-full object-cover grayscale invert opacity-90"
                    />
                </div>
                <h1 className="text-xl md:text-2xl font-black tracking-tighter italic">
                    Halli
                </h1>
            </div>

            <div className="hidden md:flex items-center gap-6">
                <a href="#" className="px-4 py-2 rounded-full text-[11px] font-extrabold tracking-widest uppercase bg-white text-secondary transition-all duration-300">
                    Início
                </a>
                <a href="#" className="px-4 py-2 rounded-full text-[11px] font-extrabold tracking-widest uppercase text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300">
                    Promoções
                </a>
                <a href="#" className="px-4 py-2 rounded-full text-[11px] font-extrabold tracking-widest uppercase text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300">
                    Meus Pedidos
                </a>
                <button 
                    onClick={() => router.push('/login')}
                    className="px-4 py-2 rounded-full text-[11px] font-extrabold tracking-widest uppercase text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover:cursor-pointer"
                >
                Entrar
                </button>
            </div>
        </nav>
    );
}