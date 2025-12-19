import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppLayout from "./AppLayout.jsx";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<CartProvider>
			<BrowserRouter>
				<AppLayout />
			</BrowserRouter>
		</CartProvider>
	</StrictMode>
);
