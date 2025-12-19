import React from "react";
import { GALLERY } from "../data/index.js";

export default function GallerySection() {
	return (
		<section className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-3xl font-black text-center mb-12">
					Conoce nuestro local
				</h2>
				<div className="grid grid-cols-12 gap-4">
					{GALLERY.map((img, i) => {
						const span =
							i % 5 === 0
								? "col-span-12 md:col-span-7 row-span-2"
								: i % 5 === 1
								? "col-span-12 md:col-span-5"
								: i % 5 === 2
								? "col-span-12 md:col-span-4"
								: i % 5 === 3
								? "col-span-12 md:col-span-4"
								: "col-span-12 md:col-span-4";
						return (
							<div
								key={i}
								className={`relative group overflow-hidden rounded-3xl h-64 md:h-full ${span}`}
							>
								<img
									src={img}
									alt="Ambiente"
									className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
								/>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
