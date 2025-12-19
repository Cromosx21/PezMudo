import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Location() {
  return (
    <section id="ubicacion" className="py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h2 className="text-4xl font-black text-slate-900">Ubicación</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <MapPin className="text-blue-600" /> <p>Av. El Sol 123, Distrito Marino, Lima - Perú</p>
            </div>
            <div className="flex gap-4">
              <Phone className="text-blue-600" /> <p>+51 987 654 321</p>
            </div>
            <div className="flex gap-4">
              <Clock className="text-blue-600" /> <p>Mar - Dom: 11:30 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-100 rounded-3xl h-[300px] flex items-center justify-center">
          <p className="text-blue-600 font-bold uppercase tracking-widest">Mapa Interactivo</p>
        </div>
      </div>
    </section>
  );
}

