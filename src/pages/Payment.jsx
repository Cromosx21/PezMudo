import React from "react";
import { useCart } from "../context/cart-core.js";
import { CreditCard, QrCode } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Payment() {
	const { lines, total, clear } = useCart();
	const [method, setMethod] = React.useState("card");
	const [email, setEmail] = React.useState("");
	const navigate = useNavigate();

	const handleConfirm = () => {
		if (method === "qr") {
			// Redirigir a WhatsApp
			const message = `Hola Mar y Fuego, adjunto mi comprobante de pago por S/ ${total}. Mi pedido incluye: ${lines
				.map((l) => `${l.qty}x ${l.name}`)
				.join(", ")}`;
			const url = `https://wa.me/51987654321?text=${encodeURIComponent(
				message
			)}`;
			window.open(url, "_blank");
			clear();
			navigate("/gracias");
		} else {
			// Simulación de Izipay
			alert("Procesando pago con Izipay...");
			setTimeout(() => {
				clear();
				navigate("/gracias");
			}, 1500);
		}
	};

	return (
		<main className="pt-24 pb-20 px-4 min-h-screen bg-white">
			<div className="max-w-3xl mx-auto">
				<h1 className="text-3xl font-black mb-6">Pago del pedido</h1>
				<section
					aria-label="Resumen"
					className="border rounded-2xl p-4 mb-6"
				>
					{lines.map((l) => (
						<div
							key={l.id}
							className="flex items-center justify-between py-2"
						>
							<div className="text-slate-700">
								{l.name} x {l.qty}
							</div>
							<div className="font-bold">S/ {l.total}</div>
						</div>
					))}
					<div className="flex items-center justify-between py-2 text-green-600">
						<div className="font-medium">Delivery</div>
						<div className="font-bold">Gratis (S/ 0.00)</div>
					</div>
					<div className="border-t mt-3 pt-3 flex items-center justify-between">
						<div className="text-slate-700">Subtotal</div>
						<div className="font-black text-xl">S/ {total}</div>
					</div>
				</section>

				<section aria-label="Método de pago" className="space-y-4">
					<div className="flex gap-2">
						<button
							onClick={() => setMethod("card")}
							className={`px-4 py-2 rounded-lg font-semibold flex items-center gap-2 cursor-pointer ${
								method === "card"
									? "bg-blue-600 text-white"
									: "bg-slate-100 text-slate-900"
							}`}
						>
							<CreditCard size={18} /> Izipay (Tarjeta)
						</button>
						<button
							onClick={() => setMethod("qr")}
							className={`px-4 py-2 rounded-lg font-semibold flex items-center gap-2 cursor-pointer ${
								method === "qr"
									? "bg-blue-600 text-white"
									: "bg-slate-100 text-slate-900"
							}`}
						>
							<QrCode size={18} /> QR (Yape/Plin)
						</button>
					</div>

					{method === "card" ? (
						<div className="bg-slate-50 p-6 rounded-2xl border">
							<div className="flex items-center gap-2 mb-4">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Visa_2021.svg/1200px-Visa_2021.svg.png"
									alt="Visa"
									className="h-6"
								/>
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
									alt="Mastercard"
									className="h-6"
								/>
								<span className="text-xs text-slate-500 ml-auto">
									Procesado por Izipay
								</span>
							</div>
							<form
								className="grid gap-3"
								onSubmit={(e) => {
									e.preventDefault();
									handleConfirm();
								}}
							>
								<label className="block">
									<span className="text-sm font-medium text-slate-700">
										Correo Electrónico
									</span>
									<input
										type="email"
										required
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
										className="mt-1 block w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
										placeholder="ejemplo@correo.com"
									/>
								</label>
								<input
									className="p-3 rounded-lg border border-slate-300 w-full"
									placeholder="Número de tarjeta"
									required
								/>
								<input
									className="p-3 rounded-lg border border-slate-300 w-full"
									placeholder="Nombre del titular"
									required
								/>
								<div className="grid grid-cols-2 gap-3">
									<input
										className="p-3 rounded-lg border border-slate-300 w-full"
										placeholder="MM/AA"
										required
									/>
									<input
										className="p-3 rounded-lg border border-slate-300 w-full"
										placeholder="CVV"
										required
									/>
								</div>
							</form>
						</div>
					) : (
						<div className="grid gap-4">
							<div className="grid sm:grid-cols-2 gap-4">
								<div className="border rounded-2xl p-4 bg-purple-50 border-purple-100">
									<div className="font-bold mb-2 text-purple-700">
										Yape
									</div>
									<div className="h-48 bg-white rounded-xl flex items-center justify-center border-2 border-dashed border-purple-200">
										<QrCode
											size={64}
											className="text-purple-300"
										/>
									</div>
									<div className="text-center mt-2 font-mono text-sm text-purple-800">
										987 654 321
									</div>
								</div>
								<div className="border rounded-2xl p-4 bg-cyan-50 border-cyan-100">
									<div className="font-bold mb-2 text-cyan-700">
										Plin
									</div>
									<div className="h-48 bg-white rounded-xl flex items-center justify-center border-2 border-dashed border-cyan-200">
										<QrCode
											size={64}
											className="text-cyan-300"
										/>
									</div>
									<div className="text-center mt-2 font-mono text-sm text-cyan-800">
										987 654 321
									</div>
								</div>
							</div>
							<div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 text-yellow-800 text-sm">
								<strong>Instrucciones:</strong> Escanea el QR o
								usa el número para realizar el pago. Luego, haz
								clic en el botón de abajo para enviar tu
								comprobante por WhatsApp.
							</div>
						</div>
					)}
				</section>

				<div className="mt-8 flex gap-3">
					<button
						onClick={handleConfirm}
						className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition cursor-pointer flex-1"
					>
						{method === "qr"
							? "Enviar Comprobante a WhatsApp"
							: "Pagar con Izipay"}
					</button>
					<button
						onClick={() => navigate(-1)}
						className="bg-slate-100 text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-200 transition cursor-pointer"
					>
						Volver
					</button>
				</div>
			</div>
		</main>
	);
}
