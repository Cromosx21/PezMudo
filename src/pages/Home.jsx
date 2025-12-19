import React from "react";
import Hero from "../components/Hero.jsx";
import MenuCategories from "../components/MenuCategories.jsx";
import Reservations from "../components/Reservations.jsx";
import GallerySection from "../components/GallerySection.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Location from "../components/Location.jsx";

export default function Home() {
	return (
		<main className="min-h-screen bg-slate-50 font-sans text-slate-800">
			<Hero />
			<MenuCategories />
			<section id="historia" className="py-24 px-4 bg-white">
				<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
					<div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl transform -rotate-2">
						<img
							src="https://images.unsplash.com/photo-1554679665-f5537f187268?auto=format&fit=crop&q=80&w=600"
							alt="Historia"
							className="w-full h-[500px] object-cover"
						/>
					</div>
					<div className="w-full md:w-1/2 space-y-6">
						<h2 className="text-4xl font-black text-slate-900">
							Nuestra Historia
						</h2>
						<div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
						<p className="text-lg text-slate-600 leading-relaxed italic">
							"Desde 2008 trayendo el frescor del puerto a tu
							mesa."
						</p>
						<p className="text-slate-600 leading-relaxed">
							Cada mañana, seleccionamos los mejores ejemplares
							directamente de los pescadores locales. En Mar y
							Fuego no solo servimos comida, compartimos una
							tradición de respeto por el mar.
						</p>
					</div>
				</div>
			</section>
			<Reservations />
			<GallerySection />
			<Testimonials />
			<Location />
		</main>
	);
}
