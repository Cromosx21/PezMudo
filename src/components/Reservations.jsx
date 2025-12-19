import React from "react";
import Input from "./ui/Input.jsx";
import Button from "./ui/Button.jsx";
import { Clock } from "lucide-react";

export default function Reservations() {
	const [name, setName] = React.useState("");
	const [date, setDate] = React.useState("");
	const [time, setTime] = React.useState("");
	const [people, setPeople] = React.useState("2 Personas");
	const [notice, setNotice] = React.useState("");

	const sendWhatsApp = () => {
		const phone = "+51969673200";
		const msg = `Reserva - Mar y Fuego%0A%0ANombre: ${encodeURIComponent(
			name
		)}%0AFecha: ${encodeURIComponent(date)}%0AHora: ${encodeURIComponent(
			time
		)}%0APersonas: ${encodeURIComponent(
			people
		)}%0A%0ACondiciones: Llegar 15 min antes. Tolerancia 15 min.`;
		const url = `https://wa.me/${phone}?text=${msg}`;
		window.open(url, "_blank");
		setNotice(
			"Debes estar 15 minutos antes y tienes tolerancia de 15 minutos para tu reserva."
		);
	};

	return (
		<section
			id="reservaciones"
			className="py-24 px-4 bg-blue-900 text-white"
		>
			<div className="max-w-4xl mx-auto text-center space-y-8">
				<h2 className="text-4xl font-black">Reserva tu Mesa</h2>
				<form
					className="grid md:grid-cols-4 gap-4 text-slate-900"
					onSubmit={(e) => e.preventDefault()}
				>
					<Input
						value={name}
						onChange={(e) => setName(e.target.value)}
						type="text"
						placeholder="Tu Nombre"
						className="md:col-span-2"
					/>
					<Input
						value={date}
						onChange={(e) => setDate(e.target.value)}
						type="date"
					/>
					<Input
						value={time}
						onChange={(e) => setTime(e.target.value)}
						type="time"
					/>
					<select
						value={people}
						onChange={(e) => setPeople(e.target.value)}
						className="p-4 rounded-xl outline-none bg-white/95 text-slate-900 border border-white/40 md:col-span-2"
					>
						<option>2 Personas</option>
						<option>4 Personas</option>
						<option>6+ Personas</option>
					</select>
					<Button
						variant="accent"
						className="md:col-span-4 text-xl flex items-center justify-center gap-2"
						onClick={sendWhatsApp}
					>
						<Clock size={18} /> Confirmar Reserva
					</Button>
				</form>
				{notice && (
					<div className="text-sm text-blue-100">{notice}</div>
				)}
			</div>
		</section>
	);
}
