import { useState, useContext, createContext, useEffect } from "react";
// import {
	// getToken,
	// login,
	// getUserData,
	// getAccess,
	// logout,
// } from "../utils/handleAuth";
// import API from "../utils/api";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
	

	// async function SignIn(email, password) {
		// return await API.post("/users/login", { email, password });
	// }



	return (
		<AuthContext.Provider
			
		>
			{children}
		</AuthContext.Provider>
	);
}