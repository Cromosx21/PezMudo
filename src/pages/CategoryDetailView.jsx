import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Plus, Minus, ShoppingCart } from "lucide-react";
import { DISHES_DETAILS } from "../data/index.js";
import { useCart } from "../context/cart-core.js";

export default function CategoryDetailView() {
	const { name } = useParams();
	const dishes = DISHES_DETAILS[name] || [];
	const { add, remove, items, count } = useCart();

	return (
		<main className="pt-24 pb-20 px-4 min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
			<div className="max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:gap-3 transition-all cursor-pointer"
				>
					<ArrowLeft size={20} /> Volver al Inicio
				</Link>

				<div className="flex justify-between items-end mb-12">
					<div>
						<h2 className="text-5xl font-black text-slate-900">
							{name}
						</h2>
						<p className="text-slate-500 mt-2 text-lg">
							Nuestra selección especial preparada al momento.
						</p>
					</div>
					{count > 0 && (
						<div className="bg-orange-500 text-white px-6 py-3 rounded-2xl flex items-center gap-3 shadow-lg animate-bounce">
							<ShoppingCart size={20} />
							<span className="font-bold">
								{count} platos en tu pedido
							</span>
						</div>
					)}
				</div>

				<section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{dishes.map((dish) => (
						<article
							key={dish.id}
							className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full hover:translate-y-[-8px] transition-transform duration-300"
						>
							<div className="relative h-64 overflow-hidden">
								<img
									src={dish.img}
									alt={dish.name}
									className="w-full h-full object-cover"
								/>
								<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full font-black text-blue-900 shadow-md">
									S/ {dish.price}
								</div>
							</div>
							<div className="p-8 flex flex-col flex-grow">
								<h3 className="text-2xl font-black text-slate-900 mb-3">
									{dish.name}
								</h3>
								<p className="text-slate-500 leading-relaxed mb-6 flex-grow">
									{dish.desc}
								</p>

								<div className="flex items-center justify-between mt-auto">
									<div className="flex items-center bg-slate-100 rounded-2xl p-1">
										<button
											onClick={() => remove(dish.id)}
											className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-xl transition-colors text-slate-600 cursor-pointer"
										>
											<Minus size={18} />
										</button>
										<span className="w-12 text-center font-bold text-lg">
											{items[dish.id] || 0}
										</span>
										<button
											onClick={() => add(dish.id)}
											className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-xl transition-colors text-blue-600 cursor-pointer"
										>
											<Plus size={18} />
										</button>
									</div>
									<button
										onClick={() => add(dish.id)}
										className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-blue-700 transition shadow-md cursor-pointer"
									>
										Añadir
									</button>
								</div>
							</div>
						</article>
					))}
				</section>
			</div>
		</main>
	);
}
