import React from "react";

export default function AboutUs() {
	return (
		<section
			id="nosotros"
			className="py-24 bg-white relative overflow-hidden"
		>
			<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
			<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50"></div>

			<div className="max-w-7xl mx-auto px-4 relative z-10">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<h2 className="text-4xl font-black text-slate-900 leading-tight">
							Nuestra Historia:{" "}
							<span className="text-blue-600">
								Pasión por el Mar
							</span>
						</h2>
						<p className="text-lg text-slate-600 leading-relaxed">
							Nacimos en el corazón del puerto, con la misión de
							traer los sabores más frescos del océano
							directamente a tu mesa. Lo que comenzó como un
							pequeño puesto familiar, hoy es "Mar y Fuego", un
							homenaje a la tradición pesquera y la cocina
							peruana.
						</p>
						<p className="text-lg text-slate-600 leading-relaxed">
							Cada plato cuenta una historia de madrugadas en el
							terminal pesquero, de selección meticulosa y de
							recetas que han pasado de generación en generación,
							ahora con un toque moderno y atrevido.
						</p>
						<div className="pt-4">
							<div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-lg font-bold">
								Fundado en 2010
							</div>
						</div>
					</div>
					<div className="relative">
						<div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 opacity-10 transform scale-105"></div>
						<img
							src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800"
							alt="Nuestro Chef cocinando"
							className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
