import React from "react";
import { ChevronRight } from "lucide-react";
import { TOP_DISHES } from "../data/index.js";

export default function Hero() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % TOP_DISHES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold uppercase tracking-wider">
            Frescura garantizada
          </span>
          <h1 className="text-6xl lg:text-7xl font-black text-slate-900 leading-tight">
            Sabor que nace <br />
            <span className="text-blue-600">del Océano.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
            Descubre la verdadera esencia marina en Mar y Fuego. Productos capturados hoy,
            preparados al instante con el toque secreto de la casa.
          </p>
          <div className="flex gap-4">
            <a
              href="#carta"
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-700 transition transform hover:-translate-y-1 cursor-pointer"
            >
              Ver la Carta <ChevronRight size={20} />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-[500px]">
          <div className="absolute inset-0 bg-blue-200/20 rounded-full scale-90 blur-3xl"></div>
          <div className="relative w-full max-w-md aspect-square rounded-full border-4 border-dashed border-blue-200 flex items-center justify-center">
            {TOP_DISHES.map((dish, index) => (
              <div
                key={dish.id}
                className={`absolute transition-all duration-1000 ease-in-out transform ${
                  index === activeSlide ? "opacity-100 scale-110 z-10" : "opacity-0 scale-50 -z-10"
                }`}
              >
                <div className="bg-white p-4 rounded-full shadow-2xl border-8 border-white">
                  <img src={dish.img} alt={dish.name} className="w-64 h-64 rounded-full object-cover" />
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full font-bold whitespace-nowrap">
                    {dish.name} • S/ {dish.price}
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute -bottom-10 flex gap-2">
              {TOP_DISHES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                    i === activeSlide ? "bg-blue-600 w-8" : "bg-blue-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

