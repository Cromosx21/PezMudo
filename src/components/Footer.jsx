import React from "react";
import { Waves, Book, ShieldCheck, FileText, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 border-t border-slate-800 pt-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Waves className="text-blue-500 w-8 h-8" />
            <span className="text-2xl font-black">MAR Y FUEGO</span>
          </div>
        </div>
        <nav aria-label="Links rápidos">
          <div className="font-bold mb-3">Links rápidos</div>
          <ul className="space-y-2 text-slate-300">
            <li><Link to="/" className="hover:text-white cursor-pointer">Inicio</Link></li>
            <li><a href="#carta" className="hover:text-white cursor-pointer">Carta</a></li>
            <li><a href="#reservaciones" className="hover:text-white cursor-pointer">Reservas</a></li>
            <li><a href="#ubicacion" className="hover:text-white cursor-pointer">Ubicación</a></li>
          </ul>
        </nav>
        <nav aria-label="Legal">
          <div className="font-bold mb-3">Legal</div>
          <ul className="space-y-2 text-slate-300">
            <li><Link to="/libro-de-reclamaciones" className="hover:text-white cursor-pointer"><Book size={16} className="inline mr-2" />Libro de Reclamaciones</Link></li>
            <li><Link to="/terminos-y-condiciones" className="hover:text-white cursor-pointer"><FileText size={16} className="inline mr-2" />Términos y Condiciones</Link></li>
            <li><Link to="/politicas-de-privacidad" className="hover:text-white cursor-pointer"><ShieldCheck size={16} className="inline mr-2" />Políticas de Privacidad</Link></li>
          </ul>
        </nav>
        <section aria-label="Contacto">
          <div className="font-bold mb-3">Contacto</div>
          <ul className="space-y-2 text-slate-300">
            <li><Phone size={16} className="inline mr-2" /> +51 987 654 321</li>
            <li><Phone size={16} className="inline mr-2" /> +51 912 345 678</li>
            <li><Mail size={16} className="inline mr-2" /> atencion@maryfuego.pe</li>
            <li><Mail size={16} className="inline mr-2" /> reservas@maryfuego.pe</li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
