import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useContext } from "react";
import { auth } from "../fireBase";

const authContext = createContext();
export const useAuthContext = () => useContext(authContext);
const AuthContext = ({ children }) => {
  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const values = {
    register,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
