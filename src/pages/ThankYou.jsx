import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <main className="pt-24 pb-20 px-4 min-h-screen bg-white flex items-center justify-center">
      <section className="text-center space-y-4">
        <div className="flex items-center justify-center">
          <CheckCircle className="text-green-600 w-20 h-20 animate-pulse" />
        </div>
        <h1 className="text-3xl font-black">¡Gracias por tu compra!</h1>
        <p className="text-slate-700">
          Tu pedido ya está en cocina. Tiempo estimado de entrega: 20 a 40 minutos.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition cursor-pointer"
        >
          Volver al inicio
        </Link>
      </section>
    </main>
  );
}

