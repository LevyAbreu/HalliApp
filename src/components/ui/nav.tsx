export default function Navbar() {
    return (
        <nav className="bg-secondary/95 text-white py-4 px-4 md:px-10 flex justify-between items-center sticky top-0 z-50 border-b border-white/5 shadow-lg backdrop-blur-md">
            <div className="flex items-center gap-3">
                <div className="w-9 h-9 border border-white/20 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden shadow-inner">
                    <img 
                        src="https://st4.depositphotos.com/1496387/38299/v/450/depositphotos_382990074-stock-illustration-hand-drawn-logo-cooking-menu.jpg" 
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
            </div>
        </nav>
    );
}