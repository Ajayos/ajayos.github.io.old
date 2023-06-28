import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import HelmetProviderMoode from "./contexts/HelmetContext";
import reportWebVitals from "./reportWebVitals";
import ScrollToTop from "./ScrollToTop";
import Router from "./Router";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<HelmetProvider>
				<HelmetProviderMoode>
					<ScrollToTop />
					<Router />
				</HelmetProviderMoode>
			</HelmetProvider>
		</BrowserRouter>
	</React.StrictMode>
);

reportWebVitals();
