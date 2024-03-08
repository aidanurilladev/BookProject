import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../fireBase";

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

  async function signUpWithGoogle(){
    try {
      await signInWithPopup(auth,authGoogleProvider)
    } catch (error) {
      alert(error.message)
    }
  }

  
  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function checkUser(){
    return onAuthStateChanged(auth,(user) => {
      return dispatch({
        type : "USER",
        payload:user
      })
    })
  }

  useEffect(()=>{
    checkUser()
  },[])
  const values = {
    register,
    signUpWithGoogle,

    user : state.user
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
