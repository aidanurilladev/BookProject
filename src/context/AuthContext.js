import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../fireBase";
import { findByAltText } from "@testing-library/react";

const authContext = createContext();
export const useAuthContext = () => useContext(authContext);

const INIT_STATE = {
  user: null,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "USER":
      return { ...state, user: action.payload };

    default:
      return state;
  }
};
const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const authGoogleProvider = new GoogleAuthProvider();

  async function signUpWithGoogle() {
    try {
      await signInWithPopup(auth, authGoogleProvider);
    } catch (error) {
      alert(error.message);
    }
  }

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function checkUser() {
    return onAuthStateChanged(auth, (user) => {
      return dispatch({
        type: "USER",
        payload: user,
      });
    });
  }

  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    checkUser();
  }, []);

  async function logOut(){
    try {
      await signOut(auth)
    } catch (error) {
      alert(error.message)
    }
  }

  const values = {
    register,
    signUpWithGoogle,
    user: state.user,
    signIn,
    logOut
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
