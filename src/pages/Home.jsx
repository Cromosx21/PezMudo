import React, { useEffect } from "react";
import Hero from "../components/Hero.jsx";
import MenuCategories from "../components/MenuCategories.jsx";
import Reservations from "../components/Reservations.jsx";
import GallerySection from "../components/GallerySection.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Location from "../components/Location.jsx";
import AboutUs from "../components/AboutUs.jsx";
import { useLocation } from "react-router-dom";

export default function Home() {
	const location = useLocation();

	useEffect(() => {
		if (location.state?.scrollTo) {
			const element = document.getElementById(location.state.scrollTo);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
			// Limpiar el estado para evitar scroll al recargar
			window.history.replaceState({}, document.title);
		}
	}, [location]);

	return (
		<main className="min-h-screen bg-slate-50 font-sans text-slate-800">
			<Hero />
			<MenuCategories />
			<AboutUs />
			<Reservations />
			<GallerySection />
			<Testimonials />
			<Location />
		</main>
	);
}
