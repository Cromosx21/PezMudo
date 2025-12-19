import React from "react";
import { Minus, Plus, X, CreditCard, QrCode } from "lucide-react";
import { useCart } from "../context/cart-core.js";
import { useNavigate } from "react-router-dom";

export default function OrderPanel() {
	const { lines, total, add, remove, isPanelOpen, closePanel } = useCart();
	const navigate = useNavigate();

	return (
		<>
			{isPanelOpen && (
				<div
					aria-hidden
					className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
					onClick={closePanel}
				/>
			)}
			<aside
				aria-label="Panel de pedido"
				className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white shadow-2xl z-50 transition-transform duration-300 ${
					isPanelOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="flex items-center justify-between p-4 border-b">
					<h2 className="text-xl font-black">Tu Pedido</h2>
					<button
						onClick={closePanel}
						className="p-2 rounded-lg hover:bg-slate-100 cursor-pointer"
						aria-label="Cerrar panel"
					>
						<X />
					</button>
				</div>
				<div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-160px)]">
					{lines.length === 0 ? (
						<p className="text-slate-600">
							Aún no has agregado platos.
						</p>
					) : (
						lines.map((l) => (
							<div
								key={l.id}
								className="flex items-center gap-3 border rounded-xl p-3"
							>
								{l.img && (
									<img
										src={l.img}
										alt={l.name}
										className="w-14 h-14 rounded-xl object-cover"
									/>
								)}
								<div className="flex-1">
									<div className="font-bold">{l.name}</div>
									<div className="text-slate-500 text-sm">
										S/ {l.price} c/u
									</div>
								</div>
								<div className="flex items-center bg-slate-100 rounded-2xl p-1">
									<button
										onClick={() => remove(l.id)}
										className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-xl transition-colors text-slate-600 cursor-pointer"
									>
										<Minus size={16} />
									</button>
									<span className="w-8 text-center font-bold">
										{l.qty}
									</span>
									<button
										onClick={() => add(l.id)}
										className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-xl transition-colors text-blue-600 cursor-pointer"
									>
										<Plus size={16} />
									</button>
								</div>
								<div className="w-20 text-right font-bold">
									S/ {l.total}
								</div>
							</div>
						))
					)}
				</div>
				<div className="p-4 border-t space-y-3">
					<div className="flex items-center justify-between">
						<span className="font-semibold">Total</span>
						<span className="text-2xl font-black">S/ {total}</span>
					</div>
					<button
						onClick={() => {
							closePanel();
							navigate("/pago");
						}}
						className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 cursor-pointer"
					>
						<CreditCard size={18} /> Pagar ahora
					</button>
					<button
						onClick={() => {
							closePanel();
							navigate("/pago");
						}}
						className="w-full bg-slate-100 text-slate-900 py-3 rounded-xl font-bold hover:bg-slate-200 transition flex items-center justify-center gap-2 cursor-pointer"
						title="También puedes pagar con QR en la siguiente pantalla"
					>
						<QrCode size={18} /> Ver opciones de pago
					</button>
				</div>
			</aside>
		</>
	);
}
