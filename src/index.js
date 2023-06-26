import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import reportWebVitals from "./reportWebVitals";
// import HelmetProvider_ from "./contexts/HelmetContext";
// import AuthProvider from "./contexts/AuthContext";
// import SocketProvider from "./contexts/SocketContext";
// import ThemeModelProvider from "./contexts/ThemeModeContext";
import ScrollToTop from "./ScrollToTop";
import Router from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<HelmetProvider>
				{/* <HelmetProvider_> */}
					{/* <SocketProvider> */}
						{/* <AuthProvider> */}
							{/* <ThemeModelProvider> */}
								<ScrollToTop>
									<SnackbarProvider
										maxSnack={3}
										anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
									>
										<Router />
									</SnackbarProvider>
								</ScrollToTop>
							{/* </ThemeModelProvider> */}
						{/* </AuthProvider> */}
					{/* </SocketProvider> */}
				{/* </HelmetProvider_> */}
			</HelmetProvider>
		</BrowserRouter>
	</React.StrictMode>
);

reportWebVitals();
