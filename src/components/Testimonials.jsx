import React from "react";
import { REVIEWS } from "../data/index.js";
import { Star } from "lucide-react";

export default function Testimonials() {
	const extendedReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS]; // 4x para asegurar loop suave

	return (
		<section
			aria-label="Testimonios"
			className="py-24 bg-slate-50 overflow-hidden"
		>
			<div className="max-w-7xl mx-auto px-4 mb-12">
				<h2 className="text-3xl font-black text-center">
					Lo que dicen nuestros clientes
				</h2>
			</div>

			<div className="relative w-full">
				<div className="flex gap-8 w-max animate-scroll">
					{extendedReviews.map((rev, i) => (
						<article
							key={i}
							className="bg-white p-8 rounded-3xl w-[350px] border border-slate-100 shadow-sm flex-shrink-0"
						>
							<div className="flex items-center gap-3 mb-4">
								<img
									src={rev.avatar}
									alt={rev.name}
									className="w-10 h-10 rounded-full object-cover"
								/>
								<div className="font-bold">{rev.name}</div>
							</div>
							<div className="flex gap-1 mb-4 text-orange-400">
								{[...Array(rev.rating)].map((_, k) => (
									<Star
										key={k}
										size={18}
										fill="currentColor"
									/>
								))}
							</div>
							<p className="text-slate-600 italic">
								"{rev.comment}"
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
