import React, { createContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

export const HelmetContext = createContext("");

export default function HelmetProvider({ children }) {
	const [focus, setFocus] = useState(true);
	const [title, setTitle] = useState("AJAY O S");
	const [description, setDescription] = useState("AJAY O S");
	const [icon, setIcon] = useState("https://github.com/Ajayos.png");

	useEffect(() => {
		if (!title) setTitle("AJAY O S");
		if (!description) setDescription("AJAY O S");
		if (!icon) setIcon("https://github.com/Ajayos.png");
	}, [title, description, icon]);

	useEffect(() => {
		const handleBlur = () => setFocus(false);
		const handleFocus = () => setFocus(true);

		window.addEventListener("blur", handleBlur);
		window.addEventListener("focus", handleFocus);

		return () => {
			window.removeEventListener("blur", handleBlur);
			window.removeEventListener("focus", handleFocus);
		};
	}, []);
    
	return (
		<HelmetContext.Provider value={{ setTitle, setDescription, setIcon }}>
			<>
				<Helmet>
					<title>{`${focus ? " " +  (title !== "AJAY O S" ? `${title} | AJAY O S` : title)  : " Come Back :) | AJAY O S "}`}</title>
					<meta name='description' content={description} />
					<link rel='icon' href={icon} />
				</Helmet>
				{children}
			</>
		</HelmetContext.Provider>
	);
}