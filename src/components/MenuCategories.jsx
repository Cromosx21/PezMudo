import React from "react";
import { ChevronRight, Utensils, Waves, Users } from "lucide-react";
import { MENU_CATEGORIES } from "../data/index.js";
import { Link } from "react-router-dom";

const categoryIcon = (title) => {
  if (title === "Entradas") return <Utensils className="w-6 h-6" />;
  if (title === "Bebidas") return <Users className="w-6 h-6 text-blue-500" />;
  return <Waves className="w-6 h-6 text-orange-500" />;
};

export default function MenuCategories() {
  return (
    <section id="carta" className="py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-black text-slate-900">Nuestra Carta</h2>
        <p className="text-slate-500 mt-4">Explora nuestros sabores divididos por categorías</p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {MENU_CATEGORIES.map((cat, idx) => (
          <article
            key={idx}
            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col"
          >
            <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              {categoryIcon(cat.title)}
            </div>
            <h3 className="text-2xl font-bold mb-4">{cat.title}</h3>
            <ul className="space-y-3 mb-8 flex-grow">
              {cat.items.map((item, i) => (
                <li key={i} className="text-slate-600 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to={`/categoria/${encodeURIComponent(cat.title)}`}
              className="mt-auto text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer"
            >
              Ver detalles <ChevronRight size={16} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

