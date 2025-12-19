import React from "react";
import { Link } from "react-router-dom";
import { Menu, X, Waves, ShoppingCart } from "lucide-react";
import { useCart } from "../context/cart-core.js";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { count, togglePanel } = useCart();

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Waves className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-blue-900">
            MAR Y FUEGO
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8 font-medium">
          <Link to="/" className="hover:text-blue-600 transition cursor-pointer">Inicio</Link>
          <a href="#carta" className="hover:text-blue-600 transition cursor-pointer">Carta</a>
          <a href="#reservaciones" className="hover:text-blue-600 transition cursor-pointer">Reservas</a>
          <a href="#ubicacion" className="hover:text-blue-600 transition cursor-pointer">Ubicación</a>
          <div className="relative">
            <button
              onClick={togglePanel}
              className="bg-orange-500 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-200 flex items-center gap-2 cursor-pointer"
            >
              Hacer Pedido{" "}
              {count > 0 && (
                <span className="bg-white text-orange-600 w-5 h-5 rounded-full text-[10px] flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        <button
          className="lg:hidden cursor-pointer"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t p-4 flex flex-col gap-4 shadow-xl">
          <Link to="/" className="text-left py-2 font-semibold cursor-pointer">Inicio</Link>
          <a href="#carta" className="text-left py-2 font-semibold cursor-pointer">Carta</a>
          <a href="#reservaciones" className="text-left py-2 font-semibold cursor-pointer">Reservas</a>
          <button
            onClick={() => { togglePanel(); setIsMenuOpen(false); }}
            className="bg-orange-500 text-white p-3 rounded-xl font-bold flex justify-center items-center gap-2 cursor-pointer"
          >
            Pedido ({count}) <ShoppingCart size={18} />
          </button>
        </div>
      )}
    </header>
  );
}
