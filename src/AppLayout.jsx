import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import OrderPanel from "./components/OrderPanel.jsx";
import Home from "./pages/Home.jsx";
import CategoryDetailView from "./pages/CategoryDetailView.jsx";
import Payment from "./pages/Payment.jsx";
import ThankYou from "./pages/ThankYou.jsx";
import CartFab from "./components/CartFab.jsx";

import ClaimsBook from "./pages/ClaimsBook.jsx";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";

export default function AppLayout() {
	return (
		<div className="min-h-screen bg-slate-50">
			<Navbar />
			<OrderPanel />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/categoria/:name"
					element={<CategoryDetailView />}
				/>
				<Route path="/pago" element={<Payment />} />
				<Route path="/gracias" element={<ThankYou />} />
				<Route
					path="/libro-de-reclamaciones"
					element={<ClaimsBook />}
				/>
				<Route path="/terminos-y-condiciones" element={<Terms />} />
				<Route path="/politicas-de-privacidad" element={<Privacy />} />
			</Routes>
			<CartFab />
			<Footer />
		</div>
	);
}
