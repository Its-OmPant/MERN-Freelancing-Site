import { createContext, useContext } from "react";

export const AuthContext = createContext({});

export const AuthContextProvider = AuthContext.Provider;

const useAuth = () => {
	return useContext(AuthContext);
};

export default useAuth;
