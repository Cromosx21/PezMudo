import React from 'react';

export default function ClaimsBook() {
  return (
    <div className="pt-24 pb-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-black mb-6">Libro de Reclamaciones</h1>
      <p className="mb-4">Conforme a lo establecido en el Código de Protección y Defensa del Consumidor este establecimiento cuenta con un Libro de Reclamaciones a su disposición.</p>
      <form className="grid gap-4 border p-6 rounded-xl bg-white shadow-sm">
        <div className="grid md:grid-cols-2 gap-4">
            <label className="block">
                <span className="text-sm font-bold">Nombres y Apellidos</span>
                <input type="text" className="w-full border p-2 rounded mt-1" />
            </label>
            <label className="block">
                <span className="text-sm font-bold">DNI / CE</span>
                <input type="text" className="w-full border p-2 rounded mt-1" />
            </label>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
            <label className="block">
                <span className="text-sm font-bold">Teléfono</span>
                <input type="tel" className="w-full border p-2 rounded mt-1" />
            </label>
            <label className="block">
                <span className="text-sm font-bold">Email</span>
                <input type="email" className="w-full border p-2 rounded mt-1" />
            </label>
        </div>
        <label className="block">
            <span className="text-sm font-bold">Detalle del Reclamo o Queja</span>
            <textarea className="w-full border p-2 rounded mt-1 h-32"></textarea>
        </label>
        <button className="bg-blue-900 text-white py-3 px-6 rounded-lg font-bold w-fit hover:bg-blue-800 transition">Enviar Reclamo</button>
      </form>
    </div>
  );
}
