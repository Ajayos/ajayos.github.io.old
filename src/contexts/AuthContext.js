import { useState, createContext, useEffect } from "react";
// import {
// 	getToken,
// 	login,
// 	getUserData,
// 	getAccess,
// 	logout,
// } from "../utils/handleAuth";
// import API from "../utils/api";
import { useNavigate } from "react-router-dom";
import Toast from "../Toast";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  // const { enqueueSnackbar } = useSnackbar();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({
    name: "Ajay o s",
    email: "ajayos@gmail.com",
    status: "😍",
    pic: "https://github.com/Ajayos.png",
    online: true,
  });
  const [MyToken, setMyToken] = useState("");
  const [access, setAccess] = useState(false);
  const [error, setError] = useState(false);

  // useEffect(() => {
  // 	const myToken = getToken();
  // 	if (myToken) {
  // 		setIsAuthenticated(true);
  // 		setMyToken(myToken);
  // 		setUser(getUserData());
  // 		setAccess(getAccess());
  // 	}
  // }, []);

  // async function SignIn(email, password) {
  // 	return await API.post("/users/login", { email, password });
  // }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        access,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
